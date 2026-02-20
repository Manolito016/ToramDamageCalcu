import React, { createContext, useContext, useReducer, useMemo, useCallback } from 'react';
import type { 
  CalculatorState, 
  CharacterState, 
  WeaponEquipment, 
  ArmorEquipment,
  AdditionalGear,
  SpecialGear,
  AvatarStats,
  FoodPotionStats,
  PassiveSkills,
  CalculatedStats,
  BaseStats,
  SkillLevel,
  Element,
  SkillInfo
} from '../types';
import { calculateAllStats } from '../utils/calculations';

// ============================================
// Theme Management
// ============================================

type Theme = 'dark' | 'light';

const getInitialTheme = (): Theme => {
  // Check localStorage first
  const savedTheme = localStorage.getItem('toram-calculator-theme');
  if (savedTheme === 'dark' || savedTheme === 'light') {
    return savedTheme;
  }
  
  // Check system preference
  if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    return 'light';
  }
  
  // Default to dark
  return 'dark';
};

const applyTheme = (theme: Theme) => {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('toram-calculator-theme', theme);
};

// ============================================
// Initial State
// ============================================

const defaultBaseStats: BaseStats = {
  STR: 1,
  INT: 1,
  VIT: 1,
  AGI: 1,
  DEX: 1
};

const defaultCharacterState: CharacterState = {
  level: 1,
  baseStats: { ...defaultBaseStats },
  personalStat: {
    type: '',
    value: 0
  },
  element: 'Neutral'

};

const defaultCrystalRow = { stat: '', value: 0 };

const defaultEquipmentBonusRow = { stat: '', value: 0 };

const defaultEquipmentCrystal = {
  rows: [
    { ...defaultCrystalRow }, { ...defaultCrystalRow }, { ...defaultCrystalRow }, { ...defaultCrystalRow },
    { ...defaultCrystalRow }, { ...defaultCrystalRow }, { ...defaultCrystalRow }, { ...defaultCrystalRow }
  ] as [typeof defaultCrystalRow, typeof defaultCrystalRow, typeof defaultCrystalRow, typeof defaultCrystalRow, typeof defaultCrystalRow, typeof defaultCrystalRow, typeof defaultCrystalRow, typeof defaultCrystalRow]
};

const defaultWeaponEquipment: WeaponEquipment = {
  type: 'Bare Hand',
  itemName: '',
  atk: 0,
  stability: 50,
  refinement: '+0',
  stats: Array(8).fill(null).map(() => ({ ...defaultEquipmentBonusRow })),
  crysta1: { ...defaultEquipmentCrystal },
  crysta2: { ...defaultEquipmentCrystal }
};

const defaultArmorEquipment: ArmorEquipment = {
  type: 'Without Armor',
  itemName: '',
  def: 0,
  refinement: '+0',
  stats: Array(8).fill(null).map(() => ({ ...defaultEquipmentBonusRow })),
  crysta1: { ...defaultEquipmentCrystal },
  crysta2: { ...defaultEquipmentCrystal }
};

const defaultAdditionalGear: AdditionalGear = {
  def: 0,
  refinement: '+0',
  stats: Array(8).fill(null).map(() => ({ ...defaultEquipmentBonusRow })),
  crysta1: { ...defaultEquipmentCrystal },
  crysta2: { ...defaultEquipmentCrystal }
};

const defaultSpecialGear: SpecialGear = {
  def: 0,
  stats: Array(8).fill(null).map(() => ({ ...defaultEquipmentBonusRow })),
  crysta1: { ...defaultEquipmentCrystal },
  crysta2: { ...defaultEquipmentCrystal }
};

const defaultAvatarSlot = { stat: '', value: 0 };

const defaultAvatarStats: AvatarStats = {
  accessory: [{ ...defaultAvatarSlot }, { ...defaultAvatarSlot }, { ...defaultAvatarSlot }],
  top: [{ ...defaultAvatarSlot }, { ...defaultAvatarSlot }, { ...defaultAvatarSlot }],
  bottom: [{ ...defaultAvatarSlot }, { ...defaultAvatarSlot }, { ...defaultAvatarSlot }]
};

const defaultBuffSlot = { stat: '', value: 0 };

