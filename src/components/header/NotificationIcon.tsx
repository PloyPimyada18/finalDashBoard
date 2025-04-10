import React, { useState } from 'react';
import { BellOutlined, UserOutlined } from '@ant-design/icons';

const NotificationIcon: React.FC = () => {
  const [notificationCount, setNotificationCount] = useState(5);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="relative">
      {notificationCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
          {notificationCount}
        </span>
      )}
      <button className="p-2 hover:bg-gray-100 rounded-full" onClick={handleClick}>
        <BellOutlined style={{ fontSize: '20px', color: 'black' }} />
      </button>
      {showDropdown && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
          <div className="flex items-center p-2">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
            <p className="text-sm text-gray-700">High pH alert!</p>
          </div>
          <div className="flex items-center p-2">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
            <p className="text-sm text-gray-700">High temperature warning!</p>
          </div>
          <div className="flex items-center p-2">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
            <p className="text-sm text-gray-700">System update available.</p>
          </div>
          <div className="flex items-center p-2">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
            <p className="text-sm text-gray-700">High pressure detected!</p>
          </div>
          <div className="flex items-center p-2">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
            <p className="text-sm text-gray-700">High voltage alert!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationIcon; 