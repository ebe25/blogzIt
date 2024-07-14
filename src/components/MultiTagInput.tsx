import {
    useCallback,
    useContext,
    useEffect,
    useState
} from 'react';
import {
    Tag,
    TagInput
} from 'emblor';
import BlogTagsContext from '@/context/BlogTagsContext';

const MultiTagInput = () => {
    const [exampleTags, setExampleTags] = useState<Tag[]>([]);
    const [activeTagIndex, setActiveTagIndex] = useState<number | null>(null);

    const blogTagsSubscription = useContext(BlogTagsContext);

    const persistRenderBlogTags = useCallback(()=>{
        blogTagsSubscription?.setBlogTags(exampleTags);

    }, [blogTagsSubscription,exampleTags])


    useEffect(() => {
        persistRenderBlogTags();
    }, [exampleTags]);
    return (<
        TagInput tags={
            exampleTags
        }
        setTags={
            (newTags) => {
                setExampleTags(newTags);
            }
        }
        placeholder="Add a tag..."
        styleClasses={
            {
                input: 'w-full sm:max-w-[350px] h-full p-1 ',
                inlineTagsContainer: "border-solid border border-gray-400 rounded-lg shadow-xl p-2"
            }
        }
        maxTags={5}
        showCount={true}
        activeTagIndex={
            activeTagIndex
        }
        setActiveTagIndex={
            setActiveTagIndex
        }

    />
    );
};
export default MultiTagInput;