const defaultFoodPotionStats: FoodPotionStats = {
  food: [{ ...defaultBuffSlot }, { ...defaultBuffSlot }, { ...defaultBuffSlot }, { ...defaultBuffSlot }, { ...defaultBuffSlot }],
  potion1: [{ ...defaultBuffSlot }, { ...defaultBuffSlot }, { ...defaultBuffSlot }, { ...defaultBuffSlot }, { ...defaultBuffSlot }],
  potion2: [{ ...defaultBuffSlot }, { ...defaultBuffSlot }, { ...defaultBuffSlot }, { ...defaultBuffSlot }, { ...defaultBuffSlot }]
};

const defaultPassiveSkills: PassiveSkills = {
  swordMastery: { level: 0 },
  shotMastery: { level: 0 },
  magicMastery: { level: 0 },
  martialMastery: { level: 0 },
  halberdMastery: { level: 0 },
  unarmedMastery: { level: 0 },
  criticalSpear: { level: 0 },
  bushido: { level: 0 },
  dualSwordMastery: { level: 0 },
  dualSwordControl: { level: 0 },
  godspeed: { level: 0 },
  aggravate: { level: 0 },
  strongChaseAttack: { level: 0 },
  martialDiscipline: { level: 0 },
  samuraiArchery: { level: 0 },
  hunterBowgun: { level: 0 },
  camouflage: { level: 0 },
  magicWarriorMastery: { level: 0 },
  magicSkin: { level: 0 },
  conversion: { level: 0 },
  quickSlash: { level: 0 },
  hpBoost: { level: 0 },
  mpBoost: { level: 0 },
  attackUp: { level: 0 },
  intimidatingPower: { level: 0 },
  magicUp: { level: 0 },
  defenseUp: { level: 0 },
  accuracyUp: { level: 0 },
  criticalUp: { level: 0 },
  dodgeUp: { level: 0 },
  castMastery: { level: 0 },
  
  // Active Skills with Passive Effects
  paralysisShot: { level: 0 },
  sicarius: { level: 0 },
  
  twoHanded: { level: 0 },
  ultimaQiCharge: { level: 0 },
  hiddenTalent: { level: 0 },
  spellBurst: { level: 0 },
  shieldMastery: { level: 0 },
  forceShield: { level: 0 },
  advancedGuard: { level: 0 },
  heavyArmorMastery: { level: 0 },
  aftershield: { level: 0 },
  lightArmorMastery: { level: 0 },
  advancedEvasion: { level: 0 },
  magicalShield: { level: 0 }
};

const initialState: CalculatorState = {
  character: { ...defaultCharacterState },
  mainWeapon: { ...defaultWeaponEquipment },
  subWeapon: { ...defaultWeaponEquipment, type: 'None' },
  armor: { ...defaultArmorEquipment },
  additionalGear: { ...defaultAdditionalGear },
  specialGear: { ...defaultSpecialGear },
  avatar: { ...defaultAvatarStats },
  foodPotion: { ...defaultFoodPotionStats },
  skills: { ...defaultPassiveSkills },
  equipmentBonuses: Array(8).fill(null).map(() => ({ ...defaultEquipmentBonusRow })),
  theme: getInitialTheme()
};

// ============================================
// Action Types
// ============================================

