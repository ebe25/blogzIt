import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { Mountain, SearchIcon } from "lucide-react";
import Blog from "./blog-page";
import BlogCard from "@/components/blog-card";
import { Avatar } from "@/components/ui/avatar";
import NavBar from "../components/navbar";
import Navbar from "../components/navbar";
export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getData();

  }, []);
  const getData = async () => {
    //add loading states here convert this to a custome hook, use rtk query here

    const response = await fetch("http://localhost:3005/api/blogs");
    const data = await response.json();
    console.log(data.data);
    setBlogs(data.data);


  }
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Navbar/>
      <main className="flex-1 py-8 md:py-12 lg:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {
              blogs.length > 0 && blogs.map((item) => {
                return <BlogCard data={item} />
              })
            }
          </div>
        </div>
      </main>
    </div>
  )
}