export interface StatCost {
  costPerPoint: number; // POT cost per 1 point/%
  isPercentage: boolean;
  canBeNegative: boolean; // Can this stat be negative to refund POT?
}

export const statCosts: Record<string, StatCost> = {
  // High-value offensive stats (3 POT per point)
  'Critical Damage %': { costPerPoint: 3, isPercentage: true, canBeNegative: true },
  'Critical Rate %': { costPerPoint: 3, isPercentage: true, canBeNegative: true },
  'Weapon ATK %': { costPerPoint: 3, isPercentage: true, canBeNegative: true },
  'Physical Pierce %': { costPerPoint: 3, isPercentage: true, canBeNegative: true },
  'Magic Pierce %': { costPerPoint: 3, isPercentage: true, canBeNegative: true },
  
  // Medium-value stats (2 POT per point)
  'Critical Rate': { costPerPoint: 2, isPercentage: false, canBeNegative: true },
  'ATK %': { costPerPoint: 2, isPercentage: true, canBeNegative: true },
  'MATK %': { costPerPoint: 2, isPercentage: true, canBeNegative: true },
  'Stability %': { costPerPoint: 2, isPercentage: true, canBeNegative: true },
  'ASPD': { costPerPoint: 2, isPercentage: false, canBeNegative: true },
  'ASPD %': { costPerPoint: 2, isPercentage: true, canBeNegative: true },
  'MaxHP %': { costPerPoint: 2, isPercentage: true, canBeNegative: true },
  'MaxMP %': { costPerPoint: 2, isPercentage: true, canBeNegative: true },
  'Guard Power %': { costPerPoint: 2, isPercentage: true, canBeNegative: true },
  'Guard Recharge %': { costPerPoint: 2, isPercentage: true, canBeNegative: true },
  'Evasion Recharge %': { costPerPoint: 2, isPercentage: true, canBeNegative: true },
  'Short Range Damage %': { costPerPoint: 2, isPercentage: true, canBeNegative: true },
  'Long Range Damage %': { costPerPoint: 2, isPercentage: true, canBeNegative: true },
  'Additional Melee %': { costPerPoint: 2, isPercentage: true, canBeNegative: true },
  'Additional Magic %': { costPerPoint: 2, isPercentage: true, canBeNegative: true },
  'CSPD %': { costPerPoint: 2, isPercentage: true, canBeNegative: true },
  'Motion Speed %': { costPerPoint: 2, isPercentage: true, canBeNegative: true },
  
  // Elemental damage/resistance (2 POT per point)
  'Damage To Fire %': { costPerPoint: 2, isPercentage: true, canBeNegative: true },
  'Damage To Water %': { costPerPoint: 2, isPercentage: true, canBeNegative: true },
  'Damage To Wind %': { costPerPoint: 2, isPercentage: true, canBeNegative: true },
  'Damage To Earth %': { costPerPoint: 2, isPercentage: true, canBeNegative: true },
  'Damage To Light %': { costPerPoint: 2, isPercentage: true, canBeNegative: true },
  'Damage To Dark %': { costPerPoint: 2, isPercentage: true, canBeNegative: true },
  'Fire Resistance %': { costPerPoint: 2, isPercentage: true, canBeNegative: true },
  'Water Resistance %': { costPerPoint: 2, isPercentage: true, canBeNegative: true },
  'Wind Resistance %': { costPerPoint: 2, isPercentage: true, canBeNegative: true },
  'Earth Resistance %': { costPerPoint: 2, isPercentage: true, canBeNegative: true },
  'Light Resistance %': { costPerPoint: 2, isPercentage: true, canBeNegative: true },
  'Dark Resistance %': { costPerPoint: 2, isPercentage: true, canBeNegative: true },
  'Neutral Resistance %': { costPerPoint: 2, isPercentage: true, canBeNegative: true },
  'Damage To Neutral %': { costPerPoint: 2, isPercentage: true, canBeNegative: true },
  
  // Base stats (1 POT per point)
  'STR': { costPerPoint: 1, isPercentage: false, canBeNegative: true },
  'STR %': { costPerPoint: 2, isPercentage: true, canBeNegative: true },
  'INT': { costPerPoint: 1, isPercentage: false, canBeNegative: true },
  'INT %': { costPerPoint: 2, isPercentage: true, canBeNegative: true },
  'VIT': { costPerPoint: 1, isPercentage: false, canBeNegative: true },
  'VIT %': { costPerPoint: 2, isPercentage: true, canBeNegative: true },
  'AGI': { costPerPoint: 1, isPercentage: false, canBeNegative: true },
  'AGI %': { costPerPoint: 2, isPercentage: true, canBeNegative: true },
  'DEX': { costPerPoint: 1, isPercentage: false, canBeNegative: true },
  'DEX %': { costPerPoint: 2, isPercentage: true, canBeNegative: true },
  
  // Defensive stats (1 POT per point)
  'DEF': { costPerPoint: 1, isPercentage: false, canBeNegative: true },
  'DEF %': { costPerPoint: 2, isPercentage: true, canBeNegative: true },
  'MDEF': { costPerPoint: 1, isPercentage: false, canBeNegative: true },
  'MDEF %': { costPerPoint: 2, isPercentage: true, canBeNegative: true },
  'MaxHP': { costPerPoint: 1, isPercentage: false, canBeNegative: true },
  'MaxMP': { costPerPoint: 1, isPercentage: false, canBeNegative: true },
  'Dodge': { costPerPoint: 1, isPercentage: false, canBeNegative: true },
  'Dodge %': { costPerPoint: 2, isPercentage: true, canBeNegative: true },
  'Accuracy': { costPerPoint: 1, isPercentage: false, canBeNegative: true },
  'Accuracy %': { costPerPoint: 2, isPercentage: true, canBeNegative: true },
  
  // Regen stats (1 POT per point) - commonly used as negative
  'Natural HP Regen': { costPerPoint: 1, isPercentage: false, canBeNegative: true },
  'Natural HP Regen %': { costPerPoint: 1, isPercentage: true, canBeNegative: true },
  'Natural MP Regen': { costPerPoint: 1, isPercentage: false, canBeNegative: true },
  'Natural MP Regen %': { costPerPoint: 1, isPercentage: true, canBeNegative: true },
  
  // Utility stats (1-2 POT per point)
  'Attack MP Recovery': { costPerPoint: 2, isPercentage: false, canBeNegative: true },
  'Aggro %': { costPerPoint: 1, isPercentage: true, canBeNegative: true },
  'Physical Resistance %': { costPerPoint: 2, isPercentage: true, canBeNegative: true },
  'Magic Resistance %': { costPerPoint: 2, isPercentage: true, canBeNegative: true },
  'Physical Barrier': { costPerPoint: 2, isPercentage: false, canBeNegative: true },
  'Magic Barrier': { costPerPoint: 2, isPercentage: false, canBeNegative: true },
  'Fractional Barrier %': { costPerPoint: 3, isPercentage: true, canBeNegative: true },
  'Reflect %': { costPerPoint: 3, isPercentage: true, canBeNegative: true },
  'Anticipate %': { costPerPoint: 2, isPercentage: true, canBeNegative: true },
  'Guard Break %': { costPerPoint: 2, isPercentage: true, canBeNegative: true },
  'Barrier Cooldown %': { costPerPoint: 2, isPercentage: true, canBeNegative: true },
  'CSPD': { costPerPoint: 1, isPercentage: false, canBeNegative: true },
  'Critical Damage': { costPerPoint: 2, isPercentage: false, canBeNegative: true },
  'Weapon ATK': { costPerPoint: 2, isPercentage: false, canBeNegative: true },
  'ATK': { costPerPoint: 1, isPercentage: false, canBeNegative: true },
  'MATK': { costPerPoint: 1, isPercentage: false, canBeNegative: true },
};

// Calculate POT cost for a stat
export function calculatePOTCost(statName: string, value: number, isNegative: boolean): number {
  const costData = statCosts[statName];
  if (!costData) return 0;
  
  const baseCost = Math.abs(value) * costData.costPerPoint;
  return isNegative ? -baseCost : baseCost; // Negative stats refund POT
}

// Calculate success rate based on POT usage
export function calculateSuccessRate(usedPOT: number, maxPOT: number): number {
  if (maxPOT === 0) return 0;
  const usagePercent = (Math.max(0, usedPOT) / maxPOT) * 100;
  return Math.max(0, Math.min(100, 100 - usagePercent));
}

// Get risk level based on success rate
export function getRiskLevel(successRate: number): 'low' | 'medium' | 'high' {
  if (successRate >= 80) return 'low';
  if (successRate >= 50) return 'medium';
  return 'high';
}
