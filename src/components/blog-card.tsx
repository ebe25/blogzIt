import { formatDate } from '@/lib/utils';
import { UserIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom';

function CalendarIcon(props: any) {

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
            <path d="M8 2v4" />
            <path d="M16 2v4" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M3 10h18" />
        </svg>
    )
}
export type BlogData = {
    content?: Record<string, any> | string;
    userId?: string;
    title?: string;
    name?: string;
    createdAt: Date;
    _id?: string
    picture: string;
}
interface BlogProps {
    data: BlogData
}


function BlogCard({ data }: BlogProps) {

    const { content, userId, title, name, createdAt, _id, picture } = data;
    let contentText = "";
    if (Array.isArray(content) && content.length > 1) {
        contentText = content.filter((item) => item.content).flatMap((subContent) => subContent.content).map((text) => text.text).join("")
    }
    

    return (
        <>
            <Link to={`blogs/${_id}`}>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                    <img
                        src={picture}
                        width={400}
                        height={200}
                        alt="Blog post cover"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4 md:p-6">
                        <h2 className="text-xl font-bold mb-2">

                            {title}

                        </h2>

                        {Array.isArray(content) && content.length > 1 ? <p className="text-gray-500 dark:text-gray-400 line-clamp-3 mb-4">{contentText} </p> : <p className="text-gray-500 dark:text-gray-400 line-clamp-3 mb-4">{content as string}</p>}

                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <UserIcon className="w-4 h-4 mr-2" />
                            <span>{name}</span>
                            <span className="mx-2">·</span>
                            <CalendarIcon className="w-4 h-4 mr-2" />
                            <span>{formatDate(createdAt)}</span>
                        </div>
                    </div>
                </div>
            </Link>



        </>
    )
}

export default BlogCard;
