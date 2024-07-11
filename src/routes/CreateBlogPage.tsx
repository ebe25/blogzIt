import Meditor from '@/components/editor/Meditor'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { FeatherIcon, Loader } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { JSONContent } from '@tiptap/react'
import { useCreateBlogMutation } from '@/services/api'
import ErrorPage from './error-page'
import { listImages, processImages, storeImages } from '@/utils/process-imgs-to-s3'
import { SUPABASE_BASE_PUB_URL } from '@/lib/api-config'


const CreateBlogPage = () => {

    const [meditorData, setMeditorData] = useState<JSONContent[] | null>(null);
    const [createBlog, { data: BlogCreateResponse, error, isLoading }] = useCreateBlogMutation()



    if (error) return <ErrorPage />
    if (isLoading) return <Loader />
    // if (BlogCreateResponse) {
    //     console.log("create blog response", BlogCreateResponse);
    // }

    useEffect(() => {
        console.log("editor data collected", meditorData);


    }, [meditorData]);


    async function createBlogData(data: JSONContent[]) {

        let title = "";
        if (data && data[0].content) {
            title = data[0].content[0].text as string;
        }

        const blog_imgs = data.filter((val) => val.type === "image");
        const fileImages = processImages(blog_imgs);

        const uploadImagesresult = {};
        // /blog-content-images/firstBlog!/blog-image-2"
        for (let fileImage of fileImages) {
            await storeImages(fileImage, "firstBlog!");
            uploadImagesresult[fileImage.name] = SUPABASE_BASE_PUB_URL + import.meta.env.VITE_SUPABASE_BUCKET + "/firstBlog!" + `/${fileImage.name}`

        }

        console.log("uploadImagesresult", uploadImagesresult)

        const res = await listImages("firstBlog!");
        console.log("all stored images", res);

        // const newData = { title: title, content: data.slice(1), tags: ["testing", "new blog"], category: "testing blog -1", picture: "https://picsum.photos/400", status: "published" }

        // createBlog(newData);



    }


    return (
        <>
            <div className=' bg-zinc-500'>
                <header className='sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md'>
                    <nav className='container flex h-16 items-center justify-between px-4 md:px-6'>
                        <Link to="/" className="flex items-center gap-2 text-lg font-bold" >
                            <FeatherIcon className="h-6 w-6" />
                            <span >Blog</span>
                        </Link>
                        <div className='flex gap-2'>
                            <Button className='rounded-full bg-green-500 p-4 m-0 hover:bg-green-300 text-black' onClick={() => {
                                if (meditorData && meditorData !== null) {
                                    createBlogData(meditorData);
                                }
                            }}>
                                Publish
                            </Button>
                            <Button variant="ghost" size="icon" className="rounded-full">
                                <Avatar className="h-12 w-12 border border-black">
                                    <AvatarImage src="https://avatar.iran.liara.run/public" />
                                    <AvatarFallback>JD</AvatarFallback>
                                </Avatar>
                            </Button>

                        </div>

                    </nav>
                </header>

                <main className="flex min-h-screen flex-col items-center p-24">
                    <Card className="min-h-[400px] w-[880px] px-16 py-12 ">
                        <Meditor setMeditorData={setMeditorData} />
                    </Card>
                </main>
            </div>

        </>

    )
}

export default CreateBlogPage