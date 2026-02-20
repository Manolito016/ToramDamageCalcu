import type { ArmorType, RefinementLevel, WeaponEquipment, ArmorEquipment, EquipmentCrystal, EquipmentBonusRow } from '../../types';
import { armorTypeModifiers } from '../../data/armorTypes';
import { refinementBonuses } from '../../data/refinementTable';


// Calculate weapon ATK with refinement
export function calculateWeaponATK(
  baseAtk: number,
  refinement: RefinementLevel,
  weaponAtkPercent: number,
  weaponAtkFlat: number
): number {
  const refineBonus = refinementBonuses[refinement];
  const percentBonus = Math.floor(baseAtk * refineBonus.percent);
  const totalWeaponAtk = Math.floor(baseAtk * (1 + weaponAtkPercent / 100)) + weaponAtkFlat;
  return totalWeaponAtk + percentBonus + refineBonus.flat;
}

// Calculate DEF based on armor type
export function calculateDEF(
  level: number,
  vit: number,
  equipmentDef: number,
  armorType: ArmorType,
  defPercent: number,
  defFlat: number
): number {
  const modifiers = armorTypeModifiers[armorType] || armorTypeModifiers['Without Armor'];
  const baseDEF = Math.floor(modifiers.defMultiplier * level + modifiers.vitMultiplier * vit) + equipmentDef;
  const modifiedDEF = baseDEF * (1 + defPercent / 100) + defFlat;
  return Math.floor(modifiedDEF);
}

// Calculate MDEF based on armor type
export function calculateMDEF(
  level: number,
  int: number,
  equipmentDef: number,
  armorType: ArmorType,
  mdefPercent: number,
  mdefFlat: number
): number {
  const modifiers = armorTypeModifiers[armorType] || armorTypeModifiers['Without Armor'];
  const baseMDEF = Math.floor(modifiers.mdefMultiplier * level + modifiers.intMultiplier * int) + equipmentDef;
  const modifiedMDEF = baseMDEF * (1 + mdefPercent / 100) + mdefFlat;
  return Math.floor(modifiedMDEF);
}

// Calculate FLEE (Dodge) based on armor type
export function calculateFLEE(
  level: number,
  agi: number,
  armorType: ArmorType,
  dodgePercent: number,
  dodgeFlat: number
): number {
  const modifiers = armorTypeModifiers[armorType] || armorTypeModifiers['Without Armor'];
  const baseFLEE = Math.floor(modifiers.fleeLevelMultiplier * level + modifiers.fleeAgiMultiplier * agi) + modifiers.fleeFlat;
  const modifiedFLEE = baseFLEE * (1 + dodgePercent / 100) + dodgeFlat;
  return Math.floor(modifiedFLEE);
}

// Calculate refinement damage reduction for armor
export function calculateRefinementReduction(refinement: RefinementLevel): number {
  const bonus = refinementBonuses[refinement];
  return bonus.flat;
}

// Calculate total equipment stat modifiers from all sources
export function aggregateEquipmentStats(
  _mainWeapon: WeaponEquipment,
  subWeapon: WeaponEquipment,
  armor: ArmorEquipment,
  additionalGear: { def: number; refinement: RefinementLevel },
  specialGear: { def: number }
): {
  totalDef: number;
  totalRefineReduction: number;
} {
  // Sum DEF from all equipment
  const totalDef = armor.def + additionalGear.def + specialGear.def;
  
  // Sum refinement reduction from armor, additional gear, and sub weapon (if shield)
  let totalRefineReduction = 
    calculateRefinementReduction(armor.refinement) +
    calculateRefinementReduction(additionalGear.refinement);
  
  // Sub weapon refinement only applies if it's a shield
  if (subWeapon.type === 'Shield') {
    totalRefineReduction += calculateRefinementReduction(subWeapon.refinement);
  }
  
  return { totalDef, totalRefineReduction };
}

// Extract all stat modifiers from crysta slots (8 rows per crystal)
export function extractCrystaStats(
  crysta1: EquipmentCrystal,
  crysta2: EquipmentCrystal
): Record<string, number> {
  const stats: Record<string, number> = {};

  // Process all 8 rows from crystal 1
  crysta1?.rows?.forEach(row => {
    if (row?.stat && row.value !== 0) {
      stats[row.stat] = (stats[row.stat] || 0) + row.value;
    }
  });

  // Process all 8 rows from crystal 2
  crysta2?.rows?.forEach(row => {
    if (row?.stat && row.value !== 0) {
      stats[row.stat] = (stats[row.stat] || 0) + row.value;
    }
  });

  return stats;
}

// Extract all stat modifiers from equipment bonus rows (8 rows per equipment)
export function extractEquipmentStats(
  equipmentStats: EquipmentBonusRow[]
): Record<string, number> {
  const stats: Record<string, number> = {};
  
  // Process all rows from equipment stats
  equipmentStats.forEach(row => {
    if (row.stat && row.value !== 0) {
      stats[row.stat] = (stats[row.stat] || 0) + row.value;
    }
  });
  
  return stats;
}
