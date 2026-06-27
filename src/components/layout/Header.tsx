import { useCalculator } from '../../context/CalculatorContext';
import { exportBuild, importBuild } from '../../utils/exportImport';
import { useState, useEffect } from 'react';
import { Send, X, MessageSquare, Search, Trash2 } from 'lucide-react';
import { sendToGroqChat } from '../../services/toramAIChat';
import { searchWithGemini, formatBuildContextForGemini } from '../../services/toramWebSearch';
// TODO: Uncomment when adding Apply Build button
// import { parseBuildRecommendation, generateApplyActions, formatApplySuccess } from '../../utils/buildAutoSet';
import type { ChatMessage } from '../../services/toramAIChat';
import ReactMarkdown from 'react-markdown';

interface HeaderProps {
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export function Header({ sidebarOpen, onToggleSidebar }: HeaderProps) {
  // TODO: Add dispatch when enabling Apply Build
  const { state, setTheme, resetState, calculatedStats /*, dispatch */ } = useCalculator();
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(() => {
    // Load chat history from localStorage
    try {
      const saved = localStorage.getItem('toram-ai-chat-memory');
      if (saved) {
        const parsed = JSON.parse(saved);
        // Only keep last 20 messages to avoid token limits
        return parsed.slice(-20);
      }
    } catch (error) {
      console.error('Failed to load chat memory:', error);
    }
    return [];
  });
  const [chatInput, setChatInput] = useState('');
  const [chatLoading, setChatLoading] = useState(false);
  const [lastUsedSearch, setLastUsedSearch] = useState(false);

  // Save chat history to localStorage whenever it changes
  useEffect(() => {
    try {
      // Keep only last 20 messages to avoid storage limits
      const recentMessages = chatMessages.slice(-20);
      localStorage.setItem('toram-ai-chat-memory', JSON.stringify(recentMessages));
    } catch (error) {
      console.error('Failed to save chat memory:', error);
    }
  }, [chatMessages]);

  const toggleTheme = () => {
    setTheme(state.theme === 'dark' ? 'light' : 'dark');
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all data? This cannot be undone.')) {
      resetState();
    }
  };

  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim() || chatLoading) return;

    const userMessage: ChatMessage = { role: 'user', content: chatInput.trim() };
    setChatMessages(prev => [...prev, userMessage]);
    setChatInput('');
    setChatLoading(true);
    setLastUsedSearch(false);

    try {
      const buildContext = {
        level: state.character.level,
        stats: {
          str: state.character.baseStats.STR || 0,
          dex: state.character.baseStats.DEX || 0,
          vit: state.character.baseStats.VIT || 0,
          agi: state.character.baseStats.AGI || 0,
          int: state.character.baseStats.INT || 0,
          mnd: 0,
        },
        mainWeapon: { type: state.mainWeapon.type || 'None', stats: {} },
        subWeapon: { type: state.subWeapon.type || 'None', stats: {} },
        armor: { type: state.armor.type || 'None', stats: {} },
        passiveSkills: [],
        calculatedStats: calculatedStats ? {
          ATK: calculatedStats.offensivePhysical.atk || 0,
          MATK: calculatedStats.offensiveMagic.matk || 0,
          DEF: calculatedStats.defensive.def || 0,
          MDEF: calculatedStats.defensive.mdef || 0,
          CR: calculatedStats.offensivePhysical.criticalRate || 0,
          ASPD: calculatedStats.offensivePhysical.aspd || 0,
        } : {} as Record<string, number>,
      };

      // Smart routing: Use Gemini for search queries, Groq for fast responses
      const needsSearch = shouldUseWebSearch(chatInput.trim());
      
      let response: string;
      let usedSearch = false;

      if (needsSearch) {
        // Use Gemini with web search
        const geminiContext = formatBuildContextForGemini(buildContext);
        const result = await searchWithGemini(
          chatMessages,
          chatInput.trim(),
          chatMessages.length === 0 ? geminiContext : undefined
        );
        response = result.response;
        usedSearch = result.usedSearch;
      } else {
        // Use Groq for fast responses
        response = await sendToGroqChat(
          [...chatMessages, userMessage],
          chatMessages.length === 0 ? buildContext : undefined
        );
      }

      const assistantMessage: ChatMessage = { 
        role: 'assistant', 
        content: usedSearch 
          ? response + '\n\n*[Searched online for this response]*'
          : response
      };
      setChatMessages(prev => [...prev, assistantMessage]);
      setLastUsedSearch(usedSearch);
    } catch (error) {
      console.error('Chat error:', error);
      setChatMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' }]);
    } finally {
      setChatLoading(false);
    }
  };

  // Clear chat memory
  const handleClearChatMemory = () => {
    if (window.confirm('Clear all chat history? This cannot be undone.')) {
      setChatMessages([]);
      localStorage.removeItem('toram-ai-chat-memory');
    }
  };

  // Determine if query needs web search
  const shouldUseWebSearch = (query: string): boolean => {
    const searchKeywords = [
      'patch', 'update', 'new', 'latest', 'recent',
      'meta', 'current', 'tier list', 'ranking',
      'coryn', 'wiki', 'forum', 'reddit',
      'nerf', 'buff', 'changed', 'balance',
      '2024', '2025', '2026' // Year-specific queries
    ];
    
    const lowerQuery = query.toLowerCase();
    return searchKeywords.some(keyword => lowerQuery.includes(keyword));
  };

  // TODO: Add "Apply Build" button to chat UI
  /*
  const _handleApplyBuild = (messageIndex: number, messageContent: string) => {
    const recommendation = parseBuildRecommendation(messageContent);
    if (!recommendation) {
      alert('No build recommendation found in this message. Ask the AI for a complete build suggestion!');
      return;
    }
  
    const actions = generateApplyActions(recommendation);
      
    // TODO: Use proper Action types
    for (const action of actions) {
      dispatch(action as any);
    }
  
    _setAppliedBuilds(prev => new Set(prev).add(messageIndex));
      
    // Show success message
    const successMsg = formatApplySuccess(recommendation);
    alert(successMsg);
  };
  */

  const handleExport = () => {
    try {
      exportBuild(state);
    } catch (error) {
      console.error('Failed to export build:', error);
      alert('Failed to export build');
    }
  };

  const handleImport = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;

      try {
        const data = await importBuild(file);
        if (window.confirm(`Import build "${data.name}"? This will replace your current build.`)) {
          localStorage.setItem('toram-calculator-state', JSON.stringify(data.state));
          window.location.reload();
        }
      } catch (error) {
        console.error('Failed to import build:', error);
        alert('Failed to import build: ' + (error instanceof Error ? error.message : 'Unknown error'));
      }
    };
    input.click();
  };

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      background: 'var(--header-bg)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--br-1)',
      boxShadow: '0 1px 0 var(--header-shadow)',
      padding: '1.5rem 1.5rem',
    }}>
      <div className="flex justify-between items-center gap-5" style={{ maxWidth: '1400px', margin: '0 auto' }}>

          {/* Left Side: Sidebar Toggle + Logo & Title */}
          <div className="flex items-center gap-3">
            {/* Sidebar Toggle Button */}
            <button
              onClick={onToggleSidebar}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                background: 'var(--bg-surface)',
                border: '1px solid var(--br-2)',
                borderRadius: 'var(--r-md)',
                boxShadow: 'var(--sh-sm)',
                cursor: 'pointer',
                transition: 'transform 0.2s ease, filter 0.2s ease, background 0.2s ease',
                color: 'var(--accent)',
                flexShrink: 0,
              }}
              title={sidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
              aria-label={sidebarOpen ? 'Close sidebar navigation' : 'Open sidebar navigation'}
              aria-expanded={sidebarOpen}
              onFocus={(e) => {
                e.currentTarget.style.outline = '2px solid var(--accent)';
                e.currentTarget.style.outlineOffset = '2px';
              }}
              onBlur={(e) => {
                e.currentTarget.style.outline = 'none';
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.filter = 'brightness(1.1)';
                e.currentTarget.style.background = 'var(--bg-float)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.filter = 'brightness(1)';
                e.currentTarget.style.background = 'var(--bg-surface)';
              }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{
                transform: sidebarOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease',
              }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            </button>

            {/* Icon mark */}
            <div style={{
              padding: '8px',
              background: 'var(--accent-dim)',
              border: '1px solid var(--accent-edge)',
              borderRadius: 'var(--r-md)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 12px var(--accent-glow)',
            }}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                style={{ color: 'var(--accent)' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>

            <div>
              <div className="flex items-baseline gap-2">
                <h1 style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '0.9375rem',
                  fontWeight: 700,
                  color: 'var(--tx-1)',
                  letterSpacing: '-0.01em',
                  lineHeight: 1.2,
                }}>
                  Stat Calculator
                </h1>
                {/* Version pill */}
                <span style={{
                  fontSize: '0.6rem',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  padding: '2px 7px',
                  borderRadius: '100px',
                  background: 'var(--accent-dim)',
                  color: 'var(--accent)',
                  border: '1px solid var(--accent-edge)',
                }}>
                  v4.7
                </span>
              </div>
              <p style={{ fontSize: '0.625rem', color: 'var(--tx-3)', marginTop: '2px', letterSpacing: '0.02em' }}>
                Toram Online
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Export */}
            <button
              onClick={handleExport}
              className="btn-secondary"
              style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 12px' }}
              title="Export build to JSON file"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span style={{ fontSize: '0.6875rem', fontWeight: 500 }}>Export</span>
            </button>

            {/* Import */}
            <button
              onClick={handleImport}
              className="btn-secondary"
              style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 12px' }}
              title="Import build from JSON file"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              <span style={{ fontSize: '0.6875rem', fontWeight: 500 }}>Import</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="btn-secondary"
              style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 12px' }}
              title={`Switch to ${state.theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {state.theme === 'dark' ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
              <span style={{ fontSize: '0.6875rem', fontWeight: 500 }}>
                {state.theme === 'dark' ? 'Light' : 'Dark'}
              </span>
            </button>

            {/* AI Chat */}
            <button
              onClick={() => setChatOpen(!chatOpen)}
              className="btn-secondary"
              style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 12px' }}
              title="Open AI Advisor"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              <span style={{ fontSize: '0.6875rem', fontWeight: 500 }}>AI</span>
            </button>

            {/* Reset */}
            <button
              onClick={handleReset}
              className="btn-secondary"
              style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 12px' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span style={{ fontSize: '0.6875rem', fontWeight: 500 }}>Reset</span>
            </button>
          </div>
      </div>
      
      {/* AI Chat Window */}
      {chatOpen && (
        <div 
          className="absolute top-full right-6 mt-2 w-[420px] max-w-[calc(100vw-3rem)] bg-[#0a0a0a] border border-[#38d9c0]/30 rounded-xl shadow-2xl flex flex-col overflow-hidden z-50"
          style={{ height: '650px', maxHeight: 'calc(100vh - 8rem)' }}
          role="dialog"
          aria-label="Toram AI Chat"
          aria-modal="true"
        >
          {/* Chat Header */}
          <div className="flex-shrink-0 flex items-center justify-between px-5 py-4 bg-[#141414] border-b border-[#38d9c0]/20">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-[#38d9c0]/10 rounded-lg flex items-center justify-center border border-[#38d9c0]/30">
                <MessageSquare className="w-5 h-5 text-[#38d9c0]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#e8edf5] text-base">AI Advisor</h3>
                <p className="text-xs text-[#7a8aaa] font-medium flex items-center gap-1">
                  {lastUsedSearch ? (
                    <><Search className="w-3 h-3" /> Gemini (Web Search)</>
                  ) : (
                    <>Powered by Groq</>
                  )}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {chatMessages.length > 0 && (
                <button
                  onClick={handleClearChatMemory}
                  className="text-[#7a8aaa] hover:text-red-400 hover:bg-red-500/10 transition-all p-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                  aria-label="Clear chat history"
                  title="Clear chat history"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={() => setChatOpen(false)}
                className="text-[#7a8aaa] hover:text-[#e8edf5] hover:bg-[#38d9c0]/10 transition-all p-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38d9c0]"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4 bg-[#0a0a0a]">
            {chatMessages.length === 0 && (
              <div className="flex flex-col items-center text-center space-y-4 py-6">
                <div className="relative">
                  <div className="w-16 h-16 mx-auto bg-[#38d9c0]/10 border border-[#38d9c0]/30 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-8 h-8 text-[#38d9c0]" />
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-[#e8edf5] font-semibold text-base">AI Advisor</p>
                  <p className="text-xs text-[#7a8aaa]">Ask about builds, skills, or strategy</p>
                </div>
              </div>
            )}

            {chatMessages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded px-3.5 py-2.5 shadow-sm ${
                  msg.role === 'user'
                    ? 'bg-[#38d9c0]/10 border border-[#38d9c0]/25 text-[#e8edf5] rounded-br-sm'
                    : 'bg-[#141414] border border-[#38d9c0]/15 text-[#e8edf5] rounded-bl-sm'
                }`}>
                  <div className="text-xs leading-relaxed">
                    {msg.role === 'user' ? (
                      <p className="whitespace-pre-wrap">{msg.content}</p>
                    ) : (
                      <ReactMarkdown
                        components={{
                          p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                          ul: ({ children }) => <ul className="list-disc ml-4 mb-2">{children}</ul>,
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

            {chatLoading && (
              <div className="flex justify-start">
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
          </div>

          {/* Chat Input */}
          <form onSubmit={handleChatSubmit} className="flex-shrink-0 px-5 py-4 bg-[#141414] border-t border-[#38d9c0]/20">
            <div className="flex gap-3">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask a question..."
                className="flex-1 bg-[#0a0a0a] border border-[#38d9c0]/20 rounded-lg px-4 py-3 text-[#e8edf5] placeholder-[#6a7a95] focus:outline-none focus:ring-2 focus:ring-[#38d9c0]/50 focus:border-[#38d9c0] text-sm transition-all"
                disabled={chatLoading}
              />
              <button
                type="submit"
                disabled={chatLoading || !chatInput.trim()}
                className="bg-[#38d9c0]/10 hover:bg-[#38d9c0]/20 border border-[#38d9c0]/30 hover:border-[#38d9c0] disabled:opacity-40 disabled:cursor-not-allowed text-[#38d9c0] px-5 py-3 rounded-lg transition-all font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38d9c0]"
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-[#6a7a95] mt-2 text-center">AI can make mistakes. Verify important decisions.</p>
          </form>
        </div>
      )}
    </header>
  );
}