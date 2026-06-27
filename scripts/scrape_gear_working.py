#!/usr/bin/env python3
"""
Coryn Club Equipment Scraper - Working Version
Parses Coryn Club's actual HTML structure
"""

import requests
from bs4 import BeautifulSoup
import json
import time
import sys

sys.stdout.reconfigure(encoding='utf-8')

def scrape_page_coryn(type_id, page_num):
    """Scrape a single page from Coryn Club with proper HTML parsing"""
    url = f"https://coryn.club/item.php?name=&type={type_id}&order=id+DESC&show=11&p={page_num}"
    
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
        response = requests.get(url, headers=headers, timeout=15)
        response.encoding = 'utf-8'
        
        soup = BeautifulSoup(response.text, 'html.parser')
        items = []
        
        # Find all item cards
        card_containers = soup.find_all('div', class_='card-container')
        if not card_containers:
            return items
        
        # Get the grid inside
        grid = card_containers[0].find('div', class_='item-list-grid')
        if not grid:
            return items
        
        # Each item is in a div
        item_divs = grid.find_all('div', recursive=False)
        
        for item_div in item_divs:
            try:
                # Get item name and ID
                name_link = item_div.find('a', href=lambda x: x and 'item.php?id=' in x)
                if not name_link:
                    continue
                
                name = name_link.get_text(strip=True)
                href = name_link['href']
                item_id = int(href.split('id=')[1].split('&')[0])
                
                # Find the item-upper div that contains stats
                item_upper = item_div.find('div', class_='item-upper')
                if not item_upper:
                    continue
                
                # Get all stat rows (each stat is in two sibling divs)
                stat_divs = item_upper.find_all('div')
                
                def_value = 0
                stats = []
                
                # Stats come in pairs: name div, value div
                for i in range(0, len(stat_divs) - 1, 2):
                    stat_name = stat_divs[i].get_text(strip=True)
                    stat_value = stat_divs[i+1].get_text(strip=True).replace(',', '')
                    
                    if stat_name == 'Base DEF':
                        try:
                            def_value = int(stat_value)
                        except:
                            pass
                    elif stat_name and stat_value:
                        try:
                            value = int(stat_value)
                            stats.append({
                                'stat': stat_name,
                                'value': value
                            })
                        except:
                            pass
                
                items.append({
                    'id': item_id,
                    'name': name,
                    'category': 'accessory',
                    'def': def_value,
                    'stats': stats
                })
                
            except Exception as e:
                continue
        
        return items
        
    except Exception as e:
        print(f"  Error: {e}", file=sys.stderr)
        return []

def main():
    print("=" * 60)
    print("Coryn Club Equipment Scraper")
    print("=" * 60)
    print()
    
    # Test first
    print("Testing scraper...")
    test_items = scrape_page_coryn(6, 0)
    print(f"Found {len(test_items)} items on first page")
    if test_items:
        print(f"Example: {test_items[0]['name']} (ID: {test_items[0]['id']}, DEF: {test_items[0]['def']})")
        print(f"Stats: {len(test_items[0]['stats'])} stats found")
    
    if len(test_items) == 0:
        print("\n❌ Scraper not working - HTML structure may have changed")
        return
    
    print("\n" + "=" * 60)
    print("Starting full scrape...")
    print("=" * 60)
    print()
    
    # Scrape Additional Gear
    print("📦 Scraping Additional Gear (type=6)...")
    all_additional = test_items.copy()
    
    for page in range(1, 100):
        if page % 10 == 0:
            print(f"   Page {page + 1}... ({len(all_additional)} items so far)")
        
        items = scrape_page_coryn(6, page)
        if len(items) == 0:
            print(f"   ✓ Done at page {page + 1}")
            break
        
        all_additional.extend(items)
        time.sleep(0.5)
    
    print(f"   ✅ Additional Gear: {len(all_additional)} items\n")
    
    # Scrape Special Gear
    print("💍 Scraping Special Gear (type=18)...")
    all_special = []
    
    for page in range(25):
        if page % 5 == 0:
            print(f"   Page {page + 1}... ({len(all_special)} items so far)")
        
        items = scrape_page_coryn(18, page)
        if len(items) == 0:
            print(f"   ✓ Done at page {page + 1}")
            break
        
        all_special.extend(items)
        time.sleep(0.5)
    
    print(f"   ✅ Special Gear: {len(all_special)} items\n")
    
    # Generate TypeScript
    print("📝 Generating database...")
    
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
// Complete data scraped from Coryn Club
// Total items: {len(all_additional) + len(all_special)}

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
    
    output_path = 'c:/Projects/Toram_calculator/src/data/gearDatabase.ts'
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(ts_content)
    
    print(f"\n✅ Saved to: {output_path}")
    print(f"\n{'=' * 60}")
    print(f"SUMMARY")
    print(f"{'=' * 60}")
    print(f"Additional Gear: {len(all_additional):,} items")
    print(f"Special Gear:    {len(all_special):,} items")
    print(f"TOTAL:           {len(all_additional) + len(all_special):,} items")
    print(f"{'=' * 60}")

if __name__ == '__main__':
    main()
