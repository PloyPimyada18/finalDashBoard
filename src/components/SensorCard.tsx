import React from "react";

type SensorType =
  | "temperature"
  | "ph"
  | "carbon"
  | "so2"
  | "do"
  | "ec"
  | "redox"
  | "turbidity"
  | "light"
  | "o2"
  | "humidity";

interface ColorRange {
  value: number;
  color: string;
}

interface SensorCardProps {
  title: string;
  value: number;
  unit?: string;
  type: SensorType;
}

const SensorCard: React.FC<SensorCardProps> = ({
  title,
  value,
  unit = "",
  type,
}) => {
  const getColor = (value: number, type: SensorType): string => {
    const ranges: Record<SensorType, ColorRange[]> = {
      temperature: [
        { value: 0, color: "text-blue-500" },
        { value: 10, color: "text-blue-300" },
        { value: 20, color: "text-green-500" },
        { value: 30, color: "text-yellow-500" },
        { value: Infinity, color: "text-red-500" },
      ],
      ph: [
        { value: 6, color: "text-red-500" },
        { value: 7, color: "text-yellow-500" },
        { value: 7.1, color: "text-green-500" },
        { value: 8, color: "text-yellow-500" },
        { value: Infinity, color: "text-red-500" },
      ],
      carbon: [
        { value: 400, color: "text-green-500" },
        { value: 1000, color: "text-yellow-500" },
        { value: 1500, color: "text-orange-500" },
        { value: Infinity, color: "text-red-500" },
      ],
      so2: [
        { value: 0.5, color: "text-green-500" },
        { value: 1.5, color: "text-yellow-500" },
        { value: 2.5, color: "text-orange-500" },
        { value: Infinity, color: "text-red-500" },
      ],
      do: [
        { value: 2, color: "text-red-500" },
        { value: 4, color: "text-yellow-500" },
        { value: 6, color: "text-green-500" },
        { value: 8, color: "text-blue-500" },
        { value: Infinity, color: "text-blue-300" },
      ],
      ec: [
        { value: 0.5, color: "text-blue-500" },
        { value: 1.0, color: "text-green-500" },
        { value: 1.5, color: "text-yellow-500" },
        { value: Infinity, color: "text-red-500" },
      ],
      redox: [
        { value: 100, color: "text-red-500" },
        { value: 200, color: "text-yellow-500" },
        { value: 300, color: "text-green-500" },
        { value: 400, color: "text-blue-500" },
        { value: Infinity, color: "text-blue-300" },
      ],
      turbidity: [
        { value: 1, color: "text-green-500" },
        { value: 3, color: "text-yellow-500" },
        { value: 5, color: "text-orange-500" },
        { value: Infinity, color: "text-red-500" },
      ],
      light: [
        { value: 200, color: "text-red-500" },
        { value: 500, color: "text-yellow-500" },
        { value: 800, color: "text-green-500" },
        { value: 1000, color: "text-blue-500" },
        { value: Infinity, color: "text-blue-300" },
      ],
      o2: [
        { value: 15, color: "text-red-500" },
        { value: 18, color: "text-yellow-500" },
        { value: 20, color: "text-green-500" },
        { value: 22, color: "text-blue-500" },
        { value: Infinity, color: "text-blue-300" },
      ],
      humidity: [
        { value: 30, color: "text-red-500" },
        { value: 40, color: "text-yellow-500" },
        { value: 50, color: "text-green-500" },
        { value: 70, color: "text-blue-500" },
        { value: Infinity, color: "text-blue-300" },
      ],
    };

    const range = ranges[type];
    for (let i = 0; i < range.length; i++) {
      if (value < range[i].value) {
        return range[i].color;
      }
    }

    return "text-gray-500";
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
        <div className="text-4xl font-bold">
          <span className={getColor(value, type)}>
            {value}
            {unit && <span className="text-2xl">{unit}</span>}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SensorCard;
