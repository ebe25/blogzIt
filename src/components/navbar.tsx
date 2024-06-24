

import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet"
import { Link, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import {  selectCurrentUser } from "@/features/authSlice"

export default function Navbar() {
    const navigate = useNavigate();
    const user = useSelector(selectCurrentUser);
    
    return (
        <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                <Link to ="/" className="flex items-center gap-2 text-lg font-bold" >
                    <FeatherIcon className="h-6 w-6" />
                    <span className="sr-only">Blog</span>
                </Link>
                <div className="relative flex-1 max-w-md">
                    <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Search articles..." className="pl-8 w-full" />
                </div>
                <nav className="hidden items-center gap-4 md:flex">
                    <Link to ="/" className="text-sm font-medium transition-colors hover:text-primary" >
                        Home
                    </Link>
                    <Link to ="/" className="text-sm font-medium transition-colors hover:text-primary" >
                        Articles
                    </Link>
                    <Link to ="/" className="text-sm font-medium transition-colors hover:text-primary" >
                        About
                    </Link>
                    <Link to ="/" className="text-sm font-medium transition-colors hover:text-primary" >
                        Contact
                    </Link>
                </nav>
                <div className="flex items-center gap-4">
                    <DropdownMenu >
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="rounded-full">
                                <Avatar className="h-12 w-12 border border-black">
                                    <AvatarImage src="https://avatar.iran.liara.run/public" />
                                    <AvatarFallback>JD</AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56">
                            <DropdownMenuItem onClick={()=>navigate(`/dashboard/${user?._id}`)}>
                                <UserIcon className="mr-2 h-4 w-4" />
                                Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <FilePenIcon className="mr-2 h-4 w-4" />
                                Edit Profile
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <PlusIcon className="mr-2 h-4 w-4" />
                                Create Post
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <UploadIcon className="mr-2 h-4 w-4" />
                                Upload Image
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={()=>{navigate("/login")}}>
                                <LogOutIcon className="mr-2 h-4 w-4" />
                                Login
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="rounded-full md:hidden">
                                <MenuIcon className="h-6 w-6" />
                                <span className="sr-only">Toggle navigation</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-full max-w-md">
                            <div className="flex h-16 items-center justify-between px-4">
                                <Link to ="/" className="flex items-center gap-2 text-lg font-bold" >
                                    <FeatherIcon className="h-6 w-6" />
                                    <span className="sr-only">Blog</span>
                                </Link>
                                <SheetClose className="rounded-full">
                                    <XIcon className="h-6 w-6" />
                                </SheetClose>
                            </div>
                            <nav className="grid gap-4 px-4 py-6">
                                <Link
                                    to ="/"
                                    className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
                                    
                                >
                                    <HomeIcon className="h-5 w-5" />
                                    Home
                                </Link>
                                <Link
                                    to ="/"
                                    className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
                                    
                                >
                                    <FileTextIcon className="h-5 w-5" />
                                    Articles
                                </Link>
                                <Link
                                    to ="/"
                                    className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
                                    
                                >
                                    <UserIcon className="h-5 w-5" />
                                    About
                                </Link>
                                <Link
                                    to ="/"
                                    className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
                                    
                                >
                                    <MailIcon className="h-5 w-5" />
                                    Contact
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}

function FeatherIcon(props:any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z" />
            <path d="M16 8 2 22" />
            <path d="M17.5 15H9" />
        </svg>
    )
}


function FilePenIcon(props:any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
        </svg>
    )
}


function FileTextIcon(props:any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            <path d="M10 9H8" />
            <path d="M16 13H8" />
            <path d="M16 17H8" />
        </svg>
    )
}


function HomeIcon(props:any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
    )
}


function LogOutIcon(props:any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" x2="9" y1="12" y2="12" />
        </svg>
    )
}


function MailIcon(props:any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
    )
}


function MenuIcon(props:any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}


function PlusIcon(props:any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
        </svg>
    )
}


function SearchIcon(props:any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    )
}


function UploadIcon(props:any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" x2="12" y1="3" y2="15" />
        </svg>
    )
}


function UserIcon(props:any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    )
}


function XIcon(props:any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    )
}