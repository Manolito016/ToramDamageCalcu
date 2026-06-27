#!/usr/bin/env python3
"""Remove duplicate items from gearDatabase.ts"""

import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

def clean_database():
    input_path = 'c:/Projects/Toram_calculator/src/data/gearDatabase.ts'
    output_path = 'c:/Projects/Toram_calculator/src/data/gearDatabase_clean.ts'
    
    with open(input_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract the two arrays
    additional_match = re.search(r'export const additionalGearList: GearItem\[\] = (\[.*?\]);', content, re.DOTALL)
    special_match = re.search(r'export const specialGearList: GearItem\[\] = (\[.*?\]);', content, re.DOTALL)
    
    if not additional_match or not special_match:
        print("Error: Could not find arrays in database")
        return
    
    # Parse items from each array
    def extract_items(array_str):
        # Find all item blocks
        items = []
        pattern = r'\{\s*id:\s*(\d+),[^}]+\}'
        for match in re.finditer(pattern, array_str, re.DOTALL):
            items.append(match.group(0))
        return items
    
    additional_items = extract_items(additional_match.group(1))
    special_items = extract_items(special_match.group(1))
    
    print(f"Before cleanup:")
    print(f"  Additional Gear: {len(additional_items)} items")
    print(f"  Special Gear: {len(special_items)} items")
    print(f"  Total: {len(additional_items) + len(special_items)} items")
    
    # Remove duplicates by ID
    def deduplicate(items):
        seen_ids = set()
        unique_items = []
        duplicates = 0
        
        for item in items:
            id_match = re.search(r'id:\s*(\d+)', item)
            if id_match:
                item_id = int(id_match.group(1))
                if item_id not in seen_ids:
                    seen_ids.add(item_id)
                    unique_items.append(item)
                else:
                    duplicates += 1
        
        return unique_items, duplicates
    
    additional_unique, add_dups = deduplicate(additional_items)
    special_unique, spec_dups = deduplicate(special_items)
    
    print(f"\nRemoved duplicates:")
    print(f"  Additional Gear: {add_dups} duplicates removed")
    print(f"  Special Gear: {spec_dups} duplicates removed")
    print(f"  Total removed: {add_dups + spec_dups}")
    
    print(f"\nAfter cleanup:")
    print(f"  Additional Gear: {len(additional_unique)} items")
    print(f"  Special Gear: {len(special_unique)} items")
    print(f"  Total: {len(additional_unique) + len(special_unique)} items")
    
    # Rebuild the file
    additional_str = '[\n' + ',\n'.join(additional_unique) + '\n]'
    special_str = '[\n' + ',\n'.join(special_unique) + '\n]'
    
    # Get the header and helper functions
    header_match = re.search(r'(//.*?export interface GearItem \{.*?\})', content, re.DOTALL)
    helpers_match = re.search(r'(export function getGearByCategory.*?$)', content, re.DOTALL | re.MULTILINE)
    
    if not header_match or not helpers_match:
        print("Error: Could not find header or helpers")
        return
    
    # Count total
    total = len(additional_unique) + len(special_unique)
    
    # Rebuild file
    new_content = f"""{header_match.group(1)}

export const additionalGearList: GearItem[] = {additional_str};

export const specialGearList: GearItem[] = {special_str};

{helpers_match.group(1)}
"""
    
    # Replace total count in comment
    new_content = re.sub(r'// Total items: \d+', f'// Total items: {total}', new_content)
    
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"\nClean database saved to: {output_path}")
    print(f"{total} unique items (no duplicates)")

if __name__ == '__main__':
    clean_database()
