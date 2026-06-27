#!/usr/bin/env python3
"""Simple deduplication - just remove duplicate item blocks"""

import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

def remove_duplicates():
    path = 'c:/Projects/Toram_calculator/src/data/gearDatabase.ts'
    
    with open(path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    # Process line by line, tracking item IDs
    seen_ids = set()
    output_lines = []
    current_item_lines = []
    in_item = False
    duplicates_removed = 0
    
    for line in lines:
        # Check if this line starts a new item
        id_match = re.search(r'id:\s*(\d+)', line)
        
        if id_match and '{' in line:
            item_id = int(id_match.group(1))
            
            if item_id in seen_ids:
                # Skip this duplicate item
                in_item = True
                current_item_lines = []
                duplicates_removed += 1
                continue
            else:
                # New unique item
                seen_ids.add(item_id)
                in_item = True
                current_item_lines = [line]
                continue
        
        if in_item:
            current_item_lines.append(line)
            if '}' in line and 'stats:' not in line:
                # End of item
                output_lines.extend(current_item_lines)
                current_item_lines = []
                in_item = False
        else:
            output_lines.append(line)
    
    # Write back
    with open(path, 'w', encoding='utf-8') as f:
        f.writelines(output_lines)
    
    # Update total count
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    total_unique = len(seen_ids)
    content = re.sub(r'// Total items: \d+', f'// Total items: {total_unique}', content)
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Removed {duplicates_removed} duplicates")
    print(f"Remaining: {total_unique} unique items")
    print(f"File updated successfully")

if __name__ == '__main__':
    remove_duplicates()
