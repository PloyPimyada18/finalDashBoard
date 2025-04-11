import React from "react";
import PageTemplate from "../components/PageTemplate";
import CssTable from "../components/CssTable";

const AlertsPage: React.FC = () => {
  const alertData = [
    {
      reactor: "Reactor 1",
      sensor_id: 202,
      alert_type: "Temperature",
      severity: "high",
      timestamp: "2023-10-01 12:00:00",
    },
    {
      reactor: "Reactor 2",
      sensor_id: 203,
      alert_type: "Humidity",
      severity: "medium",
      timestamp: "2023-10-01 13:00:00",
    },
    {
      reactor: "Reactor 1",
      sensor_id: 204,
      alert_type: "Pressure",
      severity: "low",
      timestamp: "2023-10-01 14:00:00",
    },
    {
      reactor: "Reactor 2",
      sensor_id: 205,
      alert_type: "Temperature",
      severity: "high",
      timestamp: "2023-10-01 15:00:00",
    },
    {
      reactor: "Reactor 1",
      sensor_id: 206,
      alert_type: "Humidity",
      severity: "medium",
      timestamp: "2023-10-01 16:00:00",
    },
    {
      reactor: "Reactor 2",
      sensor_id: 207,
      alert_type: "Pressure",
      severity: "low",
      timestamp: "2023-10-01 17:00:00",
    },
    {
      reactor: "Reactor 1",
      sensor_id: 208,
      alert_type: "Temperature",
      severity: "high",
      timestamp: "2023-10-01 18:00:00",
    },
    {
      reactor: "Reactor 2",
      sensor_id: 209,
      alert_type: "Humidity",
      severity: "medium",
      timestamp: "2023-10-01 19:00:00",
    },
    {
      reactor: "Reactor 1",
      sensor_id: 210,
      alert_type: "Pressure",
      severity: "low",
      timestamp: "2023-10-01 20:00:00",
    },
    {
      reactor: "Reactor 2",
      sensor_id: 211,
      alert_type: "Temperature",
      severity: "high",
      timestamp: "2023-10-01 21:00:00",
    },
  ];

  const columns = [
    { key: "reactor", label: "Reactor" },
    { key: "sensor_id", label: "Sensor ID" },
    { key: "alert_type", label: "Alert Type" },
    { key: "severity", label: "Severity" },
    { key: "timestamp", label: "Timestamp" },
  ];

  const [selectedReactor, setSelectedReactor] = React.useState("");
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");

  const handleReactorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedReactor(event.target.value);
  };

  const filteredData = alertData.filter((alert) => {
    const alertDate = new Date(alert.timestamp);
    const isWithinDateRange =
      (!startDate || alertDate >= new Date(startDate)) &&
      (!endDate || alertDate <= new Date(endDate));
    const isReactorMatch =
      !selectedReactor || alert.reactor === selectedReactor;
    return isWithinDateRange && isReactorMatch;
  });

  return (
    <PageTemplate title="Alerts">
      <div className="mb-4 flex gap-4 items-center">
        <div className="flex items-center">
          <label htmlFor="reactor-filter" className="mr-2 text-black">
            Filter by Reactor:
          </label>
          <select
            id="reactor-filter"
            value={selectedReactor}
            onChange={handleReactorChange}
            className="border rounded p-2 bg-white text-black"
          >
            <option value="">All</option>
            <option value="Reactor 1">Reactor 1</option>
            <option value="Reactor 2">Reactor 2</option>
          </select>
        </div>
        <div className="flex items-center">
          <label className="block text-sm font-medium text-black mr-2">
            Start Date
          </label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border rounded-md p-2"
          />
        </div>
        <div className="flex items-center">
          <label className="block text-sm font-medium text-black mr-2">
            End Date
          </label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="border rounded-md p-2"
          />
        </div>
      </div>
      <div className="p-4">
        <CssTable
          columns={columns}
          data={filteredData}
          showEdit={true}
          useCheckbox={true}
        />
      </div>
    </PageTemplate>
  );
};

export default AlertsPage;
