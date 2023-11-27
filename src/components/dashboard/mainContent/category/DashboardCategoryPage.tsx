"use client";
import React, { useState } from "react";
import CategoryActionBar from "./CategoryActionBar";
import CategoryTable from "./CategoryTable";
import ReusableModal from "@/components/utils/modals/ReuseableModal";

const DashboardCategoryPage = () => {
  const [modalState, setModalState] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "Modal Title",
    content: <></>,
  });

  return (
    <div>
      <CategoryActionBar
        setModalState={setModalState}
        setModalContent={setModalContent}
      />
      <CategoryTable />
      <ReusableModal
        modalState={modalState}
        setModalState={setModalState}
        modalContent={modalContent}
        setModalContent={setModalContent}
      />
    </div>
  );
};

export default DashboardCategoryPage;
