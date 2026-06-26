/**
 * Crysta Database Import Script
 * 
 * This script fetches ALL crysta from Coryn Club API with pagination
 * and generates a complete local database file.
 * 
 * Usage: node scripts/import-crysta.js
 */

const fs = require('fs');
const path = require('path');

const API_BASE = 'https://coryn.club/api/v1';
const OUTPUT_FILE = path.join(__dirname, '..', 'src', 'data', 'crystaDatabase.ts');

// Crysta type definitions
const CRYSTA_TYPES = [
  { id: 20, name: 'normalCrysta', label: 'Normal Crysta' },
  { id: 21, name: 'weaponCrysta', label: 'Weapon Crysta' },
  { id: 22, name: 'armorCrysta', label: 'Armor Crysta' },
  { id: 23, name: 'additionalCrysta', label: 'Additional Crysta' },
  { id: 24, name: 'specialCrysta', label: 'Special Crysta' }
];

const LIMIT = 100; // Max per API request

/**
 * Fetch all items for a specific crysta type with pagination
 */
async function fetchCrystaType(typeId) {
  const allItems = [];
  let offset = 0;
  let hasMore = true;

  console.log(`  Fetching type ${typeId}...`);

  while (hasMore) {
    const url = `${API_BASE}/items.php?type=${typeId}&limit=${LIMIT}&offset=${offset}`;
    
    try {
      const response = await fetch(url);
      const json = await response.json();

      if (json.success && json.data && json.data.length > 0) {
        // Only include fields that match our TypeScript interface
        const cleanedData = json.data.map(item => ({
          id: item.id,
          name: item.name,
          type_id: item.type_id,
          type_label: item.type_label,
          stats: [], // Will be filled later
          meta: item.meta || { badge: '', note: '' }
        }));
        allItems.push(...cleanedData);
        
        const total = json.meta?.total || 0;
        offset += LIMIT;
        
        console.log(`    Fetched ${allItems.length}/${total} items`);
        
        if (offset >= total) {
          hasMore = false;
        }
      } else {
        hasMore = false;
      }
    } catch (error) {
      console.error(`    Error fetching offset ${offset}:`, error.message);
      hasMore = false;
    }
  }

  return allItems;
}

/**
 * Fetch detailed stats for a single crysta
 */
async function fetchCrystaDetails(id) {
  try {
    const response = await fetch(`${API_BASE}/items.php?id=${id}`);
    const json = await response.json();
    
    if (json.success && json.data) {
      // Only return fields that match our TypeScript interface
      const item = json.data;
      return {
        id: item.id,
        name: item.name,
        type_id: item.type_id,
        type_label: item.type_label,
        stats: item.stats || [],
        meta: item.meta || { badge: '', note: '' }
      };
    }
    return null;
  } catch (error) {
    console.error(`    Error fetching details for ${id}:`, error.message);
    return null;
  }
}

/**
 * Fetch all crysta with pagination
 */
