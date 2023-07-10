import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './navbar';

function NavigationLayout() {
  return (
    <div className="w-screen h-screen grid grid-rows-[5rem_1fr] relative">
      <header className="h-full sticky">
        <Navbar />
      </header>
      <div className="h-full overflow-y-auto">
        <NavBody />
      </div>
    </div>
  );
}

function NavBody() {
  const location = useLocation();
  return (
    <div className=" h-full grid grid-rows-[1fr] overflow-auto">
      <div className="overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default NavigationLayout;
