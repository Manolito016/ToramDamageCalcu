import type { 
  CalculatorState, 
  CalculatedStats, 
  PassiveSkills,
  SubWeaponType
} from '../../types';
import {
  calculateMaxHP,
  calculateMaxMP,
  calculateAttackMPRecovery,
  calculateAilmentResistance,
  calculateCriticalRateFromStat,
  calculateBaseCriticalDamage,
  calculateCriticalDamage,
  calculateAccuracy,
  calculateCSPD,
  calculateMotionSpeed,
  calculateMagicStability
} from './basicStats';
import { 
  calculateWeaponDependentStats,
  applyWeaponStatModifiers
} from './weaponDependentStats';
import { 
  calculateDEF, 
  calculateMDEF, 
  calculateFLEE,
  calculateWeaponATK,
  calculateRefinementReduction,
  extractCrystaStats,
  extractEquipmentStats
} from './equipmentStats';
import {
  calculatePhysicalResistance,
  calculateMagicResistance,
  calculateAnticipate,
  calculateGuardBreak,
  calculateAggro,
  calculateRangeDamage
} from './specialStats';
import { defaultWeaponStability } from '../../data/weaponTypes';
import { elementAdvantageMatrix } from '../../data/elements';
import type { Element } from '../../data/elements';
import { getCrystaById, type EquipmentContext } from '../../data/crystaDatabase';

// Aggregate all stat modifiers from equipment, avatar, food, skills, etc.
export interface StatSource {
  flat: number;
  percent: number;
  sources: { source: string; value: number }[];
}

