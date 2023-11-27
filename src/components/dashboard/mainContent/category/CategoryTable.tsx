import React from "react";

const CategoryTable = () => {
  // Dummy categories data for demonstration
  const categories = [
    {
      id: 2,
      categoryName: "Tin",
      categoryDescription: "Well structured",
      createdAt: "2023-11-27T14:42:54.263Z",
      updatedAt: "2023-11-27T14:42:54.263Z",
    },
    // Add other category objects here...
  ];
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Category Name
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Created At
              </th>
              <th scope="col" className="px-6 py-3">
                Updated At
              </th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr
                key={category.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {category.categoryName}
                </td>
                <td className="px-6 py-4">{category.categoryDescription}</td>
                <td className="px-6 py-4">{category.createdAt}</td>
                <td className="px-6 py-4">{category.updatedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoryTable;
