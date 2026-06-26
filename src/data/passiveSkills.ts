// Passive Skills Database (sourced from Coryn Club)
// Generated on: 2026-06-26T16:32:05.239Z
// Complete passive skill data for Toram Online

export interface PassiveSkill {
  id: string;
  name: string;
  category: string;
  maxLevel: number;
  description: string;
  effects: string;
  hasActive?: boolean;
}

export const passiveSkills: PassiveSkill[] = [
  {
    "id": "swordMastery",
    "name": "Sword Mastery",
    "category": "Weapon Mastery",
    "maxLevel": 10,
    "description": "1H/2H Sword mastery skill",
    "effects": "+0.3% ATK, +3% Weapon ATK per level",
    "hasActive": false
  },
  {
    "id": "shotMastery",
    "name": "Shot Mastery",
    "category": "Weapon Mastery",
    "maxLevel": 10,
    "description": "Bow/Bowgun mastery skill",
    "effects": "+0.3% ATK, +3% Weapon ATK per level",
    "hasActive": false
  },
  {
    "id": "magicMastery",
    "name": "Magic Mastery",
    "category": "Weapon Mastery",
    "maxLevel": 10,
    "description": "Staff/Magic Device mastery skill",
    "effects": "+0.3% MATK, +3% Weapon ATK per level",
    "hasActive": false
  },
  {
    "id": "martialMastery",
    "name": "Martial Mastery",
    "category": "Weapon Mastery",
    "maxLevel": 10,
    "description": "Knuckle mastery skill",
    "effects": "+0.3% ATK, +3% Weapon ATK per level",
    "hasActive": false
  },
  {
    "id": "halberdMastery",
    "name": "Halberd Mastery",
    "category": "Weapon Mastery",
    "maxLevel": 10,
    "description": "Halberd mastery skill",
    "effects": "+0.3% ATK, +3% Weapon ATK per level",
    "hasActive": false
  },
  {
    "id": "unarmedMastery",
    "name": "Unarmed Mastery",
    "category": "Weapon Mastery",
    "maxLevel": 10,
    "description": "Bare hand combat mastery",
    "effects": "+20 Weapon ATK per level",
    "hasActive": false
  },
  {
    "id": "criticalSpear",
    "name": "Critical Spear",
    "category": "Combat",
    "maxLevel": 10,
    "description": "Halberd critical enhancement",
    "effects": "+0.5% CR, +0.5 Critical Rate per level",
    "hasActive": false
  },
  {
    "id": "quickSlash",
    "name": "Quick Slash",
    "category": "Combat",
    "maxLevel": 10,
    "description": "1H/2H Sword attack speed skill",
    "effects": "+1% ASPD, +10 ASPD per level",
    "hasActive": false
  },
  {
    "id": "criticalUp",
    "name": "Critical Up",
    "category": "Combat",
    "maxLevel": 10,
    "description": "Enhanced critical rate and damage",
    "effects": "+0.5 Critical Rate, +0.5% Crit DMG per level",
    "hasActive": false
  },
  {
    "id": "accuracyUp",
    "name": "Accuracy Up",
    "category": "Combat",
    "maxLevel": 10,
    "description": "Improved accuracy",
    "effects": "+Accuracy per level",
    "hasActive": false
  },
  {
    "id": "dodgeUp",
    "name": "Dodge Up",
    "category": "Combat",
    "maxLevel": 10,
    "description": "Enhanced dodge rate",
    "effects": "+Dodge per level",
    "hasActive": false
  },
  {
    "id": "hpBoost",
    "name": "HP Boost",
    "category": "Stat Boost",
    "maxLevel": 10,
    "description": "Increases maximum HP",
    "effects": "+2% MaxHP, +100 MaxHP per level",
    "hasActive": false
  },
  {
    "id": "mpBoost",
    "name": "MP Boost",
    "category": "Stat Boost",
    "maxLevel": 10,
    "description": "Increases maximum MP",
    "effects": "+30 MaxMP per level",
    "hasActive": false
  },
  {
    "id": "attackUp",
    "name": "Attack Up",
    "category": "Stat Boost",
    "maxLevel": 10,
    "description": "Increases attack power",
    "effects": "+5 ATK per level (50 at Lv200)",
    "hasActive": false
  },
  {
    "id": "intimidatingPower",
    "name": "Intimidating Power",
    "category": "Stat Boost",
    "maxLevel": 10,
    "description": "Increases ATK based on level",
    "effects": "+ATK = (Level/40) × SkillLevel",
    "hasActive": false
  },
  {
    "id": "magicUp",
    "name": "Magic Up",
    "category": "Stat Boost",
    "maxLevel": 10,
    "description": "Increases magic attack power",
    "effects": "+5 MATK per level (50 at Lv200)",
    "hasActive": false
  },
  {
    "id": "defenseUp",
    "name": "Defense Up",
    "category": "Stat Boost",
    "maxLevel": 10,
    "description": "Increases defense and magic defense",
    "effects": "+5 DEF, +5 MDEF per level",
    "hasActive": false
  },
  {
    "id": "dualSwordMastery",
    "name": "Dual Sword Mastery",
    "category": "Dual Wield",
    "maxLevel": 10,
    "description": "Dual wield attack enhancement",
    "effects": "+0.5% ATK, +0.5% ASPD per level",
    "hasActive": false
  },
  {
    "id": "dualSwordControl",
    "name": "Dual Sword Control",
    "category": "Dual Wield",
    "maxLevel": 10,
    "description": "Dual wield control improvement",
    "effects": "+1% ATK, +1% ASPD per level",
    "hasActive": false
  },
  {
    "id": "godspeed",
    "name": "Godspeed",
    "category": "Dual Wield",
    "maxLevel": 10,
    "description": "Dual wield attack speed boost",
    "effects": "+1 ASPD per level",
    "hasActive": false
  },
  {
    "id": "shieldMastery",
    "name": "Shield Mastery",
    "category": "Shield",
    "maxLevel": 10,
    "description": "Sub-weapon shield mastery",
    "effects": "+5% ASPD per level",
    "hasActive": false
  },
  {
    "id": "forceShield",
    "name": "Force Shield",
    "category": "Shield",
    "maxLevel": 10,
    "description": "Shield guard power enhancement",
    "effects": "+5% Guard Power per level",
    "hasActive": false
  },
  {
    "id": "advancedGuard",
    "name": "Advanced Guard",
    "category": "Shield",
    "maxLevel": 10,
    "description": "Shield/heavy armor guard recharge",
    "effects": "+5% Guard Recharge per level",
    "hasActive": false
  },
  {
    "id": "heavyArmorMastery",
    "name": "Heavy Armor Mastery",
    "category": "Armor",
    "maxLevel": 10,
    "description": "Heavy armor defense enhancement",
    "effects": "+2% DEF, +2% MDEF per level",
    "hasActive": false
  },
  {
    "id": "lightArmorMastery",
    "name": "Light Armor Mastery",
    "category": "Armor",
    "maxLevel": 10,
    "description": "Light armor dodge enhancement",
    "effects": "+5% Dodge per level",
    "hasActive": false
  },
  {
    "id": "advancedEvasion",
    "name": "Advanced Evasion",
    "category": "Armor",
    "maxLevel": 10,
    "description": "Light armor evasion recharge",
    "effects": "+5% Evasion Recharge per level",
    "hasActive": false
  },
  {
    "id": "castMastery",
    "name": "Cast Mastery",
    "category": "Magic",
    "maxLevel": 10,
    "description": "Casting speed enhancement",
    "effects": "+1.5% CSPD, +10 CSPD, -2.5% ATK per level",
    "hasActive": false
  },
  {
    "id": "magicalShield",
    "name": "Magical Shield",
    "category": "Magic",
    "maxLevel": 10,
    "description": "Magic defense enhancement",
    "effects": "+3% MDEF per level",
    "hasActive": false
  },
  {
    "id": "spellBurst",
    "name": "Spell Burst",
    "category": "Magic",
    "maxLevel": 1,
    "description": "Magic damage boost (Staff/MD)",
    "effects": "+10% magic damage when using Staff/MD",
    "hasActive": false
  },
  {
    "id": "bushido",
    "name": "Bushido",
    "category": "Katana",
    "maxLevel": 10,
    "description": "Katana attack enhancement",
    "effects": "+1% ATK per level",
    "hasActive": false
  },
  {
    "id": "twoHanded",
    "name": "Two-Handed",
    "category": "Weapon",
    "maxLevel": 1,
    "description": "No sub-weapon bonus",
    "effects": "+10% ATK, +10% Stability",
    "hasActive": false
  },
  {
    "id": "magicWarriorMastery",
    "name": "Magic Warrior Mastery",
    "category": "Hybrid",
    "maxLevel": 10,
    "description": "Hybrid ATK/MATK enhancement",
    "effects": "+0.5% ATK, +0.5% MATK per level",
    "hasActive": false
  },
  {
    "id": "aggravate",
    "name": "Aggravate",
    "category": "Knuckle",
    "maxLevel": 10,
    "description": "Knuckle aggro and ATK boost",
    "effects": "+Aggro, +ATK when active",
    "hasActive": true
  },
  {
    "id": "martialDiscipline",
    "name": "Martial Discipline",
    "category": "Knuckle",
    "maxLevel": 10,
    "description": "Knuckle ATK and ASPD bonuses",
    "effects": "+ATK, +ASPD bonuses",
    "hasActive": false
  },
  {
    "id": "camouflage",
    "name": "Camouflage",
    "category": "Ranged",
    "maxLevel": 10,
    "description": "Bow/Bowgun stealth skill",
    "effects": "+20 CR (passive), +40 CR when active, +10 ATK, -50% Aggro",
    "hasActive": true
  },
  {
    "id": "paralysisShot",
    "name": "Paralysis Shot",
    "category": "Ranged",
    "maxLevel": 10,
    "description": "Bowgun stability enhancement",
    "effects": "+10% Stability at Lv10",
    "hasActive": false
  },
  {
    "id": "sicarius",
    "name": "Sicarius",
    "category": "Ranged",
    "maxLevel": 10,
    "description": "Bow/Bowgun physical pierce",
    "effects": "+25% Physical Pierce",
    "hasActive": false
  },
  {
    "id": "strongChaseAttack",
    "name": "Strong Chase Attack",
    "category": "Status",
    "maxLevel": 10,
    "description": "Damage vs status-affected enemies",
    "effects": "+Damage to enemies with status ailments",
    "hasActive": false
  }
];

/**
 * Search passive skills by name or category
 */
export function searchPassiveSkills(query: string): PassiveSkill[] {
  if (!query.trim()) return passiveSkills;
  
  const lowerQuery = query.toLowerCase();
  return passiveSkills.filter(skill => 
    skill.name.toLowerCase().includes(lowerQuery) ||
    skill.category.toLowerCase().includes(lowerQuery) ||
    skill.description.toLowerCase().includes(lowerQuery) ||
    skill.effects.toLowerCase().includes(lowerQuery)
  );
}

/**
 * Filter skills by category
 */
export function filterSkillsByCategory(category: string): PassiveSkill[] {
  if (!category || category === 'All') return passiveSkills;
  return passiveSkills.filter(skill => skill.category === category);
}

/**
 * Get unique categories
 */
export function getSkillCategories(): string[] {
  const categories = passiveSkills.map(skill => skill.category);
  return ['All', ...Array.from(new Set(categories))];
}

/**
 * Get skill by ID
 */
export function getSkillById(id: string): PassiveSkill | undefined {
  return passiveSkills.find(skill => skill.id === id);
}
