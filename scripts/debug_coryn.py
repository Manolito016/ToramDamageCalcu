#!/usr/bin/env python3
"""Debug Coryn Club HTML structure with Playwright"""

from playwright.sync_api import sync_playwright
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

def debug_html():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        
        url = "https://coryn.club/item.php?type=6&show=11"
        print(f"Navigating to: {url}")
        
        page.goto(url, wait_until='networkidle', timeout=30000)
        
        # Take screenshot
        page.screenshot(path='coryn_debug.png')
        print("Screenshot saved to coryn_debug.png")
        
        # Get page structure
        structure = page.evaluate('''() => {
            const info = {
                url: window.location.href,
                title: document.title,
                body_length: document.body.innerHTML.length,
                
                // Check for common patterns
                has_cards: document.querySelectorAll('.card-container').length,
                has_items: document.querySelectorAll('.item-list-grid').length,
                has_tables: document.querySelectorAll('table').length,
                has_links: document.querySelectorAll('a[href*="item.php?id="]').length,
                
                // Get first few item links
                sample_links: Array.from(document.querySelectorAll('a[href*="item.php?id="]'))
                    .slice(0, 3)
                    .map(a => ({
                        href: a.href,
                        text: a.textContent,
                        parent_class: a.parentElement?.className,
                        grandparent_class: a.parentElement?.parentElement?.className
                    }))
            };
            
            return info;
        }''')
        
        print("\nPage Structure:")
        print(json.dumps(structure, indent=2))
        
        # Get raw HTML of first item
        first_item = page.evaluate('''() => {
            const link = document.querySelector('a[href*="item.php?id="]');
            if (!link) return null;
            
            let parent = link.parentElement;
            for (let i = 0; i < 5; i++) {
                if (!parent) break;
                if (parent.innerHTML.length > 500) {
                    return parent.innerHTML.substring(0, 2000);
                }
                parent = parent.parentElement;
            }
            return null;
        }''')
        
        if first_item:
            print("\nFirst Item HTML (first 2000 chars):")
            print(first_item)
        
        browser.close()

if __name__ == '__main__':
    debug_html()
