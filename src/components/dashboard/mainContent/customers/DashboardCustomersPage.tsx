import React from "react";
import CustomersTable from "./CustomersTable";
import CustomersActionBar from "./CustomersActionBar";

const DashboardCustomersPage = () => {
  return (
    <div>
      <CustomersActionBar />
      <CustomersTable />
    </div>
  );
};

export default DashboardCustomersPage;
