import { useCalculator } from '../../context/CalculatorContext';

interface HeaderProps {
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export function Header({ sidebarOpen, onToggleSidebar }: HeaderProps) {
  const { state, setTheme, resetState } = useCalculator();

  const toggleTheme = () => {
    setTheme(state.theme === 'dark' ? 'light' : 'dark');
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all data? This cannot be undone.')) {
      resetState();
    }
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
    </header>
  );
}