// ============================================
// Base Stat Types
// ============================================
export type BaseStat = 'STR' | 'INT' | 'VIT' | 'AGI' | 'DEX';
export type PersonalStat = 'CRT' | 'LUK' | 'MTL' | 'TEC';
export type Element = 'Neutral' | 'Fire' | 'Water' | 'Wind' | 'Earth' | 'Light' | 'Dark';

export interface BaseStats {
  STR: number;
  INT: number;
  VIT: number;
  AGI: number;
  DEX: number;
}

// ============================================
// Weapon Types
// ============================================
export type MainWeaponType = 
  | 'Bare Hand'
  | 'One-Handed Sword'
  | 'Two-Handed Sword'
  | 'Dual Wield'
  | 'Bow'
  | 'Bowgun'
  | 'Staff'
  | 'Magic Device'
  | 'Knuckle'
  | 'Halberd'
  | 'Katana';

export type SubWeaponType =
  | 'None'
  | 'One-Handed Sword'
  | 'Dagger'
  | 'Shield'
  | 'Magic Device'
  | 'Knuckle'
  | 'Arrow';

export type ArmorType = 'Without Armor' | 'Normal Armor' | 'Light Armor' | 'Heavy Armor';

// ============================================
// Refinement Levels
// ============================================
export type RefinementLevel = '+0' | '+1' | '+2' | '+3' | '+4' | '+5' | '+6' | '+7' | '+8' | '+9' | '+E' | '+D' | '+C' | '+B' | '+A' | '+S';

export interface RefinementBonus {
  percent: number;
  flat: number;
}

// ============================================
// Stat Modifier (for Crysta slots, Avatar, Food, Equipment bonuses)
// ============================================
export interface StatModifier {
  stat: string;
  value: number;
}

// ============================================
// Equipment Crystal System (8 stat rows per crystal)
// ============================================
export interface CrystalStatRow {
  stat: string;
  value: number;
}

export interface EquipmentCrystal {
  crystaId?: number; // ID of the selected crysta from database
  rows: [CrystalStatRow, CrystalStatRow, CrystalStatRow, CrystalStatRow, CrystalStatRow, CrystalStatRow, CrystalStatRow, CrystalStatRow];
}

// ============================================
// Equipment Interfaces
// ============================================
export interface WeaponEquipment {
  type: MainWeaponType | SubWeaponType;
  itemName: string;
  atk: number;
  stability: number;
  refinement: RefinementLevel;
  element?: string;
  stats: EquipmentBonusRow[];
  crysta1: EquipmentCrystal;
  crysta2: EquipmentCrystal;
}

export interface ArmorEquipment {
  type: ArmorType;
  itemName: string;
  def: number;
  refinement: RefinementLevel;
  stats: EquipmentBonusRow[];
  crysta1: EquipmentCrystal;
  crysta2: EquipmentCrystal;
}

export interface AdditionalGear {
  def: number;
  refinement: RefinementLevel;
  stats: EquipmentBonusRow[];
  crysta1: EquipmentCrystal;
  crysta2: EquipmentCrystal;
}

export interface SpecialGear {
  def: number;
  stats: EquipmentBonusRow[];
  crysta1: EquipmentCrystal;
  crysta2: EquipmentCrystal;
}

// ============================================
// Avatar Stats
// ============================================
export interface AvatarSlot {
  stat: string;
  value: number;
}

export interface AvatarStats {
  accessory: [AvatarSlot, AvatarSlot, AvatarSlot];
  top: [AvatarSlot, AvatarSlot, AvatarSlot];
  bottom: [AvatarSlot, AvatarSlot, AvatarSlot];
}

// ============================================
// Food & Potion Stats
// ============================================
export interface BuffSlot {
  stat: string;
  value: number;
}

export interface FoodPotionStats {
  food: [BuffSlot, BuffSlot, BuffSlot, BuffSlot, BuffSlot];
  potion1: [BuffSlot, BuffSlot, BuffSlot, BuffSlot, BuffSlot];
  potion2: [BuffSlot, BuffSlot, BuffSlot, BuffSlot, BuffSlot];
}

// ============================================
// Passive Skills
// ============================================
export type SkillLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface SkillInfo {
  level: SkillLevel;
  element?: Element | 'User'; // 'User' means follows character's element
  active?: boolean; // For skills that can be toggled on/off
}

export interface PassiveSkills {
  // Weapon Mastery
  swordMastery: SkillInfo;
  shotMastery: SkillInfo;
  magicMastery: SkillInfo;
  martialMastery: SkillInfo;
  halberdMastery: SkillInfo;
  unarmedMastery: SkillInfo;
  criticalSpear: SkillInfo;
  
  // Katana Skills
  bushido: SkillInfo;
  
  // Dual Wield Skills
  dualSwordMastery: SkillInfo;
  dualSwordControl: SkillInfo;
  godspeed: SkillInfo;
  
  // Knuckle Skills
  aggravate: SkillInfo;
  strongChaseAttack: SkillInfo;
  martialDiscipline: SkillInfo;
  
