import React, { useState } from "react";
import PageTemplate from "../components/PageTemplate";
import CssTable from "../components/CssTable";

interface HistoricalData {
  [key: string]: string | number;
  timestamp: string;
  // Sensor Data fields
  temperature: number;
  ph: number;
  carbonIn: number;
  carbonOut: number;
  so2In: number;
  so2Out: number;
  do: number;
  ec: number;
  redox: number;
  turbidity: number;
  light: number;
  o2In: number;
  o2Out: number;
  humidity: number;
  // Deep Analysis fields
  normalCells: number;
  degradedCells: number;
  deadCells: number;
  avgCellSize: number;
  densityEstimate: number;
  // Control Panel fields
  pumpState: number;
  lightState: number;
  lightIntensity: number;
  phControlState: number;
}

const HistoricalDataPage: React.FC = () => {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  // Mock data
  const [data] = useState<HistoricalData[]>([
    {
      timestamp: "2024-03-01 09:00",
      // Sensor data
      temperature: 30,
      ph: 7,
      carbonIn: 450,
      carbonOut: 420,
      so2In: 0.8,
      so2Out: 0.5,
      do: 6,
      ec: 1.2,
      redox: 250,
      turbidity: 3,
      light: 800,
      o2In: 21.5,
      o2Out: 20.8,
      humidity: 65,
      // Deep Analysis data
      normalCells: 991,
      degradedCells: 381,
      deadCells: 152,
      avgCellSize: 13.5,
      densityEstimate: 1200,
      // Control Panel data
      pumpState: 1,
      lightState: 1,
      lightIntensity: 50,
      phControlState: 1,
    },
    {
      timestamp: "2024-03-01 10:00",
      temperature: 31,
      ph: 7.2,
      carbonIn: 455,
      carbonOut: 425,
      so2In: 0.85,
      so2Out: 0.55,
      do: 6.2,
      ec: 1.3,
      redox: 255,
      turbidity: 3.2,
      light: 820,
      o2In: 21.8,
      o2Out: 21.0,
      humidity: 66,
      normalCells: 980,
      degradedCells: 390,
      deadCells: 160,
      avgCellSize: 13.3,
      densityEstimate: 1180,
      pumpState: 1,
      lightState: 1,
      lightIntensity: 55,
      phControlState: 1,
    },
    {
      timestamp: "2024-03-01 11:00",
      temperature: 32,
      ph: 7.1,
      carbonIn: 460,
      carbonOut: 430,
      so2In: 0.82,
      so2Out: 0.52,
      do: 6.1,
      ec: 1.25,
      redox: 252,
      turbidity: 3.1,
      light: 810,
      o2In: 21.6,
      o2Out: 20.9,
      humidity: 67,
      normalCells: 985,
      degradedCells: 385,
      deadCells: 155,
      avgCellSize: 13.4,
      densityEstimate: 1190,
      pumpState: 1,
      lightState: 1,
      lightIntensity: 52,
      phControlState: 1,
    },
  ]);

  const handleDownloadCSV = () => {
    if (!startDate || !endDate) {
      alert("Please select both start and end dates");
      return;
    }

    // Create CSV content
    const headers = [
      "Timestamp",
      "Temperature",
      "pH",
      "Carbon In",
      "Carbon Out",
      "SO₂ In",
      "SO₂ Out",
      "DO",
      "EC",
      "Redox",
      "Turbidity",
      "Light",
      "O₂ In",
      "O₂ Out",
      "Humidity",
      "Normal Cells",
      "Degraded Cells",
      "Dead Cells",
      "Avg Cell Size",
      "Density Estimate",
      "Pump State",
      "Light State",
      "Light Intensity",
      "pH Control State",
    ];

    const csvContent = [
      headers.join(","),
      ...data.map((row) =>
        [
          row.timestamp,
          row.temperature,
          row.ph,
          row.carbonIn,
          row.carbonOut,
          row.so2In,
          row.so2Out,
          row.do,
          row.ec,
          row.redox,
          row.turbidity,
          row.light,
          row.o2In,
          row.o2Out,
          row.humidity,
          row.normalCells,
          row.degradedCells,
          row.deadCells,
          row.avgCellSize,
          row.densityEstimate,
          row.pumpState,
          row.lightState,
          row.lightIntensity,
          row.phControlState,
        ].join(",")
      ),
    ].join("\n");

    // Create and trigger download
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute(
      "download",
      `historical_data_${startDate}_to_${endDate}.csv`
    );
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const columns = [
    { key: "timestamp", label: "Timestamp" },
    { key: "temperature", label: "Temperature" },
    { key: "ph", label: "pH" },
    { key: "carbonIn", label: "Carbon In" },
    { key: "carbonOut", label: "Carbon Out" },
    { key: "so2In", label: "SO₂ In" },
    { key: "so2Out", label: "SO₂ Out" },
    { key: "do", label: "DO" },
    { key: "ec", label: "EC" },
    { key: "redox", label: "Redox" },
    { key: "turbidity", label: "Turbidity" },
    { key: "light", label: "Light" },
    { key: "o2In", label: "O₂ In" },
    { key: "o2Out", label: "O₂ Out" },
    { key: "humidity", label: "Humidity" },
  ];

  const analysisColumns = [
    { key: "timestamp", label: "Timestamp" },
    { key: "normalCells", label: "Normal Cells" },
    { key: "degradedCells", label: "Degraded Cells" },
    { key: "deadCells", label: "Dead Cells" },
    { key: "avgCellSize", label: "Avg Cell Size" },
    { key: "densityEstimate", label: "Density Estimate" },
  ];

  const controlColumns = [
    { key: "timestamp", label: "Timestamp" },
    { key: "pumpState", label: "Pump State" },
    { key: "lightState", label: "Light State" },
    { key: "lightIntensity", label: "Light Intensity" },
    { key: "phControlState", label: "pH Control State" },
  ];

  return (
    <PageTemplate title="Historical Data Comparison">
      <div className="min-h-screen grid grid-rows-[auto_1fr] gap-8 px-6 py-12 pb-20">
        {/* Date Range Selection */}
        <div className="w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <label className="block text-lg font-semibold text-black mb-4">
                Start Date
              </label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full border rounded-md p-2 bg-black text-white"
              />
            </div>
            <div>
              <label className="block text-lg font-semibold text-black mb-4">
                End Date
              </label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full border rounded-md p-2 bg-black text-white"
              />
            </div>
            <div className="flex items-end">
              <button
                onClick={handleDownloadCSV}
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Download CSV
              </button>
            </div>
          </div>
        </div>

        {/* Data Visualization */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-x-8 gap-y-12">
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">
              Sensor Data
            </h3>
            <div className="overflow-x-auto shadow rounded-lg">
              <CssTable columns={columns} data={data} showEdit={false} />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">
              Deep Analysis
            </h3>
            <div className="overflow-x-auto shadow rounded-lg">
              <CssTable
                columns={analysisColumns}
                data={data}
                showEdit={false}
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">
              Control Panel
            </h3>
            <div className="overflow-x-auto shadow rounded-lg">
              <CssTable columns={controlColumns} data={data} showEdit={false} />
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default HistoricalDataPage;
