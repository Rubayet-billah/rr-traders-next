"use client";
import FormInput from "@/components/utils/forms/FormInput";
import FormInputFile from "@/components/utils/forms/FormInputFile";
import FormInputSelect from "@/components/utils/forms/FormInputSelect";
import FormTextArea from "@/components/utils/forms/FormTextArea";
import { useGetAllCategoriesQuery } from "@/redux/features/category/categoryApi";
import { useCreateProductMutation } from "@/redux/features/product/productApi";
import { createCategoryDropdown } from "@/utils/functions";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

type Inputs = {
  name: string;
  price: string | number;
  category: string;
  product_description: string;
};

const AddProductModalContent = () => {
  const { data } = useGetAllCategoriesQuery();
  const [createProduct] = useCreateProductMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const options = createCategoryDropdown(data?.data);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const result = await createProduct(data);
    if ("error" in result) {
      toast.error("Error while creating product");
    }
    if ("data" in result) {
      toast.success(result?.data?.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 md:p-5">
      <div className="grid gap-4 mb-4 grid-cols-2">
        <div className="col-span-2">
          <FormInput
            type="text"
            name="name"
            id="name"
            label="Product Name"
            required
            register={register}
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <FormInput
            type="text"
            name="price"
            id="price"
            label="Product Price"
            required
            register={register}
          />
        </div>
        <div className="col-span-2 sm:col-span-1 ">
          <FormInputSelect
            name="categoryId"
            id="categoryId"
            label="Category"
            placeholder="Select category"
            options={options}
            register={register}
            required
          />
        </div>
        <div className="col-span-2">
          <FormInput
            type="text"
            name="image"
            id="image"
            label="Product Image URL"
            required
            register={register}
          />
          {/* <FormInputFile
            name="image"
            id="image"
            label="Product Image"
            required
            register={register}
          /> */}
        </div>
        <div className="col-span-2">
          <FormInput
            type="number"
            name="inStockQuantity"
            id="inStockQuantity"
            label="Product QTY"
            required
            register={register}
          />
        </div>
        <div className="col-span-2">
          <FormTextArea
            id="description"
            label="Product Description"
            name="description"
            register={register}
            required
          />
        </div>
        <div className="col-span-2">
          <FormInput
            type="checkbox"
            name="featured"
            id="featured"
            label="Featured"
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
        Add new product
      </button>
    </form>
  );
};

export default AddProductModalContent;
