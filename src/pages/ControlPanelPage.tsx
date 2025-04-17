import React, { useState } from "react";
import PageTemplate from "../components/PageTemplate";
import ToggleSwitch from "../components/ToggleSwitch";
import Slider from "../components/Slider";

const ControlPanelPage: React.FC = () => {
  const [pumpState, setPumpState] = useState(false);
  const [lightState, setLightState] = useState(false);
  const [phState, setPhState] = useState(false);
  const [phValue] = useState(7.0);
  const [lightIntensity, setLightIntensity] = useState(50);

  return (
    <PageTemplate title="Control Panel">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <ToggleSwitch
          label="Pump"
          checked={pumpState}
          onChange={setPumpState}
        />

        <div className="space-y-4">
          <ToggleSwitch
            label="Light"
            checked={lightState}
            onChange={setLightState}
          />
          {lightState && (
            <Slider
              label="Light Intensity"
              min={0}
              max={100}
              value={lightIntensity}
              onChange={setLightIntensity}
            />
          )}
        </div>

        <ToggleSwitch
          label="pH Control"
          checked={phState}
          onChange={setPhState}
          phValue={phValue}
        />
      </div>
    </PageTemplate>
  );
};

export default ControlPanelPage;
