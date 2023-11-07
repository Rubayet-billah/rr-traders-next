"use client";

import { Card } from "flowbite-react"; // Import Flowbite-React components

const CartPage = () => {
  // Replace with your actual cart data
  const cartItems = [
    {
      id: 1,
      name: "Product 1",
      price: 49.99,
      quantity: 2,
      image: "product-1.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      price: 39.99,
      quantity: 1,
      image: "product-2.jpg",
    },
    // Add more cart items
  ];

  return (
    <div className="container mx-auto p-4 lg:p-8">
      <h1 className="text-3xl font-semibold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-1">
          {cartItems.map((item) => (
            <Card className="mb-4" key={item.id}>
              <div className="flex items-center">
                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover"
                />

                <div className="ml-4 flex-grow">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-500">${item.price} each</p>
                </div>

                {/* Quantity */}
                <div className="flex items-center">
                  <button
                    className="text-blue-500 hover:text-blue-700 p-2"
                    // onClick={() => handleDecrement(item.id)}
                  >
                    -
                  </button>
                  <span className="px-2">{item.quantity}</span>
                  <button
                    className="text-blue-500 hover:text-blue-700 p-2"
                    // onClick={() => handleIncrement(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="lg:col-span-1">
          <Card>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
              <p>Subtotal: $100.00</p>
              <p>Shipping: Free</p>
              <p>Total: $100.00</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-600">
                Proceed to Checkout
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
