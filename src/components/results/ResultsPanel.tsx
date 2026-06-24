import React, { useState } from 'react';
import { useCalculator } from '../../context/CalculatorContext';
import { formatNumber, formatPercent } from '../../utils/formatters';
import { calculateElementalDamageMatrix, getElementIcon, formatElementalPercent, formatMultiplier } from '../../utils/calculations/elementalDamageMatrix';
import { elementIcons } from '../../data/elements';
import { aggregateAllModifiers, aggregateAllModifiersWithSources, formatStatSources, getStabilitySources } from '../../utils/calculations/derivedStats';
import type { Element } from '../../types';

interface StatRowProps {
  label: string;
  value: string | number;
  unit?: string;
  highlight?: boolean;
  statName?: string;
  isStability?: boolean;
  isSubStability?: boolean;
  isCriticalDamage?: boolean;
  isMagicCriticalDamage?: boolean;
}

function StatRow({ label, value, unit = '', highlight = false, statName, isStability = false, isSubStability = false, isCriticalDamage = false, isMagicCriticalDamage = false }: StatRowProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const { state } = useCalculator();

  // Get all modifiers with sources
  const modifiersWithSources = aggregateAllModifiersWithSources(state);

  // Format tooltip text if statName is provided
  let tooltipText = '';
  if (isStability) {
    const stabilityData = getStabilitySources(state);
    tooltipText = 'Sources for Stability:\n' + stabilityData.sources.map(s => `• ${s.source}: ${s.value >= 0 ? '+' : ''}${s.value}`).join('\n') + `\n\nTotal: ${stabilityData.total}%`;
  } else if (isSubStability) {
    tooltipText = 'Sources for Sub-Hand Stability:\n• Sub-Weapon Base: ' + (state.subWeapon.stability || 0) + '\n• Stability % Bonus: ' + (modifiersWithSources['Stability %']?.percent || 0) + '%\n\nTotal: ' + value + '%';
  } else if (isCriticalDamage) {
    const flatSources = modifiersWithSources['Critical Damage']?.sources || [];
    const percentSources = modifiersWithSources['Critical Damage %']?.sources || [];
    const lines: string[] = ['Sources for Critical Damage:'];
    if (percentSources.length > 0) {
      lines.push('\nPercentage bonuses:');
      percentSources.forEach(s => lines.push(`• ${s.source}: +${s.value}%`));
    }
    if (flatSources.length > 0) {
      lines.push('\nFlat bonuses:');
      flatSources.forEach(s => lines.push(`• ${s.source}: +${s.value}`));
    }
    if (flatSources.length === 0 && percentSources.length === 0) {
      lines.push('\nNo bonuses');
    }
    lines.push(`\nTotal: ${value}%`);
    tooltipText = lines.join('\n');
  } else if (isMagicCriticalDamage) {
    const flatSources = modifiersWithSources['Magic Critical Damage']?.sources || [];
    const lines: string[] = ['Sources for Magic Critical Damage:'];
    lines.push('\nBase: 150%');
    if (flatSources.length > 0) {
      lines.push('\nFlat bonuses:');
      flatSources.forEach(s => lines.push(`• ${s.source}: +${s.value}`));
    } else {
      lines.push('\nNo bonuses');
    }
    lines.push(`\nTotal: ${value}%`);
    tooltipText = lines.join('\n');
  } else if (statName && modifiersWithSources[statName]) {
    tooltipText = formatStatSources(label, modifiersWithSources[statName].sources);
  }
  
  return (
    <div
      className="flex items-center py-2 px-3 rounded transition-all duration-200 relative"
      style={{
        background: highlight ? 'var(--accent-dim)' : 'transparent',
        border: highlight ? '1px solid var(--border-accent)' : '1px solid transparent'
      }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <span className="text-sm flex-1 min-w-0 truncate" style={{ color: 'var(--text-secondary)' }}>{label}</span>
      <span
        className="text-sm font-medium ml-3 tabular-nums"
        style={{ color: highlight ? 'var(--accent)' : 'var(--text-primary)' }}
      >
        {value}{unit}
      </span>
      
      {/* Tooltip */}
      {tooltipText && showTooltip && (
        <div 
          className="absolute bottom-full mb-2 w-64 p-2 bg-gray-800 text-white text-xs rounded shadow-lg z-10"
          style={{
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'var(--bg-raised)',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-primary)',
            maxWidth: '240px',
            wordWrap: 'break-word',
            whiteSpace: 'pre-wrap'
          }}
        >
          {tooltipText}
        </div>
      )}
    </div>
  );
}

