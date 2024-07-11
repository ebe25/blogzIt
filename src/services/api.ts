import { JSONContent } from '@tiptap/react';

import { BE_URL } from '@/lib/api-config';
import { RootState } from '@/store';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: BE_URL,
        // credentials: 'include',
        prepareHeaders: (headers, { getState }) => {
            // this step is done as i need to send out token in each request
            const token = (getState() as RootState).auth.userToken;
            if (token) {
                headers.set("authorization", `Bearer ${token}`)
            }
            return headers;
        }
    }),
    tagTypes: ['Post', 'User'],
    endpoints: (builder) => ({
        getAllPosts: builder.query({
            query: () => `blogs`,
            providesTags: ['Post'],
        }),
        login: builder.mutation({
            query: creds => ({
                url: "users/login",
                method: "POST",
                body: { ...creds }
            })
        }),
        registerUser: builder.mutation({
            query: creds => ({
                url: "users/register",
                method: "POST",
                body: { ...creds }
            })
        }),
        userDetails: builder.query({
            query: email => ({
                url: `/users?`,
                params: { email }

            })
        }),
        getUserBlogs: builder.query({
            query: () => 'blogs/',
        }),
        getBlog: builder.query({
            query: (id) => `blogs/${id}`
        }),
        createBlog: builder.mutation<JSONContent, {}>({
            query: body => ({
                url: "blogs/create",
                method: "POST",
                body: body
            })
        })

    })


})

export const {
    useGetAllPostsQuery,
    useLoginMutation,
    useGetUserBlogsQuery,
    useLazyUserDetailsQuery,
    useGetBlogQuery,
    useRegisterUserMutation,
    useCreateBlogMutation } = api