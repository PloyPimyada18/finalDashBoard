import React, { useState } from 'react';
import Temperature from '../components/overview/Tempurature';
import PH from '../components/overview/pH';
import Carbon from '../components/overview/Carbon';
import Sox from '../components/overview/Sox';
import DashboardHeader from '../components/DashboardHeader';
import TempChart from '../components/overview/TempChart';
import PHChart from '../components/overview/pHChart';
import CarbonChart from '../components/overview/CarbonChart';
import Sidebar from '../components/Sidebar';

const DashboardGrid: React.FC = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  // Example data - in a real application, this would come from an API or IoT device
  const sensorData = {
    temperature: 25.5,
    ph: 7.2,
    carbon: 450,
    sox: 0.8
  };

  // Chart data
  const tempData = [
    { time: '01:00', value: 19.5 }, { time: '02:00', value: 19.2 }, { time: '03:00', value: 19.0 },
    { time: '04:00', value: 18.8 }, { time: '05:00', value: 18.9 }, { time: '06:00', value: 19.3 },
    { time: '07:00', value: 20.0 }, { time: '08:00', value: 21.5 }, { time: '09:00', value: 23.0 },
    { time: '10:00', value: 24.5 }, { time: '11:00', value: 26.0 }, { time: '12:00', value: 27.1 },
    { time: '13:00', value: 27.5 }, { time: '14:00', value: 27.8 }, { time: '15:00', value: 27.2 },
    { time: '16:00', value: 26.5 }, { time: '17:00', value: 25.8 }, { time: '18:00', value: 24.5 },
    { time: '19:00', value: 23.2 }, { time: '20:00', value: 22.0 }, { time: '21:00', value: 21.0 },
    { time: '22:00', value: 20.5 }, { time: '23:00', value: 20.0 }, { time: '00:00', value: 19.8 }
  ];

  const phData = [
    { time: '01:00', value: 7.1 }, { time: '02:00', value: 7.1 }, { time: '03:00', value: 7.0 },
    { time: '04:00', value: 7.0 }, { time: '05:00', value: 7.1 }, { time: '06:00', value: 7.1 },
    { time: '07:00', value: 7.2 }, { time: '08:00', value: 7.2 }, { time: '09:00', value: 7.3 },
    { time: '10:00', value: 7.3 }, { time: '11:00', value: 7.2 }, { time: '12:00', value: 7.2 },
    { time: '13:00', value: 7.1 }, { time: '14:00', value: 7.1 }, { time: '15:00', value: 7.0 },
    { time: '16:00', value: 7.0 }, { time: '17:00', value: 7.1 }, { time: '18:00', value: 7.1 },
    { time: '19:00', value: 7.2 }, { time: '20:00', value: 7.2 }, { time: '21:00', value: 7.1 },
    { time: '22:00', value: 7.1 }, { time: '23:00', value: 7.0 }, { time: '00:00', value: 7.0 }
  ];

  const carbonData = [
    { time: '01:00', carbonIn: 410, carbonOut: 390 }, { time: '02:00', carbonIn: 405, carbonOut: 385 },
    { time: '03:00', carbonIn: 400, carbonOut: 380 }, { time: '04:00', carbonIn: 400, carbonOut: 380 },
    { time: '05:00', carbonIn: 410, carbonOut: 390 }, { time: '06:00', carbonIn: 420, carbonOut: 400 },
    { time: '07:00', carbonIn: 440, carbonOut: 415 }, { time: '08:00', carbonIn: 460, carbonOut: 430 },
    { time: '09:00', carbonIn: 475, carbonOut: 440 }, { time: '10:00', carbonIn: 480, carbonOut: 445 },
    { time: '11:00', carbonIn: 490, carbonOut: 450 }, { time: '12:00', carbonIn: 495, carbonOut: 455 },
    { time: '13:00', carbonIn: 500, carbonOut: 460 }, { time: '14:00', carbonIn: 490, carbonOut: 450 },
    { time: '15:00', carbonIn: 480, carbonOut: 440 }, { time: '16:00', carbonIn: 470, carbonOut: 435 },
    { time: '17:00', carbonIn: 460, carbonOut: 430 }, { time: '18:00', carbonIn: 450, carbonOut: 420 },
    { time: '19:00', carbonIn: 440, carbonOut: 415 }, { time: '20:00', carbonIn: 430, carbonOut: 410 },
    { time: '21:00', carbonIn: 425, carbonOut: 405 }, { time: '22:00', carbonIn: 420, carbonOut: 400 },
    { time: '23:00', carbonIn: 415, carbonOut: 395 }, { time: '00:00', carbonIn: 410, carbonOut: 390 }
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar isCollapsed={isSidebarCollapsed} onToggleCollapse={toggleSidebar} />

      {/* Main Content - Apply margin based on sidebar state */}
      <div className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ${isSidebarCollapsed ? 'ml-16' : 'ml-64'}`}>
        {/* Header */}
        <div className="w-full bg-white shadow-md z-10">
          <DashboardHeader />
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Sensor Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <Temperature value={sensorData.temperature} />
            <PH value={sensorData.ph} />
            <Carbon value={sensorData.carbon} />
            <Sox value={sensorData.sox} />
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden p-4">
              <TempChart data={tempData} />
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden p-4">
              <PHChart data={phData} />
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden p-4">
              <CarbonChart data={carbonData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardGrid;