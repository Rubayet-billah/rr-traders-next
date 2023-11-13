const OrderDetails = () => {
  // Dummy data for demonstration
  const orderDetails = {
    orderId: "123456",
    customerName: "John Doe",
    orderDate: "2023-11-03",
    products: [
      {
        id: 1,
        name: "Product A",
        category: "cta-1",
        quantity: 2,
        price: 25.99,
        totalPrice: 51.98,
      },
      {
        id: 2,
        name: "Product B",
        category: "cta-1",
        quantity: 1,
        price: 39.99,
        totalPrice: 39.99,
      },
      // Add more products as needed
    ],
    totalAmount: 91.97,
    paymentStatus: "Paid", // Add payment status
    deliveryStatus: "Pending", // Add delivery status
    // Add more order details as needed
  };

  return (
    <div className="mx-auto px-8">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">
          Order Id - {orderDetails.orderId}
        </h1>
        <p className="text-gray-500">Order Date: {orderDetails.orderDate}</p>
      </div>

      <div>
        <div className="mb-6 md:flex justify-between">
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold">Customer Information</h2>
            <p className="text-gray-500">
              Customer: {orderDetails.customerName}
            </p>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold">Order Status</h2>
            <div className="flex justify-between gap-4">
              <p className="text-gray-500">
                Payment Status: {orderDetails.paymentStatus}
              </p>
              <p className="text-gray-500">
                Delivery Status: {orderDetails.deliveryStatus}
              </p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Ordered Products</h2>
          <ul className="space-y-2">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Product Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Ordered Qty
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Total Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orderDetails.products.map((product) => (
                    <tr
                      key={product?.id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {product?.name}
                      </th>
                      <td className="px-6 py-4">{product?.category}</td>
                      <td className="px-6 py-4">{product?.price}</td>
                      <td className="px-6 py-4">{product?.quantity}</td>
                      <td className="px-6 py-4">{product?.totalPrice}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* {orderDetails.products.map((product) => (
              <li key={product.id} className="flex justify-between">
                <div>
                  <p className="font-semibold">{product.name}</p>
                  <p className="text-gray-500">Quantity: {product.quantity}</p>
                </div>
                <p>${(product.quantity * product.price).toFixed(2)}</p>
              </li>
            ))} */}
          </ul>
        </div>

        {/* Payment and Delivery Status */}

        <div className="flex justify-end gap-4 pt-4">
          <p className="font-semibold">Neat Total Amount</p>
          <p>${orderDetails.totalAmount.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
