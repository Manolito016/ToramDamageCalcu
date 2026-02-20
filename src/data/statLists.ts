import type { StatOption } from '../types';

// Full Stat List - Used by Main Weapon, Armor, Crysta slots, and Equipment Bonus Rows
export const fullStatList: string[] = [
  'STR', 'STR %', 'INT', 'INT %', 'VIT', 'VIT %', 'AGI', 'AGI %', 'DEX', 'DEX %',
  'Natural HP Regen', 'Natural HP Regen %', 'Natural MP Regen', 'Natural MP Regen %',
  'MaxHP', 'MaxHP %', 'MaxMP', 'ATK', 'ATK %', 'MATK', 'MATK %',
  'Stability %', 'Physical Pierce %', 'Magic Pierce %',
  'DEF', 'DEF %', 'MDEF', 'MDEF %',
  'Physical Resistance %', 'Magic Resistance %',
  'Accuracy', 'Accuracy %', 'Dodge', 'Dodge %',
  'ASPD', 'ASPD %', 'Guard Power %', 'Guard Recharge %', 'Evasion Recharge %',
  'Aggro %', 'Attack MP Recovery',
  'Short Range Damage %', 'Long Range Damage %',
  'Weapon ATK', 'Weapon ATK %',
  'Neutral Resistance %', 'Damage To Neutral %',
  'Physical Barrier', 'Reflect %', 'Fractional Barrier %', 'Magic Barrier',
  'Additional Melee %', 'Additional Magic %',
  'Anticipate %', 'Guard Break %', 'Barrier Cooldown %',
  'CSPD', 'CSPD %',
  'Critical Rate', 'Critical Rate %', 'Critical Damage', 'Critical Damage %',
  'Motion Speed %',
  'Damage To Fire %', 'Damage To Water %', 'Damage To Wind %',
  'Damage To Earth %', 'Damage To Light %', 'Damage To Dark %',
  'Fire Resistance %', 'Water Resistance %', 'Wind Resistance %', 'Earth Resistance %',
  'Light Resistance %', 'Dark Resistance %'
];

// Avatar Stat List (slightly different - has some duplicates in PRP)
export const avatarStatList: string[] = [
  'STR', 'STR %', 'INT', 'INT %', 'VIT', 'VIT %', 'AGI', 'AGI %', 'DEX', 'DEX %',
  'Natural HP Regen', 'Natural HP Regen %', 'Natural MP Regen', 'Natural MP Regen %',
  'MaxHP', 'MaxHP %', 'MaxMP', 'ATK', 'ATK %', 'MATK', 'MATK %',
  'Stability %', 'Physical Pierce %', 'Magic Pierce %',
  'DEF', 'DEF %', 'MDEF', 'MDEF %',
  'Physical Resistance %', 'Magic Resistance %',
  'Accuracy', 'Accuracy %', 'Dodge', 'Dodge %',
  'ASPD', 'ASPD %', 'Guard Power %', 'Guard Recharge %', 'Evasion Recharge %',
  'Aggro %', 'Attack MP Recovery',
  'Short Range Damage %', 'Long Range Damage %',
  'Weapon ATK', 'Weapon ATK %',
  'Neutral Resistance %', 'Damage To Neutral %',
  'Physical Barrier', 'Reflect %', 'Fractional Barrier %', 'Magic Barrier',
  'Additional Melee %', 'Additional Magic %',
  'Anticipate %', 'Guard Break %', 'Barrier Cooldown %',
  'CSPD', 'CSPD %',
  'Critical Rate', 'Critical Rate %', 'Critical Damage', 'Critical Damage %',
  'Motion Speed %',
  'Damage To Fire %', 'Damage To Water %', 'Damage To Wind %',
  'Damage To Earth %', 'Damage To Light %', 'Damage To Dark %',
  'Fire Resistance %', 'Water Resistance %', 'Wind Resistance %', 'Earth Resistance %',
  'Light Resistance %', 'Dark Resistance %'
];

// Food Buff List
export const foodBuffList: string[] = [
  'STR', 'INT', 'VIT', 'AGI', 'DEX',
  'Accuracy', 'Dodge', 'DEF', 'MDEF', 'MATK', 'ATK', 'Weapon ATK',
  'Physical Resistance %', 'Magic Resistance %',
  'Physical Pierce %', 'Magic Pierce %',
  'Damage To Fire %', 'Damage To Earth %', 'Damage To Water %',
  'Damage To Light %', 'Damage To Wind %', 'Damage To Dark %',
  'Damage To Neutral %',
  'EXP Gain %', 'Drop Rate %',
  'Water Resistance %', 'Wind Resistance %', 'Earth Resistance %',
  'Fire Resistance %', 'Light Resistance %', 'Dark Resistance %',
  'Physical Barrier', 'Magic Barrier', 'Fractional Barrier %',
  'Motion Speed %',
  'Critical Rate', 'Attack MP Recovery', 'Aggro %', 'MaxMP', 'MaxHP'
];

// Base stats for character
export const baseStatList = ['STR', 'INT', 'VIT', 'AGI', 'DEX'];

// Personal stat options
export const personalStatOptions: StatOption[] = [
  { value: '', label: '-' },
  { value: 'CRT', label: 'CRT' },
  { value: 'LUK', label: 'LUK' },
  { value: 'MTL', label: 'MTL' },
  { value: 'TEC', label: 'TEC' }
];

// Create options arrays
export const fullStatOptions: StatOption[] = fullStatList.map(stat => ({
  value: stat,
  label: stat
}));

export const avatarStatOptions: StatOption[] = avatarStatList.map(stat => ({
  value: stat,
  label: stat
}));

export const foodBuffOptions: StatOption[] = foodBuffList.map(stat => ({
  value: stat,
  label: stat
}));

// Helper to check if a stat is a percentage stat
export function isPercentageStat(stat: string): boolean {
  return stat.includes('%');
}

// Helper to get the base stat name (removing % suffix)
export function getBaseStatName(stat: string): string {
  return stat.replace(' %', '').trim();
}