type Action =
  | { type: 'SET_LEVEL'; payload: number }
  | { type: 'SET_BASE_STAT'; stat: keyof BaseStats; value: number }
  | { type: 'SET_PERSONAL_STAT_TYPE'; payload: '' | 'CRT' | 'LUK' | 'MTL' | 'TEC' }
  | { type: 'SET_PERSONAL_STAT_VALUE'; payload: number }
  | { type: 'SET_CHARACTER_ELEMENT'; payload: Element }
  
  | { type: 'SET_MAIN_WEAPON'; field: string; value: unknown }
  | { type: 'SET_MAIN_WEAPON_STAT'; index: number; stat: string; value: number }
  | { type: 'SET_MAIN_WEAPON_CRYSTA'; slot: 1 | 2; rowIndex: number; stat: string; value: number }
  | { type: 'SET_SUB_WEAPON'; field: string; value: unknown }
  | { type: 'SET_SUB_WEAPON_STAT'; index: number; stat: string; value: number }
  | { type: 'SET_SUB_WEAPON_CRYSTA'; slot: 1 | 2; rowIndex: number; stat: string; value: number }
  | { type: 'SET_ARMOR'; field: string; value: unknown }
  | { type: 'SET_ARMOR_STAT'; index: number; stat: string; value: number }
  | { type: 'SET_ARMOR_CRYSTA'; slot: 1 | 2; rowIndex: number; stat: string; value: number }
  | { type: 'SET_ADDITIONAL_GEAR'; field: string; value: unknown }
  | { type: 'SET_ADDITIONAL_STAT'; index: number; stat: string; value: number }
  | { type: 'SET_ADDITIONAL_CRYSTA'; slot: 1 | 2; rowIndex: number; stat: string; value: number }
  | { type: 'SET_SPECIAL_GEAR'; field: string; value: unknown }
  | { type: 'SET_SPECIAL_STAT'; index: number; stat: string; value: number }
  | { type: 'SET_SPECIAL_CRYSTA'; slot: 1 | 2; rowIndex: number; stat: string; value: number }
  | { type: 'SET_AVATAR'; slot: 'accessory' | 'top' | 'bottom'; index: number; stat: string; value: number }
  | { type: 'SET_FOOD_POTION'; buffType: 'food' | 'potion1' | 'potion2'; index: number; stat: string; value: number }
  | { type: 'SET_SKILL'; skill: keyof PassiveSkills; value: SkillInfo }
  | { type: 'SET_EQUIPMENT_BONUS'; index: number; stat: string; value: number }
  | { type: 'SET_THEME'; payload: Theme }
  | { type: 'RESET_STATE' };

// ============================================
// Reducer
// ============================================

