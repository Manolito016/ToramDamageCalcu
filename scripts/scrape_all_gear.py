#!/usr/bin/env python3
"""
Complete Coryn Club Equipment Scraper
Fetches ALL pages for Additional Gear (type=6, ~91 pages) and Special Gear (type=18, ~20 pages)
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

def parse_item_block(block_text):
    """Parse item data from text block"""
    lines = block_text.strip().split('\n')
    
    # Get item name and ID from link
    name_match = re.search(r'\[(.+?)\]\(item\.php\?id=(\d+)\)', block_text)
    if not name_match:
        return None
    
    name = name_match.group(1)
    item_id = int(name_match.group(2))
    
    # Get DEF
    def_match = re.search(r'Base DEF\s+(\d+)', block_text)
    def_value = int(def_match.group(1)) if def_match else 0
    
    # Get all stats
    stats = []
    stat_pattern = re.findall(r'^(.+?)\s+(-?\d+(?:\.\d+)?(?:\s*%)?)$', block_text, re.MULTILINE)
    
    for stat_name, stat_value in stat_pattern:
        stat_name = stat_name.strip()
        if stat_name == 'Base DEF':
            continue
        
        try:
            # Remove % symbol for parsing
            value_str = stat_value.replace('%', '').strip()
            value = int(value_str) if '.' not in value_str else float(value_str)
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

def scrape_page(type_id, page_num):
    """Scrape a single page"""
    url = f"{BASE_URL}?name=&type={type_id}&order=id+DESC&show=11&p={page_num}"
    
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
        response = requests.get(url, headers=headers, timeout=10)
        response.encoding = 'utf-8'
        
        # Find item blocks
        items = []
        
        # Split by item separators
        blocks = re.split(r'\n---\n', response.text)
        
        for block in blocks:
            if 'item.php?id=' in block:
                item = parse_item_block(block)
                if item:
                    items.append(item)
        
        return items
        
    except Exception as e:
        print(f"Error on page {page_num}: {e}", file=sys.stderr)
        return []

def main():
    print("=== Coryn Club Complete Equipment Scraper ===\n")
    
    # Scrape ALL Additional Gear (type=6, 1000 items = ~91 pages)
    print("Scraping Additional Gear (type=6)...")
    all_additional = []
    
    for page in range(91):  # Pages 0-90
        if page % 10 == 0:
            print(f"  Page {page + 1}/91...")
        
        items = scrape_page(6, page)
        all_additional.extend(items)
        
        if len(items) == 0:
            print(f"  No more items at page {page + 1}, stopping.")
            break
        
        time.sleep(0.5)  # Be respectful
    
    print(f"  ✓ Total Additional Gear: {len(all_additional)} items\n")
    
    # Scrape ALL Special Gear (type=18, 219 items = ~20 pages)
    print("Scraping Special Gear (type=18)...")
    all_special = []
    
    for page in range(20):  # Pages 0-19
        if page % 5 == 0:
            print(f"  Page {page + 1}/20...")
        
        items = scrape_page(18, page)
        all_special.extend(items)
        
        if len(items) == 0:
            print(f"  No more items at page {page + 1}, stopping.")
            break
        
        time.sleep(0.5)
    
    print(f"  ✓ Total Special Gear: {len(all_special)} items\n")
    
    # Generate TypeScript file
    print("Generating TypeScript database...")
    
    ts_content = """// Additional & Special Gear Database
// Complete data scraped from Coryn Club
// Generated automatically - DO NOT EDIT MANUALLY

export interface GearItem {
  id: number;
  name: string;
  category: 'accessory' | 'shield' | 'avatar' | 'food' | 'potion';
  def?: number;
  stats: Array<{
    stat: string;
    value: number;
  }>;
}

export const additionalGearList: GearItem[] = """
    
    # Add additional gear
    ts_content += json.dumps(all_additional, indent=2, ensure_ascii=False)
    ts_content += ";\n\n"
    
    ts_content += "export const specialGearList: GearItem[] = "
    ts_content += json.dumps(all_special, indent=2, ensure_ascii=False)
    ts_content += ";\n\n"
    
    # Add helper functions
    ts_content += """
/**
 * Get gear items by category
 */
export function getGearByCategory(category: GearItem['category']): GearItem[] {
  const allGear = [...additionalGearList, ...specialGearList];
  return allGear.filter(item => item.category === category);
}

/**
 * Get all additional gear (accessories + shields)
 */
export function getAllAdditionalGear(): GearItem[] {
  return additionalGearList;
}

/**
 * Get all special gear (avatars + foods + potions)
 */
export function getAllSpecialGear(): GearItem[] {
  return specialGearList;
}

/**
 * Search gear by name
 */
export function searchGear(query: string): GearItem[] {
  if (!query.trim()) return [...additionalGearList, ...specialGearList];
  
  const lowerQuery = query.toLowerCase();
  const allGear = [...additionalGearList, ...specialGearList];
  
  return allGear.filter(item => 
    item.name.toLowerCase().includes(lowerQuery) ||
    item.category.toLowerCase().includes(lowerQuery)
  );
}
"""
    
    # Write to file
    output_path = 'c:/Projects/Toram_calculator/src/data/gearDatabase.ts'
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(ts_content)
    
    print(f"✓ Database saved to {output_path}")
    print(f"\n=== SUMMARY ===")
    print(f"Additional Gear: {len(all_additional)} items")
    print(f"Special Gear: {len(all_special)} items")
    print(f"TOTAL: {len(all_additional) + len(all_special)} items")
    print(f"\\nDone!")

if __name__ == '__main__':
    main()
