import { Comment } from "./comment";

export type Post = {
    id: string;
    content: string;
    title: string;
    name: string;
    tags: string[];
    likes: number;
    comments: Comment[];
    views: number;
    authorBio: string;
    category: string;
    status: string;
    picture: string;
};