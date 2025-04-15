import React, { useState, ReactNode } from "react";
import DashboardHeader from "./DashboardHeader";
import Sidebar from "./Sidebar";
import Footbar from "./footer/Footerbar";
import Alert from "./Alert";

interface PageTemplateProps {
  children: ReactNode;
  title: string;
}

const PageTemplate: React.FC<PageTemplateProps> = ({ children, title }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={toggleSidebar}
      />

      {/* Main Content - Apply margin based on sidebar state */}
      <div
        className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 relative ${
          isSidebarCollapsed ? "ml-16" : "ml-64"
        }`}
      >
        {/* Alert - Absolute position at top */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md">
          <Alert
            type="warning"
            message="Temperature sensor is approaching upper threshold. Current reading: 30°C"
          />
        </div>

        {/* Header */}
        <div className="w-full bg-white shadow-md z-10">
          <DashboardHeader />
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Page Title */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
          </div>

          {/* Page Content */}
          {children}

          {/* Footer */}
          <Footbar />
        </div>
      </div>
    </div>
  );
};

export default PageTemplate;
