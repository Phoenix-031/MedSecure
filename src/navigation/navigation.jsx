import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar';

function NavigationLayout() {
  return (
    <div className="w-screen h-screen grid grid-rows-[5rem_1fr] relative divide-y-[1px] divide-slate-500">
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
  return (
    <div className=" h-full grid grid-rows-[1fr_2rem] overflow-auto">
      <div className="overflow-auto">
        <Outlet />
      </div>
      <footer className="">
        <div>footer</div>
      </footer>
    </div>
  );
}

export default NavigationLayout;