export function aggregateAllModifiersWithSources(state: CalculatorState): Record<string, StatSource> {
  const modifiers: Record<string, StatSource> = {};
  
  const addModifier = (stat: string, value: number, source: string) => {
    if (!stat || value === 0) return;

    if (!modifiers[stat]) {
      modifiers[stat] = { flat: 0, percent: 0, sources: [] };
    }

    if (stat.includes('%')) {
      modifiers[stat].percent += value;
      modifiers[stat].sources.push({ source, value });
    } else {
      modifiers[stat].flat += value;
      modifiers[stat].sources.push({ source, value });
    }
  };
  
  // Build equipment context for conditional stat application
  const mainWeaponContext: EquipmentContext = {
    equipmentType: 'main_weapon',
    mainWeaponType: state.mainWeapon.type,
    subWeaponType: state.subWeapon.type,
    armorType: state.armor.type,
  };
  
  const subWeaponContext: EquipmentContext = {
    equipmentType: 'sub_weapon',
    mainWeaponType: state.mainWeapon.type,
    subWeaponType: state.subWeapon.type,
    armorType: state.armor.type,
  };
  
  const armorContext: EquipmentContext = {
    equipmentType: 'armor',
    mainWeaponType: state.mainWeapon.type,
    subWeaponType: state.subWeapon.type,
    armorType: state.armor.type,
  };
  
  const additionalContext: EquipmentContext = {
    equipmentType: 'additional',
    mainWeaponType: state.mainWeapon.type,
    subWeaponType: state.subWeapon.type,
    armorType: state.armor.type,
  };
  
  const specialContext: EquipmentContext = {
    equipmentType: 'special',
    mainWeaponType: state.mainWeapon.type,
    subWeaponType: state.subWeapon.type,
    armorType: state.armor.type,
  };
  
  // Extract from main weapon crysta (with conditional filtering)
  const mainWeaponCrysta1Data = state.mainWeapon.crysta1.crystaId ? getCrystaById(state.mainWeapon.crysta1.crystaId) : null;
  const mainWeaponCrysta2Data = state.mainWeapon.crysta2.crystaId ? getCrystaById(state.mainWeapon.crysta2.crystaId) : null;
  const mainWeaponCrysta = extractCrystaStats(
    state.mainWeapon.crysta1, 
    state.mainWeapon.crysta2,
    mainWeaponContext,
    mainWeaponCrysta1Data,
    mainWeaponCrysta2Data
  );
  Object.entries(mainWeaponCrysta).forEach(([stat, value]) => addModifier(stat, value, 'Main Weapon Crystal'));  
  
  // Extract from main weapon stats
  const mainWeaponStats = extractEquipmentStats(state.mainWeapon.stats);
  Object.entries(mainWeaponStats).forEach(([stat, value]) => addModifier(stat, value, 'Main Weapon Bonus'));  
  
  // Extract from sub weapon crysta (with conditional filtering)
  const subWeaponCrysta1Data = state.subWeapon.crysta1.crystaId ? getCrystaById(state.subWeapon.crysta1.crystaId) : null;
  const subWeaponCrysta2Data = state.subWeapon.crysta2.crystaId ? getCrystaById(state.subWeapon.crysta2.crystaId) : null;
  const subWeaponCrysta = extractCrystaStats(
    state.subWeapon.crysta1, 
    state.subWeapon.crysta2,
    subWeaponContext,
    subWeaponCrysta1Data,
    subWeaponCrysta2Data
  );
  Object.entries(subWeaponCrysta).forEach(([stat, value]) => addModifier(stat, value, 'Sub Weapon Crystal'));  
  
  // Extract from sub weapon stats
  const subWeaponStats = extractEquipmentStats(state.subWeapon.stats);
  Object.entries(subWeaponStats).forEach(([stat, value]) => addModifier(stat, value, 'Sub Weapon Bonus'));  
  
  // Extract from armor crysta (with conditional filtering)
  const armorCrysta1Data = state.armor.crysta1.crystaId ? getCrystaById(state.armor.crysta1.crystaId) : null;
  const armorCrysta2Data = state.armor.crysta2.crystaId ? getCrystaById(state.armor.crysta2.crystaId) : null;
  const armorCrysta = extractCrystaStats(
    state.armor.crysta1, 
    state.armor.crysta2,
    armorContext,
    armorCrysta1Data,
    armorCrysta2Data
  );
  Object.entries(armorCrysta).forEach(([stat, value]) => addModifier(stat, value, 'Armor Crystal'));  
  
  // Extract from armor stats
  const armorStats = extractEquipmentStats(state.armor.stats);
  Object.entries(armorStats).forEach(([stat, value]) => addModifier(stat, value, 'Armor Bonus'));  
  
  // Extract from additional gear crysta (with conditional filtering)
  const additionalCrysta1Data = state.additionalGear.crysta1.crystaId ? getCrystaById(state.additionalGear.crysta1.crystaId) : null;
  const additionalCrysta2Data = state.additionalGear.crysta2.crystaId ? getCrystaById(state.additionalGear.crysta2.crystaId) : null;
  const additionalCrysta = extractCrystaStats(
    state.additionalGear.crysta1, 
    state.additionalGear.crysta2,
    additionalContext,
    additionalCrysta1Data,
    additionalCrysta2Data
  );
  Object.entries(additionalCrysta).forEach(([stat, value]) => addModifier(stat, value, 'Additional Gear Crystal'));  
  
  // Extract from additional gear stats
  const additionalGearStats = extractEquipmentStats(state.additionalGear.stats);
  Object.entries(additionalGearStats).forEach(([stat, value]) => addModifier(stat, value, 'Additional Gear Bonus'));  
  
  // Extract from special gear crysta (with conditional filtering)
  const specialCrysta1Data = state.specialGear.crysta1.crystaId ? getCrystaById(state.specialGear.crysta1.crystaId) : null;
  const specialCrysta2Data = state.specialGear.crysta2.crystaId ? getCrystaById(state.specialGear.crysta2.crystaId) : null;
  const specialCrysta = extractCrystaStats(
    state.specialGear.crysta1, 
    state.specialGear.crysta2,
    specialContext,
    specialCrysta1Data,
    specialCrysta2Data
  );
  Object.entries(specialCrysta).forEach(([stat, value]) => addModifier(stat, value, 'Special Gear Crystal'));  
  
  // Extract from special gear stats
  const specialGearStats = extractEquipmentStats(state.specialGear.stats);
  Object.entries(specialGearStats).forEach(([stat, value]) => addModifier(stat, value, 'Special Gear Bonus'));  
  
  // Extract from avatar stats
  [...state.avatar.accessory, ...state.avatar.top, ...state.avatar.bottom].forEach(slot => {
    if (slot.stat) addModifier(slot.stat, slot.value, 'Avatar');
  });
  
  // Extract from food/potion
  [...state.foodPotion.food, ...state.foodPotion.potion1, ...state.foodPotion.potion2].forEach(slot => {
    if (slot.stat) addModifier(slot.stat, slot.value, 'Food/Potion');
  });
  
  // Extract from equipment bonus rows
  state.equipmentBonuses.forEach(row => {
    if (row.stat) addModifier(row.stat, row.value, 'Equipment Bonus');
  });
  
  // Apply skill modifiers
  applySkillModifiers(state.skills, state.character.level, state.mainWeapon.type, state.subWeapon.type, state.armor.type, (stat, value) => addModifier(stat, value, 'Skill'));
  
  return modifiers;
}

// Legacy function for backward compatibility
function aggregateAllModifiers(state: CalculatorState): Record<string, { flat: number; percent: number }> {
  const modifiers = aggregateAllModifiersWithSources(state);
  const result: Record<string, { flat: number; percent: number }> = {};
  
  for (const [stat, sourceData] of Object.entries(modifiers)) {
    result[stat] = {
      flat: sourceData.flat,
      percent: sourceData.percent
    };
  }
  
  return result;
}

