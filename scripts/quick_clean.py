#!/usr/bin/env python3
"""Quick cleanup - remove duplicate IDs"""
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

path = 'c:/Projects/Toram_calculator/src/data/gearDatabase.ts'
with open(path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

seen = set()
output = []
skip = False
brace = 0
removed = 0

for line in lines:
    m = re.search(r'id:\s*(\d+)', line)
    if m and '{' in line:
        iid = m.group(1)
        if iid in seen:
            skip = True
            brace = 0
            removed += 1
            continue
        seen.add(iid)
    
    if skip:
        brace += line.count('{') - line.count('}')
        if brace <= 0 and '}' in line:
            skip = False
        continue
    
    output.append(line)

with open(path, 'w', encoding='utf-8') as f:
    f.writelines(output)

content = open(path, 'r', encoding='utf-8').read()
content = re.sub(r'// Total unique: \d+', f'// Total unique: {len(seen)}', content)
with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Removed {removed} duplicates")
print(f"Final: {len(seen)} unique items - CLEAN!")
