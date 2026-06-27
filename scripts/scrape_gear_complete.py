#!/usr/bin/env python3
"""
Complete Coryn Club Equipment Scraper
Fetches ALL pages for Additional Gear (type=6) and Special Gear (type=18)
Generates a complete TypeScript database file
"""

import requests
from bs4 import BeautifulSoup
import json
import time
import sys
import re

sys.stdout.reconfigure(encoding='utf-8')

BASE_URL = "https://coryn.club/item.php"

def parse_item_card(soup_card):
    """Parse an item card from HTML"""
    try:
        # Get item name and ID
        name_link = soup_card.find('a', href=lambda x: x and 'item.php?id=' in x)
        if not name_link:
            return None
        
        name = name_link.get_text(strip=True)
        href = name_link['href']
        item_id = int(href.split('id=')[1].split('&')[0])
        
        # Get all stat rows
        stat_rows = soup_card.find_all('tr')
        
        def_value = 0
        stats = []
        
        for row in stat_rows:
            cells = row.find_all('td')
            if len(cells) >= 2:
                stat_name = cells[0].get_text(strip=True)
                stat_value = cells[1].get_text(strip=True).replace(',', '')
                
                if stat_name == 'Base DEF':
                    try:
                        def_value = int(stat_value)
                    except:
                        pass
                else:
                    try:
                        # Handle negative values
                        value = int(stat_value)
                        stats.append({
                            'stat': stat_name,
                            'value': value
                        })
                    except:
                        pass
        
        return {
            'id': item_id,
            'name': name,
            'category': 'accessory',
            'def': def_value,
            'stats': stats
        }
    except Exception as e:
        return None

def scrape_page(type_id, page_num):
    """Scrape a single page and return items"""
    url = f"{BASE_URL}?name=&type={type_id}&order=id+DESC&show=11&p={page_num}"
    
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
        response = requests.get(url, headers=headers, timeout=15)
        response.encoding = 'utf-8'
        
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Find all item containers - look for divs with item links
        items = []
        
        # Strategy: Find all anchors with item.php?id= and get their parent containers
        item_links = soup.find_all('a', href=lambda x: x and 'item.php?id=' in x)
        
        seen_ids = set()
        for link in item_links:
            href = link['href']
            if 'item.php?id=' not in href:
                continue
            
            item_id = int(href.split('id=')[1].split('&')[0])
            if item_id in seen_ids:
                continue
            seen_ids.add(item_id)
            
            # Find parent container (go up to find the card)
            parent = link.parent
            for _ in range(10):  # Go up max 10 levels
                if not parent:
                    break
                if parent.name == 'div' and ('card' in parent.get('class', []) or 'item' in parent.get('class', [])):
                    break
                # Check if this div contains stat tables
                if parent.find('table') or parent.find_all('tr'):
                    break
                parent = parent.parent
            
            if parent:
                item = parse_item_card(parent)
                if item:
                    items.append(item)
        
        return items
        
    except Exception as e:
        print(f"  Error on page {page_num}: {e}", file=sys.stderr)
        return []

def main():
    print("=" * 60)
    print("Coryn Club Complete Equipment Scraper")
    print("=" * 60)
    print()
    
    # Scrape ALL Additional Gear (type=6, ~1000 items)
    print("📦 Scraping Additional Gear (type=6)...")
    print("   This will take ~5-10 minutes for all pages\n")
    
    all_additional = []
    max_pages = 100  # Safety limit
    
    for page in range(max_pages):
        if page % 10 == 0:
            print(f"   Progress: Page {page + 1}/{max_pages}...")
        
        items = scrape_page(6, page)
        all_additional.extend(items)
        
        if len(items) == 0:
            print(f"   ✓ No more items at page {page + 1}")
            break
        
        if (page + 1) % 5 == 0:
            print(f"   → Collected {len(all_additional)} items so far...")
        
        time.sleep(0.8)  # Be respectful to the server
    
    print(f"\n   ✅ Additional Gear: {len(all_additional)} items\n")
    
    # Scrape ALL Special Gear (type=18, ~219 items)
    print("💍 Scraping Special Gear (type=18)...")
    print("   This will take ~2-3 minutes\n")
    
    all_special = []
    max_pages = 25  # Safety limit
    
    for page in range(max_pages):
        if page % 5 == 0:
            print(f"   Progress: Page {page + 1}/{max_pages}...")
        
        items = scrape_page(18, page)
        all_special.extend(items)
        
        if len(items) == 0:
            print(f"   ✓ No more items at page {page + 1}")
            break
        
        if (page + 1) % 5 == 0:
            print(f"   → Collected {len(all_special)} items so far...")
        
        time.sleep(0.8)
    
    print(f"\n   ✅ Special Gear: {len(all_special)} items\n")
    
    # Generate TypeScript file
    print("📝 Generating TypeScript database...")
    
    # Build TypeScript content manually for better formatting
    def gear_to_ts(gear_list):
        lines = ["["]
        for i, gear in enumerate(gear_list):
            lines.append("  {")
            lines.append(f"    id: {gear['id']},")
            safe_name = gear['name'].replace("'", "\\'")
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
// Generated automatically - DO NOT EDIT MANUALLY
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

export const additionalGearList: GearItem[] = {gear_to_ts(all_additional)};

export const specialGearList: GearItem[] = {gear_to_ts(all_special)};

/**
 * Get gear items by category
 */
export function getGearByCategory(category: GearItem['category']): GearItem[] {{
  const allGear = [...additionalGearList, ...specialGearList];
  return allGear.filter(item => item.category === category);
}}

/**
 * Get all additional gear (accessories + shields)
 */
export function getAllAdditionalGear(): GearItem[] {{
  return additionalGearList;
}}

/**
 * Get all special gear (avatars + foods + potions)
 */
export function getAllSpecialGear(): GearItem[] {{
  return specialGearList;
}}

/**
 * Search gear by name
 */
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
    
    # Write to file
    output_path = 'c:/Projects/Toram_calculator/src/data/gearDatabase.ts'
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(ts_content)
    
    print(f"✅ Database saved to: {output_path}")
    print()
    print("=" * 60)
    print("SUMMARY")
    print("=" * 60)
    print(f"Additional Gear: {len(all_additional):,} items")
    print(f"Special Gear:    {len(all_special):,} items")
    print(f"TOTAL:           {len(all_additional) + len(all_special):,} items")
    print("=" * 60)
    print("\n✅ Done! You can now run: npm run build")

if __name__ == '__main__':
    main()
