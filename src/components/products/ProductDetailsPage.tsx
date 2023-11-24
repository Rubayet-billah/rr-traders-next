"use client";

import { Badge, Card } from "flowbite-react"; // Import Flowbite-React components

const ProductDetailsPage = () => {
  return (
    <div className="container mx-auto p-4 lg:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="lg:col-span-1">
          <Card className="mb-4 shadow-none border-none">
            <div className="relative overflow-hidden h-96">
              {/* Product images */}
              <img
                src="https://images.unsplash.com/photo-1658681906631-f0a96e2d199b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Product Image"
                className="object-cover h-full w-full"
              />
              {/* Discount Badge */}
              <Badge className="bg-red-500 text-white absolute top-4 left-4">
                25% Off
              </Badge>
            </div>
          </Card>
        </div>

        {/* Key Description and Price */}
        <div className="lg:col-span-1">
          <Card className="mb-4 shadow-none border-none">
            <div className="p-4">
              {/* Product Name */}
              <h1 className="text-3xl font-semibold mb-2">Product Name</h1>

              {/* Price */}
              <div className="flex items-center mb-2">
                <span className="text-2xl font-bold">$49.99</span>
                <del className="text-gray-500 text-lg ml-4">$59.99</del>
              </div>

              {/* Increment and Decrement Buttons */}
              <div className="my-4 flex items-center">
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
              {/* Add to Cart and Buy Now Buttons */}
              <div className="flex gap-4 mb-4">
                <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                  Add to Cart
                </button>
                <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">
                  Buy Now
                </button>
              </div>

              {/* Product Details */}
              <h2 className="text-lg font-semibold mb-2">Key Features</h2>
              <ul className="list-disc pl-5 mb-4">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>

              {/* Delivery Information */}
              <h2 className="text-lg font-semibold mb-2">
                Delivery Information
              </h2>
              <p>Estimated Delivery: 2-4 days</p>
              <p>Free Shipping on orders over $50</p>
              <p>30-Day Return Policy</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
