import React, { Dispatch, SetStateAction } from "react";
import AddCategoryModalContent from "./AddCategoryModalContent";

interface ProductActionBarProps {
  setModalState: Dispatch<SetStateAction<boolean>>;
  setModalContent: Dispatch<SetStateAction<any>>;
}

const CategoryActionBar = ({
  setModalState,
  setModalContent,
}: ProductActionBarProps) => {
  const displayCreateCategoryModal = (content: React.ReactElement) => {
    setModalState(true);
    setModalContent({ title: "Add New Category", content });
  };

  return (
    <div>
      <div className="md:flex items-center justify-between mb-4 lg:mb-8 space-y-4">
        <div className="flex items-center space-x-4 lg:mb-0">
          {/* Search input */}
          <input
            type="text"
            placeholder="Search categories..."
            className="px-4 py-2 border rounded"
          />
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            Search
          </button>
        </div>
        <div className="flex items-center space-x-4">
          {/* Filter options */}
          <select className="px-4 py-2 border rounded">
            <option value="">All Categories</option>
            <option value="building">Building Materials</option>
            <option value="tools">Tools</option>
            <option value="structural">Structural Components</option>
          </select>
          {/* Filter button */}
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            Filter
          </button>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() =>
              displayCreateCategoryModal(
                <AddCategoryModalContent setModalState={setModalState} />
              )
            }
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 uppercase block"
          >
            Add Category
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryActionBar;
