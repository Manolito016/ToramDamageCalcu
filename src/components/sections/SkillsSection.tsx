import { useState } from 'react';
import { useCalculator } from '../../context/CalculatorContext';
import type { PassiveSkills, SkillInfo, SkillLevel } from '../../types';

const skillLevels: SkillLevel[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Skill descriptions with effects
const skillDescriptions: Record<string, string> = {
  swordMastery: '1H/2H Sword: +0.3% ATK, +3% Weapon ATK per level',
  shotMastery: 'Bow/Bowgun: +0.3% ATK, +3% Weapon ATK per level',
  magicMastery: 'Staff/MD: +0.3% MATK, +3% Weapon ATK per level',
  martialMastery: 'Knuckle: +0.3% ATK, +3% Weapon ATK per level',
  halberdMastery: 'Halberd: +0.3% ATK, +3% Weapon ATK per level',
  unarmedMastery: 'Bare Hand: +20 Weapon ATK per level',
  criticalSpear: 'Halberd: +0.5% CR, +0.5 Critical Rate per level',
  quickSlash: '1H/2H Sword: +1% ASPD, +10 ASPD per level',
  hpBoost: '+2% MaxHP, +100 MaxHP per level',
  mpBoost: '+30 MaxMP per level',
  attackUp: '+5 ATK per level (50 at Lv200)',
  intimidatingPower: '+ATK = (Level/40) × SkillLevel',
  magicUp: '+5 MATK per level (50 at Lv200)',
  defenseUp: '+5 DEF, +5 MDEF per level',
  accuracyUp: '+Accuracy per level',
  criticalUp: '+0.5 Critical Rate, +0.5% Crit DMG per level',
  dodgeUp: '+Dodge per level',
  castMastery: '+1.5% CSPD, +10 CSPD, -2.5% ATK per level',
  dualSwordMastery: 'Dual Wield: +0.5% ATK, +0.5% ASPD per level',
  dualSwordControl: 'Dual Wield: +1% ATK, +1% ASPD per level',
  godspeed: 'Dual Wield: +1 ASPD per level',
  shieldMastery: 'Sub Shield: +5% ASPD per level',
  forceShield: 'Sub Shield: +5% Guard Power per level',
  advancedGuard: 'Shield/Heavy: +5% Guard Recharge per level',
  heavyArmorMastery: 'Heavy Armor: +2% DEF, +2% MDEF per level',
  lightArmorMastery: 'Light Armor: +5% Dodge per level',
  advancedEvasion: 'Light Armor: +5% Evasion Recharge per level',
  magicalShield: '+3% MDEF per level',
  bushido: 'Katana: +1% ATK per level',
  twoHanded: 'No Sub: +10% ATK, +10% Stability',
  spellBurst: 'Magic: +10% magic damage when using Staff/MD',
  magicWarriorMastery: 'Hybrid: +0.5% ATK, +0.5% MATK per level',
  aggravate: 'Knuckle: +Aggro, +ATK when active',
  strongChaseAttack: '+Damage to enemies with status ailments',
  martialDiscipline: 'Knuckle: +ATK, +ASPD bonuses',
  camouflage: 'Bow/Bowgun: +20 CR (passive), +40 CR when active, +10 ATK, -50% Aggro',
  paralysisShot: 'Bowgun: +10% Stability at Lv10',
  sicarius: 'Bow/Bowgun: +25% Physical Pierce'
};

interface SkillCardProps {
  name: string;
  skillKey: keyof PassiveSkills;
  skillInfo: SkillInfo;
  onChange: (skill: keyof PassiveSkills, value: SkillInfo) => void;
  description?: string;
  hasActive?: boolean;
}

function SkillCard({ name, skillKey, skillInfo, onChange, description, hasActive }: SkillCardProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  
  const effectText = skillDescriptions[skillKey];
  const levelBonus = effectText?.split(':')[1] || effectText || '';

  return (
    <div
      className="p-2 rounded-md relative transition-all duration-200"
      style={{
        background: showTooltip ? 'var(--bg-float)' : 'var(--bg-raised)',
        border: showTooltip ? '1px solid var(--accent)' : '1px solid var(--border-subtle)'
      }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex-1 min-w-0">
          <span className="text-xs font-medium block truncate" style={{ color: 'var(--text-primary)' }}>
            {name}
          </span>
          {description && (
            <span className="text-[10px] block truncate" style={{ color: 'var(--text-muted)' }}>
              {description}
            </span>
          )}
        </div>
        {hasActive && (
          <label className="flex items-center gap-1 flex-shrink-0" style={{ color: 'var(--text-muted)', fontSize: '10px' }}>
            <input
              type="checkbox"
              checked={skillInfo.active || false}
              onChange={(e) => onChange(skillKey, { ...skillInfo, active: e.target.checked })}
              className="w-3 h-3 rounded"
              style={{ accentColor: 'var(--accent)' }}
            />
            Active
          </label>
        )}
        <select
          value={skillInfo.level}
          onChange={(e) => onChange(skillKey, { ...skillInfo, level: Number(e.target.value) as SkillInfo['level'] })}
          className="w-12 px-1 py-1 text-xs text-center rounded outline-none cursor-pointer flex-shrink-0"
          style={{
            background: 'var(--bg-float)',
            border: '1px solid var(--border-soft)',
            color: 'var(--text-primary)'
          }}
        >
          {skillLevels.map((l) => (
            <option key={l} value={l}>
              {l}
            </option>
          ))}
        </select>
      </div>

      {/* Tooltip */}
      {showTooltip && effectText && (
        <div
          className="absolute bottom-full left-0 mb-2 p-2 rounded shadow-lg z-10 min-w-[200px] max-w-[280px]"
          style={{
            backgroundColor: 'var(--bg-raised)',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-primary)'
          }}
        >
          <p className="text-xs font-medium mb-1" style={{ color: 'var(--accent)' }}>{name}</p>
          <p className="text-[10px]" style={{ color: 'var(--text-secondary)' }}>{levelBonus.trim()}</p>
          {skillInfo.level > 0 && (
            <p className="text-[10px] mt-1 pt-1 border-t" style={{ color: 'var(--text-label)', borderColor: 'var(--border-subtle)' }}>
              At Lv{skillInfo.level}: {calculateSkillEffect(skillKey, skillInfo.level)}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

// Calculate skill effect at current level
function calculateSkillEffect(skillKey: keyof PassiveSkills, level: number): string {
  if (level === 0) return 'No effect';
  
  const effects: Record<string, () => string> = {
    swordMastery: () => `+${(level * 0.3).toFixed(1)}% ATK, +${level * 3}% Weapon ATK`,
    shotMastery: () => `+${(level * 0.3).toFixed(1)}% ATK, +${level * 3}% Weapon ATK`,
    magicMastery: () => `+${(level * 0.3).toFixed(1)}% MATK, +${level * 3}% Weapon ATK`,
    martialMastery: () => `+${(level * 0.3).toFixed(1)}% ATK, +${level * 3}% Weapon ATK`,
    halberdMastery: () => `+${(level * 0.3).toFixed(1)}% ATK, +${level * 3}% Weapon ATK`,
    unarmedMastery: () => `+${level * 20} Weapon ATK`,
    criticalSpear: () => `+${(level * 0.5).toFixed(1)}% CR, +${(level * 0.5).toFixed(1)} Critical Rate`,
    quickSlash: () => `+${level}% ASPD, +${level * 10} ASPD`,
    hpBoost: () => `+${level * 2}% MaxHP, +${level * 100} MaxHP`,
    mpBoost: () => `+${level * 30} MaxMP`,
    attackUp: () => `+${level * 5} ATK`,
    intimidatingPower: () => `+ATK scales with level`,
    magicUp: () => `+${level * 5} MATK`,
    defenseUp: () => `+${level * 5} DEF, +${level * 5} MDEF`,
    accuracyUp: () => `+${level} Accuracy`,
    criticalUp: () => `+${(level * 0.5).toFixed(1)} Critical Rate, +${(level * 0.5).toFixed(1)}% Crit DMG`,
    dodgeUp: () => `+${level} Dodge`,
    castMastery: () => `+${(level * 1.5).toFixed(1)}% CSPD, +${level * 10} CSPD, -${(level * 2.5).toFixed(1)}% ATK`,
    dualSwordMastery: () => `+${(level * 0.5).toFixed(1)}% ATK, +${(level * 0.5).toFixed(1)}% ASPD`,
    dualSwordControl: () => `+${level}% ATK, +${level}% ASPD`,
    godspeed: () => `+${level} ASPD`,
    shieldMastery: () => `+${level * 5}% ASPD`,
    forceShield: () => `+${level * 5}% Guard Power`,
    advancedGuard: () => `+${level * 5}% Guard Recharge`,
    heavyArmorMastery: () => `+${level * 2}% DEF, +${level * 2}% MDEF`,
    lightArmorMastery: () => `+${level * 5}% Dodge`,
    advancedEvasion: () => `+${level * 5}% Evasion Recharge`,
    magicalShield: () => `+${level * 3}% MDEF`,
    bushido: () => `+${level}% ATK`,
    twoHanded: () => `+10% ATK, +10% Stability`,
    spellBurst: () => `+10% magic damage`,
    magicWarriorMastery: () => `+${(level * 0.5).toFixed(1)}% ATK, +${(level * 0.5).toFixed(1)}% MATK`,
    aggravate: () => `+Aggro, +ATK when active`,
    strongChaseAttack: () => `+Damage vs ailments`,
    martialDiscipline: () => `+ATK, +ASPD bonuses`,
    camouflage: () => `+20 CR (passive), +40 CR when active, +10 ATK, -50% Aggro`,
    paralysisShot: () => level >= 10 ? '+10% Stability' : 'No effect below Lv10',
    sicarius: () => `+25% Physical Pierce`
  };

  return effects[skillKey]?.() || 'Effect unknown';
}

interface SkillGroupProps {
  title: string;
  children: React.ReactNode;
}

function SkillGroup({ title, children }: SkillGroupProps) {
  return (
    <div>
      <h3 className="text-sm font-medium mb-3 pb-2 border-b flex items-center gap-2" style={{ color: 'var(--text-primary)', borderColor: 'var(--border-subtle)' }}>
        <span className="w-1 h-4 rounded-full" style={{ background: 'var(--accent)' }}></span>
        {title}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {children}
      </div>
    </div>
  );
}

export function SkillsSection() {
  const { state, setSkill } = useCalculator();
  const { skills } = state;

  return (
    <section className="section-card">
      <div className="section-header">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--accent-light)' }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
        Passive Skills
      </div>

      <div className="p-3">
        <div className="space-y-3">
          {/* Weapon Mastery */}
          <SkillGroup title="Weapon Mastery">
            <SkillCard
              name="Sword Mastery"
              skillKey="swordMastery"
              skillInfo={skills.swordMastery}
              onChange={setSkill}
              description="1H/2H Sword"
            />
            <SkillCard
              name="Shot Mastery"
              skillKey="shotMastery"
              skillInfo={skills.shotMastery}
              onChange={setSkill}
              description="Bow/Bowgun"
            />
            <SkillCard
              name="Magic Mastery"
              skillKey="magicMastery"
              skillInfo={skills.magicMastery}
              onChange={setSkill}
              description="Staff/MD"
            />
            <SkillCard
              name="Martial Mastery"
              skillKey="martialMastery"
              skillInfo={skills.martialMastery}
              onChange={setSkill}
              description="Knuckle"
            />
            <SkillCard
              name="Halberd Mastery"
              skillKey="halberdMastery"
              skillInfo={skills.halberdMastery}
              onChange={setSkill}
              description="Halberd"
            />
            <SkillCard
              name="Unarmed Mastery"
              skillKey="unarmedMastery"
              skillInfo={skills.unarmedMastery}
              onChange={setSkill}
              description="Bare Hand"
            />
            <SkillCard
              name="Critical Spear"
              skillKey="criticalSpear"
              skillInfo={skills.criticalSpear}
              onChange={setSkill}
              description="Halberd"
            />
          </SkillGroup>

          {/* Battle Skills */}
          <SkillGroup title="Battle Skills">
            <SkillCard
              name="Quick Slash"
              skillKey="quickSlash"
              skillInfo={skills.quickSlash}
              onChange={setSkill}
              description="1H/2H Sword"
            />
            <SkillCard
              name="HP Boost"
              skillKey="hpBoost"
              skillInfo={skills.hpBoost}
              onChange={setSkill}
            />
            <SkillCard
              name="MP Boost"
              skillKey="mpBoost"
              skillInfo={skills.mpBoost}
              onChange={setSkill}
            />
            <SkillCard
              name="Attack UP"
              skillKey="attackUp"
              skillInfo={skills.attackUp}
              onChange={setSkill}
            />
            <SkillCard
              name="Intimidating Power"
              skillKey="intimidatingPower"
              skillInfo={skills.intimidatingPower}
              onChange={setSkill}
            />
            <SkillCard
              name="Magic UP"
              skillKey="magicUp"
              skillInfo={skills.magicUp}
              onChange={setSkill}
            />
            <SkillCard
              name="Defense UP"
              skillKey="defenseUp"
              skillInfo={skills.defenseUp}
              onChange={setSkill}
            />
            <SkillCard
              name="Accuracy UP"
              skillKey="accuracyUp"
              skillInfo={skills.accuracyUp}
              onChange={setSkill}
            />
            <SkillCard
              name="Critical UP"
              skillKey="criticalUp"
              skillInfo={skills.criticalUp}
              onChange={setSkill}
            />
            <SkillCard
              name="Dodge UP"
              skillKey="dodgeUp"
              skillInfo={skills.dodgeUp}
              onChange={setSkill}
            />
            <SkillCard
              name="Cast Mastery"
              skillKey="castMastery"
              skillInfo={skills.castMastery}
              onChange={setSkill}
            />
          </SkillGroup>

          {/* Dual Wield */}
          <SkillGroup title="Dual Wield">
            <SkillCard
              name="Dual Sword Mastery"
              skillKey="dualSwordMastery"
              skillInfo={skills.dualSwordMastery}
              onChange={setSkill}
            />
            <SkillCard
              name="Dual Sword Control"
              skillKey="dualSwordControl"
              skillInfo={skills.dualSwordControl}
              onChange={setSkill}
            />
            <SkillCard
              name="Godspeed"
              skillKey="godspeed"
              skillInfo={skills.godspeed}
              onChange={setSkill}
            />
          </SkillGroup>

          {/* Armor Mastery */}
          <SkillGroup title="Armor Mastery">
            <SkillCard
              name="Shield Mastery"
              skillKey="shieldMastery"
              skillInfo={skills.shieldMastery}
              onChange={setSkill}
              description="Sub Shield"
            />
            <SkillCard
              name="Force Shield"
              skillKey="forceShield"
              skillInfo={skills.forceShield}
              onChange={setSkill}
              description="Sub Shield"
            />
            <SkillCard
              name="Advanced Guard"
              skillKey="advancedGuard"
              skillInfo={skills.advancedGuard}
              onChange={setSkill}
              description="Shield/Heavy"
            />
            <SkillCard
              name="Heavy Armor"
              skillKey="heavyArmorMastery"
              skillInfo={skills.heavyArmorMastery}
              onChange={setSkill}
              description="Heavy only"
            />
            <SkillCard
              name="Light Armor"
              skillKey="lightArmorMastery"
              skillInfo={skills.lightArmorMastery}
              onChange={setSkill}
              description="Light only"
            />
            <SkillCard
              name="Adv. Evasion"
              skillKey="advancedEvasion"
              skillInfo={skills.advancedEvasion}
              onChange={setSkill}
              description="Light/Evasion"
            />
            <SkillCard
              name="Magical Shield"
              skillKey="magicalShield"
              skillInfo={skills.magicalShield}
              onChange={setSkill}
            />
          </SkillGroup>

          {/* Katana Skills */}
          <SkillGroup title="Katana Skills">
            <SkillCard
              name="Bushido"
              skillKey="bushido"
              skillInfo={skills.bushido}
              onChange={setSkill}
              description="Main Katana"
            />
            <SkillCard
              name="Two-Handed"
              skillKey="twoHanded"
              skillInfo={skills.twoHanded}
              onChange={setSkill}
              description="No sub"
            />
          </SkillGroup>

          {/* Other Skills */}
          <SkillGroup title="Other Skills">
            <SkillCard
              name="Spell Burst"
              skillKey="spellBurst"
              skillInfo={skills.spellBurst}
              onChange={setSkill}
            />
            <SkillCard
              name="Magic Warrior"
              skillKey="magicWarriorMastery"
              skillInfo={skills.magicWarriorMastery}
              onChange={setSkill}
            />
            <SkillCard
              name="Aggravate"
              skillKey="aggravate"
              skillInfo={skills.aggravate}
              onChange={setSkill}
              description="Knuckle"
            />
            <SkillCard
              name="Chase Attack"
              skillKey="strongChaseAttack"
              skillInfo={skills.strongChaseAttack}
              onChange={setSkill}
            />
            <SkillCard
              name="Martial Disc."
              skillKey="martialDiscipline"
              skillInfo={skills.martialDiscipline}
              onChange={setSkill}
            />
            <SkillCard
              name="Camouflage"
              skillKey="camouflage"
              skillInfo={skills.camouflage}
              onChange={setSkill}
              description="Bow/Bowgun"
              hasActive
            />
            <SkillCard
              name="Paralysis Shot"
              skillKey="paralysisShot"
              skillInfo={skills.paralysisShot}
              onChange={setSkill}
              description="Bowgun L10"
            />
            <SkillCard
              name="Sicarius"
              skillKey="sicarius"
              skillInfo={skills.sicarius}
              onChange={setSkill}
              description="Bow/Bowgun"
            />
          </SkillGroup>
        </div>
      </div>
    </section>
  );
}