import { useState, useEffect, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { CharacterSection } from '../sections/CharacterSection';
import { EquipmentSection } from '../sections/EquipmentSection';
import { SkillsSection } from '../sections/SkillsSection';
import { ModifiersSection } from '../sections/ModifiersSection';
import { ResultsPanel } from '../results/ResultsPanel';

interface MainLayoutProps {
  children?: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(260);

  // Close sidebar on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && sidebarOpen) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [sidebarOpen]);

  // Responsive sidebar width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSidebarWidth(240);
      } else {
        setSidebarWidth(260);
      }
    };
    
    handleResize(); // Set initial width
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Sidebar Panel */}
      <div style={{
        position: 'fixed',
        left: sidebarOpen ? '0' : `-${sidebarWidth}px`,
        top: '4rem',
        width: `${sidebarWidth}px`,
        height: 'calc(100vh - 4rem)',
        background: 'var(--bg-surface)',
        borderRight: '1px solid var(--br-1)',
        boxShadow: sidebarOpen ? 'var(--sh-lg)' : 'none',
        zIndex: 40,
        transition: 'left 0.3s ease, box-shadow 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <div style={{ padding: '1.5rem', flex: 1 }}>
          <h3 style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            color: 'var(--tx-3)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '1rem',
          }}>
            Navigation
          </h3>
          
          <Link
            to="/"
            onClick={() => setSidebarOpen(false)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 16px',
              background: 'var(--bg-raised)',
              border: '1px solid var(--br-1)',
              borderRadius: 'var(--r-md)',
              textDecoration: 'none',
              marginBottom: '0.75rem',
              transition: 'all 0.2s ease',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent)';
              e.currentTarget.style.boxShadow = '0 0 0 2px var(--accent-dim)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = 'var(--br-1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent)';
              e.currentTarget.style.transform = 'translateX(4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--br-1)';
              e.currentTarget.style.transform = 'translateX(0)';
            }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--accent)' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <div>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--tx-1)' }}>
                Stat Calculator
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--tx-3)', marginTop: '2px' }}>
                Calculate damage & stats
              </div>
            </div>
          </Link>

          <Link
            to="/fill-stat"
            onClick={() => setSidebarOpen(false)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 16px',
              background: 'var(--bg-raised)',
              border: '1px solid var(--br-1)',
              borderRadius: 'var(--r-md)',
              textDecoration: 'none',
              marginBottom: '0.75rem',
              transition: 'all 0.2s ease',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent)';
              e.currentTarget.style.boxShadow = '0 0 0 2px var(--accent-dim)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = 'var(--br-1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent)';
              e.currentTarget.style.transform = 'translateX(4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--br-1)';
              e.currentTarget.style.transform = 'translateX(0)';
            }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--accent)' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--tx-1)' }}>
                Fill Stat Simulator
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--tx-3)', marginTop: '2px' }}>
                Plan equipment statting
              </div>
            </div>
          </Link>

          <div style={{
            marginTop: '2rem',
            padding: '1rem',
            background: 'var(--accent-dim)',
            border: '1px solid var(--accent-edge)',
            borderRadius: 'var(--r-md)',
          }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--tx-2)', lineHeight: 1.5 }}>
              💡 More tools and reference pages coming soon!
            </p>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          padding: '1rem 1.5rem',
          borderTop: '1px solid var(--br-1)',
        }}>
          <p style={{ fontSize: '0.65rem', color: 'var(--tx-4)', textAlign: 'center' }}>
            Toram Calculator v4.7
          </p>
        </div>
      </div>

      {/* Overlay Backdrop (Mobile Only) */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(4px)',
            zIndex: 30,
            transition: 'opacity 0.3s ease',
          }}
          aria-hidden="true"
        />
      )}

      <Header sidebarOpen={sidebarOpen} onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      <main style={{ flex: 1, width: '100%', paddingTop: '4.75rem' }}>
        <div className="w-full mx-auto" style={{ 
          paddingLeft: sidebarOpen ? '1.5rem' : '1.5rem', 
          paddingRight: '1.5rem', 
          paddingTop: '1.75rem', 
          paddingBottom: '3rem', 
          maxWidth: sidebarOpen ? `calc(1400px - ${sidebarWidth}px)` : '1400px',
          width: '100%',
          marginLeft: sidebarOpen ? `${sidebarWidth}px` : 'auto',
          marginRight: 'auto',
          transition: 'max-width 0.3s ease, margin-left 0.3s ease'
        }}>
          {children || (
            <>
              {/* Input Sections */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                <CharacterSection />
                <EquipmentSection />
                <SkillsSection />
                <ModifiersSection />
              </div>

              {/* Results */}
              <div style={{ marginTop: '0' }}>
                <ResultsPanel />
              </div>
            </>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid var(--br-1)',
        background: 'var(--header-bg)',
        backdropFilter: 'blur(12px)',
        padding: '1rem',
      }}>
        <p style={{
          textAlign: 'center',
          fontSize: '0.72rem',
          color: 'var(--tx-3)',
          letterSpacing: '0.04em',
        }}>
          Toram Online Stat Calculator — PRP v4.7
        </p>
      </footer>
    </div>
  );
}