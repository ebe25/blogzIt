
import { BlogData } from "@/components/blog-card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { BE_URL } from "@/lib/api-config"
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function Blog() {
    const navigate = useNavigate();
    const [blogData, setBlogData] = useState<BlogData>();
    let { blogId } = useParams();
    let formattedDate = "";
    if (blogData?.createdAt) {
        let date = new Date(blogData?.createdAt);
        date.setMonth(date.getMonth() + 1);
        formattedDate += date.toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: '2-digit' });

    }

    useEffect(() => {
        getData();

    }, []);
    const getData = async () => {
        console.log("blog-id", blogId);
        const data = await fetch(`${BE_URL}/blogs/${blogId}`);
        const dataResponse = await data.json();
        console.log(dataResponse.data);
        setBlogData(dataResponse.data)
    }
    return (
        <div className="w-full max-w-4xl mx-auto py-12 px-4 md:px-6">
            <article className="prose prose-gray max-w-none dark:prose-invert">
                <div className="space-y-4 not-prose">
                    <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                        {blogData?.title}
                    </h1>
                    <div className="flex items-center gap-4" onClick={()=>navigate(`/profile/${blogData?.userId}`)}>
                        <a href="#" className="flex items-center gap-2 text-sm font-medium" >
                            <Avatar className="w-8 h-8 border border-black" >
                                <AvatarImage src="https://avatar.iran.liara.run/public" />
                                <AvatarFallback>AC</AvatarFallback>
                            </Avatar>
                            {blogData?.name}
                        </a>
                        <div className="text-gray-500 dark:text-gray-400 text-sm">Posted on {formattedDate}</div>
                    </div>
                </div>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                    {blogData?.content}
                </p>

                <figure className="lg:-mx-12 xl:-mx-20">
                    <img
                        src="/placeholder.svg"
                        alt="Cover image"
                        width={1250}
                        height={340}
                        className="aspect-video overflow-hidden rounded-lg object-cover"
                    />
                    <figcaption className="text-center">Image caption goes here</figcaption>
                </figure>
                <p>
                    The king thought long and hard, and finally came up with
                    <a href="#">a brilliant plan</a>: he would tax the jokes in the kingdom.
                </p>
                <blockquote className="mt-6 border-l-4 border-card-foreground pl-6 italic">
                    "After all," he said, "everyone enjoys a good joke, so it's only fair
                    that they should pay for the privilege."
                </blockquote>

                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                    <li>1st level of puns: 5 gold coins</li>
                    <li>2nd level of jokes: 10 gold coins</li>
                    <li>3rd level of one-liners : 20 gold coins</li>
                </ul>
                <p>
                    As a result, people stopped telling jokes, and the kingdom fell into a gloom. But there was one person who
                    refused to let the king&apos;s foolishness get him down: a court jester named Jokester.
                </p>

            </article>
            <div className="mt-12">
                <h2 className="text-2xl font-bold mb-4">Comments</h2>
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <Avatar className="w-10 h-10 border">
                            <img src="/placeholder.svg" alt="@shadcn" />
                            <AvatarFallback>AC</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <a href="#" className="font-medium" >
                                        John Doe
                                    </a>
                                    <div className="text-gray-500 dark:text-gray-400 text-sm">2 days ago</div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Button variant="ghost" size="icon">
                                        <ThumbsUpIcon className="w-4 h-4" />
                                        <span className="sr-only">Like</span>
                                    </Button>
                                    <Button variant="ghost" size="icon">
                                        <MessageCircleIcon className="w-4 h-4" />
                                        <span className="sr-only">Reply</span>
                                    </Button>
                                    <Button variant="ghost" size="icon">
                                        <MoveHorizontalIcon className="w-4 h-4" />
                                        <span className="sr-only">More</span>
                                    </Button>
                                </div>
                            </div>
                            <div>Wow, this blog post is absolutely hilarious! The Joke Tax Chronicles are a must-read.</div>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Avatar className="w-10 h-10 border">
                            <img src="/placeholder.svg" alt="@shadcn" />
                            <AvatarFallback>AC</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <a href="#" className="font-medium" >
                                        Jane Smith
                                    </a>
                                    <div className="text-gray-500 dark:text-gray-400 text-sm">1 day ago</div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Button variant="ghost" size="icon">
                                        <ThumbsUpIcon className="w-4 h-4" />
                                        <span className="sr-only">Like</span>
                                    </Button>
                                    <Button variant="ghost" size="icon">
                                        <MessageCircleIcon className="w-4 h-4" />
                                        <span className="sr-only">Reply</span>
                                    </Button>
                                    <Button variant="ghost" size="icon">
                                        <MoveHorizontalIcon className="w-4 h-4" />
                                        <span className="sr-only">More</span>
                                    </Button>
                                </div>
                            </div>
                            <div>
                                I can't believe the king actually implemented a Joke Tax! That's so ridiculous, but I love the
                                creativity in this story.
                            </div>
                            <div className="mt-4">
                                <div className="flex items-start gap-4">
                                    <Avatar className="w-8 h-8 border">
                                        <img src="/placeholder.svg" alt="@shadcn" />
                                        <AvatarFallback>AC</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <a href="#" className="font-medium" >
                                                    Bob Johnson
                                                </a>
                                                <div className="text-gray-500 dark:text-gray-400 text-sm">12 hours ago</div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Button variant="ghost" size="icon">
                                                    <ThumbsUpIcon className="w-4 h-4" />
                                                    <span className="sr-only">Like</span>
                                                </Button>
                                                <Button variant="ghost" size="icon">
                                                    <MessageCircleIcon className="w-4 h-4" />
                                                    <span className="sr-only">Reply</span>
                                                </Button>
                                                <Button variant="ghost" size="icon">
                                                    <MoveHorizontalIcon className="w-4 h-4" />
                                                    <span className="sr-only">More</span>
                                                </Button>
                                            </div>
                                        </div>
                                        <div>
                                            I can't imagine how frustrating it must have been for the people to have to pay a tax just to tell
                                            jokes. The king really took the fun out of everything!
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 flex items-center gap-4">
                    <Avatar className="w-10 h-10 border">
                        <img src="/placeholder.svg" alt="@shadcn" />
                        <AvatarFallback>AC</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 relative">
                        <Textarea
                            placeholder="Write your comment..."
                            className="pr-16 min-h-[48px] rounded-2xl resize-none p-4 border border-gray-200 border-neutral-400 shadow-sm dark:border-gray-800"
                        />
                        <Button type="submit" size="icon" className="absolute top-3 right-3 w-8 h-8">
                            <ArrowUpIcon className="w-4 h-4" />
                            <span className="sr-only">Submit</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ArrowUpIcon(props: any) {
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
            <path d="m5 12 7-7 7 7" />
            <path d="M12 19V5" />
        </svg>
    )
}


function MessageCircleIcon(props: any) {
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
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
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


function ThumbsUpIcon(props: any) {
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
            <path d="M7 10v12" />
            <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
        </svg>
    )
}

