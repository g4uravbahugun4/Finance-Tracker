// Import necessary libraries and components
"use client"
import svgs from '@/assets/svgs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

function Sidebar() {
  const path = usePathname();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
    const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isSidebarOpen]);
  return (
    <div className="md:w-60 w-full   py-2 md:py-0 bg-slate-900 text-white border">
      <div className="flex w-full flex-col items-start md:items-center">
        <div className="md:hidden ">
          {/* Hamburger Icon */}
          <div onClick={toggleSidebar} className="mt-4 p-2 cursor-pointer">
            {svgs.hamburger}
          </div>
        </div>
        <ul className={`w-full h-screen md:flex md:flex-col md:items-center ${isSidebarOpen ? '' : 'hidden'}`}>
          <li className={`py-4 w-full text-center ${path == '/' && 'bg-slate-700'}`}>
            <Link onClick={closeSidebar} href='/'>Dashboard</Link>
          </li>
          <li className={`py-4 w-full text-center ${path == '/add-transaction' && 'bg-slate-700'}`}>
            <Link onClick={closeSidebar} href='/add-transaction'>Add Transaction</Link>
          </li>
          <li className={`py-4 w-full text-center ${path == '/transaction-history' && 'bg-slate-700'}`}>
            <Link onClick={closeSidebar} href='/transaction-history'>Transaction History</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