export { aggregateAllModifiers };

// Format stat sources for tooltip display
export function formatStatSources(statName: string, sources: { source: string; value: number }[]): string {
  if (!sources || sources.length === 0) {
    return 'No sources';
  }
  
  const positiveSources = sources.filter(s => s.value > 0);
  const negativeSources = sources.filter(s => s.value < 0);
  
  let tooltipText = `Sources for ${statName}:\n`;
  
  if (positiveSources.length > 0) {
    tooltipText += '\nPositive contributions:\n';
    positiveSources.forEach(source => {
      tooltipText += `• ${source.source}: +${source.value}\n`;
    });
  }
  
  if (negativeSources.length > 0) {
    tooltipText += '\nNegative contributions:\n';
    negativeSources.forEach(source => {
      tooltipText += `• ${source.source}: ${source.value}\n`;
    });
  }
  
  return tooltipText.trim();
}

// Apply skill-based modifiers
function applySkillModifiers(
  skills: PassiveSkills,
  characterLevel: number,
  mainWeaponType: string,
  subWeaponType: string,
  armorType: string,
  addModifier: (stat: string, value: number) => void
) {
  // Weapon Mastery skills
  if (skills.swordMastery.level > 0 && (mainWeaponType === 'One-Handed Sword' || mainWeaponType === 'Two-Handed Sword')) {
    addModifier('ATK %', skills.swordMastery.level * 0.3);
    addModifier('Weapon ATK %', skills.swordMastery.level * 3);
  }
  
  if (skills.shotMastery.level > 0 && (mainWeaponType === 'Bow' || mainWeaponType === 'Bowgun')) {
    addModifier('ATK %', skills.shotMastery.level * 0.3);
    addModifier('Weapon ATK %', skills.shotMastery.level * 3);
  }
  
  if (skills.magicMastery.level > 0 && (mainWeaponType === 'Staff' || mainWeaponType === 'Magic Device')) {
    addModifier('MATK %', skills.magicMastery.level * 0.3);
    addModifier('Weapon ATK %', skills.magicMastery.level * 3);
  }
  
  if (skills.martialMastery.level > 0 && mainWeaponType === 'Knuckle') {
    addModifier('ATK %', skills.martialMastery.level * 0.3);
    addModifier('Weapon ATK %', skills.martialMastery.level * 3);
  }
  
  if (skills.halberdMastery.level > 0 && mainWeaponType === 'Halberd') {
    addModifier('ATK %', skills.halberdMastery.level * 0.3);
    addModifier('Weapon ATK %', skills.halberdMastery.level * 3);
  }
  
  if (skills.unarmedMastery.level > 0 && mainWeaponType === 'Bare Hand') {
    addModifier('Weapon ATK', skills.unarmedMastery.level * 20);
  }
  
  if (skills.criticalSpear.level > 0 && mainWeaponType === 'Halberd') {
    addModifier('Critical Rate %', skills.criticalSpear.level * 0.5);
    addModifier('Critical Rate', skills.criticalSpear.level * 0.5);
  }
  
  // Katana - Bushido: +1% ATK per level
  if (skills.bushido.level > 0 && mainWeaponType === 'Katana') {
    addModifier('ATK %', skills.bushido.level);
  }
  
  // Dual Wield Skills
  if (skills.dualSwordMastery.level > 0 && mainWeaponType === 'Dual Wield') {
    addModifier('ATK %', skills.dualSwordMastery.level * 0.5);
    addModifier('Weapon ATK %', skills.dualSwordMastery.level * 2);
  }
  
  if (skills.dualSwordControl.level > 0 && mainWeaponType === 'Dual Wield') {
    addModifier('Stability %', skills.dualSwordControl.level * 2);
  }
  
  if (skills.godspeed.level > 0 && mainWeaponType === 'Dual Wield') {
    addModifier('ASPD %', skills.godspeed.level * 2);
    addModifier('ASPD', skills.godspeed.level * 10);
  }
  
  // Two-Handed - No Sub weapon bonus
  if (skills.twoHanded.level > 0 && subWeaponType === 'None') {
    addModifier('ATK %', skills.twoHanded.level * 2);
    addModifier('Stability %', skills.twoHanded.level);
  }
  
  // Knuckle Skills
  if (skills.aggravate.level > 0 && mainWeaponType === 'Knuckle') {
    addModifier('Critical Damage %', skills.aggravate.level * 2);
  }
  
  if (skills.strongChaseAttack.level > 0 && mainWeaponType === 'Knuckle') {
    addModifier('Additional Melee %', skills.strongChaseAttack.level * 2);
  }
  
  if (skills.martialDiscipline.level > 0 && mainWeaponType === 'Knuckle') {
    addModifier('Accuracy', skills.martialDiscipline.level * 2);
    addModifier('ATK', skills.martialDiscipline.level * 3);
  }
  
  // Magic Warrior Skills
  if (skills.magicWarriorMastery.level > 0) {
    // Adds MATK based on ATK (simplified: +2% MATK per level)
    addModifier('MATK %', skills.magicWarriorMastery.level * 2);
  }
  
  if (skills.conversion.level > 0) {
    // Converts some stats (simplified: +1% all resistances per level)
    addModifier('Physical Resistance %', skills.conversion.level);
    addModifier('Magic Resistance %', skills.conversion.level);
  }
  
  // Magic - Spell Burst
  if (skills.spellBurst.level > 0) {
    addModifier('Magic Pierce %', skills.spellBurst.level * 2);
    addModifier('Additional Magic %', skills.spellBurst.level);
  }
  
  // Bare Hand / EX Skills
  if (skills.ultimaQiCharge.level > 0 && mainWeaponType === 'Bare Hand') {
    addModifier('Weapon ATK', skills.ultimaQiCharge.level * 10);
  }
  
  if (skills.hiddenTalent.level > 0 && mainWeaponType === 'Bare Hand') {
    addModifier('ATK %', skills.hiddenTalent.level);
    addModifier('MATK %', skills.hiddenTalent.level);
  }
  
  // Shield - Aftershield
  if (skills.aftershield.level > 0 && subWeaponType === 'Shield') {
    addModifier('Guard Power %', skills.aftershield.level * 3);
    addModifier('Guard Recharge %', skills.aftershield.level * 2);
  }
  
  // Samurai Archery - Bow/Bowgun
  if (skills.samuraiArchery.level > 0 && (mainWeaponType === 'Bow' || mainWeaponType === 'Bowgun')) {
    addModifier('Critical Rate', skills.samuraiArchery.level * 0.5);
    addModifier('Accuracy', skills.samuraiArchery.level);
  }
  
  // Hunter Bowgun - Bowgun specific
  if (skills.hunterBowgun.level > 0 && mainWeaponType === 'Bowgun') {
    addModifier('Physical Pierce %', skills.hunterBowgun.level * 2);
  }
  
  // Magic Skin
  if (skills.magicSkin.level > 0) {
    addModifier('MDEF %', skills.magicSkin.level * 2);
  }
  
  // Battle Skills
  if (skills.hpBoost.level > 0) {
    addModifier('MaxHP %', skills.hpBoost.level * 2);
    addModifier('MaxHP', skills.hpBoost.level * 100);
  }
  
  if (skills.mpBoost.level > 0) {
    addModifier('MaxMP', skills.mpBoost.level * 30);
  }
  
  if (skills.attackUp.level > 0) {
    addModifier('ATK', skills.attackUp.level * 5); // Simplified: 50 at Lv200
  }
  
  if (skills.intimidatingPower.level > 0) {
    // (playerLVL/40)*SkillLVL ATK
    const atkBonus = Math.floor((characterLevel / 40) * skills.intimidatingPower.level);
    addModifier('ATK', atkBonus);
  }
  
  if (skills.magicUp.level > 0) {
    addModifier('MATK', skills.magicUp.level * 5); // Simplified: 50 at Lv200
  }
  
  if (skills.defenseUp.level > 0) {
    addModifier('DEF', skills.defenseUp.level * 5);
    addModifier('MDEF', skills.defenseUp.level * 5);
  }
  
  if (skills.accuracyUp.level > 0) {
    addModifier('Accuracy', skills.accuracyUp.level);
  }
  
  if (skills.criticalUp.level > 0) {
    addModifier('Critical Rate', skills.criticalUp.level * 0.5);
    addModifier('Critical Damage %', skills.criticalUp.level * 0.5);
  }
  
  if (skills.dodgeUp.level > 0) {
    addModifier('Dodge', skills.dodgeUp.level);
  }
  
  if (skills.quickSlash.level > 0 && (mainWeaponType === 'One-Handed Sword' || mainWeaponType === 'Two-Handed Sword')) {
    addModifier('ASPD %', skills.quickSlash.level);
    addModifier('ASPD', skills.quickSlash.level * 10);
  }
  
  if (skills.castMastery.level > 0) {
    addModifier('CSPD %', skills.castMastery.level * 1.5);
    addModifier('CSPD', skills.castMastery.level * 10);
    addModifier('ATK %', skills.castMastery.level * -2.5);
  }
  
  // Armor Mastery
  if (skills.shieldMastery.level > 0 && subWeaponType === 'Shield') {
    addModifier('ASPD %', skills.shieldMastery.level * 5);
  }
  
  if (skills.forceShield.level > 0 && subWeaponType === 'Shield') {
    addModifier('Guard Power %', skills.forceShield.level * 5);
  }
  
  if (skills.advancedGuard.level > 0 && (subWeaponType === 'Shield' || armorType === 'Heavy Armor')) {
    addModifier('Guard Recharge %', skills.advancedGuard.level * 5);
  }
  
  if (skills.heavyArmorMastery.level > 0 && armorType === 'Heavy Armor') {
    addModifier('DEF %', skills.heavyArmorMastery.level * 2);
    addModifier('MDEF %', skills.heavyArmorMastery.level * 2);
  }
  
  if (skills.lightArmorMastery.level > 0 && armorType === 'Light Armor') {
    addModifier('Dodge %', skills.lightArmorMastery.level * 5);
  }
  
  if (skills.advancedEvasion.level > 0 && armorType === 'Light Armor') {
    addModifier('Evasion Recharge %', skills.advancedEvasion.level * 5);
  }
  
  if (skills.magicalShield.level > 0) {
    addModifier('MDEF %', skills.magicalShield.level * 3);
  }
  
  // Camouflage Skill - Bow/Bowgun specific
  if (skills.camouflage.level > 0 && (mainWeaponType === 'Bow' || mainWeaponType === 'Bowgun')) {
    
    if (skills.camouflage.active) {
      // ===== ACTIVE EFFECTS (When Cast) - OVERRIDE passive values =====
      // Lasts 180 seconds or until targeted by monster
      
      // Critical Rate: 4 × Skill Level (replaces Bowgun passive entirely)
      // Applied to ALL weapons when active
      const activeCrit = 4 * skills.camouflage.level;
      addModifier('Critical Rate', activeCrit);
      
      // Aggro Reduction: (20 + 4 × Skill Level)% (replaces Bow passive entirely)
      // Applied to ALL weapons when active
      const activeAggroReduction = 20 + 4 * skills.camouflage.level;
      addModifier('Aggro %', -activeAggroReduction);
      
      // ATK: ⌊(Player Level / 2) × (Skill Level / 10)⌋
      let atkBoost = Math.floor((characterLevel / 2) * (skills.camouflage.level / 10));
      
      // Bow/Bowgun Bonus: Double the ATK calculation
      if (mainWeaponType === 'Bow' || mainWeaponType === 'Bowgun') {
        atkBoost *= 2;
      }
      
      addModifier('ATK', atkBoost);
      
    } else {
      // ===== PASSIVE EFFECTS (Always Active) - Only when NOT cast =====
      
      if (mainWeaponType === 'Bowgun') {
        // Bowgun passive: Critical Rate = 2 × Skill Level
        // At Lv10: +20 Critical Rate (permanent)
        const passiveCrit = 2 * skills.camouflage.level;
        addModifier('Critical Rate', passiveCrit);
      }
      
      if (mainWeaponType === 'Bow') {
        // Bow passive: Aggro Reduction from MP = (10 + 2 × Skill Level)%
        // At Lv10: -30% Aggro from MP (permanent)
        const passiveAggroReduction = 10 + 2 * skills.camouflage.level;
        addModifier('Aggro %', -passiveAggroReduction);
      }
    }
  }
  
  // Paralysis Shot - Bowgun specific (passive effect at level 10)
  if (skills.paralysisShot.level >= 10 && mainWeaponType === 'Bowgun') {
    // Adds 10% Stability when using Bowgun at level 10
    addModifier('Stability %', 10);
  }
  
  // Sicarius - Bow/Bowgun specific (passive effect)
  if (skills.sicarius.level > 0 && (mainWeaponType === 'Bow' || mainWeaponType === 'Bowgun')) {
    // Adds 25% Physical Pierce when using Bow/Bowgun
    addModifier('Physical Pierce %', 25);
  }
}

