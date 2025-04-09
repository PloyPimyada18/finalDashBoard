import React from 'react';

interface TemperatureProps {
  value: number;
  unit?: string;
}

const Temperature: React.FC<TemperatureProps> = ({ value, unit = '°C' }) => {
  const getTemperatureColor = (temp: number) => {
    if (temp < 0) return 'text-blue-500';
    if (temp < 10) return 'text-blue-300';
    if (temp < 20) return 'text-green-500';
    if (temp < 30) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-700">Temperature</h3>
        <div className="text-4xl font-bold">
          <span className={getTemperatureColor(value)}>
            {value}
            <span className="text-2xl">{unit}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Temperature;
