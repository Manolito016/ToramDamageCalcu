#!/usr/bin/env python3
"""Generate clean database by removing all duplicates from current file"""

import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

def clean_current_database():
    path = 'c:/Projects/Toram_calculator/src/data/gearDatabase.ts'
    
    with open(path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    # Process and deduplicate
    seen_ids = set()
    output = []
    skip_until_close = False
    brace_count = 0
    removed = 0
    
    for line in lines:
        # Check for item start
        id_match = re.search(r'id:\s*(\d+)', line)
        
        if '{' in line and id_match:
            item_id = id_match.group(1)
            if item_id in seen_ids:
                skip_until_close = True
                brace_count = 0
                removed += 1
                continue
            else:
                seen_ids.add(item_id)
        
        if skip_until_close:
            brace_count += line.count('{') - line.count('}')
            if brace_count <= 0 and '}' in line:
                skip_until_close = False
            continue
        
        output.append(line)
    
    # Write cleaned file
    with open(path, 'w', encoding='utf-8') as f:
        f.writelines(output)
    
    # Update total count
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    content = re.sub(r'// Total items: \d+', f'// Total items: {len(seen_ids)}', content)
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Removed {removed} duplicate items")
    print(f"Final count: {len(seen_ids)} unique items")
    print("Database is now clean!")

if __name__ == '__main__':
    clean_current_database()