  // Bow/Bowgun Skills
  samuraiArchery: SkillInfo;
  hunterBowgun: SkillInfo;
  camouflage: SkillInfo;
  paralysisShot: SkillInfo;
  
  // Bow/Bowgun/Katana Skills
  sicarius: SkillInfo;
  
  // Magic Warrior Skills
  magicWarriorMastery: SkillInfo;
  magicSkin: SkillInfo;
  conversion: SkillInfo;
  
  // Battle Skills
  quickSlash: SkillInfo;
  hpBoost: SkillInfo;
  mpBoost: SkillInfo;
  attackUp: SkillInfo;
  intimidatingPower: SkillInfo;
  magicUp: SkillInfo;
  defenseUp: SkillInfo;
  accuracyUp: SkillInfo;
  criticalUp: SkillInfo;
  dodgeUp: SkillInfo;
  castMastery: SkillInfo;
  
  // Two-Handed Skills
  twoHanded: SkillInfo;
  
  // Bare Hand / EX Skills
  ultimaQiCharge: SkillInfo;
  hiddenTalent: SkillInfo;
  
  // Magic Skills
  spellBurst: SkillInfo;
  
  // Armor Mastery Skills
  shieldMastery: SkillInfo;
  forceShield: SkillInfo;
  advancedGuard: SkillInfo;
  heavyArmorMastery: SkillInfo;
  aftershield: SkillInfo;
  lightArmorMastery: SkillInfo;
  advancedEvasion: SkillInfo;
  magicalShield: SkillInfo;
}

// ============================================
// Equipment Crystal/Bonus Rows
// ============================================
export interface EquipmentBonusRow {
  stat: string;
  value: number;
}

// ============================================
// Character State
// ============================================
export interface CharacterState {
  level: number;
  baseStats: BaseStats;
  personalStat: {
    type: PersonalStat | '';
    value: number;
  };
  element: Element;
}

// ============================================
// Theme Types
// ============================================
type Theme = 'dark' | 'light';

// ============================================
// Complete Calculator State
// ============================================
export interface CalculatorState {
  character: CharacterState;
  mainWeapon: WeaponEquipment;
  subWeapon: WeaponEquipment;
  armor: ArmorEquipment;
  additionalGear: AdditionalGear;
  specialGear: SpecialGear;
  avatar: AvatarStats;
  foodPotion: FoodPotionStats;
  skills: PassiveSkills;
  equipmentBonuses: EquipmentBonusRow[];
  theme: Theme;
}

// ============================================
// Calculated/Output Stats
// ============================================
export interface DefensiveStats {
  maxHP: number;
  maxMP: number;
  attackMPRecovery: number;
  def: number;
  mdef: number;
  dodge: number;
  guardRecharge: number;
  guardPower: number;
  evasionRecharge: number;
  physicalResistance: number;
  magicResistance: number;
  refineReduction: number;
  ailmentResistance: number;
  aggro: number;
  barrierCooldown: number;
  physicalBarrier: number;
  magicBarrier: number;
  fractionalBarrier: number;
  reflect: number;
}

export interface OffensivePhysicalStats {
  atk: number;
  atkCritical: number;
  stability: number;
  subHandAtk: number;
  subHandStability: number;
  aspd: number;
  motionSpeed: number;
  physicalPierce: number;
  accuracy: number;
  criticalRate: number;
  criticalDamage: number;
  unsheatheAttackPercent: number;
  unsheatheAttack: number;
  additionalMelee: number;
}

export interface OffensiveMagicStats {
  matk: number;
  magicStability: number;
  magicPierce: number;
  cspd: number;
  magicCriticalRate: number;
  magicCriticalRateWeaken: number;
  magicCriticalDamage: number;
  additionalMagic: number;
}

export interface OffensiveGeneralStats {
  shortRangeDamage: number;
  longRangeDamage: number;
  anticipate: number;
  guardBreak: number;
}

export interface ElementalStats {
  weaponElement: string;
  subWeaponElement: string;
  userElement: Element; // Kept for compatibility but now hardcoded to Neutral in calculations
  // Element power and resistance for each element
  neutral: { physicalPower: number; magicPower: number; resistance: number };
  fire: { physicalPower: number; magicPower: number; resistance: number };
  water: { physicalPower: number; magicPower: number; resistance: number };
  wind: { physicalPower: number; magicPower: number; resistance: number };
  earth: { physicalPower: number; magicPower: number; resistance: number };
  light: { physicalPower: number; magicPower: number; resistance: number };
  dark: { physicalPower: number; magicPower: number; resistance: number };
}

// Elemental Damage Matrix Types
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

export interface CalculatedStats {
  defensive: DefensiveStats;
  offensivePhysical: OffensivePhysicalStats;
  offensiveMagic: OffensiveMagicStats;
  offensiveGeneral: OffensiveGeneralStats;
  elemental: ElementalStats;
}

// ============================================
// Stat List Types (for dropdowns)
// ============================================
export interface StatOption {
  value: string;
  label: string;
}

export type StatListType = 'full' | 'avatar' | 'food';
