"use client";

import "flowbite";
import DashboardNavbar from "@/components/dashboard/navbar/DashboardNavbar";
import DashboardSidebar from "@/components/dashboard/sidebar/DashboardSidebar";
import CustomerModal from "@/components/utils/modals/CustomerModal";

const DashboardLayout = ({ children }) => {
  return (
    <div className="pt-20">
      <DashboardNavbar />
      <DashboardSidebar />
      <div className="p-4 sm:ml-64">
        <div className="p-4">{children}</div>
      </div>
      <CustomerModal customerName="Rubayet Billah" totalPurchases={25} />
    </div>
  );
};

export default DashboardLayout;
