// Toram AI Web Search Service using Google Gemini
import { GoogleGenerativeAI } from '@google/generative-ai';
import { BUILD_AUTO_SET_INSTRUCTION } from '../utils/buildAutoSet';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

// Gemini model with web search capability
const model = genAI.getGenerativeModel({ 
  model: 'gemini-2.0-flash-exp',
  tools: [{
    googleSearch: {}
  } as any]
});

export interface WebSearchMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

const WEB_SEARCH_SYSTEM_PROMPT = `You are a Toram Online expert with access to real-time web search. You can:
- Search for current Toram Online patch notes and updates
- Find latest meta builds and strategies
- Look up specific skill changes or balance updates
- Check Coryn Club for latest information
- Find community discussions about game mechanics

IMPORTANT GAME MECHANICS:
- Maximum stat per attribute (STR/INT/VIT/AGI/DEX): 510
- Total stat points available depends on level
- Stats above 510 are not possible in the game
- Always respect the 510 cap when suggesting builds

WHEN TO USE WEB SEARCH:
1. User asks about recent updates/patches
2. User asks about current meta builds
3. User needs information that might have changed recently
4. User asks about specific skill mechanics you're unsure about
5. User wants latest equipment recommendations

WHEN NOT TO USE WEB SEARCH:
1. Basic stat calculations (use built-in knowledge)
2. General build advice (use built-in knowledge)
3. Simple game mechanics questions
4. Questions about the player's current build (use provided context)

RULES:
1. Always cite sources when using web search results
2. Distinguish between your knowledge and search results
3. If search results conflict with your knowledge, mention both
4. Keep responses concise and actionable
5. Always consider the player's build context when giving advice
6. NEVER suggest stats above 510 - it's impossible
7. When providing JSON build recommendations, ensure no stat exceeds 510
${BUILD_AUTO_SET_INSTRUCTION}

Tone: Helpful, accurate, and transparent about information sources.`;

export async function searchWithGemini(
  messages: WebSearchMessage[],
  query?: string,
  buildContext?: string
): Promise<{ response: string; usedSearch: boolean }> {
  try {
    // Build conversation history
    const chatHistory = messages.map(msg => ({
      role: msg.role === 'assistant' ? 'model' : msg.role,
      parts: [{ text: msg.content }]
    }));

    // Add system prompt and build context
    let systemPrompt = WEB_SEARCH_SYSTEM_PROMPT;
    if (buildContext) {
      systemPrompt += `\n\n${buildContext}`;
    }

    // Add system message to history
    chatHistory.unshift({
      role: 'user',
      parts: [{ text: systemPrompt }]
    });
    chatHistory.push({
      role: 'model',
      parts: [{ text: 'Understood. I will use web search when needed and always cite sources.' }]
    });

    // Start chat
    const chat = model.startChat({
      history: chatHistory,
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 2048,
      }
    });

    // Send message
    const result = await chat.sendMessage(query || messages[messages.length - 1].content);
    const response = result.response.text();
    
    // Check if search was used (Gemini includes search metadata)
    const usedSearch = result.response.candidates?.[0]?.groundingMetadata ? true : false;

    return {
      response,
      usedSearch
    };
  } catch (error) {
    console.error('Gemini Web Search Error:', error);
    throw error;
  }
}

export function formatBuildContextForGemini(context: any): string {
  if (!context) return '';
  
  return `CURRENT PLAYER BUILD CONTEXT:
- Level: ${context.level}
- Main Weapon: ${context.mainWeapon?.type || 'None'}
- Sub Weapon: ${context.subWeapon?.type || 'None'}
- Armor: ${context.armor?.type || 'None'}
- Stats: STR ${context.stats?.str || 0}, DEX ${context.stats?.dex || 0}, VIT ${context.stats?.vit || 0}, AGI ${context.stats?.agi || 0}, INT ${context.stats?.int || 0}
- Calculated: ATK ${context.calculatedStats?.ATK || 0}, MATK ${context.calculatedStats?.MATK || 0}, DEF ${context.calculatedStats?.DEF || 0}, MDEF ${context.calculatedStats?.MDEF || 0}`;
}
