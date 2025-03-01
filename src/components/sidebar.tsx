"use client";

import React, { useState } from "react";
import DashboardIcon from "../icons/dashboard-icon";
import ChatIcon from "../icons/chat-icon";
import IntegrationsIcon from "../icons/integrations-icon";
import CalendarIcon from "../icons/cal-icon";
import EmailIcon from "../icons/email-icon";
import SettingsIcon from "../icons/settings-icon";
import PlusIcon from "../icons/plus-icon";
import SignOutIcon from "../icons/sign-out-icon";
import DevicesIcon from "../icons/devices-icon";
import { MenuLogo } from "../icons/menu-logo"; 
import HamburgerIcon from "../icons/hamburger-icon";
import Link from "next/link";


const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`h-screen flex flex-col transition-all ${
        collapsed ? "w-16" : "w-64"
      } bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-4`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between">
        {!collapsed && <h2 className="text-lg font-bold">MailGenie</h2>}
        <button onClick={() => setCollapsed(!collapsed)} className="p-2">
          {collapsed ? <MenuLogo className="w-6 h-6" /> : <HamburgerIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Menu Title */}
      <h5 className={`${collapsed ? "hidden" : "block"} text-xs font-semibold text-gray-500 mt-4`}>
        MENU
      </h5>

      {/* Sidebar Menu */}
      <ul className="space-y-2 mt-2">
  <li className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
    <DashboardIcon className="w-6 h-6" />
    {!collapsed && (
      <Link href="/dashboard">
        <span className="ml-2">Dashboard</span>
      </Link>
    )}
  </li>
  <li className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
    <ChatIcon className="w-6 h-6" />
    {!collapsed && (
      <Link href="/dashboard/conversations">
        <span className="ml-2">Conversations</span>
      </Link>
    )}
  </li>
  <li className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
    <IntegrationsIcon className="w-6 h-6" />
    {!collapsed && (
      <Link href="/dashboard/integrations">
        <span className="ml-2">Integrations</span>
      </Link>
    )}
  </li>
  <li className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
    <CalendarIcon className="w-6 h-6" />
    {!collapsed && (
      <Link href="/dashboard/appointment">
        <span className="ml-2">Appointments</span>
      </Link>
    )}
  </li>
  <li className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
    <EmailIcon className="w-6 h-6" />
    {!collapsed && (
      <Link href="/dashboard/email-marketing">
        <span className="ml-2">Email Marketing</span>
      </Link>
    )}
  </li>
  <li className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
    <SettingsIcon className="w-6 h-6" />
    {!collapsed && (
      <Link href="/dashboard/settings">
        <span className="ml-2">Settings</span>
      </Link>
    )}
  </li>
</ul>

      {/* Domains Section */}
      <div className="flex items-center justify-between mt-6 px-2">
        <span className={`${collapsed ? "hidden" : "block"} text-xs font-semibold text-gray-500`}>
          DOMAINS
        </span>
        <PlusIcon className="w-6 h-6 cursor-pointer" />
      </div>

      {/* Sign Out Button */}
      <button className="mt-auto flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
        <SignOutIcon className="w-6 h-6" />
        {!collapsed && <span className="ml-2">Sign Out</span>}
      </button>
    </div>
  );
};

export default Sidebar;


// "use client";

// import React, { useState } from "react";
// import DashboardIcon from "../icons/dashboard-icon";
// import ChatIcon from "../icons/chat-icon";
// import IntegrationsIcon from "../icons/integrations-icon";
// import CalendarIcon from "../icons/cal-icon";
// import EmailIcon from "../icons/email-icon";
// import SettingsIcon from "../icons/settings-icon";
// import PlusIcon from "../icons/plus-icon";
// import SignOutIcon from "../icons/sign-out-icon";
// import DevicesIcon from "../icons/devices-icon";
// import { MenuLogo } from "../icons/menu-logo"; 
// import HamburgerIcon from "../icons/hamburger-icon";
// import Link from "next/link";
// import { SunIcon, MoonIcon } from "@heroicons/react/outline";


// const Sidebar = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   //add dark mode
//   const [theme, setTheme] = useState<"dark" | "light">("light")
//   const toggleTheme = () => {setTheme(theme === "dark" ? "light" : "dark")}


//   return (
//     <div
//       className={`h-screen flex flex-col transition-all ${
//         collapsed ? "w-16" : "w-64"
//       } bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-4`}
//     >
//       {/* Sidebar Header */}
//       <div className="flex items-center justify-between">
//         {!collapsed && <h2 className="text-lg font-bold">MailGenie</h2>}
//         <button onClick={() => setCollapsed(!collapsed)} className="p-2">
//           {collapsed ? <MenuLogo className="w-6 h-6" /> : <HamburgerIcon className="w-6 h-6" />}
//         </button>
//       </div>

//       {/* Menu Title */}
//       <h5 className={`${collapsed ? "hidden" : "block"} text-xs font-semibold text-gray-500 mt-4`}>
//         MENU
//       </h5>

