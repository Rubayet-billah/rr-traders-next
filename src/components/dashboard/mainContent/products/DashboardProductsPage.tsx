"use client";
import ReusableModal from "@/components/utils/modals/ReuseableModal";
import ProductActionBar from "./ProductActionBar";
import ProductTable from "./ProductTable";
import { useState } from "react";

const DashboardProductsPage = () => {
  const [modalState, setModalState] = useState<boolean>(false);

  return (
    <div>
      <ProductActionBar setModalState={setModalState} />
      <ProductTable />
      <ReusableModal modalState={modalState} setModalState={setModalState} />
    </div>
  );
};

export default DashboardProductsPage;
