"use client";
import "flowbite";
import DashboardCustomersPage from "@/components/dashboard/mainContent/customers/DashboardCustomersPage";
import DashboardProductsPage from "@/components/dashboard/mainContent/products/DashboardProductsPage";
import ProductTable from "@/components/dashboard/mainContent/products/ProductTable";
import brandLogo from "../../../assests/rr-traders-logo.png";
import Image from "next/image";
import DashboardOrdersPage from "@/components/dashboard/mainContent/orders/DashboardOrdersPage";
import DashboardNavbar from "@/components/dashboard/navbar/DashboardNavbar";
import DashboardSidebar from "@/components/dashboard/sidebar/DashboardSidebar";
import ReusableModal from "@/components/utils/modals/ReuseableModal";
import StaticModal from "@/components/utils/modals/StaticModal";
import CustomerModal from "@/components/utils/modals/CustomerModal";
import SimpleLineChart from "@/components/charts/SimpleLineChart";
import SimpleBarChart from "@/components/charts/SimpleBarChart";

const DashboardLayout = () => {
  return (
    <div className="pt-20">
      <SimpleLineChart />
      <SimpleBarChart />
    </div>
  );
};

export default DashboardLayout;
