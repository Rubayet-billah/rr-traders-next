"use client";
import ReusableModal from "@/components/utils/modals/ReuseableModal";
import ProductActionBar from "./ProductActionBar";
import ProductTable from "./ProductTable";
import { useState } from "react";

const DashboardProductsPage = () => {
  const [modalState, setModalState] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "Modal Title",
    content: <></>,
  });

  return (
    <div>
      <ProductActionBar
        setModalState={setModalState}
        setModalContent={setModalContent}
      />
      <ProductTable />
      <ReusableModal
        modalState={modalState}
        setModalState={setModalState}
        modalContent={modalContent}
        setModalContent={setModalContent}
      />
    </div>
  );
};

export default DashboardProductsPage;
