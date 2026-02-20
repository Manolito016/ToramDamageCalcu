import { SelectInput } from './SelectInput';
import type { EquipmentCrystal } from '../../types';

interface CrystalSlotProps {
  label: string;
  crystal: EquipmentCrystal;
  options: { value: string; label: string }[];
  onRowChange: (rowIndex: number, stat: string, value: number) => void;
}

export function CrystalSlot({ label, crystal, options, onRowChange }: CrystalSlotProps) {
  return (
    <div style={{
      background: 'var(--bg-float)',
      border: '1px solid var(--br-2)',
      borderRadius: 'var(--r-md)',
      padding: '0.75rem',
    }}>
      {/* Crystal label */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        marginBottom: '0.625rem',
      }}>
        <span style={{
          width: '6px', height: '6px',
          borderRadius: '2px',
          background: 'var(--accent)',
          boxShadow: '0 0 6px var(--accent-glow)',
          transform: 'rotate(45deg)',
          flexShrink: 0,
          display: 'inline-block',
        }} />
        <span style={{
          fontSize: '0.65rem',
          fontWeight: 700,
          letterSpacing: '0.09em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
        }}>
          {label}
        </span>
      </div>

      {/* Rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
        {crystal.rows.map((row, index) => (
          <div key={index} style={{ display: 'grid', gridTemplateColumns: '1fr 80px', gap: '0.5rem', alignItems: 'end' }}>
            <SelectInput
              label={index === 0 ? 'Stat' : ''}
              value={row.stat}
              options={options}
              onChange={(stat) => onRowChange(index, stat, row.value)}
            />
            <div>
              {index === 0 && (
                <label style={{
                  fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.06em',
                  textTransform: 'uppercase', color: 'var(--tx-3)',
                  display: 'block', marginBottom: '0.3rem',
                }}>
                  Value
                </label>
              )}
              <input
                type="number"
                value={row.value}
                onChange={(e) => onRowChange(index, row.stat, parseInt(e.target.value) || 0)}
                min={0}
                style={{
                  width: '100%',
                  background: 'var(--bg-base)',
                  border: '1px solid var(--br-2)',
                  borderRadius: 'var(--r-sm)',
                  color: 'var(--tx-1)',
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-mono)',
                  padding: '0.35rem 0.5rem',
                  outline: 'none',
                  textAlign: 'center',
                }}
                onFocus={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'var(--br-2)')}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}