import type { BaseStats, PersonalStat } from '../../types';
import { floorDivide } from '../math';

// Calculate total stat points used
export function calculateStatPointsUsed(baseStats: BaseStats): number {
  // Each stat starts at 1 (free), so we count points above 1
  return Object.values(baseStats).reduce((sum, val) => sum + Math.max(0, val - 1), 0);
}

// Calculate maximum stat points based on level
export function calculateMaxStatPoints(level: number): number {
  // Formula: Level-based maximum (simplified, actual formula may vary)
  // At level 200, typically around 776 points
  return Math.floor(level * 3.88);
}

// Calculate MaxHP
export function calculateMaxHP(level: number, vit: number, modifiers: { flat: number; percent: number }): number {
  // Formula: 93 + floor((VIT + 22.41) * Level / 3)
  const baseHP = 93 + floorDivide((vit + 22.41) * level, 3);
  const modifiedHP = baseHP * (1 + modifiers.percent / 100) + modifiers.flat;
  return Math.floor(modifiedHP);
}

// Calculate MaxMP
export function calculateMaxMP(
  level: number, 
  int: number, 
  personalStatType: PersonalStat | '',
  personalStatValue: number,
  modifiers: { flat: number; percent: number }
): number {
  // Formula: 100 + Level + floor(INT / 10) (+ TEC if personal stat)
  let baseMP = 100 + level + floorDivide(int, 10);
  
  if (personalStatType === 'TEC') {
    baseMP += personalStatValue;
  }
  
  const modifiedMP = baseMP * (1 + modifiers.percent / 100) + modifiers.flat;
  return Math.floor(modifiedMP);
}

// Calculate Attack MP Recovery
export function calculateAttackMPRecovery(maxMP: number, modifiers: number): number {
  // Formula: 10 + floor(MaxMP / 100)
  const baseAMPR = 10 + floorDivide(maxMP, 100);
  return baseAMPR + modifiers;
}

// Calculate Ailment Resistance
export function calculateAilmentResistance(mtl: number): number {
  // Formula: floor(MTL / 3.4)
  return floorDivide(mtl, 3.4);
}

// Calculate Critical Rate from CRT
export function calculateCriticalRateFromStat(crt: number, modifiers: { flat: number; percent: number }): number {
  // Formula: 25 + floor(CRT / 3.4)
  const baseRate = 25 + floorDivide(crt, 3.4);
  const modifiedRate = baseRate * (1 + modifiers.percent / 100) + modifiers.flat;
  return Math.floor(modifiedRate);
}

// Calculate base Critical Damage from STR and AGI
export function calculateBaseCriticalDamage(str: number, agi: number): number {
  // Formula:
  // If STR >= AGI: 150 + floor(STR / 5)
  // If AGI > STR: 150 + floor((STR + AGI) / 10)
  if (str >= agi) {
    return 150 + floorDivide(str, 5);
  } else {
    return 150 + floorDivide(str + agi, 10);
  }
}

// Calculate final Critical Damage with modifiers and soft cap
export function calculateCriticalDamage(
  baseCrtDmg: number,
  modifiers: { flat: number; percent: number }
): number {
  // Step 1: Apply percentage multiplier to base
  const afterPercent = baseCrtDmg * (1 + modifiers.percent / 100);
  
  // Step 2: Add flat bonus
  const beforeCap = afterPercent + modifiers.flat;
  
  // Step 3: Apply soft cap at 300 (amount above 300 is halved)
  if (beforeCap <= 300) {
    return Math.floor(beforeCap);
  }
  
  const excess = beforeCap - 300;
  return Math.floor(300 + excess / 2);
}

// Calculate Accuracy (HIT)
export function calculateAccuracy(level: number, dex: number, modifiers: { flat: number; percent: number }): number {
  // Formula: Level + DEX
  const baseAccuracy = level + dex;
  const modifiedAccuracy = baseAccuracy * (1 + modifiers.percent / 100) + modifiers.flat;
  return Math.floor(modifiedAccuracy);
}

// Calculate CSPD
export function calculateCSPD(level: number, agi: number, dex: number, modifiers: { flat: number; percent: number }): number {
  // Formula: Level + floor(1.16 * AGI + 2.94 * DEX)
  const baseCSPD = level + Math.floor(1.16 * agi + 2.94 * dex);
  const modifiedCSPD = baseCSPD * (1 + modifiers.percent / 100) + modifiers.flat;
  return Math.floor(modifiedCSPD);
}

// Calculate Motion Speed
export function calculateMotionSpeed(aspd: number): number {
  // Formula: floor((ASPD - 1000) / 180), max 50%
  // Only applies when ASPD > 1000
  if (aspd <= 1000) return 0;
  const motionSpeed = floorDivide(aspd - 1000, 180);
  return Math.min(motionSpeed, 50);
}

// Calculate Magic Stability
export function calculateMagicStability(stability: number): { min: number; max: number } {
  // Formula: floor((100 + Stability) / 2), capped at 90~100%
  const magicStab = Math.floor((100 + stability) / 2);
  
  // Magic stability is always clamped between 90-100%
  // Values above 100 or below 90 are normalized to this range
  const min = Math.max(90, Math.min(100, magicStab));
  const max = 100;
  
  return { min, max };
}
