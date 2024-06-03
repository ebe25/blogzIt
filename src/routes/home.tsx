import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { Mountain, SearchIcon } from "lucide-react";
import Blog from "./blog-page";
import BlogCard from "@/components/blog-card";
export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getData();

  }, []);
  const getData = async () => {
    const response = await fetch("http://localhost:3005/api/blogs");
    const data = await response.json();
    console.log(data.data);
    setBlogs(data.data);


  }
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-gray-900 text-gray-50 px-4 md:px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2" >
          <Mountain className="h-6 w-6" />
          <span className="text-lg font-semibold">Blog</span>
        </a>
        <div className="flex items-center gap-4">
          <form className="relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="search"
              placeholder="Search blog posts..."
              className="bg-gray-800 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </form>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <img src="src/assets/placeholder.png" width="32" height="32" className="rounded-full" alt="Avatar" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem onClick={() => navigate('/profile')}>
                <a  >
                  Profile
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#" >
                  Login
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#" >
                  Sign Up
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
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