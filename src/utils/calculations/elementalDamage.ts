import type { Element } from '../../data/elements';
import { elementAdvantageMatrix } from '../../data/elements';
import { floorDivide } from '../math';

// Skill element types
export type SkillElement = Element | 'User'; // 'User' means follows user's element

export interface ElementalDamageResult {
  physicalDamage: number;
  magicDamage: number;
  element: Element;
  advantageMultiplier: number;
}

/**
 * Calculate elemental damage multiplier based on attacker vs defender elements
 * @param attackerElement The attacking element
 * @param defenderElement The defending element
 * @returns Damage multiplier (1.0 = normal, >1.0 = advantage, <1.0 = disadvantage)
 */
export function getElementAdvantageMultiplier(attackerElement: Element, defenderElement: Element): number {
  return elementAdvantageMatrix[attackerElement][defenderElement];
}

/**
 * Calculate elemental damage bonus
 * +25% damage against weak elements
 * +⌊INT/10⌋% for magic damage
 */
export function calculateElementalDamageBonus(
  baseDamage: number,
  isMagic: boolean,
  int: number,
  advantageMultiplier: number
): number {
  let bonusDamage = 0;
  
  // Apply element advantage/disadvantage
  bonusDamage += baseDamage * (advantageMultiplier - 1);
  
  // Apply INT bonus for magic damage
  if (isMagic) {
    const intBonusPercent = floorDivide(int, 10);
    bonusDamage += baseDamage * (intBonusPercent / 100);
  }
  
  return Math.floor(bonusDamage);
}

/**
 * Calculate final elemental damage
 */
export function calculateElementalDamage(
  baseDamage: number,
  attackerElement: Element,
  defenderElement: Element,
  isMagic: boolean,
  int: number
): ElementalDamageResult {
  const advantageMultiplier = getElementAdvantageMultiplier(attackerElement, defenderElement);
  const bonusDamage = calculateElementalDamageBonus(baseDamage, isMagic, int, advantageMultiplier);
  
  return {
    physicalDamage: isMagic ? 0 : baseDamage + bonusDamage,
    magicDamage: isMagic ? baseDamage + bonusDamage : 0,
    element: attackerElement,
    advantageMultiplier
  };
}

/**
 * Get effective element for a skill
 * @param skillElement The skill's element (could be 'User')
 * @param userElement The user's current element
 * @returns The actual element used
 */
export function getEffectiveSkillElement(skillElement: SkillElement, userElement: Element): Element {
  return skillElement === 'User' ? userElement : skillElement;
}

/**
 * Calculate total elemental damage for multiple hits
 */
export function calculateTotalElementalDamage(
  baseDamages: number[],
  attackerElement: Element,
  defenderElement: Element,
  isMagic: boolean,
  int: number
): ElementalDamageResult {
  let totalPhysical = 0;
  let totalMagic = 0;
  
  for (const baseDamage of baseDamages) {
    const result = calculateElementalDamage(baseDamage, attackerElement, defenderElement, isMagic, int);
    totalPhysical += result.physicalDamage;
    totalMagic += result.magicDamage;
  }
  
  const advantageMultiplier = getElementAdvantageMultiplier(attackerElement, defenderElement);
  
  return {
    physicalDamage: totalPhysical,
    magicDamage: totalMagic,
    element: attackerElement,
    advantageMultiplier
  };
}