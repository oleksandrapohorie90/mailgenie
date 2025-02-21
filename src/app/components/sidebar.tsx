"use client";

import React, { useState } from "react";
import DashboardIcon from "../icons/dashboard-icon";
import ChatIcon from "../icons/chat-icon";
import IntegrationsIcon from "../icons/integrations-icon";
import AppointmentsIcon from "../icons/cal-icon";
import EmailIcon from "../icons/email-icon";
import SettingsIcon from "../icons/settings-icon";
import { useTheme } from "next-themes";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <div
      className={`h-screen p-4 flex flex-col transition-all ${
        collapsed ? "w-20" : "w-64"
      } bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="self-end p-2 mb-4 bg-gray-200 dark:bg-gray-800 rounded"
      >
        {collapsed ? "➡" : "⬅"}
      </button>

      {/* Theme Toggle */}
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-2 mb-4 bg-gray-200 dark:bg-gray-800 rounded"
      >
        {theme === "dark" ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>

      {/* Sidebar Menu */}
      <h5 className={`${collapsed ? "hidden" : "block"} text-sm font-bold`}>
        MENU
      </h5>
      <ul>
        <li className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
          <DashboardIcon />
          {!collapsed && <span className="ml-2">Dashboard</span>}
        </li>
        <li className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
          <ChatIcon />
          {!collapsed && <span className="ml-2">Conversations</span>}
        </li>
        <li className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
          <IntegrationsIcon />
          {!collapsed && <span className="ml-2">Integrations</span>}
        </li>
        <li className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
          <AppointmentsIcon />
          {!collapsed && <span className="ml-2">Appointments</span>}
        </li>
        <li className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
          <EmailIcon />
          {!collapsed && <span className="ml-2">Email Marketing</span>}
        </li>
        <li className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
          <SettingsIcon />
          {!collapsed && <span className="ml-2">Settings</span>}
        </li>
      </ul>

      {/* Responsive Hidden Sidebar */}
      <div
        className={`absolute top-0 left-0 h-full bg-gray-200 dark:bg-gray-900 ${
          collapsed ? "hidden" : "block"
        } md:hidden`}
      >
        <button onClick={() => setCollapsed(true)}>Close</button>
      </div>
    </div>
  );
};

export default Sidebar;



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