import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mountain, SearchIcon } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

export default function Navbar({userId}: string) {
    return (
        <>
            <nav className="bg-gray-900 text-gray-50 px-4 md:px-6 py-4 flex items-center justify-between">
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


                    <Button variant="ghost" size="icon" className="rounded-full">
                        <Link to={"/dashboard/"}>
                            <img src={"./placeholder.png"} width="32" height="32" className="rounded-full" alt="Avatar" />
                            <span className="sr-only">Toggle user menu</span>
                        </Link>

                    </Button>



                </div>
            </nav>
           
        </>

    )
}