import {
    Drawer, DrawerContent, DrawerTrigger
} from "@/components/ui/drawer"
import { Button } from "./ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import MultiTagInput from "./MultiTagInput"
import { Separator } from "./ui/separator"

type StoryPreviewProps = {
    storyTitle: string;
    contentSummary: string;

}

const StoryPreview = (
    { storyTitle, contentSummary }: StoryPreviewProps
) => {
    return (

        <Drawer>
            <DrawerTrigger>Open</DrawerTrigger>
            <DrawerContent>
                <div className="flex justify-center gap-6 max-h-screen m-4">
                    <Card className="max-w-prose drop-shadow-xl">
                        <CardTitle className="p-6 m-auto">  Story Preview</CardTitle>

                        <CardContent>
                            <div className="flex flex-col ">
                                <img src="https://picsum.photos/800/300" className="rounded-lg object-contain" height={800} width={600} />
                                <div className="mt-2 leading-tight flex flex-col gap-2">
                                    <p className="text-black font-extrabold font-serif text-xl">HAVE SOLVE 200 QUESTIONS BUT I CHEATED ON LEETCODE WITH HARD AND SOME MEDIUM QUESTION, JUST TRYING… </p>
                                    <p className="text-black text-[10px] line-clamp-3">99/100</p>{/** make this dynamic later */}
                                </div>
                                <Separator className="my-4 " />
                                <div className="mt-2  flex flex-col gap-2">
                                    <p className="text-black font-sans text-lg leading-tight">This is a somewhat confession post, I don't know I kinda feel guilty about it, and on top of it just to maintain a green streak I keep…</p>
                                    <p className="text-black text-[10px] line-clamp-10">135/140</p> {/** make this dynamic later */}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="shadow-xl">
                        <CardHeader>
                            <span className="text-gray-500 text-2xl">Publishing to: <span className="text-black text-xl">Author name</span></span>
                        </CardHeader>
                        <CardContent >
                            <div className="flex flex-col gap-4">
                                <p className="text-sm text-wrap font-semibold">Add or change topics (up to 5) so readers know what your story is about</p>
                                <MultiTagInput />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <div className="flex justify-between gap-2 items-center">
                                <Button className='rounded-full bg-green-500 p-4 m-0 hover:bg-green-700 text-black'>Publish now</Button>
                                <Button className='rounded-full bg-orange-500 p-4 m-0 hover:bg-orange-300 text-black'>Schedule for later</Button>
                            </div>
                        </CardFooter>

                    </Card>
                </div>

            </DrawerContent>
        </Drawer>


    )
}

export default StoryPreview