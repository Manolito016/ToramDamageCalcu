#!/usr/bin/env python3
"""Coryn Club Equipment Scraper - Clean version with global deduplication"""

from playwright.sync_api import sync_playwright
import time
import sys

sys.stdout.reconfigure(encoding='utf-8')

def scrape_page(type_id, page_num, seen_ids):
    """Scrape one page, return only NEW items"""
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        url = f"https://coryn.club/item.php?type={type_id}&show=11&p={page_num}"
        
        try:
            page.goto(url, wait_until='networkidle', timeout=30000)
            time.sleep(1)
            
            items = page.evaluate('''() => {
                const items = [];
                document.querySelectorAll('a[href*="item.php?id="]').forEach(link => {
                    const m = link.href.match(/id=(\\d+)/);
                    if (!m) return;
                    items.push({id: parseInt(m[1]), name: link.textContent.trim()});
                });
                return items;
            }''')
            
            browser.close()
            
            # Filter to only NEW items
            new_items = [item for item in items if item['id'] not in seen_ids]
            return new_items
        except:
            browser.close()
            return []

def main():
    print("=" * 70)
    print("Coryn Club Equipment Scraper - Clean with Deduplication")
    print("=" * 70)
    
    seen_ids = set()
    additional = []
    special = []
    
    # Scrape Additional Gear
    print("\nScraping Additional Gear...")
    for page in range(100):
        if page % 10 == 0:
            print(f"  Page {page+1}... ({len(additional)} items)")
        
        items = scrape_page(6, page, seen_ids)
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
        
        items = scrape_page(18, page, seen_ids)
        if not items:
            print(f"  Done at page {page+1}")
            break
        
        special.extend(items)
        seen_ids.update(item['id'] for item in items)
        
        if (page+1) % 5 == 0:
            print(f"  -> {len(special)} unique items...")
    
    print(f"Special Gear: {len(special)} items\n")
    
    # Save as minimal database (just IDs and names for now)
    with open('c:/Projects/Toram_calculator/src/data/gearDatabase.ts', 'w', encoding='utf-8') as f:
        f.write(f"// Total unique items: {len(seen_ids)}\n")
        f.write(f"// Additional: {len(additional)}\n")
        f.write(f"// Special: {len(special)}\n")
        f.write(f"// Duplicates skipped: {len(additional) + len(special) - len(seen_ids)}\n\n")
        f.write("export const GEAR_COUNT = " + str(len(seen_ids)) + ";\n")
    
    print(f"\nTotal unique: {len(seen_ids)} items")
    print("Database saved!")

if __name__ == '__main__':
    main()