function calculatorReducer(state: CalculatorState, action: Action): CalculatorState {
  switch (action.type) {
    case 'SET_LEVEL':
      return { ...state, character: { ...state.character, level: action.payload } };
    
    case 'SET_BASE_STAT':
      return {
        ...state,
        character: {
          ...state.character,
          baseStats: { ...state.character.baseStats, [action.stat]: action.value }
        }
      };
    
    case 'SET_PERSONAL_STAT_TYPE':
      return {
        ...state,
        character: {
          ...state.character,
          personalStat: { ...state.character.personalStat, type: action.payload }
        }
      };
    
    case 'SET_PERSONAL_STAT_VALUE':
      return {
        ...state,
        character: {
          ...state.character,
          personalStat: { ...state.character.personalStat, value: action.payload }
        }
      };
    
    case 'SET_CHARACTER_ELEMENT':
      return {
        ...state,
        character: {
          ...state.character,
          element: action.payload
        }
      };
    
    case 'SET_MAIN_WEAPON':
      return {
        ...state,
        mainWeapon: { ...state.mainWeapon, [action.field]: action.value }
      };

    case 'SET_MAIN_WEAPON_STAT': {
      const newStats = [...state.mainWeapon.stats];
      newStats[action.index] = { stat: action.stat, value: action.value };
      return {
        ...state,
        mainWeapon: { ...state.mainWeapon, stats: newStats }
      };
    }

    case 'SET_MAIN_WEAPON_CRYSTA': {
      const crystaKey = `crysta${action.slot}` as 'crysta1' | 'crysta2';
      const newRows = [...state.mainWeapon[crystaKey].rows] as typeof state.mainWeapon['crysta1']['rows'];
      newRows[action.rowIndex] = { stat: action.stat, value: action.value };
      return {
        ...state,
        mainWeapon: {
          ...state.mainWeapon,
          [crystaKey]: { rows: newRows }
        }
      };
    }
    
    case 'SET_SUB_WEAPON':
      return {
        ...state,
        subWeapon: { ...state.subWeapon, [action.field]: action.value }
      };

    case 'SET_SUB_WEAPON_STAT': {
      const newStats = [...state.subWeapon.stats];
      newStats[action.index] = { stat: action.stat, value: action.value };
      return {
        ...state,
        subWeapon: { ...state.subWeapon, stats: newStats }
      };
    }

    case 'SET_SUB_WEAPON_CRYSTA': {
      const crystaKey = `crysta${action.slot}` as 'crysta1' | 'crysta2';
      const newRows = [...state.subWeapon[crystaKey].rows] as typeof state.subWeapon['crysta1']['rows'];
      newRows[action.rowIndex] = { stat: action.stat, value: action.value };
      return {
        ...state,
        subWeapon: {
          ...state.subWeapon,
          [crystaKey]: { rows: newRows }
        }
      };
    }
    
    case 'SET_ARMOR':
      return {
        ...state,
        armor: { ...state.armor, [action.field]: action.value }
      };

    case 'SET_ARMOR_STAT': {
      const newStats = [...state.armor.stats];
      newStats[action.index] = { stat: action.stat, value: action.value };
      return {
        ...state,
        armor: { ...state.armor, stats: newStats }
      };
    }

    case 'SET_ARMOR_CRYSTA': {
      const crystaKey = `crysta${action.slot}` as 'crysta1' | 'crysta2';
      const newRows = [...state.armor[crystaKey].rows] as typeof state.armor['crysta1']['rows'];
      newRows[action.rowIndex] = { stat: action.stat, value: action.value };
      return {
        ...state,
        armor: {
          ...state.armor,
          [crystaKey]: { rows: newRows }
        }
      };
    }
    
    case 'SET_ADDITIONAL_GEAR':
      return {
        ...state,
        additionalGear: { ...state.additionalGear, [action.field]: action.value }
      };

    case 'SET_ADDITIONAL_STAT': {
      const newStats = [...state.additionalGear.stats] as typeof state.additionalGear.stats;
      newStats[action.index] = { stat: action.stat, value: action.value };
      return {
        ...state,
        additionalGear: { ...state.additionalGear, stats: newStats }
      };
    }
    
    case 'SET_ADDITIONAL_CRYSTA': {
      const crystaKey = `crysta${action.slot}` as 'crysta1' | 'crysta2';
      const newRows = [...state.additionalGear[crystaKey].rows] as typeof state.additionalGear['crysta1']['rows'];
      newRows[action.rowIndex] = { stat: action.stat, value: action.value };
      return {
        ...state,
        additionalGear: {
          ...state.additionalGear,
          [crystaKey]: { rows: newRows }
        }
      };
    }
    
    case 'SET_SPECIAL_GEAR':
      return {
        ...state,
        specialGear: { ...state.specialGear, [action.field]: action.value }
      };

    case 'SET_SPECIAL_STAT': {
      const newStats = [...state.specialGear.stats] as typeof state.specialGear.stats;
      newStats[action.index] = { stat: action.stat, value: action.value };
      return {
        ...state,
        specialGear: { ...state.specialGear, stats: newStats }
      };
    }
    
    case 'SET_SPECIAL_CRYSTA': {
      const crystaKey = `crysta${action.slot}` as 'crysta1' | 'crysta2';
      const newRows = [...state.specialGear[crystaKey].rows] as typeof state.specialGear['crysta1']['rows'];
      newRows[action.rowIndex] = { stat: action.stat, value: action.value };
      return {
        ...state,
        specialGear: {
          ...state.specialGear,
          [crystaKey]: { rows: newRows }
        }
      };
    }
    
    case 'SET_AVATAR': {
      const newAvatar = { ...state.avatar };
      newAvatar[action.slot] = [...newAvatar[action.slot]];
      newAvatar[action.slot][action.index] = { stat: action.stat, value: action.value };
      return { ...state, avatar: newAvatar };
    }
    
    case 'SET_FOOD_POTION': {
      const newFoodPotion = { ...state.foodPotion };
      newFoodPotion[action.buffType] = [...newFoodPotion[action.buffType]];
      newFoodPotion[action.buffType][action.index] = { stat: action.stat, value: action.value };
      return { ...state, foodPotion: newFoodPotion };
    }
    
    case 'SET_SKILL':
      return {
        ...state,
        skills: { ...state.skills, [action.skill]: action.value }
      };
    
    case 'SET_EQUIPMENT_BONUS': {
      const newBonuses = [...state.equipmentBonuses];
      newBonuses[action.index] = { stat: action.stat, value: action.value };
      return { ...state, equipmentBonuses: newBonuses };
    }
    
    case 'SET_THEME':
      applyTheme(action.payload);
      return { ...state, theme: action.payload };
    
    case 'RESET_STATE':
      return { ...initialState, theme: state.theme };
    
    default:
      return state;
  }
}

// ============================================
// Context Type
// ============================================

