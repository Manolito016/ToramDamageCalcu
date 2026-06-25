import { useCalculator } from '../../context/CalculatorContext';
import { SelectInput } from '../inputs/SelectInput';
import { CrystalSlot } from '../inputs/CrystalSlot';
import { mainWeaponTypeOptions, subWeaponTypeOptions, defaultWeaponStability } from '../../data/weaponTypes';
import { armorTypeOptions } from '../../data/armorTypes';
import { refinementLevels } from '../../data/refinementTable';
import { fullStatOptions } from '../../data/statLists';
import { mainWeaponElementOptions } from '../../data/elements';
import type { StatOption, EquipmentCrystal } from '../../types';

const refinementOptions = refinementLevels.map(r => ({ value: r, label: r }));

// ─── Shared style helpers ──────────────────────────────────────────────────────

const panel: React.CSSProperties = {
  background: 'var(--bg-raised)',
  border: '1px solid var(--br-1)',
  borderRadius: 'var(--r-lg)',
  padding: '1.125rem 1.25rem',
};

const sectionDivider: React.CSSProperties = {
  borderTop: '1px solid var(--br-1)',
  marginTop: '1rem',
  paddingTop: '1rem',
};

function PanelTitle({ children }: { children: React.ReactNode }) {
  return (
    <h4 style={{
      fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.09em',
      textTransform: 'uppercase' as const, color: 'var(--tx-2)',
      margin: '0 0 1rem 0',
    }}>
      {children}
    </h4>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.08em',
      textTransform: 'uppercase' as const, color: 'var(--tx-3)',
      margin: '0 0 0.625rem 0',
    }}>
      {children}
    </p>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label style={{
      fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.06em',
      textTransform: 'uppercase' as const, color: 'var(--tx-3)',
      display: 'block', marginBottom: '0.3rem',
    }}>
      {children}
    </label>
  );
}

function NumInput({ label, value, onChange, min = 0, max }: {
  label: string; value: number; onChange: (v: number) => void; min?: number; max?: number;
}) {
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      <input
        type="number"
        value={value}
        onChange={e => onChange(parseInt(e.target.value) || 0)}
        min={min}
        max={max}
        style={{
          width: '100%',
          background: 'var(--bg-float)',
          border: '1px solid var(--br-2)',
          borderRadius: 'var(--r-sm)',
          color: 'var(--tx-1)',
          fontSize: '0.8125rem',
          fontFamily: 'var(--font-mono)',
          padding: '0.375rem 0.625rem',
          outline: 'none',
        }}
        onFocus={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
        onBlur={e => (e.currentTarget.style.borderColor = 'var(--br-2)')}
      />
    </div>
  );
}

