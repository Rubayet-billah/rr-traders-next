"use client";

import "flowbite";
import DashboardNavbar from "@/components/dashboard/navbar/DashboardNavbar";
import DashboardSidebar from "@/components/dashboard/sidebar/DashboardSidebar";
import CustomerModal from "@/components/utils/modals/CustomerModal";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { ENUM_USER_ROLE } from "@/enums/user";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { user } = useSelector((state: any) => state.user);

  if (user?.email && user?.role !== ENUM_USER_ROLE.ADMIN) {
    return (
      <div>
        <h1 className="text-3xl lg:text-6xl text-center font-bold mt-12 lg:mt-48">
          You are not authorized
        </h1>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <DashboardNavbar />
      <DashboardSidebar />
      <div className="p-4 sm:ml-64">
        <div className="p-4">{children}</div>
      </div>
      <CustomerModal customerName="Rubayet Billah" totalPurchases={25} />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default DashboardLayout;
