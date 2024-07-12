import {
    useState
} from 'react';
import {
    Tag,
    TagInput
} from 'emblor';

const MultiTagInput = () => {
    const tags = [
        {
            "id": "967139614",
            "text": "Sports"
        },
        {
            "id": "3013044852",
            "text": "Programming"
        }
    ];
    const [exampleTags, setExampleTags] = useState<Tag[]>([]);
    const [activeTagIndex, setActiveTagIndex] = useState<number | null>(null);

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