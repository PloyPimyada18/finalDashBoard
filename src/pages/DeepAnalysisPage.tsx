import React, { useState } from "react";
import PageTemplate from "../components/PageTemplate";
import Camera from "../components/Camera";
import DonutChart, { DataItem } from "../components/DonutChart";

const DeepAnalysisPage: React.FC = () => {
  // Cell data
  const cellData: DataItem[] = [
    {
      id: "normal",
      label: "Normal",
      value: 991,
      color: "rgba(37, 99, 235, 1)", // blue-600
      avg_cell_size: 15.2,
      density_estimate: 2500000,
      dominant_color: "Blue",
    },
    {
      id: "degraded",
      label: "Degraded",
      value: 381,
      color: "rgba(251, 191, 36, 1)", // amber-400
      avg_cell_size: 12.8,
      density_estimate: 1800000,
      dominant_color: "Yellow",
    },
    {
      id: "dead",
      label: "Dead",
      value: 152,
      color: "rgba(239, 68, 68, 1)", // red-500
      avg_cell_size: 10.5,
      density_estimate: 800000,
      dominant_color: "Red",
    },
  ];

  // Display settings for chart
  const [visibleItems, setVisibleItems] = useState<string[]>([
    "normal",
    "degraded",
    "dead",
  ]);

  // Handle toggling items
  const handleToggleItem = (id: string, isVisible: boolean) => {
    setVisibleItems((prev) => {
      if (isVisible) {
        // Add the item if it's not already in the array
        return prev.includes(id) ? prev : [...prev, id];
      } else {
        // Remove the item if it exists
        return prev.filter((item) => item !== id);
      }
    });
  };

  return (
    <PageTemplate title="Cell Analysis Dashboard">
      <div className="p-6 space-y-6">
        <div className="w-full">
          <Camera src="/cell1.png" />
        </div>

        <DonutChart
          title="Cell Analysis Results"
          data={cellData}
          centerSubText="Total Cells"
          height="18rem"
          onToggleItem={handleToggleItem}
          visibleItems={visibleItems}
          // Overall statistics
          avgCellSize={13.5}
          densityEstimate={1200}
          dominantColor="Blue"
        />
      </div>
    </PageTemplate>
  );
};

export default DeepAnalysisPage;
