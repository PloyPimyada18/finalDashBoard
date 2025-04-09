import React from 'react';

interface CarbonProps {
  value: number;
}

const Carbon: React.FC<CarbonProps> = ({ value }) => {
  const getCarbonColor = (level: number) => {
    if (level < 400) return 'text-green-500';
    if (level < 1000) return 'text-yellow-500';
    if (level < 1500) return 'text-orange-500';
    return 'text-red-500';
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-700">Carbon Level</h3>
        <div className="text-4xl font-bold">
          <span className={getCarbonColor(value)}>
            {value}
            <span className="text-2xl">ppm</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Carbon;
