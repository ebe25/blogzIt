import { useState } from "react";

import BlogCard from "@/components/blog-card";
import Navbar from "../components/navbar";
import { useGetAllPostsQuery } from "@/services/api";
import { Post } from "@/lib/types/post";
export default function Home() {

  const { data: posts, isLoading, isError } = useGetAllPostsQuery(undefined)

  if (isLoading) return <h2>Loading...</h2>; //chore add loading states components 
  if (isError) return <h2>Something went wrong...</h2>; //chore add to error boundary

  return (
    <div className="flex flex-col bg-zinc-500 min-h-[100dvh]">
      <Navbar/>
      <main className="flex-1 py-8 md:py-12 lg:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {
              posts?.data.length > 0 && posts?.data.map((blog: Post) => {
                return <BlogCard data={blog} />
              })

            }
          </div>
        </div>
      </main>
    </div>
  )
}