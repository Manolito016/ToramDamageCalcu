import { useState } from 'react';
import { MainLayout } from '../components/layout/MainLayout';

interface Trait {
  name: string;
  category: string;
  effect: string;
  notes?: string;
}

const traits: Trait[] = [
  // Common Effects (22 traits)
  { name: 'STR', category: 'Common Effects', effect: 'STR increases by 1 × Tier', notes: 'T1: +1 | T2: +2 | T3: +3 | T4: +4 | T5: +5' },
  { name: 'INT', category: 'Common Effects', effect: 'INT increases by 1 × Tier', notes: 'T1: +1 | T2: +2 | T3: +3 | T4: +4 | T5: +5' },
  { name: 'VIT', category: 'Common Effects', effect: 'VIT increases by 1 × Tier', notes: 'T1: +1 | T2: +2 | T3: +3 | T4: +4 | T5: +5' },
  { name: 'AGI', category: 'Common Effects', effect: 'AGI increases by 1 × Tier', notes: 'T1: +1 | T2: +2 | T3: +3 | T4: +4 | T5: +5' },
  { name: 'DEX', category: 'Common Effects', effect: 'DEX increases by 1 × Tier', notes: 'T1: +1 | T2: +2 | T3: +3 | T4: +4 | T5: +5' },
  { name: 'MaxHP', category: 'Common Effects', effect: 'MaxHP increases by 200 × Tier', notes: 'T1: +200 | T2: +400 | T3: +600 | T4: +800 | T5: +1000' },
  { name: 'MaxMP', category: 'Common Effects', effect: 'MaxMP increases by 10 × Tier', notes: 'T1: +10 | T2: +20 | T3: +30 | T4: +40 | T5: +50' },
  { name: 'ATK', category: 'Common Effects', effect: 'ATK increases by 5 × Tier', notes: 'T1: +5 | T2: +10 | T3: +15 | T4: +20 | T5: +25' },
  { name: 'MATK', category: 'Common Effects', effect: 'MATK increases by 5 × Tier', notes: 'T1: +5 | T2: +10 | T3: +15 | T4: +20 | T5: +25' },
  { name: 'DEF', category: 'Common Effects', effect: 'DEF increases by 10 × Tier', notes: 'T1: +10 | T2: +20 | T3: +30 | T4: +40 | T5: +50' },
  { name: 'MDEF', category: 'Common Effects', effect: 'MDEF increases by 10 × Tier', notes: 'T1: +10 | T2: +20 | T3: +30 | T4: +40 | T5: +50' },
  { name: 'Accuracy', category: 'Common Effects', effect: 'Accuracy increases by 3 × Tier', notes: 'T1: +3 | T2: +6 | T3: +9 | T4: +12 | T5: +15' },
  { name: 'Dodge', category: 'Common Effects', effect: 'Dodge increases by 3 × Tier', notes: 'T1: +3 | T2: +6 | T3: +9 | T4: +12 | T5: +15' },
  { name: 'ASPD', category: 'Common Effects', effect: 'ASPD increases by 50 × Tier', notes: 'T1: +50 | T2: +100 | T3: +150 | T4: +200 | T5: +250' },
  { name: 'CSPD', category: 'Common Effects', effect: 'CSPD increases by 50 × Tier', notes: 'T1: +50 | T2: +100 | T3: +150 | T4: +200 | T5: +250' },
  { name: 'Natural HP Regen', category: 'Common Effects', effect: 'Natural HP Regen increases by 15 × Tier', notes: 'T1: +15 | T2: +30 | T3: +45 | T4: +60 | T5: +75' },
  { name: 'Natural MP Regen', category: 'Common Effects', effect: 'Natural MP Regen increases by 5 × Tier', notes: 'T1: +5 | T2: +10 | T3: +15 | T4: +20 | T5: +25' },
  { name: 'Critical Rate', category: 'Common Effects', effect: 'Critical Rate increases by 1 × Tier', notes: 'T1: +1 | T2: +2 | T3: +3 | T4: +4 | T5: +5' },
  { name: 'Critical Damage', category: 'Common Effects', effect: 'Critical Damage increases by 1 × Tier', notes: 'T1: +1 | T2: +2 | T3: +3 | T4: +4 | T5: +5' },
  { name: 'Exp Gain', category: 'Common Effects', effect: 'EXP from monsters increases by 3% × Tier', notes: 'T1: +3% | T2: +6% | T3: +9% | T4: +12% | T5: +15%' },
  { name: 'Pet EXP Gain', category: 'Common Effects', effect: 'Pet EXP increases by 6% × Tier', notes: 'T1: +6% | T2: +12% | T3: +18% | T4: +24% | T5: +30%' },

  // Damage Triggered (18 traits)
  { name: 'Battlecast', category: 'Damage Triggered', effect: 'Dealing damage increases CSPD by 20 × Tier for 6s. Max 20 stacks.' },
  { name: 'Blood Regen', category: 'Damage Triggered', effect: 'Dealing damage restores 200 × Tier HP (scales with STR). Every 3s.', notes: 'Bonus: +Total STR' },
  { name: 'Blood Spell', category: 'Damage Triggered', effect: 'Dealing damage restores 200 × Tier HP (scales with INT). Every 3s.', notes: 'Bonus: +Total INT' },
  { name: 'Bunker Edge', category: 'Damage Triggered', effect: 'Dealing damage increases Physical Pierce by 1% for 5s. Activation Power 20 × Tier. Max 10 stacks.' },
  { name: 'Bunker Magica', category: 'Damage Triggered', effect: 'Dealing damage increases Magic Pierce by 1% for 5s. Activation Power 20 × Tier. Max 10 stacks.' },
  { name: 'Critical', category: 'Damage Triggered', effect: 'Dealing damage increases Critical Rate by 1 for 3s. Max 10 × Tier stacks.', notes: 'Duration refreshes on hit. Bonus: +CRT/15' },
  { name: 'Cursed Weapon', category: 'Damage Triggered', effect: 'Dealing damage: Max HP -1% for 3s, but ATK/MATK +1 × Tier. Max 99 stacks.', notes: 'Max HP = MaxHP% from equips/skills' },
  { name: 'Engineer', category: 'Damage Triggered', effect: 'Dealing damage: ATK/MATK +5+5×Tier, CSPD +10 for 20s. Every 10s.', notes: 'Scales with TEC' },
  { name: 'Fighting Magica', category: 'Damage Triggered', effect: 'Dealing damage increases MATK by 1 × Tier for 4s. Max 300/Tier stacks.' },
  { name: 'Fighting Power', category: 'Damage Triggered', effect: 'Dealing damage increases ATK by 1 × Tier for 2s. Max 300/Tier stacks.' },
  { name: 'Gearshift', category: 'Damage Triggered', effect: 'Dealing damage increases ASPD by 20 × Tier for 3s. Max 20 stacks.' },
  { name: 'Health Barrier', category: 'Damage Triggered', effect: 'Dealing damage increases Physical/Magic Barrier by 2 × Tier for 6s. Max 100 stacks.', notes: 'Bonus: +MTL/(6-Tier) per stack' },
  { name: 'Lucky Experience', category: 'Damage Triggered', effect: 'Dealing damage increases EXP Gain by 1% × Tier for 77s. Max 10 stacks.', notes: 'Bonus: +LUK/(30-5×Level)' },
  { name: 'Nimble', category: 'Damage Triggered', effect: 'Dealing damage increases Dodge by 1 × Tier for 6s. Max 30 stacks.' },
  { name: 'Precision', category: 'Damage Triggered', effect: 'Dealing damage increases Accuracy by 1 × Tier for 6s. Max 30 stacks.' },
  { name: 'Spirit Blow', category: 'Damage Triggered', effect: 'Dealing damage restores 2 × Tier MP (scales with AGI). Every 6s.', notes: 'Bonus: +Total AGI/(90-15×Tier)' },
  { name: 'Spirit Shot', category: 'Damage Triggered', effect: 'Dealing damage restores 2 × Tier MP (scales with DEX). Every 6s.', notes: 'Bonus: +Total DEX/(90-15×Tier)' },

  // Counter / Defense (16 traits)
  { name: 'Counter Evasion Mana', category: 'Counter / Defense', effect: 'Restores 20 × Tier MP when target evades (scales with INT). Every 6s.', notes: 'Bonus: +Base INT/(20-3×Tier)' },
  { name: 'Counter Evasion Power', category: 'Counter / Defense', effect: 'When target evades, ATK +100 for 5+5×Tier seconds. Every 20s.', notes: 'Bonus: +Base DEX/5' },
  { name: 'Counter Rage', category: 'Counter / Defense', effect: 'When taking damage, Aggro increases by 10% × Tier for 12s.' },
  { name: 'Counter Speed', category: 'Counter / Defense', effect: 'When taking damage, ASPD/CSPD/Action Speed +2% × Tier for 3s.' },
  { name: 'Dash Defence', category: 'Counter / Defense', effect: 'When using Evasion, Physical/Magical Resistance +2% × Tier for 3s. Max 3 stacks.' },
  { name: 'Dash Power', category: 'Counter / Defense', effect: 'When using Evasion, ATK +10×Tier, ASPD +50+50×Tier for 3s. Max 3 stacks.' },
  { name: 'Foreseen Evasion', category: 'Counter / Defense', effect: 'When target evades, Anticipate increases by 5% × Tier for 12s.' },
  { name: 'Guarded Advantage', category: 'Counter / Defense', effect: 'When target guards, Guard Break increases by 5% × Tier for 12s.' },
  { name: 'Guarded Magica', category: 'Counter / Defense', effect: 'When target guards, MATK +50 for 5+5×Tier seconds. Every 20s.', notes: 'Bonus: +Base DEX/10' },
  { name: 'Guarded Recovery', category: 'Counter / Defense', effect: 'Restores 500+500×Tier HP when target guards (scales with STR). Every 6s.', notes: 'Bonus: +Base STR×2^(Tier-1)/2' },
  { name: 'Life Purge', category: 'Counter / Defense', effect: 'When taking damage: MaxHP -1%×2^(Tier-1), ASPD +50×2^(Tier-1) for 20s. Max 5 stacks.' },
  { name: 'Mana Combat', category: 'Counter / Defense', effect: 'Restores 1 × Tier MP when taking damage (scales with VIT).', notes: 'Bonus: +Base VIT/(20×(6-Tier))' },
  { name: 'Vengeful Life', category: 'Counter / Defense', effect: 'When taking damage, MaxHP +50×2^(Tier-1) for 180s. Max 140-20×Tier stacks.' },
  { name: 'Vengeful Magica', category: 'Counter / Defense', effect: 'When taking damage, MATK +[10|15|30|60|90] for 30s. Max [90|60|30|15|10] stacks.' },
  { name: 'Vengeful Mana', category: 'Counter / Defense', effect: 'When taking damage, Max MP +5×2^(Tier-1) for 180s. Max 35-5×Tier stacks.' },
  { name: 'Vengeful Power', category: 'Counter / Defense', effect: 'When taking damage, ATK +[10|15|30|60|90] for 30s. Max [90|60|30|15|10] stacks.' },
  { name: 'Vengeful Samurai', category: 'Counter / Defense', effect: 'When taking damage, Unsheathe Power +100 for 9s. Max 1 × Tier stack.' },

  // Miss / Graze (7 traits)
  { name: 'Critical Rebound', category: 'Miss / Graze', effect: 'If MISS, Critical Rate +4 × Tier for 60s. Max 5 stacks.' },
  { name: 'Graze Mana', category: 'Miss / Graze', effect: 'Restores 10 MP if Graze. Activation Power 10 × Tier.' },
  { name: 'Graze Mana Boost', category: 'Miss / Graze', effect: 'If Graze: MaxMP -350+50×Tier, Short/Long Range Damage +1%, Accuracy +60×Tier for 15s. Max 3 stacks.' },
  { name: 'Graze Precision', category: 'Miss / Graze', effect: 'If Graze, Accuracy +20 × Tier for 30s. Max 5 stacks.' },
  { name: 'Magica Rebound', category: 'Miss / Graze', effect: 'If MISS, MATK +10 × Tier for 30s. Max 10 stacks.' },
  { name: 'Mana Rebound', category: 'Miss / Graze', effect: 'Restores 100 MP if MISS. Activation Power [10|20|30|50|100].' },
  { name: 'Mega Power Rebound', category: 'Miss / Graze', effect: 'If MISS: ATK +100×Tier, Critical Rate +25+25×Tier, Accuracy -9999 for 90s.' },
  { name: 'Power Rebound', category: 'Miss / Graze', effect: 'If MISS, ATK +10 × Tier for 30s. Max 10 stacks.' },

  // Unavailable (4 traits)
  { name: 'Flinch Unavailable', category: 'Unavailable', effect: 'Can no longer inflict [Flinch].' },
  { name: 'Stun Unavailable', category: 'Unavailable', effect: 'Can no longer inflict [Stun].' },
  { name: 'Tumble Unavailable', category: 'Unavailable', effect: 'Can no longer inflict [Tumble].' },
  { name: 'Immobilization Unavailable', category: 'Unavailable', effect: 'Can no longer inflict [Immobilization].' },
];

