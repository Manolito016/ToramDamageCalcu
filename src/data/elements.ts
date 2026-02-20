export type Element = 'Neutral' | 'Fire' | 'Water' | 'Wind' | 'Earth' | 'Light' | 'Dark';

export const elements: Element[] = [
  'Neutral',
  'Fire',
  'Water',
  'Wind',
  'Earth',
  'Light',
  'Dark'
];

export const elementOptions = elements.map(el => ({
  value: el,
  label: el
}));

// Element options for main weapon (excluding Neutral)
export const mainWeaponElementOptions = elements
  .filter(el => el !== 'Neutral')
  .map(el => ({
    value: el,
    label: el
  }));

// Element advantage matrix (attacking element vs target element)
// Values > 1 = advantage, < 1 = disadvantage
export const elementAdvantageMatrix: Record<Element, Record<Element, number>> = {
  'Neutral': {
    'Neutral': 1,
    'Fire': 1,
    'Water': 1,
    'Wind': 1,
    'Earth': 1,
    'Light': 1,
    'Dark': 1
  },
  'Fire': {
    'Neutral': 1,
    'Fire': 0.5,
    'Water': 0.5,
    'Wind': 1.5,
    'Earth': 1,
    'Light': 1,
    'Dark': 1
  },
  'Water': {
    'Neutral': 1,
    'Fire': 1.5,
    'Water': 0.5,
    'Wind': 1,
    'Earth': 0.5,
    'Light': 1,
    'Dark': 1
  },
  'Wind': {
    'Neutral': 1,
    'Fire': 0.5,
    'Water': 1,
    'Wind': 0.5,
    'Earth': 1.5,
    'Light': 1,
    'Dark': 1
  },
  'Earth': {
    'Neutral': 1,
    'Fire': 1,
    'Water': 1.5,
    'Wind': 0.5,
    'Earth': 0.5,
    'Light': 1,
    'Dark': 1
  },
  'Light': {
    'Neutral': 1,
    'Fire': 1,
    'Water': 1,
    'Wind': 1,
    'Earth': 1,
    'Light': 0.5,
    'Dark': 1.5
  },
  'Dark': {
    'Neutral': 1,
    'Fire': 1,
    'Water': 1,
    'Wind': 1,
    'Earth': 1,
    'Light': 1.5,
    'Dark': 0.5
  }
};

// Elemental icons for display
export const elementIcons: Record<Element, string> = {
  'Neutral': '⚪',
  'Fire': '🔥',
  'Water': '💧',
  'Wind': '💨',
  'Earth': '🌍',
  'Light': '☀️',
  'Dark': '🌙'
};