// Main calculation function
export function calculateAllStats(state: CalculatorState): CalculatedStats {
  const { character, mainWeapon, subWeapon, armor } = state;
  const modifiers = aggregateAllModifiers(state);
  
  const getMod = (stat: string) => modifiers[stat] || { flat: 0, percent: 0 };
  
  // Get personal stat value for calculations
  const personalStatValue = character.personalStat.value;
  const personalStatType = character.personalStat.type;

  // Calculate base stats with modifiers (apply percent first, then flat)
  const str = Math.floor(character.baseStats.STR * (1 + getMod('STR %').percent / 100)) + getMod('STR').flat;
  const int = Math.floor(character.baseStats.INT * (1 + getMod('INT %').percent / 100)) + getMod('INT').flat;
  const vit = Math.floor(character.baseStats.VIT * (1 + getMod('VIT %').percent / 100)) + getMod('VIT').flat;
  const agi = Math.floor(character.baseStats.AGI * (1 + getMod('AGI %').percent / 100)) + getMod('AGI').flat;
  const dex = Math.floor(character.baseStats.DEX * (1 + getMod('DEX %').percent / 100)) + getMod('DEX').flat;
  
  // Get CRT value if it's the personal stat
  const crt = personalStatType === 'CRT' ? personalStatValue : 0;
  const mtl = personalStatType === 'MTL' ? personalStatValue : 0;
  
  // Calculate defensive stats
  const maxHP = calculateMaxHP(
    character.level, 
    vit, 
    { flat: getMod('MaxHP').flat, percent: getMod('MaxHP %').percent }
  );
  
  const maxMP = calculateMaxMP(
    character.level,
    int,
    personalStatType,
    personalStatValue,
    { flat: getMod('MaxMP').flat, percent: getMod('MaxMP %').percent }
  );
  
  const attackMPRecovery = calculateAttackMPRecovery(maxMP, getMod('Attack MP Recovery').flat);
  
  const def = calculateDEF(
    character.level,
    vit,
    armor.def + state.additionalGear.def + state.specialGear.def,
    armor.type,
    getMod('DEF %').percent,
    getMod('DEF').flat
  );
  
  const mdef = calculateMDEF(
    character.level,
    int,
    armor.def + state.additionalGear.def + state.specialGear.def,
    armor.type,
    getMod('MDEF %').percent,
    getMod('MDEF').flat
  );
  
  const dodge = calculateFLEE(
    character.level,
    agi,
    armor.type,
    getMod('Dodge %').percent,
    getMod('Dodge').flat
  );
  
  // Calculate offensive stats using weapon-dependent formulas
  const weaponATKPercent = getMod('Weapon ATK %').percent;
  const weaponATKFlat = getMod('Weapon ATK').flat;
  
  const mainWeaponATK = calculateWeaponATK(
    mainWeapon.atk,
    mainWeapon.refinement,
    weaponATKPercent,
    weaponATKFlat
  );
  
  const subWeaponATK = subWeapon.type !== 'None' 
    ? calculateWeaponATK(subWeapon.atk, subWeapon.refinement, weaponATKPercent, weaponATKFlat)
    : 0;
  
  // Calculate weapon-dependent base stats using proper formulas
  // For Bowgun, base stability is always 50% (cannot be modified by equipment)
  const isBowgun = mainWeapon.type === 'Bowgun';
  const baseWeaponStability = isBowgun 
    ? 50 
    : (mainWeapon.stability || defaultWeaponStability[mainWeapon.type] || 80);
  const baseSubWeaponStability = subWeapon.stability || defaultWeaponStability[subWeapon.type] || 0;
  
  const weaponBaseStats = calculateWeaponDependentStats(
    mainWeapon.type,
    character.level,
    str,
    int,
    agi,
    dex,
    mainWeaponATK,
    baseWeaponStability,
    subWeaponATK,
    baseSubWeaponStability,
    subWeapon.type as SubWeaponType
  );
  
  // Apply percent and flat bonuses to weapon-dependent stats
  const atkPercent = getMod('ATK %').percent;
  const atkFlat = getMod('ATK').flat;
  const matkPercent = getMod('MATK %').percent;
  const matkFlat = getMod('MATK').flat;
  
  const weaponFinalStats = applyWeaponStatModifiers(
    weaponBaseStats,
    atkPercent,
    atkFlat,
    matkPercent,
    matkFlat,
    getMod('ASPD %').percent,
    getMod('ASPD').flat,
    getMod('Stability %').percent
  );
  
  const { atk, matk, aspd, stability, subAtk, subStability } = weaponFinalStats;
  const atkCritical = Math.floor(atk * (calculateBaseCriticalDamage(str, agi) / 100));
  
  // Calculate accuracy
  const accuracy = calculateAccuracy(
    character.level,
    dex,
    { flat: getMod('Accuracy').flat, percent: getMod('Accuracy %').percent }
  );
  
  // Calculate critical rate
  const criticalRate = calculateCriticalRateFromStat(
    crt,
    { flat: getMod('Critical Rate').flat, percent: getMod('Critical Rate %').percent }
  );
  
  // Calculate CSPD
  const cspd = calculateCSPD(
    character.level,
    agi,
    dex,
    { flat: getMod('CSPD').flat, percent: getMod('CSPD %').percent }
  );
  
  // Calculate resistances with soft caps
  const physicalResistance = calculatePhysicalResistance(getMod('Physical Resistance %').percent);
  const magicResistance = calculateMagicResistance(getMod('Magic Resistance %').percent);
  
  // Calculate refinement reduction
  const refineReduction = 
    calculateRefinementReduction(armor.refinement) +
    calculateRefinementReduction(state.additionalGear.refinement) +
    (subWeapon.type === 'Shield' ? calculateRefinementReduction(subWeapon.refinement) : 0);
  
  // Calculate elemental advantages based on user element
  const userElement = character.element;
  
  // Helper function to calculate effective elemental power
  const calculateEffectiveElementalPower = (targetElement: string) => {
    // Get base "% Stronger Against" modifier
    const baseModifier = getMod(`% Stronger Against ${targetElement}`).percent;
    
    // Calculate advantage multiplier based on user element vs target element
    const advantageMultiplier = elementAdvantageMatrix[userElement as Element][targetElement as Element] ?? 1;
    
    // Calculate effective power starting from base 0% (no inherent damage)
    // The "base" represents additional damage percentage beyond the standard amount
    let effectivePower = baseModifier; // Start with %Stronger Against bonus
    
    // Apply elemental advantage as additional effect
    // When advantageMultiplier > 1, add bonus; when < 1, add penalty
    // Convert the advantage multiplier to a percentage difference from neutral (1.0)
    const advantageEffect = (advantageMultiplier - 1) * 100; // Convert to percentage difference
    effectivePower += advantageEffect;
    
    // Return total damage bonus as percentage (where 0% means standard damage)
    return 100 + effectivePower;
  };
  
  // Helper function to calculate magic bonus based on INT
  const calculateIntBonus = () => {
    return Math.floor(int / 10);
  };
  
  const intBonus = calculateIntBonus();
  
  // Helper function to calculate effective magic elemental power with INT bonus
  const calculateEffectiveMagicElementalPower = (targetElement: string) => {
    // Get base "% Stronger Against" modifier
    const baseModifier = getMod(`% Stronger Against ${targetElement}`).percent;
    
    // Calculate advantage multiplier based on user element vs target element
    const advantageMultiplier = elementAdvantageMatrix[userElement as Element][targetElement as Element] ?? 1;
    
    // Calculate effective power starting from base 0%
    let effectivePower = baseModifier; // Start with %Stronger Against bonus
    
    // Apply elemental advantage as additional effect
    const advantageEffect = (advantageMultiplier - 1) * 100; // Convert to percentage difference
    effectivePower += advantageEffect;
    
    // Add INT bonus for magic attacks
    effectivePower += intBonus;
    
    // Return total damage bonus as percentage (where 0% means standard damage)
    return 100 + effectivePower;
  };
  
  return {
    defensive: {
      maxHP,
      maxMP,
      attackMPRecovery,
      def,
      mdef,
      dodge,
      guardRecharge: getMod('Guard Recharge %').percent,
      guardPower: getMod('Guard Power %').percent,
      evasionRecharge: getMod('Evasion Recharge %').percent,
      physicalResistance,
      magicResistance,
      refineReduction,
      ailmentResistance: calculateAilmentResistance(mtl),
      aggro: calculateAggro(getMod('Aggro %').percent),
      barrierCooldown: getMod('Barrier Cooldown %').percent,
      physicalBarrier: getMod('Physical Barrier').flat,
      magicBarrier: getMod('Magic Barrier').flat,
      fractionalBarrier: getMod('Fractional Barrier %').percent,
      reflect: getMod('Reflect %').percent
    },
    offensivePhysical: {
      atk,
      atkCritical,
      stability,
      subHandAtk: subAtk || subWeaponATK,
      subHandStability: subStability || subWeapon.stability || defaultWeaponStability[subWeapon.type] || 0,
      aspd,
      motionSpeed: calculateMotionSpeed(aspd),
      physicalPierce: getMod('Physical Pierce %').percent,
      accuracy,
      criticalRate,
      criticalDamage: calculateCriticalDamage(
        calculateBaseCriticalDamage(str, agi),
        { flat: getMod('Critical Damage').flat, percent: getMod('Critical Damage %').percent }
      ),
      unsheatheAttackPercent: getMod('Unsheathe Attack %').percent || 0,
      unsheatheAttack: getMod('Unsheathe Attack').flat || 0,
      additionalMelee: getMod('Additional Melee %').percent
    },
    offensiveMagic: {
      matk,
      magicStability: calculateMagicStability(stability).min,
      magicPierce: getMod('Magic Pierce %').percent,
      cspd,
      magicCriticalRate: getMod('Magic Critical Rate').flat,
      magicCriticalRateWeaken: getMod('Magic Critical Rate').flat + 25, // With weaken
      magicCriticalDamage: 150 + getMod('Magic Critical Damage').flat,
      additionalMagic: getMod('Additional Magic %').percent
    },
    offensiveGeneral: {
      shortRangeDamage: calculateRangeDamage(0, getMod('Short Range Damage %').percent),
      longRangeDamage: calculateRangeDamage(0, getMod('Long Range Damage %').percent),
      anticipate: calculateAnticipate(getMod('Anticipate %').percent),
      guardBreak: calculateGuardBreak(getMod('Guard Break %').percent)
    },
    elemental: {
      weaponElement: mainWeapon.element || 'Neutral',
      subWeaponElement: subWeapon.element || 'Neutral',
      userElement: character.element,
      neutral: {
        physicalPower: calculateEffectiveElementalPower('Neutral'),
        magicPower: calculateEffectiveMagicElementalPower('Neutral'),
        resistance: getMod('Neutral Resistance %').percent
      },
      fire: {
        physicalPower: calculateEffectiveElementalPower('Fire'),
        magicPower: calculateEffectiveMagicElementalPower('Fire'),
        resistance: getMod('Fire Resistance %').percent
      },
      water: {
        physicalPower: calculateEffectiveElementalPower('Water'),
        magicPower: calculateEffectiveMagicElementalPower('Water'),
        resistance: getMod('Water Resistance %').percent
      },
      wind: {
        physicalPower: calculateEffectiveElementalPower('Wind'),
        magicPower: calculateEffectiveMagicElementalPower('Wind'),
        resistance: getMod('Wind Resistance %').percent
      },
      earth: {
        physicalPower: calculateEffectiveElementalPower('Earth'),
        magicPower: calculateEffectiveMagicElementalPower('Earth'),
        resistance: getMod('Earth Resistance %').percent
      },
      light: {
        physicalPower: calculateEffectiveElementalPower('Light'),
        magicPower: calculateEffectiveMagicElementalPower('Light'),
        resistance: getMod('Light Resistance %').percent
      },
      dark: {
        physicalPower: calculateEffectiveElementalPower('Dark'),
        magicPower: calculateEffectiveMagicElementalPower('Dark'),
        resistance: getMod('Dark Resistance %').percent
      }
    }
  };
}

