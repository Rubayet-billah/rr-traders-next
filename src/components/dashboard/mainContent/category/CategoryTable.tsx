import React, { Dispatch, SetStateAction } from "react";
import { ICategory } from "@/interfaces/common";
import { useGetAllCategoriesQuery } from "@/redux/features/category/categoryApi";
import EditCategoryModalContent from "./EditCategoryModalContent";

interface ProductActionBarProps {
  setModalState: Dispatch<SetStateAction<boolean>>;
  setModalContent: Dispatch<SetStateAction<any>>;
}

const CategoryTable = ({
  setModalState,
  setModalContent,
}: ProductActionBarProps) => {
  const { data } = useGetAllCategoriesQuery({});

  const displayEditCategoryModal = (content: any) => {
    setModalState(true);
    setModalContent({
      title: "Update Category",
      content,
    });
  };
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
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((category: ICategory) => (
              <tr
                key={category.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {category.categoryName}
                </td>
                <td className="px-6 py-4">{category.categoryDescription}</td>
                <td className="px-6 py-4">{category.createdAt}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() =>
                      displayEditCategoryModal(
                        <EditCategoryModalContent
                          categoryId={category?.id}
                          initialValues={{
                            categoryName: "",
                            categoryImage: "",
                            categoryDescription: "",
                          }}
                        />
                      )
                    }
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoryTable;
