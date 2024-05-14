import { apiSlice } from "../../app/api/apiSlice";
import { logOut } from "./authSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (formData) => ({
        url: "/user/login",
        method: "POST",
        body: formData,
      }),
    }),
    sendLogout: builder.mutation({
      query: () => ({
        url: "/user/logout",
        method: "POST",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          // const { data } =
          await queryFulfilled;
          // console.log(data);
          dispatch(logOut());
          dispatch(apiSlice.util.resetApiState());
        } catch (err) {
          console.log(err);
        }
      },
    }),
    forgotPassword: builder.mutation({
      query: (formData) => ({
        url: "/user/forgot-password",
        method: "POST",
        body: formData,
      }),
    }),
    resatePassword: builder.mutation({
      query: ({ newPassword, token }) => ({
        url: `/user/reset-password/${token}`,
        method: "POST",
        body: { newPassword },
      }),
    }),
    refresh: builder.mutation({
      query: () => ({
        url: "/user/refresh",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useSendLogoutMutation,
  useRefreshMutation,
  useForgotPasswordMutation,
  useResatePasswordMutation,
} = authApiSlice;
