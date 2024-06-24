import { Comment } from "./comment";

export type Post = {
    _id: string;
    content: string;
    title: string;
    name: string;
    tags: string[];
    likes: number;
    comments: Comment[];
    views: number;
    author: string;
    category: string;
    status: string;
    picture: string;
    createdAt: Date;
};