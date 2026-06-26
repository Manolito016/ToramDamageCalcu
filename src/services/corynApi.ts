// Coryn Club API Service
const CORYN_API_BASE = 'https://coryn.club/api/v1';

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

export interface CrystaCache {
  data: CrystaItem[];
  timestamp: number;
}

const CACHE_KEY = 'coryn_crysta_cache';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

/**
 * Fetch all crysta from Coryn Club API (with pagination)
 * Fetches all 5 types: Normal (20), Weapon (21), Armor (22), Additional (23), Special (24)
 */
export async function fetchAllCrysta(): Promise<CrystaItem[]> {
  const crystaTypes = [20, 21, 22, 23, 24];
  const allCrysta: CrystaItem[] = [];
  const LIMIT = 100; // Max per API request

  for (const typeId of crystaTypes) {
    let offset = 0;
    let hasMore = true;

    while (hasMore) {
      const response = await fetch(`${CORYN_API_BASE}/items.php?type=${typeId}&limit=${LIMIT}&offset=${offset}`);
      const json = await response.json();
      
      if (json.success && json.data && json.data.length > 0) {
        allCrysta.push(...json.data);
        
        // Check if there are more items
        const total = json.meta?.total || 0;
        offset += LIMIT;
        
        if (offset >= total) {
          hasMore = false;
        }
      } else {
        hasMore = false;
      }
    }
  }

  return allCrysta;
}

/**
 * Fetch full crysta details including stats
 */
export async function fetchCrystaDetails(id: number): Promise<CrystaItem | null> {
  const response = await fetch(`${CORYN_API_BASE}/items.php?id=${id}`);
  const json = await response.json();
  
  if (json.success && json.data) {
    return json.data;
  }
  
  return null;
}

/**
 * Get crysta from cache (if fresh)
 */
export function getCrystaFromCache(): CrystaItem[] | null {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return null;

    const cache: CrystaCache = JSON.parse(cached);
    const now = Date.now();
    
    // Check if cache is still fresh
    if (now - cache.timestamp < CACHE_DURATION) {
      console.log('[CorynAPI] Using cached crysta data');
      return cache.data;
    }
    
    console.log('[CorynAPI] Cache expired');
    return null;
  } catch (error) {
    console.error('[CorynAPI] Failed to read cache:', error);
    return null;
  }
}

/**
 * Save crysta to cache
 */
export function saveCrystaToCache(data: CrystaItem[]): void {
  try {
    const cache: CrystaCache = {
      data,
      timestamp: Date.now()
    };
    
    localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
    console.log(`[CorynAPI] Cached ${data.length} crysta items`);
  } catch (error) {
    console.error('[CorynAPI] Failed to save cache:', error);
  }
}

/**
 * Get all crysta (from cache or API)
 */
export async function getAllCrysta(): Promise<CrystaItem[]> {
  // Try cache first
  const cached = getCrystaFromCache();
  if (cached && cached.length > 0) {
    console.log(`[CorynAPI] Using cached data: ${cached.length} crysta`);
    return cached;
  }

  // Fetch from API
  console.log('[CorynAPI] Fetching all crysta from API with pagination...');
  const crysta = await fetchAllCrysta();
  console.log(`[CorynAPI] Fetched ${crysta.length} crysta items from API`);
  
  // Fetch details for each crysta (to get stats)
  console.log('[CorynAPI] Fetching detailed stats for each crysta...');
  const crystaWithDetails = await Promise.all(
    crysta.map(async (item) => {
      const details = await fetchCrystaDetails(item.id);
      return details || item;
    })
  );
  
  console.log(`[CorynAPI] Completed fetching ${crystaWithDetails.length} crysta with details`);
  
  // Cache the results
  saveCrystaToCache(crystaWithDetails);
  
  return crystaWithDetails;
}

/**
 * Search crysta by name
 */
export function searchCrysta(crystaList: CrystaItem[], query: string): CrystaItem[] {
  if (!query.trim()) return crystaList;
  
  const lowerQuery = query.toLowerCase();
  return crystaList.filter(item => 
    item.name.toLowerCase().includes(lowerQuery)
  );
}

/**
 * Filter crysta by type
 */
export function filterCrystaByType(crystaList: CrystaItem[], typeId: number): CrystaItem[] {
  return crystaList.filter(item => item.type_id === typeId);
}

/**
 * Clear crysta cache
 */
export function clearCrystaCache(): void {
  localStorage.removeItem(CACHE_KEY);
  console.log('[CorynAPI] Cache cleared');
}