// Get stability sources for tooltip display
export function getStabilitySources(state: CalculatorState): { sources: { source: string; value: number }[]; total: number } {
  const { character, mainWeapon } = state;
  const modifiers = aggregateAllModifiers(state);
  const getMod = (stat: string) => modifiers[stat] || { flat: 0, percent: 0 };

  // Calculate STR with modifiers
  const str = Math.floor(character.baseStats.STR * (1 + getMod('STR %').percent / 100)) + getMod('STR').flat;

  // Get base weapon stability
  const isBowgun = mainWeapon.type === 'Bowgun';
  const baseWeaponStability = isBowgun ? 50 : (mainWeapon.stability || defaultWeaponStability[mainWeapon.type] || 80);

  // Calculate STR bonus
  let strBonus = 0;
  if (mainWeapon.type === 'Bowgun') {
    strBonus = Math.floor(str / 20);
  } else if (mainWeapon.type === 'Bow') {
    strBonus = Math.floor((str + character.baseStats.DEX) / 20);
  } else if (mainWeapon.type === 'Staff') {
    strBonus = Math.floor(str / 20);
  } else if (mainWeapon.type === 'One-Handed Sword' || mainWeapon.type === 'Dual Wield') {
    strBonus = Math.floor((str + 3 * character.baseStats.DEX) / 40);
  } else if (mainWeapon.type === 'Katana') {
    strBonus = Math.floor((3 * str + character.baseStats.DEX) / 40);
  } else if (mainWeapon.type === 'Halberd') {
    strBonus = Math.floor((str + character.baseStats.DEX) / 20);
  } else if (mainWeapon.type === 'Two-Handed Sword') {
    strBonus = Math.floor(character.baseStats.DEX / 10);
  } else if (mainWeapon.type === 'Magic Device') {
    strBonus = Math.floor(character.baseStats.DEX / 10);
  } else if (mainWeapon.type === 'Knuckle') {
    strBonus = Math.floor(character.baseStats.DEX / 40);
  } else if (mainWeapon.type === 'Bare Hand') {
    strBonus = Math.floor(character.baseStats.DEX / 2.85);
  }

  const baseStability = baseWeaponStability + strBonus;
  const stabilityPercent = getMod('Stability %').percent;
  const finalStability = Math.min(100, Math.floor(baseStability + stabilityPercent));

  const sources: { source: string; value: number }[] = [
    { source: `${mainWeapon.type} Base`, value: baseWeaponStability },
    { source: `STR Bonus (${str} STR)`, value: strBonus }
  ];

  // Add Stability % sources
  const modifiersWithSources = aggregateAllModifiersWithSources(state);
  if (modifiersWithSources['Stability %']?.sources) {
    modifiersWithSources['Stability %'].sources.forEach(s => {
      sources.push({ source: s.source, value: s.value });
    });
  }

  return { sources, total: finalStability };
}
