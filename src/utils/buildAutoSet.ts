// Build Auto-Set Utility
// Parses AI recommendations and applies them to calculator

export interface BuildRecommendation {
  level?: number;
  stats?: {
    STR?: number;
    INT?: number;
    VIT?: number;
    AGI?: number;
    DEX?: number;
  };
  mainWeapon?: {
    type?: string;
    atk?: number;
    stability?: number;
  };
  subWeapon?: {
    type?: string;
  };
  armor?: {
    type?: string;
    def?: number;
  };
  passiveSkills?: Array<{
    name: string;
    level: number;
  }>;
}

/**
 * Parse build recommendation from AI response
 * Looks for structured JSON or common patterns
 */
export function parseBuildRecommendation(text: string): BuildRecommendation | null {
  try {
    // Try to find JSON in the response
    const jsonMatch = text.match(/\{[\s\S]*"level"[\s\S]*\}/);
    if (jsonMatch) {
      const parsed = JSON.parse(jsonMatch[0]);
      return parsed as BuildRecommendation;
    }

    // Try to parse from markdown code block
    const codeBlockMatch = text.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (codeBlockMatch) {
      const parsed = JSON.parse(codeBlockMatch[1]);
      return parsed as BuildRecommendation;
    }

    return null;
  } catch {
    return null;
  }
}

/**
 * Generate a structured build recommendation prompt
 * Add this to AI system prompt to encourage structured output
 */
export const BUILD_AUTO_SET_INSTRUCTION = `

BUILD AUTO-FORMAT INSTRUCTION:
When suggesting a complete build optimization, include a JSON block at the end:

\`\`\`json
{
  "level": 200,
  "stats": { "STR": 500, "DEX": 300, "VIT": 200, "AGI": 100, "INT": 1 },
  "mainWeapon": { "type": "One-Handed Sword", "atk": 150 },
  "subWeapon": { "type": "Shield" },
  "armor": { "type": "Light Armor" },
  "passiveSkills": [
    { "name": "Sword Mastery", "level": 10 },
    { "name": "Quick Slash", "level": 10 }
  ]
}
\`\`\`

This allows the calculator to auto-apply your recommendation with one click.`;

/**
 * Apply build recommendation to calculator state
 * Returns array of actions to dispatch
 */
export function generateApplyActions(
  recommendation: BuildRecommendation
): Array<{ type: string; [key: string]: any }> {
  const actions: Array<{ type: string; [key: string]: any }> = [];

  // Level
  if (recommendation.level) {
    actions.push({ type: 'SET_LEVEL', payload: recommendation.level });
  }

  // Stats
  if (recommendation.stats) {
    const statMap = ['STR', 'INT', 'VIT', 'AGI', 'DEX'] as const;
    for (const stat of statMap) {
      if (recommendation.stats[stat]) {
        actions.push({ type: 'SET_BASE_STAT', stat, value: recommendation.stats[stat]! });
      }
    }
  }

  // Main Weapon
  if (recommendation.mainWeapon) {
    if (recommendation.mainWeapon.type) {
      actions.push({ type: 'SET_MAIN_WEAPON', field: 'type', value: recommendation.mainWeapon.type });
    }
    if (recommendation.mainWeapon.atk !== undefined) {
      actions.push({ type: 'SET_MAIN_WEAPON', field: 'atk', value: recommendation.mainWeapon.atk });
    }
    if (recommendation.mainWeapon.stability !== undefined) {
      actions.push({ type: 'SET_MAIN_WEAPON', field: 'stability', value: recommendation.mainWeapon.stability });
    }
  }

  // Sub Weapon
  if (recommendation.subWeapon?.type) {
    actions.push({ type: 'SET_SUB_WEAPON', field: 'type', value: recommendation.subWeapon.type });
  }

  // Armor
  if (recommendation.armor) {
    if (recommendation.armor.type) {
      actions.push({ type: 'SET_ARMOR', field: 'type', value: recommendation.armor.type });
    }
    if (recommendation.armor.def !== undefined) {
      actions.push({ type: 'SET_ARMOR', field: 'def', value: recommendation.armor.def });
    }
  }

  // Passive Skills
  if (recommendation.passiveSkills) {
    const skillMap: Record<string, keyof import('../types').PassiveSkills> = {
      'Sword Mastery': 'swordMastery',
      'Dual Sword Mastery': 'dualSwordMastery',
      'Shot Mastery': 'shotMastery',
      'Magic Mastery': 'magicMastery',
      'Martial Mastery': 'martialMastery',
      'Halberd Mastery': 'halberdMastery',
      'Quick Slash': 'quickSlash',
      'Critical Up': 'criticalUp',
      'Cast Mastery': 'castMastery',
      'HP Boost': 'hpBoost',
      'MP Boost': 'mpBoost',
      'Attack Up': 'attackUp',
      'Magic Up': 'magicUp',
      'Defense Up': 'defenseUp',
      'Shield Mastery': 'shieldMastery',
      'Heavy Armor Mastery': 'heavyArmorMastery',
      'Light Armor Mastery': 'lightArmorMastery',
      'Camouflage': 'camouflage',
      'Godspeed': 'godspeed',
      'Bushido': 'bushido',
    };

    for (const skill of recommendation.passiveSkills) {
      const skillKey = skillMap[skill.name];
      if (skillKey) {
        actions.push({ 
          type: 'SET_SKILL', 
          skill: skillKey, 
          value: { level: skill.level } 
        });
      }
    }
  }

  return actions;
}

/**
 * Format success message after auto-applying
 */
export function formatApplySuccess(recommendation: BuildRecommendation): string {
  const changes: string[] = [];
  
  if (recommendation.level) changes.push(`Level: ${recommendation.level}`);
  if (recommendation.stats) {
    const statParts = [];
    if (recommendation.stats.STR) statParts.push(`STR ${recommendation.stats.STR}`);
    if (recommendation.stats.INT) statParts.push(`INT ${recommendation.stats.INT}`);
    if (recommendation.stats.VIT) statParts.push(`VIT ${recommendation.stats.VIT}`);
    if (recommendation.stats.AGI) statParts.push(`AGI ${recommendation.stats.AGI}`);
    if (recommendation.stats.DEX) statParts.push(`DEX ${recommendation.stats.DEX}`);
    if (statParts.length > 0) changes.push(`Stats: ${statParts.join(', ')}`);
  }
  if (recommendation.mainWeapon?.type) changes.push(`Weapon: ${recommendation.mainWeapon.type}`);
  if (recommendation.armor?.type) changes.push(`Armor: ${recommendation.armor.type}`);
  if (recommendation.passiveSkills?.length) changes.push(`Skills: ${recommendation.passiveSkills.length} applied`);

  return `✅ Build auto-applied!\n\nChanges:\n${changes.map(c => `• ${c}`).join('\n')}`;
}
