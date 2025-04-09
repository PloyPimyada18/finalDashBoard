import React, { useState } from 'react';
import { BellOutlined } from '@ant-design/icons';

const NotificationIcon: React.FC = () => {
  const [notificationCount, setNotificationCount] = useState(5);

  return (
    <div className="relative">
      {notificationCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
          {notificationCount}
        </span>
      )}
      <button className="p-2 hover:bg-gray-100 rounded-full">
        <BellOutlined style={{ fontSize: '20px', color: 'black' }} />
      </button>
    </div>
  );
};

export default NotificationIcon; 