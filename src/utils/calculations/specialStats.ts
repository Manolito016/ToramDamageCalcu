import { applySoftCap, clamp } from '../math';

// Calculate physical resistance with soft cap (every 50%)
export function calculatePhysicalResistance(baseValue: number): number {
  return applySoftCap(baseValue, 50);
}

// Calculate magic resistance with soft cap (every 50%)
export function calculateMagicResistance(baseValue: number): number {
  return applySoftCap(baseValue, 50);
}

// Calculate anticipate (hard cap at 100%)
export function calculateAnticipate(baseValue: number): number {
  return clamp(baseValue, 0, 100);
}

// Calculate guard break (hard cap at 100%)
export function calculateGuardBreak(baseValue: number): number {
  return clamp(baseValue, 0, 100);
}

// Calculate stability (hard cap at 100%)
export function calculateStability(baseValue: number): number {
  return clamp(baseValue, 0, 100);
}

// Calculate ASPD with modifiers
export function calculateASPD(
  baseASPD: number,
  aspdPercent: number,
  aspdFlat: number,
  armorModifier: number
): number {
  const modifiedASPD = baseASPD * (1 + (aspdPercent + armorModifier) / 100) + aspdFlat;
  return Math.floor(modifiedASPD);
}

// Calculate sub-weapon penalties
export function calculateSubWeaponPenalties(subWeaponType: string): {
  aspdPenalty: number;
  atkPenalty: number;
  matkPenalty: number;
  defPenalty: number;
  mdefPenalty: number;
} {
  switch (subWeaponType) {
    case 'Shield':
      return { aspdPenalty: -50, atkPenalty: 0, matkPenalty: 0, defPenalty: 0, mdefPenalty: 0 };
    case 'Magic Device':
      return { aspdPenalty: 0, atkPenalty: -15, matkPenalty: 0, defPenalty: 0, mdefPenalty: 0 };
    case 'Knuckle':
      return { aspdPenalty: 0, atkPenalty: 0, matkPenalty: -15, defPenalty: 0, mdefPenalty: 0 };
    case 'Arrow':
      return { aspdPenalty: 0, atkPenalty: 0, matkPenalty: 0, defPenalty: -25, mdefPenalty: -25 };
    default:
      return { aspdPenalty: 0, atkPenalty: 0, matkPenalty: 0, defPenalty: 0, mdefPenalty: 0 };
  }
}

// Calculate dual wield penalties
export function calculateDualWieldPenalties(
  dualSwordMasteryLevel: number,
  dualSwordControlLevel: number
): {
  accuracyPenalty: number;
  criticalRatePenalty: number;
} {
  // Base penalty: -55%, reduced by mastery
  // At Lv10 mastery: -25% penalty
  const masteryReduction = dualSwordMasteryLevel * 3; // 3% per level
  const basePenalty = -55 + masteryReduction;
  
  // Dual Sword Control provides additional bonuses
  const controlBonus = dualSwordControlLevel * 3.5; // 3.5% per level
  
  const finalPenalty = basePenalty + controlBonus;
  
  return {
    accuracyPenalty: Math.min(finalPenalty, 0),
    criticalRatePenalty: Math.min(finalPenalty, 0)
  };
}

// Calculate aggro (starts at 100%)
export function calculateAggro(modifiers: number): number {
  return 100 + modifiers;
}

// Calculate short/long range damage (starts at 100%)
export function calculateRangeDamage(basePercent: number, modifiers: number): number {
  return basePercent + modifiers;
}
