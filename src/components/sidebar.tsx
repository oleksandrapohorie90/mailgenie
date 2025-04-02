// Bakyt's code
// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { cn } from "@/lib/utils";
// import {
//   LayoutDashboard,
//   MessageSquare,
//   Settings,
//   Calendar,
//   Mail,
//   LogOut,
//   ChevronLeft,
//   ChevronRight,
//   Cable,
// } from "lucide-react";
// import DomainMenu from "./sidebar/domain-menu";

// type SidebarItem = {
//   title: string;
//   href: string;
//   icon: React.ReactNode;
//   variant: "default" | "ghost";
// };

// const defaultItems: SidebarItem[] = [
//   {
//     title: "Dashboard",
//     href: "/dashboard",
//     icon: <LayoutDashboard className="h-5 w-5 min-w-[20px] min-h-[20px]" />,
//     variant: "default",
//   },
//   {
//     title: "Conversations",
//     href: "/conversations",
//     icon: <MessageSquare className="h-5 w-5 min-w-[20px] min-h-[20px]" />,
//     variant: "ghost",
//   },
//   {
//     title: "Integrations",
//     href: "/integrations",
//     icon: <Cable className="h-5 w-5 min-w-[20px] min-h-[20px]" />,
//     variant: "ghost",
//   },
//   {
//     title: "Appointments",
//     href: "/appointments",
//     icon: <Calendar className="h-5 w-5 min-w-[20px] min-h-[20px]" />,
//     variant: "ghost",
//   },
//   {
//     title: "Email Marketing",
//     href: "/email-marketing",
//     icon: <Mail className="h-5 w-5 min-w-[20px] min-h-[20px]" />,
//     variant: "ghost",
//   },
//   {
//     title: "Settings",
//     href: "/settings",
//     icon: <Settings className="h-5 w-5 min-w-[20px] min-h-[20px]" />,
//     variant: "ghost",
//   },
// ];

// interface SidebarProps {
//   domains?: {
//     id: string;
//     name: string;
//     icon: string | null;
//   }[];
// }

// export function Sidebar({ domains }: SidebarProps) {
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const pathname = usePathname();

//   return (
//     <div
//       className={cn(
//         "relative min-h-screen border-r px-4 pb-10 pt-24 transition-all duration-300",
//         isCollapsed ? "w-16" : "w-64"
//       )}
//     >
//       <div className="absolute right-[-20px] top-7">
//         <button
//           onClick={() => setIsCollapsed(!isCollapsed)}
//           className="rounded-full border bg-white p-2 hover:bg-gray-100"
//         >
//           {isCollapsed ? (
//             <ChevronRight className="h-4 w-4" />
//           ) : (
//             <ChevronLeft className="h-4 w-4" />
//           )}
//         </button>
//       </div>

//       <div className="space-y-4">
//         <div className="py-2">
//           <h2 className={cn("text-lg font-semibold", isCollapsed && "hidden")}>
//             MENU
//           </h2>
//           <div className="space-y-1 py-4">
//             {defaultItems.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className={cn(
//                   "flex items-center rounded-lg px-3 py-2 text-gray-900 transition-all hover:bg-gray-100",
//                   pathname === item.href && "bg-gray-100 font-medium",
//                   isCollapsed && "justify-center"
//                 )}
//               >
//                 <div className="flex items-center justify-center w-5 h-5">
//                   {item.icon}
//                 </div>
//                 <span className={cn("ml-3 text-sm", isCollapsed && "hidden")}>
//                   {item.title}
//                 </span>
//               </Link>
//             ))}
//           </div>
//         </div>

//         <DomainMenu domains={domains} min={isCollapsed} />
//       </div>

//       <div className="absolute bottom-4 left-4">
//         <Link
//           href="/sign-out"
//           className={cn(
//             "flex items-center rounded-lg px-3 py-2 text-gray-900 transition-all hover:bg-gray-100",
//             isCollapsed && "justify-center"
//           )}
//         >
//           <div className="flex items-center justify-center w-5 h-5">
//             <LogOut className="h-5 w-5 min-w-[20px] min-h-[20px]" />
//           </div>
//           <span className={cn("ml-3 text-sm", isCollapsed && "hidden")}>
//             Sign Out
//           </span>
//         </Link>
//       </div>
//     </div>
//   );
// }

//================================================
// Arslan's code
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  MessageSquare,
  Settings,
  Calendar,
  Mail,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Cable,
  PlusCircle,
} from "lucide-react";
import DomainMenu from "./sidebar/domain-menu";
import { MenuLogo } from "../icons/menu-logo"; // Ensure correct import

interface Domain {
  id: string;
  name: string;
  icon: string | null;
}

interface SidebarProps {
  domains?: Domain[];
}

const Sidebar = ({ domains }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "relative min-h-screen border-r px-4 pb-10 pt-6 transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Sidebar Header - MailGenie Title or Icon */}
      <div className="flex items-center justify-between">
        {!collapsed ? (
          <h2 className="text-lg font-bold">MailGenie</h2> // Show full title
        ) : (
          <div className="flex justify-center w-full"> 
            <MenuLogo className="h-8 w-8 text-yellow-500" /> {/* Always visible when collapsed */}
          </div>
        )}
        <button onClick={() => setCollapsed(!collapsed)} className="p-2">
          {collapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
        </button>
      </div>

      {/* Sidebar Menu */}
      <div className="space-y-4 mt-4">
        <div className="py-2">
          <h2 className={cn("text-xs font-semibold text-gray-500", collapsed && "hidden")}>
            MENU
          </h2>
          <div className="space-y-1 py-4">
            {[
              { title: "Dashboard", href: "/dashboard", icon: <LayoutDashboard className="h-5 w-5" /> },
              { title: "Conversations", href: "/dashboard/conversations", icon: <MessageSquare className="h-5 w-5" /> },
              { title: "Integrations", href: "/dashboard/integrations", icon: <Cable className="h-5 w-5" /> },
              { title: "Appointments", href: "/dashboard/appointments", icon: <Calendar className="h-5 w-5" /> },
              { title: "Email Marketing", href: "/dashboard/email-marketing", icon: <Mail className="h-5 w-5" /> },
              { title: "Settings", href: "/dashboard/settings", icon: <Settings className="h-5 w-5" /> },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center rounded-lg px-3 py-2 text-gray-900 transition-all hover:bg-gray-100",
                  pathname === item.href && "bg-gray-100 font-medium",
                  collapsed && "justify-center"
                )}
              >
                <div className="flex items-center justify-center w-5 h-5">
                  {item.icon}
                </div>
                <span className={cn("ml-3 text-sm", collapsed && "hidden")}>
                  {item.title}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Domains Section */}
        <DomainMenu domains={domains} min={collapsed} />
      </div>

      {/* Sign Out Button */}
      <div className="absolute bottom-4 left-4">
        <Link
          href="/auth/sign-in"
          className={cn(
            "flex items-center rounded-lg px-3 py-2 text-gray-900 transition-all hover:bg-gray-100",
            collapsed && "justify-center"
          )}
        >
          <LogOut className="h-5 w-5" />
          <span className={cn("ml-3 text-sm", collapsed && "hidden")}>
            Sign Out
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;




//My working code
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


// const Sidebar = () => {
//   const [collapsed, setCollapsed] = useState(false);

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