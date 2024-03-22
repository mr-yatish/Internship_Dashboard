// App.js
import React, { useState } from 'react';
import NavigationBar from './Components/NavigationBar';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="duration-500 w-full flex">
      {/* Naviagation bar */}
      <NavigationBar />
      <Outlet />
    </div>
  );
}

export default App;
