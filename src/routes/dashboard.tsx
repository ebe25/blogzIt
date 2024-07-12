
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody, TableCell, TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import Modal from "@/components/modal"
import { Link, useNavigate } from "react-router-dom"
import { Icons } from "@/components/icons"
import { useGetUserBlogsQuery } from "@/services/api"
import { BE_URL } from "@/lib/api-config"
import { Badge } from "@/components/ui/badge"
import { stitchCasing } from "@/lib/utils"
import { Post } from "@/lib/types/post"
import ErrorPage from "./error-page"
import { Cloud, CreditCard, Delete, Edit, Github, Keyboard, LifeBuoy, LogOut, Mail, MessageSquare, MoreHorizontal, Plus, PlusCircle, Settings, User, UserPlus, Users, View } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import ProfileModal from "@/components/modals/ProfileModal"


export default function Dashboard() {
  const navigate = useNavigate();
  const { data: Posts, isLoading, error, isError } = useGetUserBlogsQuery(undefined);
  console.log("posts", Posts?.data)

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
          <div className="flex h-full max-h-screen flex-col gap-2 ">
            <div className="flex h-[60px] items-center border-b  shadow-lg px-6">
              <Link to={"/"} className="flex items-center gap-2 font-semibold" >
                <HomeIcon className="h-4 w-4" />
                <span className="">
                  Dashboard</span>
              </Link>
              <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                <BellIcon className="h-4 w-4" />
                <span className="sr-only">Toggle notifications</span>
              </Button>
            </div>
            <div className="flex-1  overflow-auto py-2 ">
              <nav className="grid items-center px-4 text-sm font-medium">
                <Link
                  to={"/"}
                  className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"

                >
                  <BookOpenIcon className="h-4 w-4" />
                  Posts
                </Link>
                <Link
                  to={"/blogs/create"}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"

                >
                  <CirclePlusIcon className="h-4 w-4" />
                  New Post
                </Link>

                <ProfileModal />


              </nav>
            </div>

          </div>
        </div>
        <div className="flex flex-col">

          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
            <div className="flex items-center">
              <h1 className="font-semibold text-lg md:text-2xl">Posts</h1>
              <div className="ml-auto btn btn-primary btn-sm" >
                <Modal />
              </div>
            </div>
            <div className="border-2 shadow-xl rounded-lg">
              <Table className="  shadow-xl cursor-pointer ">
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead className="hidden md:table-cell">Date</TableHead>
                    <TableHead className="hidden md:table-cell">Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {isLoading && <>loading...</>}
                  {Posts?.data.map((post: Post) => {
                    return (
                      <TableRow key={post._id}>
                        <TableCell className="font-medium">
                          <p className={"mb-2 text-lg text-gray-700 dark:text-gray-400 hover:underline cursor-pointer"} onClick={() => navigate(`/blogs/${post._id}`)}>
                            {stitchCasing(post.title)}
                          </p>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          {new Date(post.createdAt as Date).toLocaleString("en-GB", {

                            year: "numeric",
                            month: "short",
                            day: "2-digit"
                          })}
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          <Badge variant="outline" status={post.status} className={`hover:cursor-pointer text-md ${post.status === "published" ? "bg-green-400" : "bg-yellow-400"}`}>{post.status.toUpperCase()}</Badge>
                        </TableCell>

                        <TableCell >
                          <DropdownMenu >
                            <DropdownMenuTrigger asChild>
                              <Button variant="outline">
                                <Icons.actions className="h-4 w-4" />

                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent >

                              <DropdownMenuSeparator />
                              <DropdownMenuItem>
                                <Edit className="mr-2 h-4 w-4" />
                                <span>Edit</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <View className="mr-2 h-4 w-4" />
                                <span>View</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Delete className="mr-2 h-4 w-4" />
                                <span>Delete</span>
                                {/* <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut> */}
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>

                        </TableCell>
                      </TableRow>
                    )
                  })}

                </TableBody>
              </Table>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}



function BellIcon(props: any) {
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function BookIcon(props: any) {
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}


function BookOpenIcon(props: any) {
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
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}


function CirclePlusIcon(props: any) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12h8" />
      <path d="M12 8v8" />
    </svg>
  )
}


function HomeIcon(props: any) {
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


function MoveHorizontalIcon(props: any) {
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
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  )
}


function SearchIcon(props: any) {
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


function UserIcon(props: any) {
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