"use client";
import React ,{ useState } from "react";
import DashboardIcon from "../icons/dashboard-icon";
const Sidebar = () => {

    const [collapsed, setCollapsed] = useState(false);

    return (
        <div>
        
            <button onClick={() => setCollapsed(!collapsed)}>
                {collapsed ? "Uncollapse" : "Collapse"}
            </button>
            <h5>MENU</h5>
            {collapsed && (<ul>
                <li>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <DashboardIcon />
                        <button>Dashboard</button>
                    </div>
                </li>
                <li>
                    <button>Conversations</button>
                </li>
                <li>
                    <button>Integrations</button>
                </li>
                <li>
                    <button>Appointments</button>
                </li>
                <li>
                    <button>Email Marketing</button>
                </li>
                <li>
                    <button>Settings</button>
                </li>
            </ul>)}
        </div>
    );
};

export default Sidebar;