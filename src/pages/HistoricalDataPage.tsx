import React, { useState } from "react";
import PageTemplate from "../components/PageTemplate";
import Slider from "../components/Slider";

interface HistoricalData {
  timestamp: string;
  sensorData: number;
  deepAnalysis: number;
  controlPanel: number;
}

const HistoricalDataPage: React.FC = () => {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [data, setData] = useState<HistoricalData[]>([]);

  const handleDownloadCSV = () => {
    if (!startDate || !endDate) {
      alert("Please select both start and end dates");
      return;
    }

    // Create CSV content
    const headers = [
      "Timestamp",
      "Sensor Data",
      "Deep Analysis",
      "Control Panel",
    ];
    const csvContent = [
      headers.join(","),
      ...data.map((row) =>
        [
          row.timestamp,
          row.sensorData,
          row.deepAnalysis,
          row.controlPanel,
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

  return (
    <PageTemplate title="Historical Data Comparison">
      <div className="p-6 space-y-6">
        {/* Date Range Selection */}
        <div className="flex gap-4 items-center">
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Start Date
            </label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="border rounded-md p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              End Date
            </label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="border rounded-md p-2"
            />
          </div>
          <button
            onClick={handleDownloadCSV}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-6"
          >
            Download CSV
          </button>
        </div>

        {/* Data Visualization */}
        <div className="w-full">
          <table className="w-full border-collapse">
            <tbody>
              <tr className="bg-white">
                <td className="p-4 border rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-4 text-black">
                    Sensor Data
                  </h3>
                  <div className="h-64 bg-gray-100 rounded">
                    {/* Add chart component here */}
                  </div>
                </td>
                <td className="p-4 border rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-4 text-black">
                    Deep Analysis
                  </h3>
                  <div className="h-64 bg-gray-100 rounded">
                    {/* Add chart component here */}
                  </div>
                </td>
                <td className="p-4 border rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-4 text-black">
                    Control Panel
                  </h3>
                  <div className="h-64 bg-gray-100 rounded">
                    {/* Add chart component here */}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </PageTemplate>
  );
};

export default HistoricalDataPage;