// ─── 8-row stat bonus table (for weapon/armor base stats) ─────────────────────
function StatRows({
  rows,
  options = fullStatOptions,
  onChange,
}: {
  rows: { stat: string; value: number }[];
  options?: StatOption[];
  onChange: (index: number, stat: string, value: number) => void;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
      {/* Column headers */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 80px', gap: '0.5rem', paddingBottom: '0.25rem' }}>
        <span style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--tx-3)' }}>
          Stat
        </span>
        <span style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--tx-3)', textAlign: 'center' }}>
          Value
        </span>
      </div>
      {rows.map((row, i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 80px', gap: '0.5rem', alignItems: 'center' }}>
          <SelectInput
            label=""
            value={row.stat}
            options={options}
            onChange={stat => onChange(i, stat, row.value)}
          />
          <input
            type="number"
            value={row.value}
            onChange={e => onChange(i, row.stat, parseInt(e.target.value) || 0)}
            min={-999}
            max={999}
            style={{
              width: '100%',
              background: 'var(--bg-float)',
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
      ))}
    </div>
  );
}

// ─── Crystal pair ─────────────────────────────────────────────────────────────
function CrystalPair({
  crystal1, crystal2,
  onRowChange1, onRowChange2,
}: {
  crystal1: EquipmentCrystal; crystal2: EquipmentCrystal;
  onRowChange1: (i: number, s: string, v: number) => void;
  onRowChange2: (i: number, s: string, v: number) => void;
}) {
  return (
    <div style={sectionDivider}>
      <SectionLabel>Crystals</SectionLabel>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
        <CrystalSlot label="Crystal 1" crystal={crystal1} options={fullStatOptions} onRowChange={onRowChange1} />
        <CrystalSlot label="Crystal 2" crystal={crystal2} options={fullStatOptions} onRowChange={onRowChange2} />
      </div>
    </div>
  );
}

// ─── Group heading (Weapons / Armor & Gear) ───────────────────────────────────
function GroupHeading({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '0.625rem',
      marginBottom: '0.875rem',
    }}>
      <span style={{
        height: '1px', flex: 1,
        background: 'linear-gradient(90deg, var(--br-2), transparent)',
      }} />
      <span style={{
        fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em',
        textTransform: 'uppercase', color: 'var(--tx-3)',
        whiteSpace: 'nowrap',
      }}>
        {children}
      </span>
      <span style={{
        height: '1px', flex: 1,
        background: 'linear-gradient(90deg, transparent, var(--br-2))',
      }} />
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export function EquipmentSection() {
  const {
    state,
    setMainWeapon, setMainWeaponCrysta, setMainWeaponStat,
    setSubWeapon, setSubWeaponStat,
    setArmor, setArmorCrysta, setArmorStat,
    setAdditionalGear, setAdditionalStat, setAdditionalCrysta,
    setSpecialGear, setSpecialStat, setSpecialCrysta,
  } = useCalculator();

  const { mainWeapon, subWeapon, armor, additionalGear, specialGear } = state;

  // Create filtered stat options that exclude the selected element
  // For main weapon: empty selection defaults to Neutral internally
  const mainWeaponElement = mainWeapon.element || 'Neutral';
  const mainWeaponStatOptions = mainWeaponElement === 'Neutral' 
    ? fullStatOptions 
    : fullStatOptions.filter(option => option.value !== mainWeaponElement);
  
  // Sub-weapons use all stat options (elements don't affect sub-weapon stats)
  const subWeaponStatOptions = fullStatOptions;
  
  // Update the section label based on element selection
  const mainWeaponStatLabel = mainWeaponElement === 'Neutral' 
    ? 'Weapon Stats (8 slots)' 
    : `Weapon Stats (7 slots) - Excludes ${mainWeaponElement}`;
  


  return (
    <section className="section-card">
      <div className="section-header">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--accent)' }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        Equipment
      </div>

      <div style={{ padding: '1.25rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

        {/* ── WEAPONS ─────────────────────────────────────────────────────── */}
        <div>
          <GroupHeading>Weapons</GroupHeading>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>

            {/* Main Weapon */}
            <div style={panel}>
              <PanelTitle>Main Weapon</PanelTitle>

              {/* Base fields */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem' }}
                className="grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                <SelectInput
                  label="Weapon Type"
                  value={mainWeapon.type}
                  options={mainWeaponTypeOptions}
                  onChange={v => {
                    setMainWeapon('type', v);
                    setMainWeapon('stability', defaultWeaponStability[v] ?? 100);
                  }}
                />
                <NumInput label="ATK" value={mainWeapon.atk} onChange={v => setMainWeapon('atk', v)} />
                <SelectInput
                  label="Element"
                  value={mainWeapon.element || ''}
                  options={mainWeaponElementOptions}
                  onChange={v => setMainWeapon('element', v || undefined)}
                />
                <SelectInput
                  label="Refinement"
                  value={mainWeapon.refinement}
                  options={refinementOptions}
                  onChange={v => setMainWeapon('refinement', v)}
                />
              </div>
              <div style={{ marginTop: '0.75rem', maxWidth: '160px' }}>
                <NumInput label="Stability %" value={mainWeapon.stability} onChange={v => setMainWeapon('stability', v)} min={0} max={100} />
              </div>

              {/* Dynamic stat rows based on element selection */}
              <div style={sectionDivider}>
                <SectionLabel>{mainWeaponStatLabel}</SectionLabel>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 1.25rem' }}>
                  <StatRows
                    rows={(mainWeapon.stats ?? Array(8).fill({ stat: '', value: 0 })).slice(0, 4)}
                    options={mainWeaponStatOptions}
                    onChange={(i, stat, value) => setMainWeaponStat(i, stat, value)}
                  />
                  <StatRows
                    rows={(mainWeapon.stats ?? Array(8).fill({ stat: '', value: 0 })).slice(4, 8)}
                    options={mainWeaponStatOptions}
                    onChange={(i, stat, value) => setMainWeaponStat(i + 4, stat, value)}
                  />
                </div>
              </div>

              {/* Crystals */}
              <CrystalPair
                crystal1={mainWeapon.crysta1}
                crystal2={mainWeapon.crysta2}
                onRowChange1={(i, s, v) => setMainWeaponCrysta(1, i, s, v)}
                onRowChange2={(i, s, v) => setMainWeaponCrysta(2, i, s, v)}
              />
            </div>

            {/* Sub Weapon */}
            <div style={panel}>
              <PanelTitle>Sub Weapon</PanelTitle>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <SelectInput
                  label="Weapon Type"
                  value={subWeapon.type}
                  options={subWeaponTypeOptions}
                  onChange={v => {
                    setSubWeapon('type', v);
                    // Sub-weapons have 0% stability by default according to Toram mechanics
                    setSubWeapon('stability', 0);
                  }}
                />
                {/* Sub-weapon element selection removed - only main weapons can have elements per Toram mechanics */}
                <div></div>
              </div>

              {subWeapon.type !== 'None' && (
                <>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.75rem', marginTop: '0.75rem', maxWidth: '160px' }}>
                    <NumInput label="ATK" value={subWeapon.atk} onChange={v => setSubWeapon('atk', v)} />
                    <div style={{ fontSize: '0.6rem', color: 'var(--tx-3)', fontStyle: 'italic', marginTop: '0.25rem' }}>
                      Note: Sub-weapon ATK only applies for dagger-specific skills
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.75rem', marginTop: '0.75rem', maxWidth: '160px' }}>
                    <SelectInput
                      label="Refinement"
                      value={subWeapon.refinement}
                      options={refinementOptions}
                      onChange={v => setSubWeapon('refinement', v)}
                    />
                  </div>

                  {/* 8 stat rows */}
                  <div style={sectionDivider}>
                    <SectionLabel>Sub-Weapon Stats (8 slots)</SectionLabel>
                    <div style={{ fontSize: '0.6rem', color: 'var(--tx-3)', fontStyle: 'italic', marginBottom: '0.5rem' }}>
                      Note: Most sub-weapon stats don't apply to main damage. Shield DEF/MDEF adds to defense.
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 1.25rem' }}>
                      <StatRows
                        rows={(subWeapon.stats ?? Array(8).fill({ stat: '', value: 0 })).slice(0, 4)}
                        options={subWeaponStatOptions}
                        onChange={(i, stat, value) => setSubWeaponStat(i, stat, value)}
                      />
                      <StatRows
                        rows={(subWeapon.stats ?? Array(8).fill({ stat: '', value: 0 })).slice(4, 8)}
                        options={subWeaponStatOptions}
                        onChange={(i, stat, value) => setSubWeaponStat(i + 4, stat, value)}
                      />
                    </div>
                  </div>


                </>
              )}
            </div>
          </div>
        </div>

        {/* ── ARMOR & GEAR ─────────────────────────────────────────────────── */}
        <div>
          <GroupHeading>Armor &amp; Gear</GroupHeading>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>

            {/* Armor */}
            <div style={panel}>
              <PanelTitle>Armor</PanelTitle>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
                <SelectInput
                  label="Armor Type"
                  value={armor.type}
                  options={armorTypeOptions}
                  onChange={v => setArmor('type', v)}
                />
                <NumInput label="DEF" value={armor.def} onChange={v => setArmor('def', v)} />
                <SelectInput
                  label="Refinement"
                  value={armor.refinement}
                  options={refinementOptions}
                  onChange={v => setArmor('refinement', v)}
                />
              </div>

              {/* 8 stat rows */}
              <div style={sectionDivider}>
                <SectionLabel>Armor Stats (8 slots)</SectionLabel>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 1.25rem' }}>
                  <StatRows
                    rows={(armor.stats ?? Array(8).fill({ stat: '', value: 0 })).slice(0, 4)}
                    onChange={(i, stat, value) => setArmorStat(i, stat, value)}
                  />
                  <StatRows
                    rows={(armor.stats ?? Array(8).fill({ stat: '', value: 0 })).slice(4, 8)}
                    onChange={(i, stat, value) => setArmorStat(i + 4, stat, value)}
                  />
                </div>
              </div>

              {/* Crystals */}
              <CrystalPair
                crystal1={armor.crysta1}
                crystal2={armor.crysta2}
                onRowChange1={(i, s, v) => setArmorCrysta(1, i, s, v)}
                onRowChange2={(i, s, v) => setArmorCrysta(2, i, s, v)}
              />
            </div>

            {/* Additional Gear */}
            <div style={panel}>
              <PanelTitle>Additional Gear</PanelTitle>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <NumInput label="DEF" value={additionalGear.def} onChange={v => setAdditionalGear('def', v)} />
                <SelectInput
                  label="Refinement"
                  value={additionalGear.refinement}
                  options={refinementOptions}
                  onChange={v => setAdditionalGear('refinement', v)}
                />
              </div>

              {/* 8 stat rows */}
              <div style={sectionDivider}>
                <SectionLabel>Additional Gear Stats (8 slots)</SectionLabel>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 1.25rem' }}>
                  <StatRows
                    rows={(additionalGear.stats ?? Array(8).fill({ stat: '', value: 0 })).slice(0, 4)}
                    onChange={(i, stat, value) => setAdditionalStat(i, stat, value)}
                  />
                  <StatRows
                    rows={(additionalGear.stats ?? Array(8).fill({ stat: '', value: 0 })).slice(4, 8)}
                    onChange={(i, stat, value) => setAdditionalStat(i + 4, stat, value)}
                  />
                </div>
              </div>

              <CrystalPair
                crystal1={additionalGear.crysta1}
                crystal2={additionalGear.crysta2}
                onRowChange1={(i, s, v) => setAdditionalCrysta(1, i, s, v)}
                onRowChange2={(i, s, v) => setAdditionalCrysta(2, i, s, v)}
              />
            </div>

            {/* Special Gear */}
            <div style={panel}>
              <PanelTitle>Special Gear</PanelTitle>
              <div style={{ maxWidth: '160px' }}>
                <NumInput label="DEF" value={specialGear.def} onChange={v => setSpecialGear('def', v)} />
              </div>

              {/* 8 stat rows */}
              <div style={sectionDivider}>
                <SectionLabel>Special Gear Stats (8 slots)</SectionLabel>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 1.25rem' }}>
                  <StatRows
                    rows={(specialGear.stats ?? Array(8).fill({ stat: '', value: 0 })).slice(0, 4)}
                    onChange={(i, stat, value) => setSpecialStat(i, stat, value)}
                  />
                  <StatRows
                    rows={(specialGear.stats ?? Array(8).fill({ stat: '', value: 0 })).slice(4, 8)}
                    onChange={(i, stat, value) => setSpecialStat(i + 4, stat, value)}
                  />
                </div>
              </div>

              <CrystalPair
                crystal1={specialGear.crysta1}
                crystal2={specialGear.crysta2}
                onRowChange1={(i, s, v) => setSpecialCrysta(1, i, s, v)}
                onRowChange2={(i, s, v) => setSpecialCrysta(2, i, s, v)}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}