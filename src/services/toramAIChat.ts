// Toram AI Chatbot Service using Groq API
import Groq from 'groq-sdk';
import { BUILD_AUTO_SET_INSTRUCTION } from '../utils/buildAutoSet';

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true // Note: For production, use backend proxy
});

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface BuildContext {
  level: number;
  stats: {
    str: number;
    dex: number;
    vit: number;
    agi: number;
    int: number;
    mnd: number;
  };
  mainWeapon: {
    type: string;
    stats: Record<string, number>;
  };
  subWeapon: {
    type: string;
    stats: Record<string, number>;
  };
  armor: {
    type: string;
    stats: Record<string, number>;
  };
  passiveSkills: Array<{
    name: string;
    level: number;
  }>;
  calculatedStats: Record<string, number>;
}

const SYSTEM_PROMPT = `You are a Toram Online expert AI assistant. You specialize in:
- Character build optimization
- Stat distribution advice
- Skill selection and leveling priorities
- Equipment and crysta recommendations
- Combat strategy and boss tactics
- Meta analysis and theorycrafting

IMPORTANT GAME MECHANICS:
- Maximum stat per attribute (STR/INT/VIT/AGI/DEX): 510
- Total stat points available depends on level
- Stats above 510 are not possible in the game
- Always respect the 510 cap when suggesting builds

RULES:
1. Always be specific with numbers when possible
2. Reference actual Toram game mechanics
3. Give actionable advice, not vague suggestions
4. If unsure, say so and provide your best estimate
5. Keep responses concise (2-4 paragraphs max)
6. Use formatting (bullet points, bold) for readability
7. Consider the player's current level and build
8. Suggest alternatives when relevant
9. NEVER suggest stats above 510 - it's impossible
10. When providing JSON build recommendations, ensure no stat exceeds 510
${BUILD_AUTO_SET_INSTRUCTION}

Tone: Friendly, knowledgeable, and practical - like a veteran player helping a friend.`;

export async function sendToGroqChat(
  messages: ChatMessage[],
  buildContext?: BuildContext
): Promise<string> {
  try {
    // Add build context as system message if provided
    const systemMessages: ChatMessage[] = [
      { role: 'system', content: SYSTEM_PROMPT }
    ];

    if (buildContext) {
      const contextMessage = buildContextToMessage(buildContext);
      systemMessages.push({ role: 'system', content: contextMessage });
    }

    const completion = await groq.chat.completions.create({
      messages: [...systemMessages, ...messages] as any,
      model: 'llama-3.1-8b-instant',
      temperature: 0.7,
      max_tokens: 1024,
      top_p: 1,
      stream: false,
    });

    return completion.choices[0]?.message?.content || 'Sorry, I could not process that request.';
  } catch (error) {
    console.error('Groq API Error:', error);
    throw error;
  }
}

function buildContextToMessage(context: BuildContext): string {
  return `CURRENT PLAYER BUILD:

Level: ${context.level}

Base Stats:
- STR: ${context.stats.str}
- DEX: ${context.stats.dex}
- VIT: ${context.stats.vit}
- AGI: ${context.stats.agi}
- INT: ${context.stats.int}
- MND: ${context.stats.mnd}

Equipment:
- Main Weapon: ${context.mainWeapon.type}
- Sub Weapon: ${context.subWeapon.type || 'None'}
- Armor: ${context.armor.type}

Passive Skills:
${context.passiveSkills.map(s => `- ${s.name}: Lv${s.level}`).join('\n') || 'None selected'}

Calculated Stats:
${Object.entries(context.calculatedStats)
  .filter(([_, v]) => v !== 0)
  .map(([k, v]) => `- ${k}: ${v}`)
  .join('\n') || 'No stats calculated yet'}

Please provide advice based on this build context.`;
}
