// Non-derived stats - flat values from equipment/skills
// These are stats that don't have complex formulas but are just summed from sources

import type { StatModifier } from '../../types';

// Aggregate flat stats from various sources
export function aggregateFlatStats(
  crystaStats: StatModifier[],
  avatarStats: StatModifier[],
  foodStats: StatModifier[],
  equipmentBonuses: StatModifier[]
): Record<string, number> {
  const aggregated: Record<string, number> = {};
  
  const addStat = (stat: string, value: number) => {
    if (!stat || value === 0) return;
    aggregated[stat] = (aggregated[stat] || 0) + value;
  };
  
  // Add all sources
  [...crystaStats, ...avatarStats, ...foodStats, ...equipmentBonuses].forEach(mod => {
    addStat(mod.stat, mod.value);
  });
  
  return aggregated;
}

// Get natural HP/MP regen values
export function getNaturalRegen(
  modifiers: Record<string, number>
): {
  hpRegen: number;
  hpRegenPercent: number;
  mpRegen: number;
  mpRegenPercent: number;
} {
  return {
    hpRegen: modifiers['Natural HP Regen'] || 0,
    hpRegenPercent: modifiers['Natural HP Regen %'] || 0,
    mpRegen: modifiers['Natural MP Regen'] || 0,
    mpRegenPercent: modifiers['Natural MP Regen %'] || 0
  };
}
