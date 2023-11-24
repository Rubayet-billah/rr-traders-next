import React from "react";

interface ProductActionBarProps {
  setModalState: (arg: boolean) => {};
}

const ProductActionBar = ({ setModalState }: ProductActionBarProps) => {
  return (
    <div>
      <div className="md:flex items-center justify-between mb-4 lg:mb-8">
        <div className="flex items-center space-x-4 mb-4 lg:mb-0">
          {/* Search input */}
          <input
            type="text"
            placeholder="Search products..."
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
        <div>
          <button
            // data-modal-target="crud-modal"
            // data-modal-toggle="crud-modal"
            onClick={() => setModalState(true)}
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 uppercase ml-auto block"
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductActionBar;
