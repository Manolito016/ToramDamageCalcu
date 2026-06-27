#!/usr/bin/env python3
"""Full Coryn Club Equipment Scraper - extracts all stats"""

from playwright.sync_api import sync_playwright
import time
import sys

sys.stdout.reconfigure(encoding='utf-8')

def scrape_page_full(type_id, page_num, seen_ids):
    """Scrape one page with full stats"""
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        url = f"https://coryn.club/item.php?type={type_id}&show=11&p={page_num}"
        
        try:
            page.goto(url, wait_until='networkidle', timeout=30000)
            time.sleep(1)
            
            items = page.evaluate('''() => {
                const items = [];
                const links = document.querySelectorAll('a[href*="item.php?id="]');
                
                links.forEach(link => {
                    const m = link.href.match(/id=(\\d+)/);
                    if (!m) return;
                    
                    const itemId = parseInt(m[1]);
                    const name = link.textContent.trim();
                    
                    let container = link.parentElement;
                    for (let i = 0; i < 10 && container; i++) {
                        if (container.querySelector('ul.accordion')) break;
                        container = container.parentElement;
                    }
                    
                    if (!container) return;
                    
                    const statRows = container.querySelectorAll('.item-basestat > div');
                    const stats = [];
                    let def = 0;
                    
                    statRows.forEach(row => {
                        const divs = row.querySelectorAll('div');
                        if (divs.length >= 2) {
                            const statName = divs[0].textContent.trim();
                            const statValue = divs[1].textContent.trim().replace(/,/g, '');
                            
                            if (statName === 'Base DEF') {
                                def = parseInt(statValue) || 0;
                            } else if (statName && statValue && !isNaN(parseInt(statValue))) {
                                stats.push({ stat: statName, value: parseInt(statValue) });
                            }
                        }
                    });
                    
                    items.push({ id: itemId, name, def, stats });
                });
                
                return items;
            }''')
            
            browser.close()
            
            # Filter duplicates
            new_items = [item for item in items if item['id'] not in seen_ids]
            return new_items
        except Exception as e:
            browser.close()
            print(f"  Error: {e}", file=sys.stderr)
            return []

def to_ts(gear_list):
    """Convert to TypeScript array string"""
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

def main():
    print("=" * 70)
    print("Coryn Club Full Equipment Scraper")
    print("=" * 70)
    
    seen_ids = set()
    additional = []
    special = []
    
    # Scrape Additional Gear
    print("\nScraping Additional Gear...")
    for page in range(100):
        if page % 10 == 0:
            print(f"  Page {page+1}... ({len(additional)} items)")
        
        items = scrape_page_full(6, page, seen_ids)
        if not items:
            print(f"  Done at page {page+1}")
            break
        
        additional.extend(items)
        seen_ids.update(item['id'] for item in items)
        
        if (page+1) % 10 == 0:
            print(f"  -> {len(additional)} unique items...")
    
    print(f"Additional Gear: {len(additional)} items\n")
    
    # Scrape Special Gear
    print("Scraping Special Gear...")
    for page in range(25):
        if page % 5 == 0:
            print(f"  Page {page+1}... ({len(special)} items)")
        
        items = scrape_page_full(18, page, seen_ids)
        if not items:
            print(f"  Done at page {page+1}")
            break
        
        special.extend(items)
        seen_ids.update(item['id'] for item in items)
        
        if (page+1) % 5 == 0:
            print(f"  -> {len(special)} unique items...")
    
    print(f"Special Gear: {len(special)} items\n")
    
    # Generate TypeScript
    print("Generating database...")
    ts = f"""// Additional & Special Gear Database
// Scraped from Coryn Club - {len(seen_ids)} unique items

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

export const additionalGearList: GearItem[] = {to_ts(additional)};

export const specialGearList: GearItem[] = {to_ts(special)};

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
    
    path = 'c:/Projects/Toram_calculator/src/data/gearDatabase.ts'
    with open(path, 'w', encoding='utf-8') as f:
        f.write(ts)
    
    print(f"\n{'=' * 70}")
    print(f"SUMMARY")
    print(f"{'=' * 70}")
    print(f"Additional Gear: {len(additional)} items")
    print(f"Special Gear: {len(special)} items")
    print(f"Total unique: {len(seen_ids)} items")
    print(f"Duplicates skipped: {len(additional) + len(special) - len(seen_ids)}")
    print(f"{'=' * 70}")
    print(f"\nDatabase saved to: {path}")

if __name__ == '__main__':
    main()