//       {/* Sidebar Menu */}
//       <ul className="space-y-2 mt-2">
//   <li className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
//     <DashboardIcon className="w-6 h-6" />
//     {!collapsed && (
//       <Link href="/dashboard">
//         <span className="ml-2">Dashboard</span>
//       </Link>
//     )}
//   </li>
//   <li className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
//     <ChatIcon className="w-6 h-6" />
//     {!collapsed && (
//       <Link href="/dashboard/conversations">
//         <span className="ml-2">Conversations</span>
//       </Link>
//     )}
//   </li>
//   <li className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
//     <IntegrationsIcon className="w-6 h-6" />
//     {!collapsed && (
//       <Link href="/dashboard/integrations">
//         <span className="ml-2">Integrations</span>
//       </Link>
//     )}
//   </li>
//   <li className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
//     <CalendarIcon className="w-6 h-6" />
//     {!collapsed && (
//       <Link href="/dashboard/appointment">
//         <span className="ml-2">Appointments</span>
//       </Link>
//     )}
//   </li>
//   <li className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
//     <EmailIcon className="w-6 h-6" />
//     {!collapsed && (
//       <Link href="/dashboard/email-marketing">
//         <span className="ml-2">Email Marketing</span>
//       </Link>
//     )}
//   </li>
//   <li className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
//     <SettingsIcon className="w-6 h-6" />
//     {!collapsed && (
//       <Link href="/dashboard/settings">
//         <span className="ml-2">Settings</span>
//       </Link>
//     )}
//   </li>
// </ul>

//       {/* Domains Section */}
//       <div className="flex items-center justify-between mt-6 px-2">
//         <span className={`${collapsed ? "hidden" : "block"} text-xs font-semibold text-gray-500`}>
//           DOMAINS
//         </span>
//         <PlusIcon className="w-6 h-6 cursor-pointer" />
//       </div>

//       {/* Sign Out Button */}
//       <button className="mt-auto flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
//         <SignOutIcon className="w-6 h-6" />
//         {!collapsed && <span className="ml-2">Sign Out</span>}
//       </button>
//       {/* Dark Mode Button */}
//       <button 
//       onClick={toggleTheme}
//       className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
//       aria-label="Toggle theme">
//       {theme === "dark" ? (<SunIcon className="h-5 w-5"/>) : (<MoonIcon className="h-5 w-5"/>)}
//       </button>
//     </div>
//   );
// };

// export default Sidebar;

// "use client";

// import React, { useState } from "react";
// import DashboardIcon from "../icons/dashboard-icon";
// import ChatIcon from "../icons/chat-icon";
// import IntegrationsIcon from "../icons/integrations-icon";
// import CalendarIcon from "../icons/cal-icon";
// import EmailIcon from "../icons/email-icon";
// import SettingsIcon from "../icons/settings-icon";
// import PlusIcon from "../icons/plus-icon"; 
// import SignOutIcon from "../icons/sign-out-icon";
// import DevicesIcon from "../icons/devices-icon";

// const Sidebar = () => {
//   const [collapsed, setCollapsed] = useState(false);

//   return (
//     <div
//       className={`h-screen p-4 flex flex-col transition-all ${
//         collapsed ? "w-16" : "w-64"
//       } bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200`}
//     >
//       {/* Toggle Button */}
//       <button
//         onClick={() => setCollapsed(!collapsed)}
//         className="self-end p-2 mb-4 bg-gray-200 dark:bg-gray-800 rounded"
//       >
//         {collapsed ? "➡" : "⬅"}
//       </button>

//       {/* Sidebar Menu */}
//       <h5 className={`${collapsed ? "hidden" : "block"} text-sm font-bold mb-4`}>
//         MENU
//       </h5>
//       <ul className="space-y-2">
//         <li className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
//           <DashboardIcon />
//           {!collapsed && <span className="ml-2">Dashboard</span>}
//         </li>
//         <li className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
//           <ChatIcon />
//           {!collapsed && <span className="ml-2">Conversations</span>}
//         </li>
//         <li className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
//           <IntegrationsIcon />
//           {!collapsed && <span className="ml-2">Integrations</span>}
//         </li>
//         <li className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
//           <CalendarIcon />
//           {!collapsed && <span className="ml-2">Appointments</span>}
//         </li>
//         <li className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
//           <EmailIcon />
//           {!collapsed && <span className="ml-2">Email Marketing</span>}
//         </li>
//         <li className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
//           <SettingsIcon />
//           {!collapsed && <span className="ml-2">Settings</span>}
//         </li>
//       </ul>

//       {/* Domains Section */}
//       <div className="flex items-center justify-between mt-6 px-2">
//         <span className="text-xs font-semibold text-gray-500">DOMAINS</span>
//         <button className="p-1 rounded-full bg-gray-200 dark:bg-gray-700">
//           <PlusIcon className="w-5 h-5" />
//         </button>
//       </div>

//       {/* Sign Out Button */}
//       <button className="mt-auto flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
//         <SignOutIcon className="w-5 h-5" />
//         {!collapsed && <span className="ml-2">Sign Out</span>}
//       </button>

//       {/* Devices Section (Moved Below Sign Out) */}
//       <div className="mt-4 flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
//         <DevicesIcon className="w-6 h-6" />
//         {!collapsed && <span className="ml-2">Devices</span>}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;




// was this and working
// "use client";
// import React ,{ useState } from "react";
// import DashboardIcon from "../icons/dashboard-icon";
// const Sidebar = () => {

//     const [collapsed, setCollapsed] = useState(false);

//     return (
//         <div>
        
//             <button onClick={() => setCollapsed(!collapsed)}>
//                 {collapsed ? "Uncollapse" : "Collapse"}
//             </button>
//             <h5>MENU</h5>
//             {collapsed && (<ul>
//                 <li>
//                     <div style={{ display: "flex", alignItems: "center" }}>
//                         <DashboardIcon />
//                         <button>Dashboard</button>
//                     </div>
//                 </li>
//                 <li>
//                     <button>Conversations</button>
//                 </li>
//                 <li>
//                     <button>Integrations</button>
//                 </li>
//                 <li>
//                     <button>Appointments</button>
//                 </li>
//                 <li>
//                     <button>Email Marketing</button>
//                 </li>
//                 <li>
//                     <button>Settings</button>
//                 </li>
//             </ul>)}
//         </div>
//     );
// };

// export default Sidebar;