interface CalculatorContextType {
  state: CalculatorState;
  calculatedStats: CalculatedStats;
  dispatch: React.Dispatch<Action>;
  // Helper functions
  setLevel: (level: number) => void;
  setBaseStat: (stat: keyof BaseStats, value: number) => void;
  setPersonalStatType: (type: '' | 'CRT' | 'LUK' | 'MTL' | 'TEC') => void;
  setPersonalStatValue: (value: number) => void;
  setCharacterElement: (element: Element) => void;
  setMainWeapon: (field: string, value: unknown) => void;
  setMainWeaponStat: (index: number, stat: string, value: number) => void;
  setMainWeaponCrysta: (slot: 1 | 2, rowIndex: number, stat: string, value: number) => void;
  setSubWeapon: (field: string, value: unknown) => void;
  setSubWeaponStat: (index: number, stat: string, value: number) => void;
  setSubWeaponCrysta: (slot: 1 | 2, rowIndex: number, stat: string, value: number) => void;
  setArmor: (field: string, value: unknown) => void;
  setArmorStat: (index: number, stat: string, value: number) => void;
  setArmorCrysta: (slot: 1 | 2, rowIndex: number, stat: string, value: number) => void;
  setAdditionalGear: (field: string, value: unknown) => void;
  setAdditionalStat: (index: number, stat: string, value: number) => void;
  setAdditionalCrysta: (slot: 1 | 2, rowIndex: number, stat: string, value: number) => void;
  setSpecialGear: (field: string, value: unknown) => void;
  setSpecialStat: (index: number, stat: string, value: number) => void;
  setSpecialCrysta: (slot: 1 | 2, rowIndex: number, stat: string, value: number) => void;
  setAvatar: (slot: 'accessory' | 'top' | 'bottom', index: number, stat: string, value: number) => void;
  setFoodPotion: (buffType: 'food' | 'potion1' | 'potion2', index: number, stat: string, value: number) => void;
  setSkill: (skill: keyof PassiveSkills, value: SkillLevel | SkillInfo) => void;
  setEquipmentBonus: (index: number, stat: string, value: number) => void;
  setTheme: (theme: Theme) => void;
  resetState: () => void;
}

const CalculatorContext = createContext<CalculatorContextType | undefined>(undefined);

// ============================================
// Provider Component
// ============================================

