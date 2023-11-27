"use client";
import React from "react";
import FormInput from "@/components/utils/forms/FormInput";
import { SubmitHandler, useForm } from "react-hook-form";
import FormTextArea from "@/components/utils/forms/FormTextArea";
import { useUpdateCategoryMutation } from "@/redux/features/category/categoryApi";
import toast from "react-hot-toast";

type Inputs = {
  categoryName: string;
  categoryDescription: string;
};

interface EditCategoryModalProps {
  categoryId: number; // Pass the categoryId as a prop to the component
  initialValues: Inputs; // Provide initial values for the form fields
}

const EditCategoryModalContent: React.FC<EditCategoryModalProps> = ({
  categoryId,
  initialValues,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ defaultValues: initialValues });
  const [updateCategory] = useUpdateCategoryMutation();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const result = await updateCategory({ id: categoryId, ...data });

    if ("error" in result) {
      toast.error("Error while updating the category");
    }

    if ("data" in result) {
      toast.success(result.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 md:p-5">
      <div className="grid gap-4 mb-4 grid-cols-2">
        <div className="col-span-2">
          <FormInput
            type="text"
            name="categoryName"
            id="categoryName"
            label="Category Name"
            required
            register={register}
          />
        </div>
        <div className="col-span-2">
          <FormTextArea
            name="categoryDescription"
            id="categoryDescription"
            label="Category Description"
            required
            register={register}
          />
        </div>
      </div>
      <button
        type="submit"
        className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <svg
          className="me-1 -ms-1 w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
            clipRule="evenodd"
          ></path>
        </svg>
        Update Category
      </button>
    </form>
  );
};

export default EditCategoryModalContent;
