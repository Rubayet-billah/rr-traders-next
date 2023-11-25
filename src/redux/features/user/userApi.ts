import { baseApi } from "@/redux/api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (authData) => ({
        url: "/auth/register",
        method: "POST",
        body: authData,
      }),
    }),
    loginUser: builder.mutation({
      query: (authData) => ({
        url: "/auth/login",
        method: "POST",
        body: authData,
      }),
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = userApi;
