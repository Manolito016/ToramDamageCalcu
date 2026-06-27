// Coryn Club Equipment API Service
// Fetches additional gear (accessories, shields) and special gear items

const CORYN_API_BASE = 'https://coryn.club/api/v1';

export interface EquipmentItem {
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
  def?: number;
  meta: {
    badge: string;
    note: string;
  };
}

export interface EquipmentCache {
  data: EquipmentItem[];
  timestamp: number;
}

const ADDITIONAL_CACHE_KEY = 'coryn_additional_gear_cache';
const SPECIAL_CACHE_KEY = 'coryn_special_gear_cache';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

/**
 * Fetch additional gear items from Coryn Club API
 * Type 40: Accessory
 * Type 41: Shield  
 */
export async function fetchAdditionalGear(): Promise<EquipmentItem[]> {
  const gearTypes = [40, 41]; // Accessory, Shield
  const allGear: EquipmentItem[] = [];
  const LIMIT = 100;

  for (const typeId of gearTypes) {
    let offset = 0;
    let hasMore = true;

    while (hasMore) {
      const response = await fetch(`${CORYN_API_BASE}/items.php?type=${typeId}&limit=${LIMIT}&offset=${offset}`);
      const json = await response.json();
      
      if (json.success && json.data && json.data.length > 0) {
        allGear.push(...json.data);
        
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

  return allGear;
}

/**
 * Fetch special gear items from Coryn Club API
 * Type 42: Avatar
 * Type 43: Food
 * Type 44: Potion
 */
export async function fetchSpecialGear(): Promise<EquipmentItem[]> {
  const gearTypes = [42, 43, 44]; // Avatar, Food, Potion
  const allGear: EquipmentItem[] = [];
  const LIMIT = 100;

  for (const typeId of gearTypes) {
    let offset = 0;
    let hasMore = true;

    while (hasMore) {
      const response = await fetch(`${CORYN_API_BASE}/items.php?type=${typeId}&limit=${LIMIT}&offset=${offset}`);
      const json = await response.json();
      
      if (json.success && json.data && json.data.length > 0) {
        allGear.push(...json.data);
        
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

  return allGear;
}

/**
 * Get additional gear from cache
 */
function getAdditionalCache(): EquipmentItem[] | null {
  try {
    const cached = localStorage.getItem(ADDITIONAL_CACHE_KEY);
    if (cached) {
      const cache: EquipmentCache = JSON.parse(cached);
      const age = Date.now() - cache.timestamp;
      
      if (age < CACHE_DURATION) {
        return cache.data;
      }
    }
  } catch (error) {
    console.error('Failed to read additional gear cache:', error);
  }
  return null;
}

/**
 * Save additional gear to cache
 */
function saveAdditionalCache(data: EquipmentItem[]): void {
  try {
    const cache: EquipmentCache = {
      data,
      timestamp: Date.now()
    };
    localStorage.setItem(ADDITIONAL_CACHE_KEY, JSON.stringify(cache));
  } catch (error) {
    console.error('Failed to save additional gear cache:', error);
  }
}

/**
 * Get special gear from cache
 */
function getSpecialCache(): EquipmentItem[] | null {
  try {
    const cached = localStorage.getItem(SPECIAL_CACHE_KEY);
    if (cached) {
      const cache: EquipmentCache = JSON.parse(cached);
      const age = Date.now() - cache.timestamp;
      
      if (age < CACHE_DURATION) {
        return cache.data;
      }
    }
  } catch (error) {
    console.error('Failed to read special gear cache:', error);
  }
  return null;
}

/**
 * Save special gear to cache
 */
function saveSpecialCache(data: EquipmentItem[]): void {
  try {
    const cache: EquipmentCache = {
      data,
      timestamp: Date.now()
    };
    localStorage.setItem(SPECIAL_CACHE_KEY, JSON.stringify(cache));
  } catch (error) {
    console.error('Failed to save special gear cache:', error);
  }
}

/**
 * Get additional gear (with caching)
 */
export async function getAdditionalGear(): Promise<EquipmentItem[]> {
  const cached = getAdditionalCache();
  if (cached) {
    return cached;
  }

  const data = await fetchAdditionalGear();
  saveAdditionalCache(data);
  return data;
}

/**
 * Get special gear (with caching)
 */
export async function getSpecialGear(): Promise<EquipmentItem[]> {
  const cached = getSpecialCache();
  if (cached) {
    return cached;
  }

  const data = await fetchSpecialGear();
  saveSpecialCache(data);
  return data;
}

/**
 * Clear equipment cache
 */
export function clearEquipmentCache(): void {
  localStorage.removeItem(ADDITIONAL_CACHE_KEY);
  localStorage.removeItem(SPECIAL_CACHE_KEY);
}

/**
 * Filter equipment by type
 */
export function filterEquipmentByType(equipment: EquipmentItem[], typeLabel: string): EquipmentItem[] {
  return equipment.filter(item => 
    item.type_label.toLowerCase().includes(typeLabel.toLowerCase())
  );
}

/**
 * Get unique equipment type labels
 */
export function getEquipmentTypeLabels(equipment: EquipmentItem[]): string[] {
  const labels = equipment.map(item => item.type_label);
  return Array.from(new Set(labels)).sort();
}
