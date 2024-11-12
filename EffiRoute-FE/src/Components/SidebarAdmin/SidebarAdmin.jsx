import React from "react";
import { Link } from "react-router-dom";
import dashboard from "../../assets/Admin/dashboard.png";
import user from "../../assets/Admin/user.png";
import supplier from "../../assets/Admin/supplier.png";
import order from "../../assets/Admin/order.png";
import audit from "../../assets/Admin/audit.png";
import pricing from "../../assets/Admin/pricing.png";
import calendar from "../../assets/Admin/calendar.png";
import todo from "../../assets/Admin/todo.png";
import contact from "../../assets/Admin/contact.png";
import invoice from "../../assets/Admin/invoice.png";
import UIelement from "../../assets/Admin/UIelement.png";
import team from "../../assets/Admin/team.png";
import table from "../../assets/Admin/table.png";
import settings from "../../assets/Admin/settings.png";
import logout from "../../assets/Admin/logout.png";
import Logo from "../../assets/Home/Logo/Logo.png";

const Sidebar = () => {
    return (
        <div className="w-64 h-screen bg-white text-black font-xl font-nunito font-semibold flex flex-col ">
            {/* Logo Section */}
            <div className="flex items-center justify-center h-16 mt-3 ">
                <img src={Logo} alt="Logo" className="h-10" />
            </div>

            {/* Dashboard Section */}
            <div className="flex flex-col p-4 space-y-6 border-r border-gray-300">
                {/* Main Links */}
                <div className="flex flex-col space-y-4 ">
                    <Link
                        to="/dashboard"
                        className="flex items-center space-x-4 hover:bg-[#4880FF] p-2 rounded group"
                    >
                        <img src={dashboard} alt="Dashboard" className="w-5 h-5 group-hover:filter group-hover:brightness-0 group-hover:invert" />
                        <span className="group-hover:text-white">Dashboard</span>
                    </Link>
                    <Link
                        to="/account"
                        className="flex items-center space-x-4 hover:bg-[#4880FF] p-2 rounded group"
                    >
                        <img src={user} alt="Account" className="w-5 h-5 group-hover:filter group-hover:brightness-0 group-hover:invert" />
                        <span className="group-hover:text-white">Account</span>
                    </Link>
                    <Link
                        to="/supplier"
                        className="flex items-center space-x-4 hover:bg-[#4880FF] p-2 rounded group"
                    >
                        <img src={supplier} alt="Supplier" className="w-5 h-5 group-hover:filter group-hover:brightness-0 group-hover:invert" />
                        <span className="group-hover:text-white">Supplier</span>
                    </Link>
                    <Link
                        to="/order"
                        className="flex items-center space-x-4 hover:bg-[#4880FF] p-2 rounded group"
                    >
                        <img src={order} alt="Order" className="w-5 h-5 group-hover:filter group-hover:brightness-0 group-hover:invert" />
                        <span className="group-hover:text-white">Order</span>
                    </Link>
                    <Link
                        to="/audit"
                        className="flex items-center space-x-4 hover:bg-[#4880FF] p-2 rounded group"
                    >
                        <img src={audit} alt="Audit Log" className="w-5 h-5 group-hover:filter group-hover:brightness-0 group-hover:invert" />
                        <span className="group-hover:text-white">Audit Log</span>
                    </Link>
                </div>

                {/* Pages Section */}
                <div className="flex flex-col space-y-4">
                    <h3 className="text-gray-400">PAGES</h3>
                    <Link
                        to="/pricing"
                        className="flex items-center space-x-4 hover:bg-[#4880FF] p-2 rounded group"
                    >
                        <img src={pricing} alt="Pricing" className="w-5 h-5 group-hover:filter group-hover:brightness-0 group-hover:invert" />
                        <span className="group-hover:text-white">Pricing</span>
                    </Link>
                    <Link
                        to="/calendar"
                        className="flex items-center space-x-4 hover:bg-[#4880FF] p-2 rounded group"
                    >
                        <img src={calendar} alt="Calendar" className="w-5 h-5 group-hover:filter group-hover:brightness-0 group-hover:invert" />
                        <span className="group-hover:text-white">Calendar</span>
                    </Link>
                    <Link
                        to="/todo"
                        className="flex items-center space-x-4 hover:bg-[#4880FF] p-2 rounded group"
                    >
                        <img src={todo} alt="To-Do" className="w-5 h-5 group-hover:filter group-hover:brightness-0 group-hover:invert" />
                        <span className="group-hover:text-white">To-Do</span>
                    </Link>
                    <Link
                        to="/contact"
                        className="flex items-center space-x-4 hover:bg-[#4880FF] p-2 rounded group"
                    >
                        <img src={contact} alt="Contact" className="w-5 h-5 group-hover:filter group-hover:brightness-0 group-hover:invert" />
                        <span className="group-hover:text-white">Contact</span>
                    </Link>
                    <Link
                        to="/invoice"
                        className="flex items-center space-x-4 hover:bg-[#4880FF] p-2 rounded group"
                    >
                        <img src={invoice} alt="Invoice" className="w-5 h-5 group-hover:filter group-hover:brightness-0 group-hover:invert" />
                        <span className="group-hover:text-white">Invoice</span>
                    </Link>
                    <Link
                        to="/uielements"
                        className="flex items-center space-x-4 hover:bg-[#4880FF] p-2 rounded group"
                    >
                        <img src={UIelement} alt="UI Elements" className="w-5 h-5 group-hover:filter group-hover:brightness-0 group-hover:invert" />
                        <span className="group-hover:text-white">UI Elements</span>
                    </Link>
                    <Link
                        to="/team"
                        className="flex items-center space-x-4 hover:bg-[#4880FF] p-2 rounded group"
                    >
                        <img src={team} alt="Team" className="w-5 h-5 group-hover:filter group-hover:brightness-0 group-hover:invert" />
                        <span className="group-hover:text-white">Team</span>
                    </Link>
                    <Link
                        to="/table"
                        className="flex items-center space-x-4 hover:bg-[#4880FF] p-2 rounded group"
                    >
                        <img src={table} alt="Table" className="w-5 h-5 group-hover:filter group-hover:brightness-0 group-hover:invert" />
                        <span className="group-hover:text-white">Table</span>
                    </Link>
                </div>

                {/* Settings and Logout */}
                <div className="flex flex-col space-y-4 mt-auto">
                    <Link
                        to="/settings"
                        className="flex items-center space-x-4 hover:bg-[#4880FF] p-2 rounded group"
                    >
                        <img src={settings} alt="Settings" className="w-5 h-5 group-hover:filter group-hover:brightness-0 group-hover:invert" />
                        <span className="group-hover:text-white">Settings</span>
                    </Link>
                    <Link
                        to="/logout"
                        className="flex items-center space-x-4 hover:bg-[#4880FF] p-2 rounded group"
                    >
                        <img src={logout} alt="Logout" className="w-5 h-5 group-hover:filter group-hover:brightness-0 group-hover:invert" />
                        <span className="group-hover:text-white">Logout</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;