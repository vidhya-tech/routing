import React, { useState } from 'react';
import './App.css'; // You can style your sidebar in a separate CSS file

const Sidebar = ({ isOpen, closeSidebar }) => (
  <div className={`sidebar ${isOpen ? 'open' : ''}`}>
    <button onClick={closeSidebar}>Close Sidebar</button>
    {/* Add your sidebar content here */}
  </div>
);

const Appp = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="app">
      <button onClick={openSidebar}>Open Sidebar</button>
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      {/* The rest of your app content goes here */}
    </div>
  );
};

export default Appp;
