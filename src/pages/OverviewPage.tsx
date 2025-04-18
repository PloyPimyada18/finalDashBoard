import React from "react";
import LineChart from "../components/LineChart";
import SensorCard from "../components/SensorCard";
import PageTemplate from "../components/PageTemplate";
import CssTable from "../components/CssTable";

const OverviewPage: React.FC = () => {
  // Example data - in a real application, this would come from an API or IoT device
  const sensorData = {
    temperature: 30,
    ph: 7,
    carbon: 450,
    so2: 0.8,
  };
  const nodeColumns = [
    { key: "node", label: "Node" },
    { key: "status", label: "Status" },
    { key: "sensorType", label: "Sensor Type" },
  ];
  const nodeData = [
    { node: "Node 1", status: "Active", sensorType: "Temperature" },
    { node: "Node 2", status: "Inactive", sensorType: "pH" },
    { node: "Node 3", status: "Active", sensorType: "Carbon" },
    { node: "Node 4", status: "Active", sensorType: "SO₂" },
    { node: "Node 5", status: "Inactive", sensorType: "DO" },
    { node: "Node 6", status: "Active", sensorType: "EC" },
    { node: "Node 7", status: "Inactive", sensorType: "Redox" },
    { node: "Node 8", status: "Active", sensorType: "Turbidity" },
    { node: "Node 9", status: "Inactive", sensorType: "Light" },
    { node: "Node 10", status: "Active", sensorType: "Temperature" },
  ];
  // Chart data
  const tempData = [
    { time: "01:00", value: 19.5 },
    { time: "02:00", value: 19.2 },
    { time: "03:00", value: 19.0 },
    { time: "04:00", value: 18.8 },
    { time: "05:00", value: 18.9 },
    { time: "06:00", value: 19.3 },
    { time: "07:00", value: 20.0 },
    { time: "08:00", value: 21.5 },
    { time: "09:00", value: 23.0 },
    { time: "10:00", value: 24.5 },
    { time: "11:00", value: 26.0 },
    { time: "12:00", value: 27.1 },
    { time: "13:00", value: 27.5 },
    { time: "14:00", value: 27.8 },
    { time: "15:00", value: 27.2 },
    { time: "16:00", value: 26.5 },
    { time: "17:00", value: 25.8 },
    { time: "18:00", value: 24.5 },
    { time: "19:00", value: 23.2 },
    { time: "20:00", value: 22.0 },
    { time: "21:00", value: 21.0 },
    { time: "22:00", value: 20.5 },
    { time: "23:00", value: 20.0 },
    { time: "00:00", value: 19.8 },
  ];

  const phData = [
    { time: "01:00", value: 7.1 },
    { time: "02:00", value: 7.1 },
    { time: "03:00", value: 7.0 },
    { time: "04:00", value: 7.0 },
    { time: "05:00", value: 7.1 },
    { time: "06:00", value: 7.1 },
    { time: "07:00", value: 7.2 },
    { time: "08:00", value: 7.2 },
    { time: "09:00", value: 7.3 },
    { time: "10:00", value: 7.3 },
    { time: "11:00", value: 7.2 },
    { time: "12:00", value: 7.2 },
    { time: "13:00", value: 7.1 },
    { time: "14:00", value: 7.1 },
    { time: "15:00", value: 7.0 },
    { time: "16:00", value: 7.0 },
    { time: "17:00", value: 7.1 },
    { time: "18:00", value: 7.1 },
    { time: "19:00", value: 7.2 },
    { time: "20:00", value: 7.2 },
    { time: "21:00", value: 7.1 },
    { time: "22:00", value: 7.1 },
    { time: "23:00", value: 7.0 },
    { time: "00:00", value: 7.0 },
  ];

  const carbonData = [
    { time: "01:00", carbonIn: 410, carbonOut: 390 },
    { time: "02:00", carbonIn: 405, carbonOut: 385 },
    { time: "03:00", carbonIn: 400, carbonOut: 380 },
    { time: "04:00", carbonIn: 400, carbonOut: 380 },
    { time: "05:00", carbonIn: 410, carbonOut: 390 },
    { time: "06:00", carbonIn: 420, carbonOut: 400 },
    { time: "07:00", carbonIn: 440, carbonOut: 415 },
    { time: "08:00", carbonIn: 460, carbonOut: 430 },
    { time: "09:00", carbonIn: 475, carbonOut: 440 },
    { time: "10:00", carbonIn: 480, carbonOut: 445 },
    { time: "11:00", carbonIn: 490, carbonOut: 450 },
    { time: "12:00", carbonIn: 495, carbonOut: 455 },
    { time: "13:00", carbonIn: 500, carbonOut: 460 },
    { time: "14:00", carbonIn: 490, carbonOut: 450 },
    { time: "15:00", carbonIn: 480, carbonOut: 440 },
    { time: "16:00", carbonIn: 470, carbonOut: 435 },
    { time: "17:00", carbonIn: 460, carbonOut: 430 },
    { time: "18:00", carbonIn: 450, carbonOut: 420 },
    { time: "19:00", carbonIn: 440, carbonOut: 415 },
    { time: "20:00", carbonIn: 430, carbonOut: 410 },
    { time: "21:00", carbonIn: 425, carbonOut: 405 },
    { time: "22:00", carbonIn: 420, carbonOut: 400 },
    { time: "23:00", carbonIn: 415, carbonOut: 395 },
    { time: "00:00", carbonIn: 410, carbonOut: 390 },
  ];

  return (
    <PageTemplate title="Overview Dashboard">
      {/* Sensor Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <SensorCard
          title="Temperature"
          value={sensorData.temperature}
          unit="°C"
          type="temperature"
        />
        <SensorCard title="pH Level" value={sensorData.ph} type="ph" />
        <SensorCard
          title="Carbon Level"
          value={sensorData.carbon}
          unit="ppm"
          type="carbon"
        />
        <SensorCard
          title="SO2 Level"
          value={sensorData.so2}
          unit="ppm"
          type="so2"
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <LineChart
          data={tempData}
          title="Temperature"
          unit="°C"
          color="#3B82F6"
          type="single"
          yAxisTitle="Temperature (°C)"
        />
        <LineChart
          data={phData}
          title="pH"
          unit=""
          color="#10B981"
          type="single"
          yAxisTitle="pH Level"
        />
        <LineChart
          data={carbonData}
          title="CO₂"
          unit=" ppm"
          color="#9333EA"
          type="double"
          yAxisTitle="CO₂ Level (ppm)"
        />
        <div className="flex-1 h-[400px] overflow-hidden p-4">
          <CssTable columns={nodeColumns} data={nodeData} showEdit={true} />
        </div>
      </div>
    </PageTemplate>
  );
};

export default OverviewPage;
