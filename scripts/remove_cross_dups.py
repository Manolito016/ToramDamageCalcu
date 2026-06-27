#!/usr/bin/env python3
"""Remove cross-category duplicates (items in both Additional and Special lists)"""

import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

def remove_cross_duplicates():
    path = 'c:/Projects/Toram_calculator/src/data/gearDatabase.ts'
    
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract both arrays
    additional_match = re.search(r'(export const additionalGearList: GearItem\[\] = \[[\s\S]*?\];)', content)
    special_match = re.search(r'(export const specialGearList: GearItem\[\] = \[[\s\S]*?\];)', content)
    
    if not additional_match or not special_match:
        print("Error: Could not find arrays")
        return
    
    additional_text = additional_match.group(1)
    special_text = special_match.group(1)
    
    # Get all IDs from additional gear
    additional_ids = set(re.findall(r'id:\s*(\d+)', additional_text))
    
    # Remove items from special gear that exist in additional gear
    special_items = re.findall(r'(\{\s*id:\s*\d+[\s\S]*?\n\s*\})', special_text)
    
    unique_special = []
    removed = 0
    seen_in_additional = set()
    
    for item in special_items:
        id_match = re.search(r'id:\s*(\d+)', item)
        if id_match:
            item_id = id_match.group(1)
            if item_id in additional_ids:
                removed += 1
            else:
                unique_special.append(item)
    
    # Rebuild special array
    special_str = 'export const specialGearList: GearItem[] = [\n' + ',\n'.join(unique_special) + '\n];'
    
    # Replace in content
    content = content.replace(special_text, special_str)
    
    # Update total
    all_ids = set(re.findall(r'id:\s*(\d+)', content))
    content = re.sub(r'// Total items: \d+', f'// Total items: {len(all_ids)}', content)
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Removed {removed} cross-category duplicates")
    print(f"Remaining: {len(all_ids)} unique items total")
    print(f"Database cleaned successfully")

if __name__ == '__main__':
    remove_cross_duplicates()
