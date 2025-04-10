import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OverviewPage from './pages/OverviewPage';
import SensorDataPage from './pages/SensorDataPage';
import DeepAnalysisPage from './pages/DeepAnalysisPage';
import ControlPanelPage from './pages/ControlPanelPage';
import HistoricalDataPage from './pages/HistoricalDataPage';
import AlertsPage from './pages/AlertsPage';
import SettingsPage from './pages/SettingsPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="w-screen h-screen overflow-hidden m-0 p-0">
        <Routes>
          <Route path="/" element={<OverviewPage />} />
          <Route path="/sensor-data" element={<SensorDataPage />} />
          <Route path="/deep-analysis" element={<DeepAnalysisPage />} />
          <Route path="/control-panel" element={<ControlPanelPage />} />
          <Route path="/historical-data" element={<HistoricalDataPage />} />
          <Route path="/alerts" element={<AlertsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
