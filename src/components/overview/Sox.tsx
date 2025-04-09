import React from 'react';

interface SoxProps {
  value: number;
}

const Sox: React.FC<SoxProps> = ({ value }) => {
  const getSoxColor = (level: number) => {
    if (level < 0.5) return 'text-green-500';
    if (level < 1.5) return 'text-yellow-500';
    if (level < 2.5) return 'text-orange-500';
    return 'text-red-500';
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-700">SOx Level</h3>
        <div className="text-4xl font-bold">
          <span className={getSoxColor(value)}>
            {value}
            <span className="text-2xl">ppm</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sox;
