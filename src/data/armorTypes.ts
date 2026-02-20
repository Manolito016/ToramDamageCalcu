import type { ArmorType, StatOption } from '../types';

export const armorTypes: ArmorType[] = [
  'Without Armor',
  'Normal Armor',
  'Light Armor',
  'Heavy Armor'
];

export const armorTypeOptions: StatOption[] = armorTypes.map(type => ({
  value: type,
  label: type
}));

// Armor type modifiers for DEF, MDEF, and FLEE calculations
export interface ArmorModifiers {
  defMultiplier: number;
  vitMultiplier: number;
  mdefMultiplier: number;
  intMultiplier: number;
  fleeLevelMultiplier: number;
  fleeAgiMultiplier: number;
  fleeFlat: number;
  aspdModifier: number; // Percentage modifier
}

export const armorTypeModifiers: Record<ArmorType, ArmorModifiers> = {
  'Without Armor': {
    defMultiplier: 0.4,
    vitMultiplier: 0.1,
    mdefMultiplier: 0.4,
    intMultiplier: 0.1,
    fleeLevelMultiplier: 1.5,
    fleeAgiMultiplier: 2,
    fleeFlat: 75,
    aspdModifier: 0
  },
  'Normal Armor': {
    defMultiplier: 1,
    vitMultiplier: 1,
    mdefMultiplier: 1,
    intMultiplier: 1,
    fleeLevelMultiplier: 1,
    fleeAgiMultiplier: 1,
    fleeFlat: 0,
    aspdModifier: 0
  },
  'Light Armor': {
    defMultiplier: 0.8,
    vitMultiplier: 0.25,
    mdefMultiplier: 0.8,
    intMultiplier: 0.25,
    fleeLevelMultiplier: 1.25,
    fleeAgiMultiplier: 1.75,
    fleeFlat: 30,
    aspdModifier: 50
  },
  'Heavy Armor': {
    defMultiplier: 1.2,
    vitMultiplier: 2,
    mdefMultiplier: 1.2,
    intMultiplier: 2,
    fleeLevelMultiplier: 0.5,
    fleeAgiMultiplier: 0.75,
    fleeFlat: -15,
    aspdModifier: -50
  }
};
