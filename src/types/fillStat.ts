export interface StatEntry {
  id: string;
  statName: string;
  value: number;
  isNegative: boolean;
}

export interface EquipmentPreset {
  name: string;
  type: 'weapon' | 'armor';
  maxPotential: number;
}

export interface SimulatorState {
  equipmentType: 'weapon' | 'armor';
  maxPotential: number;
  statEntries: StatEntry[];
}
