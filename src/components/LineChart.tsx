import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import TimeSelector from "./TimeSelector";

interface DataPoint {
  time: string;
  value?: number;
  carbonIn?: number;
  carbonOut?: number;
}

interface LineChartProps {
  data: DataPoint[];
  title: string;
  unit: string;
  color: string;
  type: "single" | "double";
  yAxisTitle: string;
}

const LineChart: React.FC<LineChartProps> = ({
  data,
  title,
  unit,
  color,
  type,
  yAxisTitle,
}) => {
  const [chartId] = useState(`chart-${Math.floor(Math.random() * 1000)}`);

  console.log(`Rendering ${title} chart with data:`, data);

  useEffect(() => {
    console.log(`Chart ${title} mounted/updated`);
    return () => {
      console.log(`Chart ${title} unmounted`);
    };
  }, [title]);

  const handleTimeRangeChange = (range: string) => {
    console.log("Time range changed to:", range);
  };

  // Prepare series data based on chart type
  const series =
    type === "single"
      ? [
          {
            name: title,
            data: data.map((d) => d.value ?? 0),
          },
        ]
      : [
          {
            name: "Carbon In",
            data: data.map((d) => d.carbonIn ?? 0),
          },
          {
            name: "Carbon Out",
            data: data.map((d) => d.carbonOut ?? 0),
          },
        ];

  console.log(`${title} chart series:`, series);

  // Chart options
  const chartOptions: ApexOptions = {
    chart: {
      id: chartId,
      height: 350,
      type: "line",
      toolbar: {
        show: false,
      },
      animations: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 3,
      curve: "smooth",
    },
    colors: type === "single" ? [color] : [color, `${color}88`],
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: data.map((d) => d.time),
    },
    yaxis: {
      title: {
        text: yAxisTitle,
      },
    },
    tooltip: {
      theme: "dark",
    },
  };

  // Calculate averages
  const calculateAverage = () => {
    if (type === "single") {
      return (
        data.reduce((sum, item) => sum + (item.value ?? 0), 0) / data.length
      ).toFixed(1);
    } else {
      return {
        in: (
          data.reduce((sum, item) => sum + (item.carbonIn ?? 0), 0) /
          data.length
        ).toFixed(0),
        out: (
          data.reduce((sum, item) => sum + (item.carbonOut ?? 0), 0) /
          data.length
        ).toFixed(0),
      };
    }
  };

  const average = calculateAverage();

  return (
    <div className="w-full bg-white rounded-lg shadow-sm p-4 md:p-6">
      <div className="flex justify-between mb-5">
        <div>
          <h5 className="text-gray-500 font-normal mb-2">Avg {title}</h5>
          {type === "single" ? (
            <p className="text-gray-900 text-2xl font-bold">
              {String(average)}
              {unit}
            </p>
          ) : (
            <div className="space-y-1">
              <p className="text-gray-900 text-base font-bold">
                In:{" "}
                {typeof average === "object" && "in" in average
                  ? average.in
                  : ""}
                {unit}
              </p>
              <p className="text-gray-900 text-base font-bold">
                Out:{" "}
                {typeof average === "object" && "out" in average
                  ? average.out
                  : ""}
                {unit}
              </p>
            </div>
          )}
        </div>
        <TimeSelector onTimeRangeChange={handleTimeRangeChange} color={color} />
      </div>

      <div className="mt-6" style={{ height: "350px", width: "100%" }}>
        <ReactApexChart
          options={chartOptions}
          series={series}
          type="line"
          height={350}
          width="100%"
        />
      </div>
    </div>
  );
};

export default LineChart;
