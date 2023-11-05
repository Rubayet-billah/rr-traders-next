"use client";
import React from "react";
import ProductCard from "./ProductCard";
import SectionPage from "../utils/SectionPage";
import SectionHeading from "../utils/SectionHeading";

const ProductsPage = () => {
  return (
    <div>
      <SectionHeading
        title={`${"Sanitary"} Items`}
        subTitle="Choose your desire item"
      />
      <SectionPage>
        <div className="container mx-auto p-4 md:p-0 flex flex-col md:flex-row">
          {/* Sidebar */}
          <aside className="w-full md:w-1/4 p-4 border-r border-gray-200">
            {/* Searching Option */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Search</h3>
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            {/* Sorting Options */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Sort By</h3>
              {/* Add sorting options here (e.g., dropdowns or radio buttons) */}
            </div>

            {/* Filtering Options */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Filter By</h3>
              {/* Add filtering options here (e.g., checkboxes or sliders) */}
            </div>
          </aside>

          {/* Products Section */}
          <section className="w-full md:w-3/4 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </section>
        </div>
      </SectionPage>
    </div>
  );
};

export default ProductsPage;
