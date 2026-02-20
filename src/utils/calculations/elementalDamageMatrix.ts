import type { Element, MainWeaponType } from '../../types';
import { elements } from '../../data/elements';
import { floorDivide } from '../math';

// Weapon types that qualify for INT bonus
const MAGIC_WEAPON_TYPES: MainWeaponType[] = ['Staff', 'Magic Device'];

export interface ElementalDamageRow {
  targetElement: Element;
  matchBonus: number; // 25% if weapon element beats target
  intBonus: number;   // ⌊INT/10⌋ if Staff/Magic Device
  dteBonus: number;   // "Damage To [Element] %" stat
  totalPercent: number; // Total bonus percentage
  multiplier: number;   // Damage multiplier (1.0 + totalPercent/100)
  isOptimal: boolean;   // Whether this is the best target
  isAdvantage: boolean; // Whether weapon has elemental advantage
  isDisadvantage: boolean; // Whether weapon has elemental disadvantage
}

export interface ElementalDamageMatrix {
  int: number;
  weaponType: MainWeaponType;
  weaponElement: Element;
  matrix: ElementalDamageRow[];
  optimalTarget: Element;
}

/**
 * Check if weapon type qualifies for INT bonus
 */
export function isMagicWeapon(weaponType: MainWeaponType): boolean {
  return MAGIC_WEAPON_TYPES.includes(weaponType);
}

/**
 * Get elemental advantage relationship
 * Returns true if attackerElement has advantage over defenderElement
 */
export function hasElementalAdvantage(attackerElement: Element, defenderElement: Element): boolean {
  // Neutral has no advantages/disadvantages
  if (attackerElement === 'Neutral' || defenderElement === 'Neutral') {
    return false;
  }

  // Elemental cycle: Fire > Earth > Wind > Water > Fire
  const cycleAdvantages: Record<Element, Element> = {
    'Fire': 'Earth',
    'Earth': 'Wind', 
    'Wind': 'Water',
    'Water': 'Fire',
    'Light': 'Dark',
    'Dark': 'Light',
    'Neutral': 'Neutral' // Neutral has no advantages
  };

  return cycleAdvantages[attackerElement] === defenderElement;
}

/**
 * Get elemental disadvantage relationship
 * Returns true if attackerElement is disadvantaged against defenderElement
 */
export function hasElementalDisadvantage(attackerElement: Element, defenderElement: Element): boolean {
  // Neutral has no advantages/disadvantages
  if (attackerElement === 'Neutral' || defenderElement === 'Neutral') {
    return false;
  }

  // Reverse of advantage relationships
  const cycleDisadvantages: Record<Element, Element> = {
    'Fire': 'Water',
    'Water': 'Wind',
    'Wind': 'Earth',
    'Earth': 'Fire',
    'Light': 'Dark',
    'Dark': 'Light',
    'Neutral': 'Neutral'
  };

  return cycleDisadvantages[attackerElement] === defenderElement;
}

/**
 * Calculate elemental damage matrix
 * @param int Character's INT value (0-510)
 * @param weaponType Main weapon type
 * @param weaponElement Weapon's element
 * @param dteStats Object containing "% Stronger Against [Element]" stats for all elements
 * @returns Elemental damage matrix with calculations for all target elements
 */
export function calculateElementalDamageMatrix(
  int: number,
  weaponType: MainWeaponType,
  weaponElement: Element,
  dteStats: Record<Element, number>
): ElementalDamageMatrix {
  // Calculate INT bonus (only for Staff/Magic Device)
  const intBonus = isMagicWeapon(weaponType) ? floorDivide(int, 10) : 0;
  
  const matrix: ElementalDamageRow[] = [];
  
  // Calculate damage for each target element
  for (const targetElement of elements) {
    // Match bonus: 25% if weapon element beats target element
    const matchBonus = hasElementalAdvantage(weaponElement, targetElement) ? 25 : 0;
    
    // DTE bonus from user stats
    const dteBonus = dteStats[targetElement] || 0;
    
    // Total bonus percentage
    const totalPercent = matchBonus + intBonus + dteBonus;
    
    // Damage multiplier
    const multiplier = 1 + (totalPercent / 100);
    
    matrix.push({
      targetElement,
      matchBonus,
      intBonus,
      dteBonus,
      totalPercent,
      multiplier,
      isAdvantage: hasElementalAdvantage(weaponElement, targetElement),
      isDisadvantage: hasElementalDisadvantage(weaponElement, targetElement),
      isOptimal: false // Will be set after finding maximum
    });
  }
  
  // Find optimal target (highest total percent)
  const optimalRow = matrix.reduce((max, current) => 
    current.totalPercent > max.totalPercent ? current : max
  );
  
  // Mark optimal target
  const matrixWithOptimal = matrix.map(row => ({
    ...row,
    isOptimal: row.targetElement === optimalRow.targetElement
  }));
  
  return {
    int,
    weaponType,
    weaponElement,
    matrix: matrixWithOptimal,
    optimalTarget: optimalRow.targetElement
  };
}

/**
 * Get elemental icon for display
 */
export function getElementIcon(element: Element): string {
  const icons: Record<Element, string> = {
    'Neutral': '⚪',
    'Fire': '🔥',
    'Water': '💧',
    'Wind': '💨',
    'Earth': '🌍',
    'Light': '☀️',
    'Dark': '🌙'
  };
  return icons[element];
}

/**
 * Format percentage for display
 */
export function formatElementalPercent(value: number): string {
  return value > 0 ? `+${value}%` : `${value}%`;
}

/**
 * Format multiplier for display
 */
export function formatMultiplier(value: number): string {
  return `×${value.toFixed(2)}`;
}