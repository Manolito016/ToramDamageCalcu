import { useCalculator } from '../../context/CalculatorContext';
import { SelectInput } from '../inputs/SelectInput';
import { CrystalSlot } from '../inputs/CrystalSlot';
import { armorTypeOptions } from '../../data/armorTypes';
import { refinementLevels } from '../../data/refinementTable';
import { fullStatOptions } from '../../data/statLists';

const refinementOptions = refinementLevels.map(r => ({ value: r, label: r }));

export function ArmorSection() {
  const {
    state,
    setArmor,
    setArmorCrysta,
    setAdditionalGear,
    setAdditionalCrysta,
    setSpecialGear,
    setSpecialCrysta
  } = useCalculator();
  
  const { armor, additionalGear, specialGear } = state;

  return (
    <section className="section-card">
      <div className="section-header">
        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        Armor & Gear
      </div>
      
      <div className="p-4">
        {/* Armor */}
        <div className="mb-4 p-3 bg-slate-800/30 rounded-md border border-white/5">
          <h3 className="text-sm font-medium text-slate-300 mb-2">Armor</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-2">
            <SelectInput
              label="Armor Type"
              value={armor.type}
              options={armorTypeOptions}
              onChange={(value) => setArmor('type', value)}
            />
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">DEF</label>
              <input
                type="number"
                value={armor.def}
                onChange={(e) => setArmor('def', parseInt(e.target.value) || 0)}
                min={0}
                className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <SelectInput
              label="Refinement"
              value={armor.refinement}
              options={refinementOptions}
              onChange={(value) => setArmor('refinement', value)}
            />
          </div>

          {/* Armor Crystals */}
          <div className="mt-4">
            <h5 className="text-sm font-medium text-slate-300 mb-3">Armor Crystals</h5>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <CrystalSlot
                label="Crystal 1"
                crystal={armor.crysta1}
                options={fullStatOptions}
                onRowChange={(rowIndex, stat, value) => setArmorCrysta(1, rowIndex, stat, value)}
              />
              <CrystalSlot
                label="Crystal 2"
                crystal={armor.crysta2}
                options={fullStatOptions}
                onRowChange={(rowIndex, stat, value) => setArmorCrysta(2, rowIndex, stat, value)}
              />
            </div>
          </div>
        </div>

        {/* Additional Gear */}
        <div className="mb-4 p-3 bg-slate-800/30 rounded-md border border-white/5">
          <h3 className="text-sm font-medium text-slate-300 mb-2">Additional Gear</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">DEF</label>
              <input
                type="number"
                value={additionalGear.def}
                onChange={(e) => setAdditionalGear('def', parseInt(e.target.value) || 0)}
                min={0}
                className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <SelectInput
              label="Refinement"
              value={additionalGear.refinement}
              options={refinementOptions}
              onChange={(value) => setAdditionalGear('refinement', value)}
            />
          </div>

          {/* Additional Gear Crystals */}
          <div className="mt-4">
            <h5 className="text-sm font-medium text-slate-300 mb-3">Gear Crystals</h5>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <CrystalSlot
                label="Crystal 1"
                crystal={additionalGear.crysta1}
                options={fullStatOptions}
                onRowChange={(rowIndex, stat, value) => setAdditionalCrysta(1, rowIndex, stat, value)}
              />
              <CrystalSlot
                label="Crystal 2"
                crystal={additionalGear.crysta2}
                options={fullStatOptions}
                onRowChange={(rowIndex, stat, value) => setAdditionalCrysta(2, rowIndex, stat, value)}
              />
            </div>
          </div>
        </div>

        {/* Special Gear */}
        <div className="p-4 bg-slate-800/30 rounded-xl border border-white/5">
          <h3 className="text-sm font-medium text-slate-300 mb-2">Special Gear</h3>
          
          <div className="mb-2">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">DEF</label>
              <input
                type="number"
                value={specialGear.def}
                onChange={(e) => setSpecialGear('def', parseInt(e.target.value) || 0)}
                min={0}
                className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Special Gear Crystals */}
          <div className="mt-4">
            <h5 className="text-sm font-medium text-slate-300 mb-3">Gear Crystals</h5>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <CrystalSlot
                label="Crystal 1"
                crystal={specialGear.crysta1}
                options={fullStatOptions}
                onRowChange={(rowIndex, stat, value) => setSpecialCrysta(1, rowIndex, stat, value)}
              />
              <CrystalSlot
                label="Crystal 2"
                crystal={specialGear.crysta2}
                options={fullStatOptions}
                onRowChange={(rowIndex, stat, value) => setSpecialCrysta(2, rowIndex, stat, value)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}