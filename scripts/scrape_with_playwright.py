#!/usr/bin/env python3
"""
Coryn Club Equipment Scraper using Playwright
Handles JavaScript-rendered pages and dynamic content
"""

from playwright.sync_api import sync_playwright
import json
import time
import sys

sys.stdout.reconfigure(encoding='utf-8')

def scrape_with_playwright(type_id, max_pages=100):
    """Scrape equipment using Playwright browser automation"""
    
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        
        all_items = []
        category_name = "Additional" if type_id == 6 else "Special"
        
        print(f"📦 Scraping {category_name} Gear (type={type_id})...")
        print(f"   Using Playwright browser automation\n")
        
        for page_num in range(max_pages):
            url = f"https://coryn.club/item.php?name=&type={type_id}&order=id+DESC&show=11&p={page_num}"
            
            if page_num % 10 == 0:
                print(f"   Page {page_num + 1}... ({len(all_items)} items)")
            
            # Navigate and wait for content
            page.goto(url, wait_until='networkidle', timeout=30000)
            time.sleep(1)  # Wait for any lazy loading
            
            # Extract items using JavaScript in the browser
            items = page.evaluate('''() => {
                const items = [];
                const links = document.querySelectorAll('a[href*="item.php?id="]');
                
                links.forEach(link => {
                    const href = link.href;
                    const idMatch = href.match(/id=(\\d+)/);
                    if (!idMatch) return;
                    
                    const itemId = parseInt(idMatch[1]);
                    const name = link.textContent.trim();
                    
                    // Find parent card
                    let parent = link.parentElement;
                    for (let i = 0; i < 10 && parent; i++) {
                        if (parent.querySelector('div[item-upper], table')) break;
                        parent = parent.parentElement;
                    }
                    
                    if (!parent) return;
                    
                    // Extract stats
                    const statElements = parent.querySelectorAll('div, td');
                    const stats = [];
                    let def = 0;
                    
                    for (let i = 0; i < statElements.length - 1; i += 2) {
                        const nameEl = statElements[i];
                        const valueEl = statElements[i + 1];
                        
                        if (!nameEl || !valueEl) continue;
                        
                        const statName = nameEl.textContent.trim();
                        const statValue = valueEl.textContent.trim().replace(/,/g, '');
                        
                        if (statName === 'Base DEF') {
                            def = parseInt(statValue) || 0;
                        } else if (statName && statValue) {
                            const value = parseInt(statValue);
                            if (!isNaN(value)) {
                                stats.push({ stat: statName, value: value });
                            }
                        }
                    }
                    
                    items.push({
                        id: itemId,
                        name: name,
                        category: 'accessory',
                        def: def,
                        stats: stats
                    });
                });
                
                return items;
            }''')
            
            if not items or len(items) == 0:
                print(f"   ✓ No more items at page {page_num + 1}")
                break
            
            all_items.extend(items)
            
            if (page_num + 1) % 5 == 0:
                print(f"   → Collected {len(all_items)} items...")
            
            time.sleep(0.5)
        
        browser.close()
        return all_items

def generate_typescript(all_additional, all_special):
    """Generate TypeScript database file"""
    
    def to_ts(gear_list):
        lines = ["["]
        for i, gear in enumerate(gear_list):
            safe_name = gear['name'].replace("'", "\\'")
            lines.append("  {")
            lines.append(f"    id: {gear['id']},")
            lines.append(f"    name: '{safe_name}',")
            lines.append(f"    category: 'accessory',")
            lines.append(f"    def: {gear['def']},")
            lines.append("    stats: [")
            for stat in gear['stats']:
                safe_stat = stat['stat'].replace("'", "\\'")
                lines.append(f"      {{ stat: '{safe_stat}', value: {stat['value']} }},")
            lines.append("    ]")
            comma = "," if i < len(gear_list) - 1 else ""
            lines.append("  }" + comma)
        lines.append("]")
        return "\n".join(lines)
    
    ts_content = f"""// Additional & Special Gear Database
// Complete data scraped from Coryn Club using Playwright
// Total items: {len(all_additional) + len(all_special)}
// Generated: {time.strftime('%Y-%m-%d %H:%M:%S')}

export interface GearItem {{
  id: number;
  name: string;
  category: 'accessory' | 'shield' | 'avatar' | 'food' | 'potion';
  def?: number;
  stats: Array<{{
    stat: string;
    value: number;
  }}>;
}}

export const additionalGearList: GearItem[] = {to_ts(all_additional)};

export const specialGearList: GearItem[] = {to_ts(all_special)};

export function getGearByCategory(category: GearItem['category']): GearItem[] {{
  const allGear = [...additionalGearList, ...specialGearList];
  return allGear.filter(item => item.category === category);
}}

export function getAllAdditionalGear(): GearItem[] {{
  return additionalGearList;
}}

export function getAllSpecialGear(): GearItem[] {{
  return specialGearList;
}}

export function searchGear(query: string): GearItem[] {{
  if (!query.trim()) return [...additionalGearList, ...specialGearList];
  const lowerQuery = query.toLowerCase();
  const allGear = [...additionalGearList, ...specialGearList];
  return allGear.filter(item => 
    item.name.toLowerCase().includes(lowerQuery) ||
    item.category.toLowerCase().includes(lowerQuery)
  );
}}
"""
    
    return ts_content

def main():
    print("=" * 70)
    print("Coryn Club Equipment Scraper (Playwright)")
    print("=" * 70)
    print()
    print("This scraper uses a real browser to handle JavaScript rendering")
    print("Estimated time: 10-15 minutes for all pages")
    print()
    
    # Check if Playwright is installed
    try:
        from playwright.sync_api import sync_playwright
    except ImportError:
        print("❌ Playwright not installed!")
        print("\nTo install:")
        print("  pip install playwright")
        print("  playwright install chromium")
        print()
        return
    
    # Scrape Additional Gear
    additional = scrape_with_playwright(6, max_pages=100)
    print(f"\n   ✅ Additional Gear: {len(additional)} items\n")
    
    # Scrape Special Gear
    special = scrape_with_playwright(18, max_pages=25)
    print(f"\n   ✅ Special Gear: {len(special)} items\n")
    
    # Generate TypeScript
    print("📝 Generating TypeScript database...")
    ts_content = generate_typescript(additional, special)
    
    output_path = 'c:/Projects/Toram_calculator/src/data/gearDatabase.ts'
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(ts_content)
    
    print(f"✅ Database saved to: {output_path}")
    print()
    print("=" * 70)
    print("SUMMARY")
    print("=" * 70)
    print(f"Additional Gear: {len(additional):,} items")
    print(f"Special Gear:    {len(special):,} items")
    print(f"TOTAL:           {len(additional) + len(special):,} items")
    print("=" * 70)
    print()
    print("✅ Complete! Run: npm run build")

if __name__ == '__main__':
    main()
