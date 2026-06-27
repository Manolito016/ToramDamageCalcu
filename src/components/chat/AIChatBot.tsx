import { useState, useRef, useEffect } from 'react';
import { Send, X, MessageSquare } from 'lucide-react';
import { useCalculator } from '../../context/CalculatorContext';
import { sendToGroqChat } from '../../services/toramAIChat';
import type { ChatMessage, BuildContext } from '../../services/toramAIChat';
import ReactMarkdown from 'react-markdown';

export function AIChatBot() {
  return <AIChatBotContent />;
}

export function AIChatBotContent(_props: { onClose?: () => void } = {}) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { state, calculatedStats } = useCalculator();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Close chat on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen]);

  const buildContext: BuildContext = {
    level: state.character.level,
    stats: {
      str: state.character.baseStats.STR || 0,
      dex: state.character.baseStats.DEX || 0,
      vit: state.character.baseStats.VIT || 0,
      agi: state.character.baseStats.AGI || 0,
      int: state.character.baseStats.INT || 0,
      mnd: 0, // MND doesn't exist in Toram
    },
    mainWeapon: {
      type: state.mainWeapon.type || 'None',
      stats: {},
    },
    subWeapon: {
      type: state.subWeapon.type || 'None',
      stats: {},
    },
    armor: {
      type: state.armor.type || 'None',
      stats: {},
    },
    passiveSkills: [], // TODO: Add passive skills to state
    calculatedStats: calculatedStats ? {
      ATK: calculatedStats.offensivePhysical.atk,
      MATK: calculatedStats.offensiveMagic.matk,
      DEF: calculatedStats.defensive.def,
      MDEF: calculatedStats.defensive.mdef,
      CR: calculatedStats.offensivePhysical.criticalRate,
      ASPD: calculatedStats.offensivePhysical.aspd,
    } : {},
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', content: input.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await sendToGroqChat(
        [...messages, userMessage],
        messages.length === 0 ? buildContext : undefined
      );

      const assistantMessage: ChatMessage = { role: 'assistant', content: response };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: ChatMessage = {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.',
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickQuestions = [
    "Is my build optimized?",
    "What skills should I prioritize?",
    "How can I improve my ATK?",
    "Best crysta for my weapon?",
  ];

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 w-[420px] max-w-[calc(100vw-3rem)] bg-[#0a0a0a] border border-[#38d9c0]/30 rounded-xl shadow-2xl flex flex-col overflow-hidden"
      style={{ height: '650px', maxHeight: 'calc(100vh - 3rem)' }}
      role="dialog"
      aria-label="Toram AI Chat"
      aria-modal="true"
    >
      {/* Header */}
      <div className="flex-shrink-0 flex items-center justify-between px-5 py-4 bg-[#141414] border-b border-[#38d9c0]/20">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-11 h-11 bg-[#38d9c0]/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-[#38d9c0]/30">
              <MessageSquare className="w-5 h-5 text-[#38d9c0]" />
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#38d9c0] border-2 border-[#0a0a0a] rounded-full"></span>
          </div>
          <div>
            <h3 className="font-semibold text-[#e8edf5] text-base">AI Advisor</h3>
            <p className="text-xs text-[#7a8aaa] font-medium">Powered by Groq</p>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-[#7a8aaa] hover:text-[#e8edf5] hover:bg-[#38d9c0]/10 transition-all p-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38d9c0]"
          aria-label="Close chat (Escape)"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div 
        className="flex-1 overflow-y-auto px-5 py-4 space-y-4 bg-[#0a0a0a]"
        role="log"
        aria-label="Chat messages"
        aria-live="polite"
      >
        {messages.length === 0 && (
          <div className="flex flex-col items-center text-center space-y-4 py-6">
            {/* Welcome icon */}
            <div className="relative">
              <div className="w-16 h-16 mx-auto bg-[#38d9c0]/10 border border-[#38d9c0]/30 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-8 h-8 text-[#38d9c0]" aria-hidden="true" />
              </div>
              {/* Status indicator */}
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#38d9c0] rounded-full border-2 border-[#0a0a0a]" aria-hidden="true">
                <span className="sr-only">Online</span>
              </div>
            </div>
            
            {/* Welcome text */}
            <div className="space-y-1">
              <p className="text-[#e8edf5] font-semibold text-base">AI Advisor</p>
              <p className="text-xs text-[#7a8aaa]">Ask about builds, skills, or strategy</p>
            </div>
            
            {/* Quick questions */}
            <div className="w-full space-y-1.5 pt-2">
              <p className="text-xs text-[#6a7a95] font-medium">Quick questions:</p>
              {quickQuestions.map((q, i) => (
                <button
                  key={i}
                  onClick={() => setInput(q)}
                  className="group w-full text-left px-3 py-2.5 bg-[#141414] hover:bg-[#1a1a1a] border border-[#38d9c0]/15 hover:border-[#38d9c0]/30 rounded text-xs text-[#7a8aaa] hover:text-[#e8edf5] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38d9c0]"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-[#38d9c0] text-sm leading-none">›</span>
                    {q}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
          >
            <div
              className={`max-w-[85%] rounded px-3.5 py-2.5 shadow-sm ${
                msg.role === 'user'
                  ? 'bg-[#38d9c0]/10 border border-[#38d9c0]/25 text-[#e8edf5] rounded-br-sm'
                  : 'bg-[#141414] border border-[#38d9c0]/15 text-[#e8edf5] rounded-bl-sm'
              }`}
            >
              <div className="text-xs leading-relaxed">
                {msg.role === 'user' ? (
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                ) : (
                  <ReactMarkdown
                    components={{
                      p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                      ul: ({ children }) => <ul className="list-disc list-inside space-y-1 mb-2">{children}</ul>,
                      ol: ({ children }) => <ol className="list-decimal list-inside space-y-1 mb-2">{children}</ol>,
                      li: ({ children }) => <li className="text-[#7a8aaa]">{children}</li>,
                      strong: ({ children }) => <strong className="font-semibold text-[#38d9c0]">{children}</strong>,
                      code: ({ children }) => <code className="bg-[#0a0a0a] border border-[#38d9c0]/20 px-1.5 py-0.5 rounded text-xs text-[#38d9c0]">{children}</code>,
                    }}
                  >
                    {msg.content}
                  </ReactMarkdown>
                )}
              </div>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start animate-fade-in">
            <div className="bg-[#141414] border border-[#38d9c0]/20 rounded-lg rounded-bl-md px-5 py-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-[#38d9c0] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-2 h-2 bg-[#38d9c0] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-2 h-2 bg-[#38d9c0] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
                <span className="text-sm text-[#7a8aaa] font-medium">Thinking...</span>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="flex-shrink-0 px-5 py-4 bg-[#141414] border-t border-[#38d9c0]/20">
        <div className="flex gap-3">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question..."
            className="flex-1 bg-[#0a0a0a] border border-[#38d9c0]/20 rounded-lg px-4 py-3 text-[#e8edf5] placeholder-[#6a7a95] focus:outline-none focus:ring-2 focus:ring-[#38d9c0]/50 focus:border-[#38d9c0] text-sm transition-all"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-[#38d9c0]/10 hover:bg-[#38d9c0]/20 border border-[#38d9c0]/30 hover:border-[#38d9c0] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-[#38d9c0]/10 disabled:hover:border-[#38d9c0]/30 text-[#38d9c0] px-5 py-3 rounded-lg transition-all hover:shadow-lg active:scale-95 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38d9c0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
            aria-label="Send message"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
        <p className="text-xs text-[#6a7a95] mt-2 text-center">AI can make mistakes. Verify important decisions.</p>
      </form>
    </div>
  );
}
