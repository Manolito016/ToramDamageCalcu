import { useCalculator } from '../../context/CalculatorContext';
import { personalStatOptions } from '../../data/statLists';
import { calculateStatPointsUsed, calculateMaxStatPoints } from '../../utils/calculations';
import type { BaseStats } from '../../types';

const ROW: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0.625rem 0',
  borderBottom: '1px solid var(--br-1)',
};

const ROW_LAST: React.CSSProperties = {
  ...ROW,
  borderBottom: 'none',
  paddingBottom: 0,
};

const ROW_LABEL: React.CSSProperties = {
  fontSize: '0.8rem',
  fontWeight: 500,
  color: 'var(--tx-2)',
  letterSpacing: '0.02em',
  textTransform: 'none',
  margin: 0,
};

const NUM_INPUT: React.CSSProperties = {
  width: '80px',
  background: 'var(--bg-float)',
  border: '1px solid var(--br-2)',
  borderRadius: 'var(--r-sm)',
  color: 'var(--tx-1)',
  fontSize: '0.8125rem',
  fontFamily: 'var(--font-mono)',
  padding: '0.35rem 0.5rem',
  outline: 'none',
  textAlign: 'center',
};

export function CharacterSection() {
  const { state, setLevel, setBaseStat, setPersonalStatType, setPersonalStatValue } = useCalculator();
  const { character } = state;

  const statPointsUsed = calculateStatPointsUsed(character.baseStats);
  const maxStatPoints = calculateMaxStatPoints(character.level);

  const baseStatLabels: Record<keyof BaseStats, string> = {
    STR: 'STR', INT: 'INT', VIT: 'VIT', AGI: 'AGI', DEX: 'DEX',
  };

  const focusTeal = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = 'var(--accent)';
    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(56,217,192,0.12)';
  };
  const blurReset = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = 'var(--br-2)';
    e.currentTarget.style.boxShadow = 'none';
  };

  return (
    <section className="section-card">
      <div className="section-header">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--accent)' }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        Character Properties
      </div>

      <div style={{ padding: '1.25rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>

        {/* Stat points usage bar */}
        <div style={{
          background: 'var(--bg-raised)',
          border: '1px solid var(--br-1)',
          borderRadius: 'var(--r-lg)',
          padding: '0.875rem 1.125rem',
        }}>
          <div style={{
            fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.09em',
            textTransform: 'uppercase', color: 'var(--tx-3)',
            marginBottom: '0.625rem',
          }}>
            Stat Points
          </div>

          {/* Progress bar */}
          <div style={{
            height: '4px', background: 'var(--br-2)',
            borderRadius: '9999px', marginBottom: '0.5rem', overflow: 'hidden',
          }}>
            <div style={{
              height: '100%',
              width: `${Math.min(100, (statPointsUsed / maxStatPoints) * 100)}%`,
              background: statPointsUsed > maxStatPoints
                ? '#ef4444'
                : 'linear-gradient(90deg, var(--accent-muted), var(--accent))',
              borderRadius: '9999px',
              transition: 'width 0.3s ease',
            }} />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.75rem', color: statPointsUsed > maxStatPoints ? '#ef4444' : 'var(--tx-2)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, color: statPointsUsed > maxStatPoints ? '#ef4444' : 'var(--accent)' }}>
                {statPointsUsed}
              </span>
              <span style={{ color: 'var(--tx-3)' }}> / {maxStatPoints} used</span>
            </span>
            <span style={{ fontSize: '0.65rem', color: 'var(--tx-4)', letterSpacing: '0.02em' }}>
              Adjust max in profile settings
            </span>
          </div>
        </div>

        {/* Attributes */}
        <div style={{
          background: 'var(--bg-raised)',
          border: '1px solid var(--br-1)',
          borderRadius: 'var(--r-lg)',
          padding: '0.875rem 1.125rem',
        }}>
          <div style={{
            fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.09em',
            textTransform: 'uppercase', color: 'var(--tx-3)',
            marginBottom: '0.5rem', paddingBottom: '0.5rem',
            borderBottom: '1px solid var(--br-1)',
          }}>
            Attributes
          </div>

          {/* Level */}
          <div style={ROW}>
            <span style={ROW_LABEL}>Level</span>
            <input
              type="number"
              value={character.level}
              onChange={e => setLevel(parseInt(e.target.value) || 1)}
              min={1} max={300}
              style={NUM_INPUT}
              onFocus={focusTeal} onBlur={blurReset}
            />
          </div>

          {/* Base stats */}
          {(Object.keys(baseStatLabels) as Array<keyof BaseStats>).map((stat) => (
            <div key={stat} style={ROW}>
              <span style={ROW_LABEL}>{baseStatLabels[stat]}</span>
              <input
                type="number"
                value={character.baseStats[stat]}
                onChange={e => setBaseStat(stat, parseInt(e.target.value) || 1)}
                min={1} max={999}
                style={NUM_INPUT}
                onFocus={focusTeal} onBlur={blurReset}
              />
            </div>
          ))}

          {/* Personal stat — spans two inputs */}
          <div style={{ ...ROW_LAST, gap: '0.625rem', justifyContent: 'space-between' }}>
            <span style={ROW_LABEL}>Personal Stat</span>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <select
                value={character.personalStat.type || ''}
                onChange={e => setPersonalStatType(e.target.value as '' | 'CRT' | 'LUK' | 'MTL' | 'TEC')}
                style={{ ...NUM_INPUT, width: '72px', cursor: 'pointer' }}
                onFocus={focusTeal} onBlur={blurReset}
              >
                <option value="">—</option>
                {personalStatOptions.map(o => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
              <input
                type="number"
                value={character.personalStat.value}
                onChange={e => setPersonalStatValue(parseInt(e.target.value) || 0)}
                min={0} max={999}
                disabled={!character.personalStat.type}
                style={{
                  ...NUM_INPUT,
                  opacity: character.personalStat.type ? 1 : 0.35,
                  cursor: character.personalStat.type ? 'text' : 'not-allowed',
                }}
                onFocus={focusTeal} onBlur={blurReset}
              />
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}