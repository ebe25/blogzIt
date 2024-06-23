

import { BE_URL } from '@/lib/api-config';
import { Post } from '@/lib/types/post';
import { RootState } from '@/store';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: BE_URL,
        prepareHeaders: (headers, { getState }) => {
            // this step is done as i need to send out token in each request
            const token = (getState() as RootState).auth.userToken;
            if (token) {
                headers.set("authorization", `Bearer ${token}`)
            }
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getAllPosts: builder.query({
            query: () => `blogs`
        }),
        login: builder.mutation({
            query: creds => ({
                url: "/user/login",
                method: "POST",
                body: { ...creds }
            })
        }),
        userDetails: builder.mutation({
            query: username => ({
                url: `/users/${username},
                method: "POST`,
                body: username
            })
        })
    })
    

})

export const { useGetAllPostsQuery , useLoginMutation, useUserDetailsQuery} = api