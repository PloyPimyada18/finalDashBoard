import React, { useState } from 'react';
import ReactorSelector from './header/ReactorSelector';
import TimeDisplay from './header/TimeDisplay';
import NotificationIcon from './header/NotificationIcon';
import SettingsMenu from './header/SettingMenu';
import AddUserButton from './header/AddUserButton';
import logo from '../assets/pic/logo.png';

const DashboardHeader: React.FC = () => {
  const [selectedReactor, setSelectedReactor] = useState('Reactor1');

  return (
    <div className="bg-white rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img src={logo} alt="EGAT Logo" className="h-12 w-auto" />
          <div>
            <h1 className="text-3xl font-bold text-gray-800">EGAT AIoT Dashboard</h1>
            <p className="text-gray-600 mt-2">Real-time Monitoring System</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <TimeDisplay />
          <ReactorSelector 
            selectedReactor={selectedReactor}
            onReactorChange={setSelectedReactor}
          />
          <AddUserButton />
          <NotificationIcon />
          <SettingsMenu />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
