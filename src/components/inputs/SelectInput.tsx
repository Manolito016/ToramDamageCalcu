import React from 'react';
import type { StatOption } from '../../types';

interface SelectInputProps {
  label: string;
  value: string;
  options: StatOption[];
  onChange: (value: string) => void;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
}

export function SelectInput({
  label,
  value,
  options,
  onChange,
  disabled = false,
  className = '',
  placeholder = 'Select...'
}: SelectInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  // Deduplicate options by value to prevent React key warnings
  const uniqueOptions = [...new Map(options.map(opt => [opt.value, opt])).values()];

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <select
        value={value}
        onChange={handleChange}
        disabled={disabled}
        className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50"
      >
        <option value="">{placeholder}</option>
        {uniqueOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
