import type { RefinementLevel, RefinementBonus } from '../types';

export const refinementLevels: RefinementLevel[] = [
  '+0', '+1', '+2', '+3', '+4', '+5', '+6', '+7', '+8', '+9', '+E', '+D', '+C', '+B', '+A', '+S'
];

export const refinementBonuses: Record<RefinementLevel, RefinementBonus> = {
  '+0': { percent: 0, flat: 0 },
  '+1': { percent: 0.01, flat: 1 },
  '+2': { percent: 0.04, flat: 2 },
  '+3': { percent: 0.09, flat: 3 },
  '+4': { percent: 0.16, flat: 4 },
  '+5': { percent: 0.25, flat: 5 },
  '+6': { percent: 0.36, flat: 6 },
  '+7': { percent: 0.49, flat: 7 },
  '+8': { percent: 0.64, flat: 8 },
  '+9': { percent: 0.81, flat: 9 },
  '+E': { percent: 1.00, flat: 10 },
  '+D': { percent: 1.21, flat: 11 },
  '+C': { percent: 1.44, flat: 12 },
  '+B': { percent: 1.69, flat: 13 },
  '+A': { percent: 1.96, flat: 14 },
  '+S': { percent: 2.25, flat: 15 }
};

// Calculate refinement bonus for a weapon
export function calculateWeaponRefinement(baseAtk: number, refinement: RefinementLevel): number {
  const bonus = refinementBonuses[refinement];
  return Math.floor(bonus.percent * baseAtk) + bonus.flat;
}

// Calculate refinement damage reduction for armor/shield
export function calculateArmorRefinementReduction(refinement: RefinementLevel): number {
  const bonus = refinementBonuses[refinement];
  // Each refinement level provides flat damage reduction
  return bonus.flat;
}
