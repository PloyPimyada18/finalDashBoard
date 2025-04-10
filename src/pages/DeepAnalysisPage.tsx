import React from 'react';
import PageTemplate from '../components/PageTemplate';
import Camera from '../components/Camera';

const DeepAnalysisPage: React.FC = () => {
  return (
    <PageTemplate title="Deep Analysis and AI">
      <div className="p-6">
        <div className="w-full">
          <Camera src="/cell1.png" />
        </div>
      </div>
    </PageTemplate>
  );
};

export default DeepAnalysisPage; 