export function CalculatorProvider({ children }: { children: React.ReactNode }) {
  // Load saved state from localStorage or use initial state
  const loadSavedState = (): CalculatorState => {
    try {
      const saved = localStorage.getItem('toram-calculator-state');
      if (saved) {
        const parsed = JSON.parse(saved);
        // Deep merge with initialState to ensure all nested structures are present
        return {
          ...initialState,
          ...parsed,
          character: { ...initialState.character, ...parsed.character },
          mainWeapon: { 
            ...initialState.mainWeapon, 
            ...parsed.mainWeapon,
            stats: parsed.mainWeapon?.stats?.length ? parsed.mainWeapon.stats : initialState.mainWeapon.stats,
            crysta1: { ...initialState.mainWeapon.crysta1, ...parsed.mainWeapon?.crysta1 },
            crysta2: { ...initialState.mainWeapon.crysta2, ...parsed.mainWeapon?.crysta2 }
          },
          subWeapon: { 
            ...initialState.subWeapon, 
            ...parsed.subWeapon,
            stats: parsed.subWeapon?.stats?.length ? parsed.subWeapon.stats : initialState.subWeapon.stats,
            crysta1: { ...initialState.subWeapon.crysta1, ...parsed.subWeapon?.crysta1 },
            crysta2: { ...initialState.subWeapon.crysta2, ...parsed.subWeapon?.crysta2 }
          },
          armor: { 
            ...initialState.armor, 
            ...parsed.armor,
            stats: parsed.armor?.stats?.length ? parsed.armor.stats : initialState.armor.stats,
            crysta1: { ...initialState.armor.crysta1, ...parsed.armor?.crysta1 },
            crysta2: { ...initialState.armor.crysta2, ...parsed.armor?.crysta2 }
          },
          additionalGear: { 
            ...initialState.additionalGear, 
            ...parsed.additionalGear,
            stats: parsed.additionalGear?.stats?.length ? parsed.additionalGear.stats : initialState.additionalGear.stats,
            crysta1: { ...initialState.additionalGear.crysta1, ...parsed.additionalGear?.crysta1 },
            crysta2: { ...initialState.additionalGear.crysta2, ...parsed.additionalGear?.crysta2 }
          },
          specialGear: { 
            ...initialState.specialGear, 
            ...parsed.specialGear,
            stats: parsed.specialGear?.stats?.length ? parsed.specialGear.stats : initialState.specialGear.stats,
            crysta1: { ...initialState.specialGear.crysta1, ...parsed.specialGear?.crysta1 },
            crysta2: { ...initialState.specialGear.crysta2, ...parsed.specialGear?.crysta2 }
          },
          avatar: { 
            ...initialState.avatar, 
            ...parsed.avatar,
            accessory: parsed.avatar?.accessory?.length ? parsed.avatar.accessory : initialState.avatar.accessory,
            top: parsed.avatar?.top?.length ? parsed.avatar.top : initialState.avatar.top,
            bottom: parsed.avatar?.bottom?.length ? parsed.avatar.bottom : initialState.avatar.bottom
          },
          foodPotion: { 
            ...initialState.foodPotion, 
            ...parsed.foodPotion,
            food: parsed.foodPotion?.food?.length ? parsed.foodPotion.food : initialState.foodPotion.food,
            potion1: parsed.foodPotion?.potion1?.length ? parsed.foodPotion.potion1 : initialState.foodPotion.potion1,
            potion2: parsed.foodPotion?.potion2?.length ? parsed.foodPotion.potion2 : initialState.foodPotion.potion2
          },
          skills: { ...initialState.skills, ...parsed.skills },
          equipmentBonuses: parsed.equipmentBonuses?.length ? parsed.equipmentBonuses : initialState.equipmentBonuses,
          theme: initialState.theme
        };
      }
    } catch (e) {
      console.error('Failed to load saved state:', e);
    }
    return initialState;
  };

  const [state, dispatch] = useReducer(calculatorReducer, initialState, loadSavedState);

  // Save state to localStorage whenever it changes
  React.useEffect(() => {
    try {
      localStorage.setItem('toram-calculator-state', JSON.stringify(state));
    } catch (e) {
      console.error('Failed to save state:', e);
    }
  }, [state]);

  // Apply theme on mount
  React.useEffect(() => {
    applyTheme(state.theme);
  }, []);
  
  // Calculate stats whenever state changes
  const calculatedStats = useMemo(() => {
    return calculateAllStats(state);
  }, [state]);
  
  // Helper callbacks
  const setLevel = useCallback((level: number) => {
    dispatch({ type: 'SET_LEVEL', payload: level });
  }, []);
  
  const setBaseStat = useCallback((stat: keyof BaseStats, value: number) => {
    dispatch({ type: 'SET_BASE_STAT', stat, value });
  }, []);
  
  const setPersonalStatType = useCallback((type: '' | 'CRT' | 'LUK' | 'MTL' | 'TEC') => {
    dispatch({ type: 'SET_PERSONAL_STAT_TYPE', payload: type });
  }, []);
  
  const setPersonalStatValue = useCallback((value: number) => {
    dispatch({ type: 'SET_PERSONAL_STAT_VALUE', payload: value });
  }, []);
    
    const setCharacterElement = useCallback((element: Element) => {
      dispatch({ type: 'SET_CHARACTER_ELEMENT', payload: element });
    }, []);
  
  const setMainWeapon = useCallback((field: string, value: unknown) => {
    dispatch({ type: 'SET_MAIN_WEAPON', field, value });
  }, []);

  const setMainWeaponStat = useCallback((index: number, stat: string, value: number) => {
    dispatch({ type: 'SET_MAIN_WEAPON_STAT', index, stat, value });
  }, []);

  const setMainWeaponCrysta = useCallback((slot: 1 | 2, rowIndex: number, stat: string, value: number) => {
    dispatch({ type: 'SET_MAIN_WEAPON_CRYSTA', slot, rowIndex, stat, value });
  }, []);
  
  const setSubWeapon = useCallback((field: string, value: unknown) => {
    dispatch({ type: 'SET_SUB_WEAPON', field, value });
  }, []);

  const setSubWeaponStat = useCallback((index: number, stat: string, value: number) => {
    dispatch({ type: 'SET_SUB_WEAPON_STAT', index, stat, value });
  }, []);

  const setSubWeaponCrysta = useCallback((slot: 1 | 2, rowIndex: number, stat: string, value: number) => {
    dispatch({ type: 'SET_SUB_WEAPON_CRYSTA', slot, rowIndex, stat, value });
  }, []);
  
  const setArmor = useCallback((field: string, value: unknown) => {
    dispatch({ type: 'SET_ARMOR', field, value });
  }, []);

  const setArmorStat = useCallback((index: number, stat: string, value: number) => {
    dispatch({ type: 'SET_ARMOR_STAT', index, stat, value });
  }, []);

  const setArmorCrysta = useCallback((slot: 1 | 2, rowIndex: number, stat: string, value: number) => {
    dispatch({ type: 'SET_ARMOR_CRYSTA', slot, rowIndex, stat, value });
  }, []);
  
  const setAdditionalGear = useCallback((field: string, value: unknown) => {
    dispatch({ type: 'SET_ADDITIONAL_GEAR', field, value });
  }, []);
  
  const setAdditionalStat = useCallback((index: number, stat: string, value: number) => {
    dispatch({ type: 'SET_ADDITIONAL_STAT', index, stat, value });
  }, []);
  
  const setAdditionalCrysta = useCallback((slot: 1 | 2, rowIndex: number, stat: string, value: number) => {
    dispatch({ type: 'SET_ADDITIONAL_CRYSTA', slot, rowIndex, stat, value });
  }, []);
  
  const setSpecialGear = useCallback((field: string, value: unknown) => {
    dispatch({ type: 'SET_SPECIAL_GEAR', field, value });
  }, []);
  
  const setSpecialStat = useCallback((index: number, stat: string, value: number) => {
    dispatch({ type: 'SET_SPECIAL_STAT', index, stat, value });
  }, []);
  
  const setSpecialCrysta = useCallback((slot: 1 | 2, rowIndex: number, stat: string, value: number) => {
    dispatch({ type: 'SET_SPECIAL_CRYSTA', slot, rowIndex, stat, value });
  }, []);
  
  const setAvatar = useCallback((slot: 'accessory' | 'top' | 'bottom', index: number, stat: string, value: number) => {
    dispatch({ type: 'SET_AVATAR', slot, index, stat, value });
  }, []);
  
  const setFoodPotion = useCallback((buffType: 'food' | 'potion1' | 'potion2', index: number, stat: string, value: number) => {
    dispatch({ type: 'SET_FOOD_POTION', buffType, index, stat, value });
  }, []);
  
  const setSkill = useCallback((skill: keyof PassiveSkills, value: SkillLevel | SkillInfo) => {
    // If value is a number, convert it to SkillInfo object
    const skillInfo = typeof value === 'number' ? { level: value } : value;
    dispatch({ type: 'SET_SKILL', skill, value: skillInfo });
  }, []);
  
  const setEquipmentBonus = useCallback((index: number, stat: string, value: number) => {
    dispatch({ type: 'SET_EQUIPMENT_BONUS', index, stat, value });
  }, []);
  
  const setTheme = useCallback((theme: Theme) => {
    dispatch({ type: 'SET_THEME', payload: theme });
  }, []);
  
  const resetState = useCallback(() => {
    localStorage.removeItem('toram-calculator-state');
    dispatch({ type: 'RESET_STATE' });
  }, []);
  
  const value: CalculatorContextType = {
    state,
    calculatedStats,
    dispatch,
    setLevel,
    setBaseStat,
    setPersonalStatType,
    setPersonalStatValue,
    setCharacterElement,
    setMainWeapon,
    setMainWeaponStat,
    setMainWeaponCrysta,
    setSubWeapon,
    setSubWeaponStat,
    setSubWeaponCrysta,
    setArmor,
    setArmorStat,
    setArmorCrysta,
    setAdditionalGear,
    setAdditionalStat,
    setAdditionalCrysta,
    setSpecialGear,
    setSpecialStat,
    setSpecialCrysta,
    setAvatar,
    setFoodPotion,
    setSkill,
    setEquipmentBonus,
    setTheme,
    resetState
  };
  
  return (
    <CalculatorContext.Provider value={value}>
      {children}
    </CalculatorContext.Provider>
  );
}

// ============================================
// Hook
// ============================================

export function useCalculator() {
  const context = useContext(CalculatorContext);
  if (context === undefined) {
    throw new Error('useCalculator must be used within a CalculatorProvider');
  }
  return context;
}