async function fetchAllCrysta() {
  console.log('🔍 Fetching all crysta from Coryn Club API...\n');
  
  const allCrysta = {};
  
  // Step 1: Fetch all basic crysta data with pagination
  for (const type of CRYSTA_TYPES) {
    console.log(`📦 ${type.label} (type ${type.id}):`);
    const items = await fetchCrystaType(type.id);
    allCrysta[type.name] = items;
    console.log(`  ✓ Got ${items.length} items\n`);
  }
  
  // Step 2: Fetch detailed stats for each crysta
  console.log('📊 Fetching detailed stats for each crysta...\n');
  
  let totalCrysta = 0;
  let fetchedCount = 0;
  
  for (const type of CRYSTA_TYPES) {
    totalCrysta += allCrysta[type.name].length;
  }
  
  for (const type of CRYSTA_TYPES) {
    console.log(`🔄 Fetching details for ${type.label}...`);
    
    const detailedCrysta = await Promise.all(
      allCrysta[type.name].map(async (item, index) => {
        fetchedCount++;
        
        if (fetchedCount % 10 === 0) {
          console.log(`  Progress: ${fetchedCount}/${totalCrysta}`);
        }
        
        const details = await fetchCrystaDetails(item.id);
        return details || item;
      })
    );
    
    allCrysta[type.name] = detailedCrysta;
    console.log(`  ✓ Completed ${type.label}\n`);
    
    // Add delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  console.log(`\n✅ Fetched ${totalCrysta} total crysta with full stats!\n`);
  
  return allCrysta;
}

/**
 * Generate TypeScript database file
 */
function generateDatabaseFile(allCrysta) {
  console.log('📝 Generating database file...\n');
  
  let content = `// Crysta Database (auto-generated from Coryn Club API)
// Generated on: ${new Date().toISOString()}
// Complete crysta data for all 5 types

export interface CrystaItem {
  id: number;
  name: string;
  type_id: number;
  type_label: string;
  stats: Array<{
    effect_id: number;
    effect_name: string;
    amount: number;
    applies_to: number;
  }>;
  meta: {
    badge: string;
    note: string;
  };
}

`;

  // Generate each crysta type array
  for (const type of CRYSTA_TYPES) {
    const crystaArray = allCrysta[type.name];
    content += `// ${type.label} (Type ${type.id}) - ${crystaArray.length} items\n`;
    content += `export const ${type.name}: CrystaItem[] = ${JSON.stringify(crystaArray, null, 2)};\n\n`;
  }

  // Generate combined array and helper functions
  content += `// Combine all crysta
export const allCrysta: CrystaItem[] = [
${CRYSTA_TYPES.map(t => `  ...${t.name}`).join(',\n')}
];

/**
 * Search crysta by name or type
 */
export function searchCrysta(query: string): CrystaItem[] {
  if (!query.trim()) return allCrysta;
  
  const lowerQuery = query.toLowerCase();
  return allCrysta.filter(crysta => 
    crysta.name.toLowerCase().includes(lowerQuery) ||
    crysta.type_label.toLowerCase().includes(lowerQuery)
  );
}

/**
 * Filter crysta by type_id
 */
export function filterCrystaByType(typeId: number): CrystaItem[] {
  return allCrysta.filter(crysta => crysta.type_id === typeId);
}

/**
 * Get crysta by ID
 */
export function getCrystaById(id: number): CrystaItem | undefined {
  return allCrysta.find(crysta => crysta.id === id);
}

/**
 * Get available crysta types for equipment
 */
export function getCrystaForEquipment(equipmentType: 'weapon' | 'armor' | 'additional' | 'special'): CrystaItem[] {
  switch (equipmentType) {
    case 'weapon':
      return allCrysta.filter(c => c.type_id === 20 || c.type_id === 21); // Normal + Weapon
    case 'armor':
      return allCrysta.filter(c => c.type_id === 20 || c.type_id === 22); // Normal + Armor
    case 'additional':
      return allCrysta.filter(c => c.type_id === 20 || c.type_id === 23); // Normal + Additional
    case 'special':
      return allCrysta.filter(c => c.type_id === 20 || c.type_id === 24); // Normal + Special
    default:
      return allCrysta;
  }
}

/**
 * Get unique type categories
 */
export function getCrystaTypes(): Array<{ id: number; label: string; count: number }> {
  return [
${CRYSTA_TYPES.map(t => `    { id: ${t.id}, label: "${t.label}", count: ${t.name}.length }`).join(',\n')}
  ];
}
`;

  return content;
}

/**
 * Main execution
 */
async function main() {
  try {
    console.log('╔══════════════════════════════════════════════════════════╗');
    console.log('║     Coryn Club Crysta Database Import Script            ║');
    console.log('╚══════════════════════════════════════════════════════════╝\n');
    
    // Fetch all crysta
    const allCrysta = await fetchAllCrysta();
    
    // Generate database file
    const fileContent = generateDatabaseFile(allCrysta);
    
    // Write to file
    fs.writeFileSync(OUTPUT_FILE, fileContent, 'utf8');
    
    console.log('💾 Database file written to:', OUTPUT_FILE);
    console.log('✅ Import complete!\n');
    
    // Summary
    console.log('📊 Summary:');
    for (const type of CRYSTA_TYPES) {
      console.log(`  ${type.label}: ${allCrysta[type.name].length} items`);
    }
    
    const total = CRYSTA_TYPES.reduce((sum, type) => sum + allCrysta[type.name].length, 0);
    console.log(`\n  TOTAL: ${total} crysta`);
    
  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  }
}

// Run the script
main();