interface StatGroupProps {
  title: string;
  children: React.ReactNode;
}

function StatGroup({ title, children }: StatGroupProps) {
  return (
    <div className="rounded-lg overflow-hidden" style={{ background: 'var(--bg-raised)', border: '1px solid var(--border-subtle)' }}>
      <div className="px-3 py-2 border-b" style={{ borderColor: 'var(--border-subtle)', background: 'var(--bg-float)' }}>
        <h3 className="text-sm font-medium uppercase tracking-wide" style={{ color: 'var(--text-primary)' }}>
          {title}
        </h3>
      </div>
      <div className="p-3 space-y-1">
        {children}
      </div>
    </div>
  );
}

// Helper function to get DTE stats from modifiers
function getDTEStats(modifiers: Record<string, { flat: number; percent: number }>): Record<Element, number> {
  return {
    'Neutral': modifiers['Damage To Neutral %']?.percent || 0,
    'Fire': modifiers['Damage To Fire %']?.percent || 0,
    'Water': modifiers['Damage To Water %']?.percent || 0,
    'Wind': modifiers['Damage To Wind %']?.percent || 0,
    'Earth': modifiers['Damage To Earth %']?.percent || 0,
    'Light': modifiers['Damage To Light %']?.percent || 0,
    'Dark': modifiers['Damage To Dark %']?.percent || 0
  };
}

