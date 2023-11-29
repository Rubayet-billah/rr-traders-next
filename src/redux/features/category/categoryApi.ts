import { baseApi } from "@/redux/api/baseApi";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => ({
        url: "/categories",
      }),
      providesTags: ["CATEGORY"],
    }),
    createCategory: builder.mutation({
      query: (categoryData) => ({
        url: "/categories",
        method: "POST",
        body: categoryData,
      }),
      invalidatesTags: ["CATEGORY"],
    }),
    getCategoryById: builder.query({
      query: (categoryId: number) => ({
        url: `/categories/${categoryId}`,
      }),
    }),
    updateCategory: builder.mutation({
      query: ({ categoryId, categoryData }) => ({
        url: `/categories/${categoryId}`,
        method: "PATCH",
        body: categoryData,
      }),
      invalidatesTags: ["CATEGORY"],
    }),
    deleteCategory: builder.mutation({
      query: (categoryId: number) => ({
        url: `/categories/${categoryId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["CATEGORY"],
    }),
  }),
});

export const {
  useGetAllCategoriesQuery,
  useCreateCategoryMutation,
  useGetCategoryByIdQuery,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categoryApi;
