import type { MainWeaponType, SubWeaponType } from '../../types';
import { calculateSubWeaponPenalties } from './specialStats';

// Weapon-dependent stat calculations
// These stats depend on main weapon's type and are calculated before applying percent/flat bonuses

interface WeaponDependentStats {
  atk: number;
  matk: number;
  aspd: number;
  stability: number;
  subAtk?: number;
  subStability?: number;
}

/**
 * Calculate weapon-dependent stats based on weapon type
 * These values are rounded down before applying percent and flat bonuses
 */
export function calculateWeaponDependentStats(
  weaponType: MainWeaponType | SubWeaponType,
  level: number,
  str: number,
  int: number,
  agi: number,
  dex: number,
  weaponATK: number,
  weaponStability: number,
  subWeaponATK: number = 0,
  subWeaponStability: number = 0,
  subWeaponType: SubWeaponType = 'None'
): WeaponDependentStats {
  
  // Calculate sub-weapon penalties
  const penalties = calculateSubWeaponPenalties(subWeaponType);
  
  switch (weaponType) {
    case 'One-Handed Sword':
      // *sub weapon is not One-Handed Sword
      return {
        atk: Math.floor((level + 2 * str + 2 * dex + weaponATK) * (1 + penalties.atkPenalty / 100)),
        matk: Math.floor((level + 3 * int + dex + 1) * (1 + penalties.matkPenalty / 100)),
        aspd: Math.floor((100 + level + 4 * agi + (agi + str - 1) / 5) * (1 + penalties.aspdPenalty / 100)),
        stability: Math.floor(weaponStability + (str + 3 * dex) / 40)
      };

    case 'Two-Handed Sword':
      return {
        atk: Math.floor((level + 3 * str + dex + weaponATK) * (1 + penalties.atkPenalty / 100)),
        matk: Math.floor((level + 3 * int + dex + 1) * (1 + penalties.matkPenalty / 100)),
        aspd: Math.floor((50 + level + 2 * agi + (agi + str - 1) / 5) * (1 + penalties.aspdPenalty / 100)),
        stability: Math.floor(weaponStability + dex / 10)
      };

    case 'Dual Wield':
      return {
        atk: Math.floor((level + str + 2 * dex + agi + weaponATK) * (1 + penalties.atkPenalty / 100)),
        subAtk: Math.floor((level + str + 3 * agi + subWeaponATK) * (1 + penalties.atkPenalty / 100)),
        matk: Math.floor((level + 3 * int + dex) * (1 + penalties.matkPenalty / 100)),
        aspd: Math.floor((100 + level + 4 * agi + (agi + str - 1) / 5) * (1 + penalties.aspdPenalty / 100)),
        stability: Math.floor(weaponStability + (str + 3 * dex) / 40),
        subStability: Math.floor(subWeaponStability / 2 + (3 * str + 2 * agi) / 50)
      };

    case 'Bow':
      return {
        atk: Math.floor((level + 3 * dex + str + weaponATK) * (1 + penalties.atkPenalty / 100)),
        matk: Math.floor((level + 3 * int + dex) * (1 + penalties.matkPenalty / 100)),
        aspd: Math.floor((75 + level + 3 * agi + (agi + 2 * dex - 1) / 10) * (1 + penalties.aspdPenalty / 100)),
        stability: Math.floor(weaponStability + (str + dex) / 20)
      };

    case 'Bowgun':
      return {
        atk: Math.floor((level + 4 * dex + weaponATK) * (1 + penalties.atkPenalty / 100)),
        matk: Math.floor((level + 3 * int + dex) * (1 + penalties.matkPenalty / 100)),
        aspd: Math.floor((30 + level + 2.2 * agi + 0.2 * dex) * (1 + penalties.aspdPenalty / 100)),
        stability: Math.floor(weaponStability + str / 20)
      };

    case 'Staff':
      return {
        atk: Math.floor((level + 3 * str + int + weaponATK) * (1 + penalties.atkPenalty / 100)),
        matk: Math.floor((level + 4 * int + dex + weaponATK) * (1 + penalties.matkPenalty / 100)),
        aspd: Math.floor((60 + level + agi + (4 * agi + int - 1) / 5) * (1 + penalties.aspdPenalty / 100)),
        stability: Math.floor(weaponStability + str / 20)
      };

    case 'Magic Device':
      return {
        atk: Math.floor((level + 2 * int + 2 * agi + weaponATK) * (1 + penalties.atkPenalty / 100)),
        matk: Math.floor((level + 4 * int + dex + weaponATK) * (1 + penalties.matkPenalty / 100)),
        aspd: Math.floor((90 + level + 4 * agi + (int - 1) / 5) * (1 + penalties.aspdPenalty / 100)),
        stability: Math.floor(weaponStability + dex / 10)
      };

    case 'Knuckle':
      return {
        atk: Math.floor((level + 2 * agi + 0.5 * dex + weaponATK) * (1 + penalties.atkPenalty / 100)),
        matk: Math.floor((level + 4 * int + dex + 0.5 * weaponATK) * (1 + penalties.matkPenalty / 100)),
        aspd: Math.floor((120 + level + 4.6 * agi + dex / 10 + str / 10) * (1 + penalties.aspdPenalty / 100)),
        stability: Math.floor(weaponStability + dex / 40)
      };

    case 'Halberd':
      return {
        atk: Math.floor((level + 2.5 * str + 1.5 * agi + weaponATK) * (1 + penalties.atkPenalty / 100)),
        matk: Math.floor((level + 2 * int + dex + agi) * (1 + penalties.matkPenalty / 100)),
        aspd: Math.floor((25 + level + 3.5 * agi + 0.2 * str) * (1 + penalties.aspdPenalty / 100)),
        stability: Math.floor(weaponStability + (str + dex) / 20)
      };

    case 'Katana':
      return {
        atk: Math.floor((level + 1.5 * str + 2.5 * dex + weaponATK) * (1 + penalties.atkPenalty / 100)),
        matk: Math.floor((level + 1.5 * int + dex) * (1 + penalties.matkPenalty / 100)),
        aspd: Math.floor((200 + level + 3.9 * agi + 0.3 * str) * (1 + penalties.aspdPenalty / 100)),
        stability: Math.floor(weaponStability + (3 * str + dex) / 40)
      };

    case 'Bare Hand':
      return {
        atk: Math.floor((level + str + 1 + weaponATK) * (1 + penalties.atkPenalty / 100)),
        matk: Math.floor((level + 3 * int + dex + 1) * (1 + penalties.matkPenalty / 100)),
        aspd: Math.floor((1000 + level + 9.6 * agi) * (1 + penalties.aspdPenalty / 100)),
        stability: Math.floor(weaponStability + dex / 2.85)
      };

    default:
      // Fallback for unknown weapon types
      return {
        atk: Math.floor((level + str + dex + weaponATK) * (1 + penalties.atkPenalty / 100)),
        matk: Math.floor((level + int + dex) * (1 + penalties.matkPenalty / 100)),
        aspd: Math.floor(1000 * (1 + penalties.aspdPenalty / 100)),
        stability: weaponStability
      };
  }
}

/**
 * Apply percent and flat bonuses to weapon-dependent stats
 */
export function applyWeaponStatModifiers(
  baseStats: WeaponDependentStats,
  atkPercent: number,
  atkFlat: number,
  matkPercent: number,
  matkFlat: number,
  aspdPercent: number,
  aspdFlat: number,
  stabilityPercent: number
): WeaponDependentStats {
  const result: WeaponDependentStats = {
    atk: Math.floor(baseStats.atk * (1 + atkPercent / 100) + atkFlat),
    matk: Math.floor(baseStats.matk * (1 + matkPercent / 100) + matkFlat),
    aspd: Math.floor(baseStats.aspd * (1 + aspdPercent / 100) + aspdFlat),
    stability: Math.min(100, Math.floor(baseStats.stability + stabilityPercent))
  };

  // Apply modifiers to sub-hand stats if they exist
  if (baseStats.subAtk !== undefined) {
    result.subAtk = Math.floor(baseStats.subAtk * (1 + atkPercent / 100) + atkFlat);
  }
  if (baseStats.subStability !== undefined) {
    result.subStability = Math.min(100, Math.floor(baseStats.subStability + stabilityPercent));
  }

  return result;
}