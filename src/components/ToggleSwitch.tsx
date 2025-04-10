import React from 'react';

interface ToggleSwitchProps {
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  phValue?: number;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  label,
  checked,
  onChange,
  disabled = false,
  phValue,
}) => {
  const getPhColor = (ph: number) => {
    if (ph < 7) return 'bg-red-500'; // Acid
    if (ph > 7) return 'bg-blue-500'; // Base
    return 'bg-green-500'; // Neutral
  };

  const getPhLabel = (ph: number) => {
    if (ph < 7) return 'Acidic';
    if (ph > 7) return 'Basic';
    return 'Neutral';
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-700">{label || 'pH Level'}</h3>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={checked}
              onChange={(e) => onChange(e.target.checked)}
              disabled={disabled}
              className="sr-only peer"
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
          </label>
        </div>
        
        {phValue !== undefined && (
          <div className="flex items-center space-x-2">
            <div className={`w-4 h-4 rounded-full ${getPhColor(phValue)}`}></div>
            <span className="text-sm font-medium text-gray-700">
              {getPhLabel(phValue)} (pH: {phValue.toFixed(1)})
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ToggleSwitch;
