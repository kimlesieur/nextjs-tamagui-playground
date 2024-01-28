import React from "react";

type LayoutProps = { 
    children: React.ReactNode,
    dashboard: React.ReactNode,
};
       
const Layout = ({ children, dashboard }: LayoutProps) => {
  const renderDashboard = true;
  return (
    <div>
      <div>Header navigation</div>
        <div>{children}</div>
        {renderDashboard && dashboard}
      <div>Footer</div>
    </div>
  ﻿);
}

export default Layout