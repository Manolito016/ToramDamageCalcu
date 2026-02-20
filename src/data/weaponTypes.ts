import type { MainWeaponType, SubWeaponType, StatOption } from '../types';

export const mainWeaponTypes: MainWeaponType[] = [
  'Bare Hand',
  'One-Handed Sword',
  'Two-Handed Sword',
  'Dual Wield',
  'Bow',
  'Bowgun',
  'Staff',
  'Magic Device',
  'Knuckle',
  'Halberd',
  'Katana'
];

export const subWeaponTypes: SubWeaponType[] = [
  'None',
  'One-Handed Sword',
  'Dagger',
  'Shield',
  'Magic Device',
  'Knuckle',
  'Arrow'
];

export const mainWeaponTypeOptions: StatOption[] = mainWeaponTypes.map(type => ({
  value: type,
  label: type
}));

export const subWeaponTypeOptions: StatOption[] = subWeaponTypes.map(type => ({
  value: type,
  label: type
}));

// Default stability values for main weapon types (from PRP section 7)
export const defaultWeaponStability: Record<string, number> = {
  'Bowgun': 50,
  'Two-Handed Sword': 70,
  'One-Handed Sword': 80,
  'Katana': 70,
  'Halberd': 60,
  'Knuckle': 90,
  'Bare Hand': 50,
  'Dual Wield': 80,
  'Bow': 80,
  'Staff': 60,
  'Magic Device': 100,
  'Dagger': 90,
  'Shield': 0,
  'Arrow': 0,
  'None': 0
};

// Default stability values for sub weapons (sub weapons have different rules)
export const defaultSubWeaponStability: Record<string, number> = {
  'One-Handed Sword': 80,
  'Dagger': 0,
  'Shield': 0,
  'Magic Device': 0,
  'Knuckle': 0,
  'Arrow': 0,
  'None': 0
};

// Weapon type categories for skill restrictions
export const isOneHandedSword = (type: string) => type === 'One-Handed Sword';
export const isTwoHandedSword = (type: string) => type === 'Two-Handed Sword';
export const isSword = (type: string) => isOneHandedSword(type) || isTwoHandedSword(type);
export const isBow = (type: string) => type === 'Bow';
export const isBowgun = (type: string) => type === 'Bowgun';
export const isRanged = (type: string) => isBow(type) || isBowgun(type);
export const isStaff = (type: string) => type === 'Staff';
export const isMagicDevice = (type: string) => type === 'Magic Device';
export const isKnuckle = (type: string) => type === 'Knuckle';
export const isHalberd = (type: string) => type === 'Halberd';
export const isKatana = (type: string) => type === 'Katana';
export const isBareHand = (type: string) => type === 'Bare Hand';
export const isDualWield = (type: string) => type === 'Dual Wield';