// Elemental Damage Matrix Component
function ElementalDamageMatrixComponent({ 
  int, 
  weaponType, 
  weaponElement, 
  modifiers 
}: { 
  int: number; 
  weaponType: import('../../types').MainWeaponType; 
  weaponElement: Element; 
  modifiers: Record<string, { flat: number; percent: number }>; 
}) {
  // Get DTE stats
  const dteStats = getDTEStats(modifiers);
  
  // Calculate damage matrix
  const damageMatrix = calculateElementalDamageMatrix(int, weaponType, weaponElement, dteStats);
  
  return (
    <div>
      {/* Input Parameters */}
      <div className="mb-3 p-2 rounded" style={{ background: 'var(--bg-float)', border: '1px solid var(--border-subtle)' }}>
        <div className="text-xs grid grid-cols-3 gap-2">
          <div>
            <span className="font-medium" style={{ color: 'var(--text-label)' }}>INT:</span>
            <span className="ml-1" style={{ color: 'var(--text-primary)' }}>{int}</span>
          </div>
          <div>
            <span className="font-medium" style={{ color: 'var(--text-label)' }}>Weapon:</span>
            <span className="ml-1" style={{ color: 'var(--text-primary)' }}>{weaponType}</span>
          </div>
          <div>
            <span className="font-medium" style={{ color: 'var(--text-label)' }}>Element:</span>
            <span className="ml-1" style={{ color: 'var(--text-primary)' }}>
              {getElementIcon(weaponElement)} {weaponElement}
            </span>
          </div>
        </div>
      </div>

      {/* Damage Matrix Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr style={{ color: 'var(--text-label)', background: 'var(--bg-float)' }}>
              <th className="text-left py-2 px-2 font-medium">Target</th>
              <th className="text-right py-2 px-2 font-medium">Match</th>
              <th className="text-right py-2 px-2 font-medium">INT</th>
              <th className="text-right py-2 px-2 font-medium">DTE</th>
              <th className="text-right py-2 px-2 font-medium">Total</th>
              <th className="text-right py-2 px-2 font-medium">Multiplier</th>
            </tr>
          </thead>
          <tbody>
            {damageMatrix.matrix.map((row) => (
              <tr 
                key={row.targetElement} 
                className="border-t" 
                style={{ 
                  borderColor: 'var(--border-subtle)',
                  background: row.isOptimal ? 'var(--accent-dim)' : 'transparent'
                }}
              >
                <td className="py-2 px-2">
                  <div className="flex items-center gap-1">
                    <span>{elementIcons[row.targetElement]}</span>
                    <span style={{ color: 'var(--text-primary)' }}>{row.targetElement}</span>
                    {row.isOptimal && <span className="text-yellow-500">⭐</span>}
                    {row.targetElement === 'Neutral' && <span className="text-gray-400 ml-1">(Neutral)</span>}
                  </div>
                </td>
                <td 
                  className="text-right px-2 tabular-nums"
                  style={{ 
                    color: row.isAdvantage ? 'var(--success)' : 
                           row.isDisadvantage ? 'var(--error)' : 'var(--text-muted)' 
                  }}
                >
                  {formatElementalPercent(row.matchBonus)}
                </td>
                <td className="text-right px-2 tabular-nums" style={{ color: 'var(--text-primary)' }}>
                  {formatElementalPercent(row.intBonus)}
                </td>
                <td className="text-right px-2 tabular-nums" style={{ color: 'var(--text-primary)' }}>
                  {formatElementalPercent(row.dteBonus)}
                </td>
                <td className="text-right px-2 font-medium tabular-nums" style={{ color: 'var(--accent)' }}>
                  {formatElementalPercent(row.totalPercent)}
                </td>
                <td className="text-right px-2 font-medium tabular-nums" style={{ color: 'var(--text-primary)' }}>
                  {formatMultiplier(row.multiplier)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Legend */}
      <div className="mt-3 pt-2 text-xs" style={{ borderTop: '1px solid var(--border-subtle)' }}>
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-1">
            <span className="text-green-500">↑</span>
            <span style={{ color: 'var(--text-secondary)' }}>Advantage</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-red-500">↓</span>
            <span style={{ color: 'var(--text-secondary)' }}>Disadvantage</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-yellow-500">⭐</span>
            <span style={{ color: 'var(--text-secondary)' }}>Optimal Target</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ResultsPanel() {
  const { calculatedStats, state } = useCalculator();
  const { defensive, offensivePhysical, offensiveMagic, offensiveGeneral } = calculatedStats;
  
  // Get modifiers for DTE stats
  // Re-aggregate modifiers from state since calculatedStats doesn't expose them
  const modifiers = aggregateAllModifiers(state);

  const handleCopyStats = async () => {
    const statsText = `Toram Online Build Stats
Generated: ${new Date().toLocaleString()}

=== DEFENSIVE ===
MaxHP: ${defensive.maxHP}
MaxMP: ${defensive.maxMP}
DEF: ${defensive.def}
MDEF: ${defensive.mdef}
Dodge (FLEE): ${defensive.dodge}

=== OFFENSIVE (PHYSICAL) ===
ATK: ${offensivePhysical.atk}
ATK (Critical): ${offensivePhysical.atkCritical}
Stability: ${offensivePhysical.stability}%
ASPD: ${offensivePhysical.aspd}
Critical Rate: ${offensivePhysical.criticalRate}%
Critical Damage: ${offensivePhysical.criticalDamage}%

=== OFFENSIVE (MAGIC) ===
MATK: ${offensiveMagic.matk}
Magic Stability: ${offensiveMagic.magicStability}%
CSPD: ${offensiveMagic.cspd}
Magic Critical Rate: ${offensiveMagic.magicCriticalRate}%
Magic Critical Damage: ${offensiveMagic.magicCriticalDamage}%

=== OFFENSIVE (GENERAL) ===
Short Range Damage: ${offensiveGeneral.shortRangeDamage}%
Long Range Damage: ${offensiveGeneral.longRangeDamage}%
Anticipate: ${offensiveGeneral.anticipate}%
Guard Break: ${offensiveGeneral.guardBreak}%`;

    try {
      await navigator.clipboard.writeText(statsText);
      alert('Stats copied to clipboard!');
    } catch (error) {
      console.error('Failed to copy stats:', error);
      alert('Failed to copy stats');
    }
  };

  return (
    <section className="section-card">
      <div className="section-header">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--accent-light)' }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        Calculated Stats
        <button
          onClick={handleCopyStats}
          className="btn-secondary"
          style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '4px', padding: '4px 10px', fontSize: '0.75rem' }}
          title="Copy stats to clipboard"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
          </svg>
          Copy
        </button>
      </div>

      <div className="p-3 space-y-3">
        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
          Real-time calculation results based on your character configuration
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">

      {/* Defensive Stats */}
      <StatGroup title="Defensive">
        <StatRow label="MaxHP" value={formatNumber(defensive.maxHP)} highlight statName="MaxHP" />
        <StatRow label="MaxMP" value={formatNumber(defensive.maxMP)} statName="MaxMP" />
        <StatRow label="Attack MP Recovery" value={formatNumber(defensive.attackMPRecovery)} statName="Attack MP Recovery" />
        <StatRow label="DEF" value={formatNumber(defensive.def)} statName="DEF" />
        <StatRow label="MDEF" value={formatNumber(defensive.mdef)} statName="MDEF" />
        <StatRow label="Dodge (FLEE)" value={formatNumber(defensive.dodge)} statName="Dodge" />
        <StatRow label="Guard Recharge" value={formatPercent(defensive.guardRecharge)} statName="Guard Recharge %" />
        <StatRow label="Guard Power" value={formatPercent(defensive.guardPower)} statName="Guard Power %" />
        <StatRow label="Evasion Recharge" value={formatPercent(defensive.evasionRecharge)} statName="Evasion Recharge %" />
        <StatRow label="Physical Resistance" value={formatPercent(defensive.physicalResistance, 1)} statName="Physical Resistance %" />
        <StatRow label="Magic Resistance" value={formatPercent(defensive.magicResistance, 1)} statName="Magic Resistance %" />
        <StatRow label="Refine Reduction" value={formatNumber(defensive.refineReduction)} statName="Refine Reduction" />
        <StatRow label="Ailment Resistance" value={formatNumber(defensive.ailmentResistance)} statName="MTL" />
        <StatRow label="Aggro" value={formatPercent(defensive.aggro)} statName="Aggro %" />
        <StatRow label="Barrier Cooldown" value={formatPercent(defensive.barrierCooldown)} statName="Barrier Cooldown %" />
        <StatRow label="Physical Barrier" value={formatNumber(defensive.physicalBarrier)} statName="Physical Barrier" />
        <StatRow label="Magic Barrier" value={formatNumber(defensive.magicBarrier)} statName="Magic Barrier" />
        <StatRow label="Fractional Barrier" value={formatPercent(defensive.fractionalBarrier)} statName="Fractional Barrier %" />
        <StatRow label="Reflect" value={formatPercent(defensive.reflect)} statName="Reflect %" />
      </StatGroup>

      {/* Offensive Physical */}
      <StatGroup title="Offensive (Physical)">
        <StatRow label="ATK" value={formatNumber(offensivePhysical.atk)} highlight statName="ATK" />
        <StatRow label="ATK (Critical)" value={formatNumber(offensivePhysical.atkCritical)} highlight statName="ATK" />
        <StatRow label="Stability" value={formatPercent(offensivePhysical.stability)} isStability />
        <StatRow label="Sub-Hand ATK" value={formatNumber(offensivePhysical.subHandAtk)} statName="Sub-Hand ATK" />
        <StatRow label="Sub-Hand Stability" value={formatPercent(offensivePhysical.subHandStability)} isSubStability />
        <StatRow label="ASPD" value={formatNumber(offensivePhysical.aspd)} statName="ASPD" />
        <StatRow label="Motion Speed" value={formatPercent(offensivePhysical.motionSpeed)} statName="Motion Speed %" />
        <StatRow label="Physical Pierce" value={formatPercent(offensivePhysical.physicalPierce)} statName="Physical Pierce %" />
        <StatRow label="Accuracy (HIT)" value={formatNumber(offensivePhysical.accuracy)} statName="Accuracy" />
        <StatRow label="Critical Rate" value={formatNumber(offensivePhysical.criticalRate)} statName="Critical Rate" />
        <StatRow label="Critical Damage" value={`${offensivePhysical.criticalDamage}%`} isCriticalDamage />
        <StatRow label="Unsheathe Attack" value={formatPercent(offensivePhysical.unsheatheAttackPercent)} statName="Unsheathe Attack %" />
        <StatRow label="Additional Melee" value={formatPercent(offensivePhysical.additionalMelee)} statName="Additional Melee %" />
      </StatGroup>

      {/* Offensive Magic */}
      <StatGroup title="Offensive (Magic)">
        <StatRow label="MATK" value={formatNumber(offensiveMagic.matk)} highlight statName="MATK" />
        <StatRow label="Magic Stability" value={formatPercent(offensiveMagic.magicStability)} statName="Magic Stability" />
        <StatRow label="Magic Pierce" value={formatPercent(offensiveMagic.magicPierce)} statName="Magic Pierce %" />
        <StatRow label="CSPD" value={formatNumber(offensiveMagic.cspd)} statName="CSPD" />
        <StatRow label="Magic Critical Rate" value={formatNumber(offensiveMagic.magicCriticalRate)} statName="Magic Critical Rate" />
        <StatRow label="Magic Crit (Weaken)" value={formatNumber(offensiveMagic.magicCriticalRateWeaken)} statName="Magic Critical Rate" />
        <StatRow label="Magic Critical Damage" value={`${offensiveMagic.magicCriticalDamage}%`} isMagicCriticalDamage />
        <StatRow label="Additional Magic" value={formatPercent(offensiveMagic.additionalMagic)} statName="Additional Magic %" />
      </StatGroup>

      {/* Offensive General */}
      <StatGroup title="Offensive (General)">
        <StatRow label="Short Range Damage" value={formatPercent(offensiveGeneral.shortRangeDamage)} statName="Short Range Damage %" />
        <StatRow label="Long Range Damage" value={formatPercent(offensiveGeneral.longRangeDamage)} statName="Long Range Damage %" />
        <StatRow label="Anticipate" value={formatPercent(offensiveGeneral.anticipate)} statName="Anticipate %" />
        <StatRow label="Guard Break" value={formatPercent(offensiveGeneral.guardBreak)} statName="Guard Break %" />
      </StatGroup>

      {/* Elemental Damage Matrix */}
      <StatGroup title="Elemental Damage">
        <ElementalDamageMatrixComponent 
          int={Math.floor(state.character.baseStats.INT * (1 + (modifiers['INT %']?.percent || 0) / 100)) + (modifiers['INT']?.flat || 0)}
          weaponType={state.mainWeapon.type as import('../../types').MainWeaponType}
          weaponElement={(state.mainWeapon.element || 'Neutral') as Element}
          modifiers={modifiers as Record<string, { flat: number; percent: number }>}
        />
      </StatGroup>

      {/* Equipment Summary */}
      <StatGroup title="Equipment Summary">
        <StatRow label="Main Weapon" value={state.mainWeapon.type} />
        <StatRow label="Sub Weapon" value={state.subWeapon.type} />
        <StatRow label="Armor" value={state.armor.type} />
        <StatRow label="Additional" value={state.additionalGear.def > 0 ? 'Equipped' : 'None'} />
        <StatRow label="Special" value={state.specialGear.def > 0 ? 'Equipped' : 'None'} />
      </StatGroup>
        </div>
      </div>
    </section>
  );
}