const categories = ['All', 'Common Effects', 'Damage Triggered', 'Counter / Defense', 'Miss / Graze', 'Unavailable'];

export function TraitReferencePage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTraits = traits.filter(trait => {
    const matchesCategory = selectedCategory === 'All' || trait.category === selectedCategory;
    const matchesSearch = trait.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         trait.effect.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Common Effects': return '#22c55e';
      case 'Damage Triggered': return '#3b82f6';
      case 'Counter / Defense': return '#f59e0b';
      case 'Miss / Graze': return '#ef4444';
      case 'Unavailable': return '#8b5cf6';
      default: return 'var(--accent)';
    }
  };

  return (
    <MainLayout>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '5.5rem 1.5rem 3rem' }}>
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 800,
            color: 'var(--tx-1)',
            marginBottom: '0.5rem',
          }}>
            🎯 Trait System
          </h1>
          <p style={{
            fontSize: '1rem',
            color: 'var(--tx-2)',
            lineHeight: 1.6,
          }}>
            Complete reference for all 67 equipment traits in Toram Online
          </p>
        </div>

        {/* Quick Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem',
        }}>
          {categories.filter(c => c !== 'All').map(category => {
            const count = traits.filter(t => t.category === category).length;
            const color = getCategoryColor(category);
            return (
              <div
                key={category}
                style={{
                  background: 'var(--bg-surface)',
                  border: `1px solid ${color}33`,
                  borderRadius: 'var(--r-xl)',
                  padding: '1.25rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onClick={() => setSelectedCategory(category)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = color;
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${color}33`;
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ fontSize: '0.75rem', color: 'var(--tx-3)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {category}
                </div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: color }}>
                  {count}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--tx-2)' }}>
                  traits
                </div>
              </div>
            );
          })}
        </div>

        {/* Search & Filters */}
        <div style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--br-1)',
          borderRadius: 'var(--r-xl)',
          padding: '1.5rem',
          marginBottom: '2rem',
        }}>
          <input
            type="text"
            placeholder="🔍  Search traits by name or effect..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '0.875rem',
              background: 'var(--bg-float)',
              border: '1px solid var(--br-2)',
              borderRadius: 'var(--r-md)',
              color: 'var(--tx-1)',
              fontSize: '0.95rem',
              marginBottom: '1rem',
            }}
          />

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  padding: '0.625rem 1.25rem',
                  background: selectedCategory === category ? getCategoryColor(category) : 'var(--bg-float)',
                  border: `1px solid ${selectedCategory === category ? getCategoryColor(category) : 'var(--br-2)'}`,
                  borderRadius: 'var(--r-md)',
                  color: selectedCategory === category ? '#000' : 'var(--tx-2)',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Traits Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
          gap: '1rem',
        }}>
          {filteredTraits.map((trait) => {
            const categoryColor = getCategoryColor(trait.category);
            return (
              <div
                key={trait.name}
                style={{
                  background: 'var(--bg-surface)',
                  border: `1px solid ${categoryColor}22`,
                  borderRadius: 'var(--r-xl)',
                  padding: '1.5rem',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = categoryColor;
                  e.currentTarget.style.boxShadow = `0 4px 12px ${categoryColor}22`;
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${categoryColor}22`;
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: 'var(--tx-1)',
                    margin: 0,
                  }}>
                    {trait.name}
                  </h3>
                  <span style={{
                    padding: '0.375rem 0.75rem',
                    background: `${categoryColor}15`,
                    border: `1px solid ${categoryColor}33`,
                    borderRadius: 'var(--r-sm)',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    color: categoryColor,
                    whiteSpace: 'nowrap',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}>
                    {trait.category}
                  </span>
                </div>

                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--tx-2)',
                  lineHeight: 1.6,
                  marginBottom: trait.notes ? '0.75rem' : '0',
                }}>
                  {trait.effect}
                </p>

                {trait.notes && (
                  <div style={{
                    marginTop: '1rem',
                  }}>
                    <div style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: 'var(--tx-3)',
                      marginBottom: '0.5rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}>
                      Tier Values:
                    </div>
                    <div style={{
                      display: 'flex',
                      gap: '0.375rem',
                      flexWrap: 'wrap',
                    }}>
                      {trait.notes.split('|').map((tier, idx) => {
                        const clean = tier.trim().replace(/^T\d+:\s*/, '');
                        return (
                          <div
                            key={idx}
                            style={{
                              padding: '0.375rem 0.625rem',
                              background: `${categoryColor}15`,
                              border: `1px solid ${categoryColor}33`,
                              borderRadius: 'var(--r-sm)',
                              fontSize: '0.8rem',
                              fontWeight: 600,
                              color: categoryColor,
                            }}
                          >
                            T{idx + 1}: {clean}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredTraits.length === 0 && (
          <div style={{
            padding: '4rem',
            textAlign: 'center',
            color: 'var(--tx-4)',
          }}>
            <p style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔍</p>
            <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>No traits found</p>
            <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Try adjusting your search or filters</p>
          </div>
        )}

        {/* Footer */}
        <div style={{
          marginTop: '3rem',
          padding: '1.5rem',
          background: 'var(--bg-surface)',
          border: '1px solid var(--br-1)',
          borderRadius: 'var(--r-xl)',
          textAlign: 'center',
        }}>
          <p style={{ fontSize: '0.9rem', color: 'var(--tx-2)', margin: 0 }}>
            Showing <strong style={{ color: 'var(--accent)' }}>{filteredTraits.length}</strong> of <strong style={{ color: 'var(--accent)' }}>{traits.length}</strong> traits
          </p>
          <p style={{ fontSize: '0.8rem', color: 'var(--tx-3)', marginTop: '0.5rem', margin: 0 }}>
            Data sourced from Coryn Club • Values scale linearly with Tier
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
