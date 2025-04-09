import React from 'react';
import Temperature from '../components/Tempurature';
import PH from '../components/pH';
import Carbon from '../components/Carbon';
import Sox from '../components/Sox';
import Camera from '../components/Camera';
import DashboardHeader from '../components/DashboardHeader';
import TempChart from '../components/TempChart';
import PHChart from '../components/pHChart';
import CarbonChart from '../components/CarbonChart';

const DashboardGrid: React.FC = () => {
  // Example data - in a real application, this would come from an API or IoT device
  const sensorData = {
    temperature: 25.5,
    ph: 7.2,
    carbon: 450,
    sox: 0.8
  };

  // Chart data
  const tempData = [
    { time: '10:00', value: 25.5 },
    { time: '11:00', value: 26.2 },
    { time: '12:00', value: 27.1 },
    { time: '13:00', value: 26.8 },
    { time: '14:00', value: 26.5 },
  ];

  const phData = [
    { time: '10:00', value: 7.2 },
    { time: '11:00', value: 7.1 },
    { time: '12:00', value: 7.0 },
    { time: '13:00', value: 7.3 },
    { time: '14:00', value: 7.2 },
  ];

  const carbonData = [
    { time: '10:00', carbonIn: 450, carbonOut: 420 },
    { time: '11:00', carbonIn: 480, carbonOut: 440 },
    { time: '12:00', carbonIn: 460, carbonOut: 425 },
    { time: '13:00', carbonIn: 470, carbonOut: 435 },
    { time: '14:00', carbonIn: 490, carbonOut: 455 },
  ];

  return (
    <div className="h-screen w-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <div className="w-full bg-gray-100">
        <DashboardHeader />
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          {/* Sensor Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <Temperature value={sensorData.temperature} />
            <PH value={sensorData.ph} />
            <Carbon value={sensorData.carbon} />
            <Sox value={sensorData.sox} />
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <TempChart data={tempData} />
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <PHChart data={phData} />
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <CarbonChart data={carbonData} />
            </div>
          </div>

          {/* Camera Section */}
          <div>
            <Camera />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardGrid;