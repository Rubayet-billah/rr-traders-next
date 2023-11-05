"use client";

const ProductCard = () => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
        {/* Product Image */}
        <img
          src="https://kohlercampaign.com/img/trandingbasin1.jpg"
          alt="Product Image"
          className="w-full h-48 object-cover"
        />

        {/* Discount Badge */}
        <div className="bg-red-500 text-white py-2 px-4 absolute top-4 left-4 rounded-md transform -rotate-6">
          25% Off
        </div>

        {/* Product Details */}
        <div className="p-4">
          {/* Product Name */}
          <h3 className="text-xl font-semibold mb-2">Product Name</h3>

          {/* Stock Availability */}
          <p className="text-gray-500 text-sm mb-2">In Stock: 15</p>

          {/* Prices */}
          <div className="flex items-center">
            <span className="text-2xl font-bold mr-2">$49.99</span>
            <del className="text-sm text-red-500">$59.99</del>
          </div>

          {/* Increment and Decrement Buttons */}
          <div className="mt-4 flex items-center">
            <button
              className="bg-gray-200 p-2 rounded-l-md"
              // onClick={() => handleDecrement()}
            >
              -
            </button>
            <span className="px-4">1</span>
            <button
              className="bg-gray-200 p-2 rounded-r-md"
              // onClick={() => handleIncrement()}
            >
              +
            </button>
          </div>
          {/* Add to Cart Button */}
          <button className="bg-blue-500 text-white py-2 px-4 mt-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
