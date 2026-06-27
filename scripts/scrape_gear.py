#!/usr/bin/env python3
"""
Scrape Coryn Club equipment data for Toram Calculator
Fetches Additional Gear (type=6) and Special Gear (type=18)
"""

import requests
from bs4 import BeautifulSoup
import json
import time
import sys

sys.stdout.reconfigure(encoding='utf-8')

def parse_item_card(card_html):
    """Parse a single item card from Coryn Club"""
    soup = BeautifulSoup(card_html, 'html.parser')
    
    # Get item name and link
    name_link = soup.find('a', href=lambda x: x and 'item.php?id=' in x)
    if not name_link:
        return None
    
    name = name_link.get_text(strip=True)
    item_id = name_link['href'].split('id=')[1].split('&')[0]
    
    # Get DEF value
    def_value = 0
    stat_rows = soup.find_all('tr')
    for row in stat_rows:
        cells = row.find_all('td')
        if len(cells) >= 2:
            stat_name = cells[0].get_text(strip=True)
            stat_value = cells[1].get_text(strip=True)
            if stat_name == 'Base DEF':
                try:
                    def_value = int(stat_value)
                except:
                    pass
    
    # Get all stats
    stats = []
    for row in stat_rows:
        cells = row.find_all('td')
        if len(cells) >= 2:
            stat_name = cells[0].get_text(strip=True)
            stat_value = cells[1].get_text(strip=True)
            if stat_name != 'Base DEF':
                try:
                    # Handle negative values and percentages
                    value = int(stat_value.replace(',', ''))
                    stats.append({
                        'stat': stat_name,
                        'value': value
                    })
                except:
                    pass
    
    return {
        'id': int(item_id),
        'name': name,
        'category': 'accessory',
        'def': def_value,
        'stats': stats
    }

def scrape_page(url):
    """Scrape a single page from Coryn Club"""
    try:
        response = requests.get(url, timeout=10)
        response.encoding = 'utf-8'
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Find all item cards
        items = []
        item_cards = soup.find_all('div', class_='item-card')
        
        if not item_cards:
            # Try alternative selector
            item_cards = soup.find_all('div', style=lambda x: x and 'item' in x.lower())
        
        for card in item_cards:
            item = parse_item_card(str(card))
            if item:
                items.append(item)
        
        # Check for pagination
        pagination = []
        page_links = soup.find_all('a', href=lambda x: x and 'p=' in x)
        for link in page_links:
            page_num = link.get_text(strip=True)
            if page_num.isdigit():
                pagination.append(int(page_num))
        
        return items, pagination
        
    except Exception as e:
        print(f"Error scraping {url}: {e}", file=sys.stderr)
        return [], []

def main():
    # Scrape Additional Gear (type=6)
    print("Scraping Additional Gear (type=6)...")
    all_additional = []
    
    for page in range(5):  # First 5 pages
        url = f"https://coryn.club/item.php?name=&type=6&order=id+DESC&show=11&p={page}"
        print(f"  Page {page + 1}: {url}")
        
        items, pagination = scrape_page(url)
        all_additional.extend(items)
        print(f"    Found {len(items)} items")
        
        time.sleep(1)  # Be respectful to the server
    
    print(f"\nTotal Additional Gear: {len(all_additional)} items\n")
    
    # Scrape Special Gear (type=18)
    print("Scraping Special Gear (type=18)...")
    all_special = []
    
    for page in range(5):  # First 5 pages
        url = f"https://coryn.club/item.php?name=&type=18&order=id+DESC&show=11&p={page}"
        print(f"  Page {page + 1}: {url}")
        
        items, pagination = scrape_page(url)
        all_special.extend(items)
        print(f"    Found {len(items)} items")
        
        time.sleep(1)
    
    print(f"\nTotal Special Gear: {len(all_special)} items\n")
    
    # Output as JSON
    output = {
        'additional': all_additional,
        'special': all_special
    }
    
    print(json.dumps(output, indent=2, ensure_ascii=False))

if __name__ == '__main__':
    main()
