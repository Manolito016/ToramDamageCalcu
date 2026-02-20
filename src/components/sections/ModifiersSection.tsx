import { useCalculator } from '../../context/CalculatorContext';
import { SelectInput } from '../inputs/SelectInput';
import { avatarStatOptions, foodBuffOptions } from '../../data/statLists';

export function ModifiersSection() {
  const { state, setAvatar, setFoodPotion } = useCalculator();
  const { avatar, foodPotion } = state;

  return (
    <section className="section-card">
      <div className="section-header">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--accent-light)' }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
        Modifiers
      </div>

      <div className="p-3">
        {/* Avatar Stats */}
        <div className="mb-3 p-3 rounded-md" style={{ background: 'var(--bg-raised)', border: '1px solid var(--border-subtle)' }}>
          <h3 className="text-sm font-medium mb-3 pb-2 border-b" style={{ color: 'var(--text-primary)', borderColor: 'var(--border-subtle)' }}>
            Avatar Stats
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            {/* Accessory */}
            <div>
              <h4 className="text-xs font-medium mb-2 uppercase tracking-wider" style={{ color: 'var(--text-label)' }}>
                Accessory
              </h4>
              {avatar.accessory.map((slot, index) => (
                <div key={`acc-${index}`} className="mb-1.5 grid grid-cols-2 gap-2">
                  <SelectInput
                    label={`Stat ${index + 1}`}
                    value={slot.stat}
                    options={avatarStatOptions}
                    onChange={(stat) => setAvatar('accessory', index, stat, slot.value)}
                  />
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-medium" style={{ color: 'var(--text-label)' }}>Value</label>
                    <input
                      type="number"
                      value={slot.value}
                      onChange={(e) => setAvatar('accessory', index, slot.stat, parseInt(e.target.value) || 0)}
                      min={0}
                      className="px-2 py-1 text-sm rounded focus:outline-none"
                      style={{
                        background: 'var(--bg-float)',
                        border: '1px solid var(--border-soft)',
                        color: 'var(--text-primary)'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Top */}
            <div>
              <h4 className="text-xs font-medium mb-2 uppercase tracking-wider" style={{ color: 'var(--text-label)' }}>
                Top
              </h4>
              {avatar.top.map((slot, index) => (
                <div key={`top-${index}`} className="mb-1.5 grid grid-cols-2 gap-2">
                  <SelectInput
                    label={`Stat ${index + 1}`}
                    value={slot.stat}
                    options={avatarStatOptions}
                    onChange={(stat) => setAvatar('top', index, stat, slot.value)}
                  />
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-medium" style={{ color: 'var(--text-label)' }}>Value</label>
                    <input
                      type="number"
                      value={slot.value}
                      onChange={(e) => setAvatar('top', index, slot.stat, parseInt(e.target.value) || 0)}
                      min={0}
                      className="px-2 py-1 text-sm rounded focus:outline-none"
                      style={{
                        background: 'var(--bg-float)',
                        border: '1px solid var(--border-soft)',
                        color: 'var(--text-primary)'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom */}
            <div>
              <h4 className="text-xs font-medium mb-2 uppercase tracking-wider" style={{ color: 'var(--text-label)' }}>
                Bottom
              </h4>
              {avatar.bottom.map((slot, index) => (
                <div key={`bottom-${index}`} className="mb-1.5 grid grid-cols-2 gap-2">
                  <SelectInput
                    label={`Stat ${index + 1}`}
                    value={slot.stat}
                    options={avatarStatOptions}
                    onChange={(stat) => setAvatar('bottom', index, stat, slot.value)}
                  />
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-medium" style={{ color: 'var(--text-label)' }}>Value</label>
                    <input
                      type="number"
                      value={slot.value}
                      onChange={(e) => setAvatar('bottom', index, slot.stat, parseInt(e.target.value) || 0)}
                      min={0}
                      className="px-2 py-1 text-sm rounded focus:outline-none"
                      style={{
                        background: 'var(--bg-float)',
                        border: '1px solid var(--border-soft)',
                        color: 'var(--text-primary)'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Food & Potion */}
        <div className="mb-3 p-3 rounded-md" style={{ background: 'var(--bg-raised)', border: '1px solid var(--border-subtle)' }}>
          <h3 className="text-sm font-medium mb-3 pb-2 border-b" style={{ color: 'var(--text-primary)', borderColor: 'var(--border-subtle)' }}>
            Food & Potion
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            {/* Food */}
            <div>
              <h4 className="text-xs font-medium mb-2 uppercase tracking-wider" style={{ color: 'var(--text-label)' }}>
                Food
              </h4>
              {foodPotion.food.map((slot, index) => (
                <div key={`food-${index}`} className="mb-1.5 grid grid-cols-2 gap-2">
                  <SelectInput
                    label={`Stat ${index + 1}`}
                    value={slot.stat}
                    options={foodBuffOptions}
                    onChange={(stat) => setFoodPotion('food', index, stat, slot.value)}
                  />
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-medium" style={{ color: 'var(--text-label)' }}>Value</label>
                    <input
                      type="number"
                      value={slot.value}
                      onChange={(e) => setFoodPotion('food', index, slot.stat, parseInt(e.target.value) || 0)}
                      min={0}
                      className="px-2 py-1 text-sm rounded focus:outline-none"
                      style={{
                        background: 'var(--bg-float)',
                        border: '1px solid var(--border-soft)',
                        color: 'var(--text-primary)'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Potion 1 */}
            <div>
              <h4 className="text-xs font-medium mb-2 uppercase tracking-wider" style={{ color: 'var(--text-label)' }}>
                Potion 1
              </h4>
              {foodPotion.potion1.map((slot, index) => (
                <div key={`potion1-${index}`} className="mb-1.5 grid grid-cols-2 gap-2">
                  <SelectInput
                    label={`Stat ${index + 1}`}
                    value={slot.stat}
                    options={foodBuffOptions}
                    onChange={(stat) => setFoodPotion('potion1', index, stat, slot.value)}
                  />
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-medium" style={{ color: 'var(--text-label)' }}>Value</label>
                    <input
                      type="number"
                      value={slot.value}
                      onChange={(e) => setFoodPotion('potion1', index, slot.stat, parseInt(e.target.value) || 0)}
                      min={0}
                      className="px-2 py-1 text-sm rounded focus:outline-none"
                      style={{
                        background: 'var(--bg-float)',
                        border: '1px solid var(--border-soft)',
                        color: 'var(--text-primary)'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Potion 2 */}
            <div>
              <h4 className="text-xs font-medium mb-2 uppercase tracking-wider" style={{ color: 'var(--text-label)' }}>
                Potion 2
              </h4>
              {foodPotion.potion2.map((slot, index) => (
                <div key={`potion2-${index}`} className="mb-1.5 grid grid-cols-2 gap-2">
                  <SelectInput
                    label={`Stat ${index + 1}`}
                    value={slot.stat}
                    options={foodBuffOptions}
                    onChange={(stat) => setFoodPotion('potion2', index, stat, slot.value)}
                  />
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-medium" style={{ color: 'var(--text-label)' }}>Value</label>
                    <input
                      type="number"
                      value={slot.value}
                      onChange={(e) => setFoodPotion('potion2', index, slot.stat, parseInt(e.target.value) || 0)}
                      min={0}
                      className="px-2 py-1 text-sm rounded focus:outline-none"
                      style={{
                        background: 'var(--bg-float)',
                        border: '1px solid var(--border-soft)',
                        color: 'var(--text-primary)'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}