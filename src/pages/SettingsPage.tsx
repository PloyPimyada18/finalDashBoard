import React, { useState } from 'react';
import PageTemplate from '../components/PageTemplate';

interface User {
  id: string;
  name: string;
  role: 'admin' | 'user';
}

interface IoTNode {
  id: string;
  name: string;
  reactor: string;
  status: 'active' | 'inactive';
}

const SettingsPage: React.FC = () => {
  const [updateInterval, setUpdateInterval] = useState<number>(10);
  const [isRealTime, setIsRealTime] = useState<boolean>(false);
  const [userRole, setUserRole] = useState<'admin' | 'user'>('user');
  const [nodes, setNodes] = useState<IoTNode[]>([
    { id: '1', name: 'Node 1', reactor: 'Reactor A', status: 'active' },
    { id: '2', name: 'Node 2', reactor: 'Reactor B', status: 'inactive' }
  ]);
  const [newNode, setNewNode] = useState({ name: '', reactor: 'Reactor A' });
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sound: true
  });

  const handleUpdateIntervalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateInterval(Number(event.target.value));
  };

  const handleRealTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsRealTime(event.target.checked);
  };

  const handleNotificationChange = (type: keyof typeof notifications) => {
    setNotifications(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const handleAddNode = () => {
    if (newNode.name.trim()) {
      const node: IoTNode = {
        id: Date.now().toString(),
        name: newNode.name,
        reactor: newNode.reactor,
        status: 'active'
      };
      setNodes([...nodes, node]);
      setNewNode({ name: '', reactor: 'Reactor A' });
    }
  };

  return (
    <PageTemplate title="Settings">
      <div className="p-6 space-y-6 bg-gray-100">
        {/* User Management Section */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-semibold mb-4 text-black">User Management</h2>
          <div className="space-y-4 mb-4">
            <div className="flex items-center space-x-4">
              <span className="text-black">User Role:</span>
              <select
                value={userRole}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                  setUserRole(e.target.value as 'admin' | 'user');
                }}
                className="border border-gray-300 rounded px-3 py-1 text-black bg-white"
              >
                <option value="admin">Administrator</option>
                <option value="user">Regular User</option>
              </select>
            </div>
          </div>
        </div>

        {/* Data Update Settings */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-semibold mb-4 text-black">Data Update Settings</h2>
          <div className="flex items-center space-x-2 mb-4">
            <input
              type="checkbox"
              id="realTime"
              checked={isRealTime}
              onChange={handleRealTimeChange}
              className="h-4 w-4 text-blue-600"
            />
            <label htmlFor="realTime" className="text-black">Real-time Update</label>
          </div>
          {!isRealTime && (
            <div className="mt-2">
              <label className="block text-sm font-medium mb-1 text-black">
                Update Interval (minutes)
              </label>
              <input
                type="number"
                value={updateInterval}
                onChange={handleUpdateIntervalChange}
                min="1"
                className="border border-gray-300 rounded px-3 py-1 w-32 text-black bg-white"
              />
            </div>
          )}
        </div>

        {/* IoT Node Management */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-semibold mb-4 text-black">IoT Node Management</h2>
          <div className="space-y-4 mb-4">
            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Node Name"
                value={newNode.name}
                onChange={(e) => setNewNode({ ...newNode, name: e.target.value })}
                className="border border-gray-300 rounded px-3 py-1 text-black bg-white"
              />
              <select
                value={newNode.reactor}
                onChange={(e) => setNewNode({ ...newNode, reactor: e.target.value })}
                className="border border-gray-300 rounded px-3 py-1 text-black bg-white"
              >
                <option value="Reactor A">Reactor A</option>
                <option value="Reactor B">Reactor B</option>
                <option value="Reactor C">Reactor C</option>
              </select>
              <button 
                onClick={handleAddNode}
                className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
              >
                Add
              </button>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-semibold mb-4 text-black">Notification Settings</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="email"
                checked={notifications.email}
                onChange={() => handleNotificationChange('email')}
                className="h-4 w-4 text-blue-600"
              />
              <label htmlFor="email" className="text-black">Email Notifications</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="push"
                checked={notifications.push}
                onChange={() => handleNotificationChange('push')}
                className="h-4 w-4 text-blue-600"
              />
              <label htmlFor="push" className="text-black">Push Notifications</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="sound"
                checked={notifications.sound}
                onChange={() => handleNotificationChange('sound')}
                className="h-4 w-4 text-blue-600"
              />
              <label htmlFor="sound" className="text-black">Sound Notifications</label>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default SettingsPage; 