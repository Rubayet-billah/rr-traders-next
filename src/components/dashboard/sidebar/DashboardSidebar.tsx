"use client";
import React from "react";
import SidebarItem from "./SidebarItem";
import {
  FiHome,
  FiInbox,
  FiUsers,
  FiBox,
  FiShoppingCart,
  FiSettings,
} from "react-icons/fi"; // Update with appropriate icons

const DashboardSidebar = () => {
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          <SidebarItem link="/dashboard" icon={<FiHome />} text="Dashboard" />
          <SidebarItem link="/inbox" icon={<FiInbox />} text="Inbox" />
          <SidebarItem link="/users" icon={<FiUsers />} text="Users" />
          <SidebarItem link="/products" icon={<FiBox />} text="Products" />
          <SidebarItem link="/orders" icon={<FiShoppingCart />} text="Orders" />
          <SidebarItem link="/settings" icon={<FiSettings />} text="Settings" />
        </ul>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
