import React, { useState } from 'react';
import { SettingOutlined } from '@ant-design/icons';

const SettingsMenu: React.FC = () => {
  const [showSettings, setShowSettings] = useState(false);

  const settingsItems = [
    { key: '1', label: 'System Settings' },
    { key: '2', label: 'User Management' },
    { key: '3', label: 'Logout' }
  ];

  return (
    <div className="relative">
      <button 
        className="p-2 hover:bg-gray-100 rounded-full"
        onClick={() => setShowSettings(!showSettings)}
      >
        <SettingOutlined style={{ fontSize: '20px', color: 'black' }} />
      </button>
      {showSettings && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
          {settingsItems.map(item => (
            <button
              key={item.key}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SettingsMenu; 