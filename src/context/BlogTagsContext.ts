import { Dispatch } from 'react';
import { Tag } from 'emblor';
import { createContext } from 'react';

type BlogTagsContextType = {
    blogTags : Tag[] | null;
    setBlogTags : React.Dispatch<React.SetStateAction<Tag[] | null>>;
    storyTitle: string | null;
    setStoryTitle: React.Dispatch<React.SetStateAction<string | null>>;
}

 const BlogTagsContext = createContext<BlogTagsContextType | null>(null) ;
 export default BlogTagsContext;
