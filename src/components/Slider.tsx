import React, { useState } from "react";

interface SliderProps {
  label: string;
  min?: number;
  max?: number;
  value?: number;
  onChange?: (value: number) => void;
  className?: string;
}

const Slider: React.FC<SliderProps> = ({
  label,
  min = 0,
  max = 100,
  value: initialValue = 50,
  onChange,
  className = "",
}) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    setValue(newValue);
    onChange?.(newValue);
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-lg p-4 w-full max-w-full ${className}`}
    >
      <div className="flex justify-between items-center mb-2">
        <label
          htmlFor="slider"
          className="block text-base lg:text-lg font-semibold text-gray-700 truncate"
        >
          {label}
        </label>
        <span className="text-xs lg:text-sm font-medium text-gray-700 ml-2">
          {value}
        </span>
      </div>
      <input
        id="slider"
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
    </div>
  );
};

export default Slider;
