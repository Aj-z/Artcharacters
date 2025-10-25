import React, { useState } from "react";
import Header from "../components/Header";

function MainLayout({ children }) {
  const [showHeaderContent, setShowHeaderContent] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 relative">
      {/* Floating header */}
      <Header
        showHeaderContent={showHeaderContent}
        showSidebar={showSidebar}
        onToggleHeader={() => setShowHeaderContent(!showHeaderContent)}
        onToggleSidebar={() => setShowSidebar(!showSidebar)}
      />

      {/* Main page content stays still */}
      <main className="flex-1 z-0">{children}</main>
    </div>
  );
}

export default MainLayout;
