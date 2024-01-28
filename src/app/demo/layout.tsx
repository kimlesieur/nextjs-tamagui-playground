import React from "react";

type LayoutProps = { 
    children: React.ReactNode,
    dashboard: React.ReactNode,
    users: React.ReactNode,
};
       
const Layout = ({ children, dashboard, users }: LayoutProps) => {
  const renderDashboard = true;
  return (
    <div>
      <div>Header navigation</div>
        <div>{children}</div>
        {renderDashboard && dashboard}
        {users}
      <div>Footer</div>
    </div>
  ﻿);
}

export default Layout