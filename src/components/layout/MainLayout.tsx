import { Header } from './Header';
import { CharacterSection } from '../sections/CharacterSection';
import { EquipmentSection } from '../sections/EquipmentSection';
import { SkillsSection } from '../sections/SkillsSection';
import { ModifiersSection } from '../sections/ModifiersSection';
import { ResultsPanel } from '../results/ResultsPanel';

export function MainLayout() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ paddingTop: '1rem' }}>
        <Header />
      </div>

      <main style={{ flex: 1, width: '100%' }}>
        <div className="w-full mx-auto" style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem', paddingTop: '1.75rem', paddingBottom: '3rem', maxWidth: '1400px' }}>

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
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid var(--br-1)',
        background: 'rgba(12,15,20,0.7)',
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