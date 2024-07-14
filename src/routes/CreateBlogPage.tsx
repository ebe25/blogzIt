import Meditor from '@/components/editor/Meditor'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { FeatherIcon, Loader } from 'lucide-react'
import { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { JSONContent } from '@tiptap/react'
import { useCreateBlogMutation } from '@/services/api'
import ErrorPage from './error-page'
import { processImages, storeImages } from '@/utils/process-imgs-to-s3'
import { SUPABASE_BASE_PUB_URL } from '@/lib/api-config'
import StoryPreview from '@/components/StoryPreview'
import BlogTagsProvider from '@/context/BlogTagsProvider'
import BlogTagsContext from '@/context/BlogTagsContext'
import { Tag } from 'emblor'


const CreateBlogPage = () => {

    const [meditorData, setMeditorData] = useState<JSONContent[] | null>(null);
    const [createBlog, { data: BlogCreateResponse, error, isLoading }] = useCreateBlogMutation()

    const { blogId } = useParams();

    const blogTagsSubscription = useContext(BlogTagsContext);

    if (error) return <ErrorPage />
    if (isLoading) return <Loader />



    async function createBlogData(data: JSONContent[]) {

        let storyTitle = "";
        if (data && data[0].content) {
            storyTitle = data[0].content[0].text as string;
            blogTagsSubscription?.setStoryTitle(storyTitle);
        }

        const blog_imgs = data.filter((val) => val.type === "image");
        const fileImages = processImages(blog_imgs);

        //storing array of uplaoded pictures obulic urls into pictures field in the db
        const uploadImagesresult = [];
        for (let fileImage of fileImages) {
            const response = await storeImages(fileImage, storyTitle);
            let publicUrl = `${import.meta.env.VITE_SUPABASE_URL}storage/v1/object/public/${response?.fullPath}`
            uploadImagesresult.push(publicUrl);
        }



        const newData = { title: storyTitle, content: data.slice(1), tags: blogTagsSubscription?.blogTags, pictures: uploadImagesresult }
        console.log("data ready", newData);

        // --- status
        //
        // createBlog(newData);



    }


    return (

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
                        <StoryPreview storyTitle={blogTagsSubscription?.storyTitle as string} contentSummary='' />
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


    )
}

export default CreateBlogPage