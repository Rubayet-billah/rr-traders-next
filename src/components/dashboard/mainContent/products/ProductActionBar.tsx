import React from "react";

const ProductActionBar = () => {
  return (
    <div className="flex items-center justify-between mb-4 lg:mb-8">
      <div className="flex items-center space-x-4">
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
    </div>
  );
};

export default ProductActionBar;
