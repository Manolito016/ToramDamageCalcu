import { useState, useEffect } from 'react';
import { fullStatList } from '../data/statLists';
import { calculatePOTCost, calculateSuccessRate, getRiskLevel } from '../data/statCosts';
import type { StatEntry } from '../types/fillStat';

export function FillStatSimulator() {
  // State
  const [equipmentType, setEquipmentType] = useState<'weapon' | 'armor'>('weapon');
  const [weaponSubtype, setWeaponSubtype] = useState<string>('one-handed');
  const [maxPotential, setMaxPotential] = useState(120);
  const [basePotential, setBasePotential] = useState(0);
  const [smithProfLevel, setSmithProfLevel] = useState(0);
  const [anvilType, setAnvilType] = useState<'none' | 'craftsman' | 'blacksmith' | 'master' | 'master2'>('none');
  const [quantity, setQuantity] = useState(1);
  const [statEntries, setStatEntries] = useState<StatEntry[]>([]);
  
  // Positive and negative stat input states (7 rows each)
  const [positiveStats, setPositiveStats] = useState<Array<{stat: string, value: number}>>(
    Array.from({ length: 7 }, () => ({ stat: '', value: 0 }))
  );
  const [negativeStats, setNegativeStats] = useState<Array<{stat: string, value: number}>>(
    Array.from({ length: 7 }, () => ({ stat: '', value: 0 }))
  );

  // Equipment max potentials (10th Anniversary Celebration Equipment)
  const weaponPotentials: Record<string, number> = {
    'one-handed': 120,
    'bow': 120,
    'katana': 120,
    'halberd': 120,
    'magic-device': 120,
    'two-handed': 132,
    'bowgun': 132,
    'staff': 132,
    'knuckles': 132,
  };

  const armorPotential = 129;

  // Update max potential when equipment type changes
  useEffect(() => {
    if (equipmentType === 'weapon') {
      setMaxPotential(weaponPotentials[weaponSubtype] || 120);
    } else {
      setMaxPotential(armorPotential);
    }
  }, [equipmentType, weaponSubtype]);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('fillStatSimulator');
    if (saved) {
      try {
        const data = JSON.parse(saved);
        setEquipmentType(data.equipmentType || 'weapon');
        setWeaponSubtype(data.weaponSubtype || 'one-handed');
        setMaxPotential(data.maxPotential || 120);
        setBasePotential(data.basePotential || 0);
        setSmithProfLevel(data.smithProfLevel || 0);
        setAnvilType(data.anvilType || 'none');
        setQuantity(data.quantity || 1);
        setStatEntries(data.statEntries || []);
        setPositiveStats(data.positiveStats || Array.from({ length: 7 }, () => ({ stat: '', value: 0 })));
        setNegativeStats(data.negativeStats || Array.from({ length: 7 }, () => ({ stat: '', value: 0 })));
      } catch (e) {
        console.error('Failed to load saved simulator state');
      }
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem('fillStatSimulator', JSON.stringify({
      equipmentType,
      weaponSubtype,
      maxPotential,
      basePotential,
      smithProfLevel,
      anvilType,
      quantity,
      statEntries,
      positiveStats,
      negativeStats,
    }));
  }, [equipmentType, weaponSubtype, maxPotential, basePotential, smithProfLevel, anvilType, quantity, statEntries, positiveStats, negativeStats]);

  // Calculations
  const usedPotential = statEntries.reduce((total: number, entry: StatEntry) => {
    return total + calculatePOTCost(entry.statName, entry.value, entry.isNegative);
  }, 0);

  const remainingPotential = maxPotential - usedPotential;
  const successRate = calculateSuccessRate(usedPotential, maxPotential);
  const riskLevel = getRiskLevel(successRate);

  // Material cost calculation with reductions
  const baseMaterialCost = usedPotential * 10; // Base: 10 material points per POT
  
  // Smith proficiency reduction (0-20%)
  const smithReduction = smithProfLevel * 2; // 2% per level, max 20% at level 10
  
  // Anvil reduction (2025-06-26 update: 40% reduction)
  const anvilReductions: Record<string, number> = {
    'none': 0,
    'craftsman': 0,
    'blacksmith': 0,
    'master': 40,
    'master2': 40,
  };
  const anvilReduction = anvilReductions[anvilType] || 0;
  
  // Total reduction (max 60% combined)
  const totalReduction = Math.min(60, smithReduction + anvilReduction);
  const materialCostReduction = baseMaterialCost * (totalReduction / 100);
  const finalMaterialCost = Math.max(0, baseMaterialCost - materialCostReduction);
  
  // Material cost per step (highest mats per single step)
  const highestStepCost = statEntries.length > 0 
    ? Math.max(...statEntries.map((entry: StatEntry) => calculatePOTCost(entry.statName, entry.value, entry.isNegative) * 10))
    : 0;
  const finalHighestStepCost = Math.max(0, highestStepCost - (highestStepCost * totalReduction / 100));
  
  // Total materials for quantity
  const totalMaterials = finalMaterialCost * quantity;

  // Handlers
  const addPositiveStats = () => {
    const newEntries = positiveStats
      .filter((s: {stat: string, value: number}) => s.stat && s.value > 0)
      .map((s: {stat: string, value: number}) => ({
        id: `${Date.now()}-${Math.random()}`,
        statName: s.stat,
        value: s.value,
        isNegative: false,
      }));
    
    if (newEntries.length === 0) {
      alert('Please select at least one stat and enter a value');
      return;
    }
    
    setStatEntries([...statEntries, ...newEntries]);
    // Reset positive inputs
    setPositiveStats(Array.from({ length: 7 }, () => ({ stat: '', value: 0 })));
  };
  
  const addNegativeStats = () => {
    const newEntries = negativeStats
      .filter((s: {stat: string, value: number}) => s.stat && s.value > 0)
      .map((s: {stat: string, value: number}) => ({
        id: `${Date.now()}-${Math.random()}`,
        statName: s.stat,
        value: s.value,
        isNegative: true,
      }));
    
    if (newEntries.length === 0) {
      alert('Please select at least one stat and enter a value');
      return;
    }
    
    setStatEntries([...statEntries, ...newEntries]);
    // Reset negative inputs
    setNegativeStats(Array.from({ length: 7 }, () => ({ stat: '', value: 0 })));
  };
  
  const removeStat = (id: string) => {
    setStatEntries(statEntries.filter((entry: StatEntry) => entry.id !== id));
  };

  const clearAll = () => {
    if (statEntries.length === 0) return;
    if (confirm('Are you sure you want to clear all stats?')) {
      setStatEntries([]);
    }
  };

  const copyFormula = () => {
    const formulaText = statEntries
      .map((entry: StatEntry) => `${entry.statName} ${entry.isNegative ? '-' : '+'}${entry.value}`)
      .join(', ');
    
    navigator.clipboard.writeText(formulaText).then(() => {
      alert('Formula copied to clipboard!');
    });
  };

  // Preset potentials
  const weaponPresets = [200, 250, 300, 350, 400];
  const armorPresets = [150, 200, 250, 300, 350];
  const presets = equipmentType === 'weapon' ? weaponPresets : armorPresets;

  // Risk color
  const getRiskColor = () => {
    switch (riskLevel) {
      case 'low': return 'var(--accent)';
      case 'medium': return 'var(--hi)';
      case 'high': return '#ef4444';
    }
  };

  const getRiskLabel = () => {
    switch (riskLevel) {
      case 'low': return 'Low Risk';
      case 'medium': return 'Medium Risk';
      case 'high': return 'High Risk';
    }
  };

  return (
    <>
      {/* Content */}
      <main style={{ maxWidth: '1400px', margin: '0 auto', padding: '5.5rem 1.5rem 3rem' }}>
        
        {/* Equipment Setup */}
        <div style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--br-1)',
          borderRadius: 'var(--r-xl)',
          padding: '1.5rem',
          marginBottom: '1.5rem',
        }}>
          <h2 style={{
            fontSize: '1.1rem',
            fontWeight: 700,
            color: 'var(--accent)',
            marginBottom: '1rem',
          }}>
            Equipment Setup
          </h2>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'flex-end' }}>
            {/* Equipment Type */}
            <div style={{ flex: '1 1 200px' }}>
              <label style={{ marginBottom: '0.5rem' }}>Equipment Type</label>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  onClick={() => setEquipmentType('weapon')}
                  style={{
                    flex: 1,
                    padding: '0.75rem',
                    background: equipmentType === 'weapon' ? 'var(--accent-dim)' : 'var(--bg-float)',
                    border: equipmentType === 'weapon' ? '1px solid var(--accent)' : '1px solid var(--br-2)',
                    borderRadius: 'var(--r-md)',
                    color: equipmentType === 'weapon' ? 'var(--accent)' : 'var(--tx-2)',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  Weapon
                </button>
                <button
                  onClick={() => setEquipmentType('armor')}
                  style={{
                    flex: 1,
                    padding: '0.75rem',
                    background: equipmentType === 'armor' ? 'var(--accent-dim)' : 'var(--bg-float)',
                    border: equipmentType === 'armor' ? '1px solid var(--accent)' : '1px solid var(--br-2)',
                    borderRadius: 'var(--r-md)',
                    color: equipmentType === 'armor' ? 'var(--accent)' : 'var(--tx-2)',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  Armor
                </button>
              </div>
            </div>

            {/* Weapon Subtype (for weapons only) */}
            {equipmentType === 'weapon' && (
              <div style={{ flex: '1 1 200px' }}>
                <label style={{ marginBottom: '0.5rem' }}>Weapon Type</label>
                <select
                  value={weaponSubtype}
                  onChange={(e) => setWeaponSubtype(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    background: 'var(--bg-float)',
                    border: '1px solid var(--br-2)',
                    borderRadius: 'var(--r-md)',
                    color: 'var(--tx-1)',
                    fontSize: '0.9rem',
                  }}
                >
                  <option value="one-handed">One-handed (120 POT)</option>
                  <option value="bow">Bow (120 POT)</option>
                  <option value="katana">Katana (120 POT)</option>
                  <option value="halberd">Halberd (120 POT)</option>
                  <option value="magic-device">Magic Device (120 POT)</option>
                  <option value="two-handed">Two-handed (132 POT)</option>
                  <option value="bowgun">Bowgun (132 POT)</option>
                  <option value="staff">Staff (132 POT)</option>
                  <option value="knuckles">Knuckles (132 POT)</option>
                </select>
              </div>
            )}

            {/* Max Potential */}
            <div style={{ flex: '1 1 200px' }}>
              <label style={{ marginBottom: '0.5rem' }}>Max Potential</label>
              <input
                type="number"
                value={maxPotential}
                onChange={(e) => setMaxPotential(parseInt(e.target.value) || 0)}
                min={0}
                max={500}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  background: 'var(--bg-float)',
                  border: '1px solid var(--br-2)',
                  borderRadius: 'var(--r-md)',
                  color: 'var(--tx-1)',
                  fontSize: '1rem',
                  fontWeight: 600,
                }}
              />
            </div>

            {/* Presets */}
            <div style={{ flex: '2 1 400px' }}>
              <label style={{ marginBottom: '0.5rem' }}>Quick Presets</label>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {presets.map(pot => (
                  <button
                    key={pot}
                    onClick={() => setMaxPotential(pot)}
                    style={{
                      padding: '0.5rem 1rem',
                      background: maxPotential === pot ? 'var(--accent)' : 'var(--bg-float)',
                      border: '1px solid var(--br-2)',
                      borderRadius: 'var(--r-md)',
                      color: maxPotential === pot ? 'var(--bg-base)' : 'var(--tx-2)',
                      fontWeight: 600,
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {pot} POT
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Material Cost Settings */}
        <div style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--br-1)',
          borderRadius: 'var(--r-xl)',
          padding: '1.5rem',
          marginBottom: '1.5rem',
        }}>
          <h2 style={{
            fontSize: '1.1rem',
            fontWeight: 700,
            color: 'var(--accent)',
            marginBottom: '1rem',
          }}>
            Material Cost Settings
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            {/* Base Potential */}
            <div>
              <label style={{ marginBottom: '0.5rem', display: 'block', fontSize: '0.85rem', color: 'var(--tx-2)' }}>
                Base Potential (Optional)
              </label>
              <input
                type="number"
                value={basePotential}
                onChange={(e) => setBasePotential(parseInt(e.target.value) || 0)}
                min={0}
                placeholder="0"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  background: 'var(--bg-float)',
                  border: '1px solid var(--br-2)',
                  borderRadius: 'var(--r-md)',
                  color: 'var(--tx-1)',
                  fontSize: '0.95rem',
                }}
              />
            </div>

            {/* Smith Proficiency Level */}
            <div>
              <label style={{ marginBottom: '0.5rem', display: 'block', fontSize: '0.85rem', color: 'var(--tx-2)' }}>
                Smith Proficiency Level ({smithProfLevel * 2}% reduction)
              </label>
              <input
                type="number"
                value={smithProfLevel}
                onChange={(e) => setSmithProfLevel(Math.min(10, Math.max(0, parseInt(e.target.value) || 0)))}
                min={0}
                max={10}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  background: 'var(--bg-float)',
                  border: '1px solid var(--br-2)',
                  borderRadius: 'var(--r-md)',
                  color: 'var(--tx-1)',
                  fontSize: '0.95rem',
                }}
              />
              <p style={{ fontSize: '0.7rem', color: 'var(--tx-3)', marginTop: '0.25rem' }}>
                Level 0-10 (2% reduction per level, max 20%)
              </p>
            </div>

            {/* Anvil Type */}
            <div>
              <label style={{ marginBottom: '0.5rem', display: 'block', fontSize: '0.85rem', color: 'var(--tx-2)' }}>
                Anvil Type
              </label>
              <select
                value={anvilType}
                onChange={(e) => setAnvilType(e.target.value as 'none' | 'craftsman' | 'blacksmith' | 'master' | 'master2')}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  background: 'var(--bg-float)',
                  border: '1px solid var(--br-2)',
                  borderRadius: 'var(--r-md)',
                  color: 'var(--tx-1)',
                  fontSize: '0.95rem',
                }}
              >
                <option value="none">None (0% reduction)</option>
                <option value="craftsman">Craftsman's Anvil (0%)</option>
                <option value="blacksmith">Blacksmith's Anvil (0%)</option>
                <option value="master">Master's Anvil (40% - 2025-06-26)</option>
                <option value="master2">Master's Anvil II (40% - 2025-06-26)</option>
              </select>
            </div>

            {/* Quantity */}
            <div>
              <label style={{ marginBottom: '0.5rem', display: 'block', fontSize: '0.85rem', color: 'var(--tx-2)' }}>
                How many do you need to create?
              </label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                min={1}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  background: 'var(--bg-float)',
                  border: '1px solid var(--br-2)',
                  borderRadius: 'var(--r-md)',
                  color: 'var(--tx-1)',
                  fontSize: '0.95rem',
                }}
              />
              <p style={{ fontSize: '0.7rem', color: 'var(--tx-3)', marginTop: '0.25rem' }}>
                Total materials: {totalMaterials.toFixed(0)} pts
              </p>
            </div>
          </div>
        </div>

        {/* Stats Summary Bar */}
        <div style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--br-1)',
          borderRadius: 'var(--r-xl)',
          padding: '1.5rem',
          marginBottom: '1.5rem',
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {/* Used POT */}
            <div>
              <p style={{ fontSize: '0.75rem', color: 'var(--tx-3)', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Used Potential
              </p>
              <p style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--tx-1)' }}>
                {usedPotential} / {maxPotential} POT
              </p>
            </div>

            {/* Remaining POT */}
            <div>
              <p style={{ fontSize: '0.75rem', color: 'var(--tx-3)', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Remaining
              </p>
              <p style={{ fontSize: '1.5rem', fontWeight: 700, color: remainingPotential >= 0 ? 'var(--accent)' : '#ef4444' }}>
                {remainingPotential} POT
              </p>
            </div>

            {/* Success Rate */}
            <div>
              <p style={{ fontSize: '0.75rem', color: 'var(--tx-3)', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Success Rate
              </p>
              <p style={{ fontSize: '1.5rem', fontWeight: 700, color: getRiskColor() }}>
                {successRate.toFixed(1)}% — {getRiskLabel()}
              </p>
            </div>

            {/* Material Cost */}
            <div>
              <p style={{ fontSize: '0.75rem', color: 'var(--tx-3)', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Material Cost
              </p>
              <p style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--tx-1)' }}>
                {finalMaterialCost.toFixed(0)} pts
              </p>
              {totalReduction > 0 && (
                <p style={{ fontSize: '0.7rem', color: 'var(--accent)', marginTop: '0.25rem' }}>
                  {totalReduction}% reduction | Highest step: {finalHighestStepCost.toFixed(0)} pts
                </p>
              )}
            </div>
          </div>

          {/* Quantity Info */}
          {quantity > 1 && (
            <div style={{
              marginTop: '1rem',
              padding: '0.75rem 1rem',
              background: 'var(--accent-dim)',
              border: '1px solid var(--accent-edge)',
              borderRadius: 'var(--r-md)',
            }}>
              <p style={{ fontSize: '0.85rem', color: 'var(--tx-1)' }}>
                <strong>Quantity: {quantity}</strong> — Total materials needed: <strong>{totalMaterials.toFixed(0)} pts</strong>
              </p>
            </div>
          )}

          {/* Progress Bar */}
          <div style={{
            marginTop: '1rem',
            height: '8px',
            background: 'var(--bg-float)',
            borderRadius: '4px',
            overflow: 'hidden',
          }}>
            <div style={{
              height: '100%',
              width: `${Math.min(100, (Math.max(0, usedPotential) / maxPotential) * 100)}%`,
              background: `linear-gradient(90deg, ${getRiskColor()}, ${getRiskColor()}88)`,
              transition: 'width 0.3s ease, background 0.3s ease',
              borderRadius: '4px',
            }} />
          </div>
        </div>

        {/* Main Content - Positive & Negative Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          
          {/* Positive Stats Section */}
          <div style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--br-1)',
            borderRadius: 'var(--r-xl)',
            padding: '1.5rem',
          }}>
            <h2 style={{
              fontSize: '1.1rem',
              fontWeight: 700,
              color: 'var(--accent)',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}>
              <span>+</span> Positive Stats
            </h2>

            {/* 7 Rows for Positive Stats */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {positiveStats.map((item, index) => (
                <div key={`pos-${index}`} style={{ display: 'grid', gridTemplateColumns: '1fr 100px', gap: '0.5rem', alignItems: 'center' }}>
                  <select
                    value={item.stat}
                    onChange={(e) => {
                      const newStats = [...positiveStats];
                      newStats[index] = { ...newStats[index], stat: e.target.value };
                      setPositiveStats(newStats);
                    }}
                    style={{
                      padding: '0.625rem',
                      background: 'var(--bg-float)',
                      border: '1px solid var(--br-2)',
                      borderRadius: 'var(--r-md)',
                      color: 'var(--tx-1)',
                      fontSize: '0.85rem',
                    }}
                  >
                    <option value="">Select stat...</option>
                    {fullStatList.map(stat => (
                      <option key={stat} value={stat}>{stat}</option>
                    ))}
                  </select>
                  <input
                    type="number"
                    value={item.value || ''}
                    onChange={(e) => {
                      const newStats = [...positiveStats];
                      newStats[index] = { ...newStats[index], value: parseInt(e.target.value) || 0 };
                      setPositiveStats(newStats);
                    }}
                    placeholder="Value"
                    min={1}
                    max={100}
                    style={{
                      padding: '0.625rem',
                      background: 'var(--bg-float)',
                      border: '1px solid var(--br-2)',
                      borderRadius: 'var(--r-md)',
                      color: 'var(--tx-1)',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                    }}
                  />
                </div>
              ))}
            </div>
            
            {/* Add Button */}
            <button
              onClick={addPositiveStats}
              className="btn-primary"
              style={{
                width: '100%',
                marginTop: '1rem',
                padding: '0.75rem',
              }}
            >
              Add Positive Stats
            </button>
          </div>

          {/* Negative Stats Section */}
          <div style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--br-1)',
            borderRadius: 'var(--r-xl)',
            padding: '1.5rem',
          }}>
            <h2 style={{
              fontSize: '1.1rem',
              fontWeight: 700,
              color: '#ef4444',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}>
              <span>-</span> Negative Stats (Refund POT)
            </h2>

            {/* 7 Rows for Negative Stats */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {negativeStats.map((item, index) => (
                <div key={`neg-${index}`} style={{ display: 'grid', gridTemplateColumns: '1fr 100px', gap: '0.5rem', alignItems: 'center' }}>
                  <select
                    value={item.stat}
                    onChange={(e) => {
                      const newStats = [...negativeStats];
                      newStats[index] = { ...newStats[index], stat: e.target.value };
                      setNegativeStats(newStats);
                    }}
                    style={{
                      padding: '0.625rem',
                      background: 'var(--bg-float)',
                      border: '1px solid var(--br-2)',
                      borderRadius: 'var(--r-md)',
                      color: 'var(--tx-1)',
                      fontSize: '0.85rem',
                    }}
                  >
                    <option value="">Select stat...</option>
                    {fullStatList.map(stat => (
                      <option key={stat} value={stat}>{stat}</option>
                    ))}
                  </select>
                  <input
                    type="number"
                    value={item.value || ''}
                    onChange={(e) => {
                      const newStats = [...negativeStats];
                      newStats[index] = { ...newStats[index], value: parseInt(e.target.value) || 0 };
                      setNegativeStats(newStats);
                    }}
                    placeholder="Value"
                    min={1}
                    max={100}
                    style={{
                      padding: '0.625rem',
                      background: 'var(--bg-float)',
                      border: '1px solid var(--br-2)',
                      borderRadius: 'var(--r-md)',
                      color: 'var(--tx-1)',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                    }}
                  />
                </div>
              ))}
            </div>
            
            {/* Add Button */}
            <button
              onClick={addNegativeStats}
              className="btn-secondary"
              style={{
                width: '100%',
                marginTop: '1rem',
                padding: '0.75rem',
                color: '#ef4444',
              }}
            >
              Add Negative Stats (Refund POT)
            </button>

            {/* Caution Note */}
            <div style={{
              marginTop: '1rem',
              padding: '0.75rem',
              background: 'rgba(239, 68, 68, 0.08)',
              border: '1px solid rgba(239, 68, 68, 0.2)',
              borderRadius: 'var(--r-md)',
            }}>
              <p style={{ fontSize: '0.75rem', color: 'var(--tx-3)', lineHeight: 1.5 }}>
                <strong style={{ color: '#ef4444' }}>Caution:</strong> Dodge lv-17 means Dodge -24, Accuracy lv-17 means Accuracy -24
              </p>
            </div>
          </div>
        </div>

        {/* Stats List Panel - Full Width */}
        <div style={{
          marginTop: '1.5rem',
          background: 'var(--bg-surface)',
          border: '1px solid var(--br-1)',
          borderRadius: 'var(--r-xl)',
          padding: '1.5rem',
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h2 style={{
                fontSize: '1.1rem',
                fontWeight: 700,
                color: 'var(--accent)',
              }}>
                Stats List ({statEntries.length})
              </h2>
              <button
                onClick={clearAll}
                disabled={statEntries.length === 0}
                style={{
                  padding: '0.5rem 1rem',
                  background: 'var(--bg-float)',
                  border: '1px solid var(--br-2)',
                  borderRadius: 'var(--r-md)',
                  color: statEntries.length === 0 ? 'var(--tx-4)' : '#ef4444',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  cursor: statEntries.length === 0 ? 'not-allowed' : 'pointer',
                }}
              >
                Clear All
              </button>
            </div>

            {/* Stats List */}
            <div style={{ maxHeight: '500px', overflowY: 'auto' }}>
              {statEntries.length === 0 ? (
                <div style={{
                  padding: '3rem',
                  textAlign: 'center',
                  color: 'var(--tx-4)',
                }}>
                  <p style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>📝</p>
                  <p style={{ fontSize: '0.9rem' }}>No stats added yet</p>
                  <p style={{ fontSize: '0.75rem', marginTop: '0.25rem' }}>Add stats to start planning your formula</p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {statEntries.map((entry, index) => {
                    const potCost = calculatePOTCost(entry.statName, entry.value, entry.isNegative);
                    return (
                      <div
                        key={entry.id}
                        style={{
                          padding: '1rem',
                          background: 'var(--bg-raised)',
                          border: '1px solid var(--br-1)',
                          borderRadius: 'var(--r-md)',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          transition: 'border-color 0.2s ease',
                        }}
                      >
                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                            <span style={{
                              fontSize: '0.75rem',
                              fontWeight: 700,
                              color: 'var(--tx-4)',
                            }}>
                              #{index + 1}
                            </span>
                            <span style={{
                              fontSize: '0.95rem',
                              fontWeight: 600,
                              color: entry.isNegative ? '#ef4444' : 'var(--tx-1)',
                            }}>
                              {entry.statName}
                            </span>
                          </div>
                          <p style={{
                            fontSize: '0.85rem',
                            color: 'var(--tx-2)',
                            fontFamily: 'var(--font-mono)',
                          }}>
                            {entry.isNegative ? '-' : '+'}{entry.value} → <span style={{ color: entry.isNegative ? '#ef4444' : 'var(--accent)' }}>{potCost > 0 ? '+' : ''}{potCost} POT</span>
                          </p>
                        </div>
                        <button
                          onClick={() => removeStat(entry.id)}
                          style={{
                            padding: '0.5rem',
                            background: 'transparent',
                            border: 'none',
                            color: 'var(--tx-4)',
                            cursor: 'pointer',
                            borderRadius: 'var(--r-sm)',
                            transition: 'color 0.2s ease',
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.color = '#ef4444'}
                          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--tx-4)'}
                          title="Remove stat"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Actions */}
            {statEntries.length > 0 && (
              <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--br-1)' }}>
                <button
                  onClick={copyFormula}
                  className="btn-secondary"
                  style={{ width: '100%' }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Copy Formula to Clipboard
                </button>
              </div>
            )}
          </div>
      </main>
    </>
  );
}
