import React from 'react';

interface PHProps {
  value: number;
}

const PH: React.FC<PHProps> = ({ value }) => {
  const getPHColor = (ph: number) => {
    if (ph < 6) return 'text-red-500';
    if (ph < 7) return 'text-yellow-500';
    if (ph === 7) return 'text-green-500';
    if (ph < 8) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-700">pH Level</h3>
        <div className="text-4xl font-bold">
          <span className={getPHColor(value)}>
            {value}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PH;
