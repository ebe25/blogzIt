
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent, CardTitle, CardFooter } from "@/components/ui/card"


export default function Profile() {
    return (
        <div className="container mx-auto px-4 md:px-6 py-12 bg-gray-200">
            <div className="grid md:grid-cols-[180px_1fr] gap-8 items-start">
                <div className="flex flex-col items-center gap-4">
                    <Avatar className="w-32 h-32 border-4 border-gray-200 dark:border-gray-800 shadow-lg">
                    <AvatarImage src="https://avatar.iran.liara.run/public" />
                        <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="text-center">
                        <h1 className="text-2xl font-bold">John Doe</h1>
                        <p className="text-gray-500 dark:text-gray-400">Author, Blogger</p>
                    </div>
                </div>
                <div className="grid gap-12">
                    <div>
                        <h2 className="text-xl font-bold mb-4">About</h2>
                        <p className="text-gray-500 dark:text-gray-400">
                            John Doe is a passionate writer and blogger who shares his insights on a variety of topics. With a unique
                            perspective and a talent for storytelling, he captivates his readers and encourages them to think outside
                            the box.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-4">Blog Posts</h2>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                            <Card className="shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                                <div className="relative overflow-hidden rounded-t-lg">
                                    <img
                                        src="/placeholder.svg"
                                        alt="The Art of Minimalism"
                                        width={600}
                                        height={400}
                                        className="object-cover aspect-[3/2] w-full"
                                    />
                                    <a href="#" className="absolute inset-0 z-10" >
                                        <span className="sr-only">Read more</span>
                                    </a>
                                </div>
                                <CardContent>
                                    <CardTitle>The Art of Minimalism</CardTitle>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Explore the benefits of living a minimalist lifestyle and how it can improve your well-being.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <a href="#" className="font-medium text-primary" >
                                        Read More
                                    </a>
                                </CardFooter>
                            </Card>
                            <Card className="shadow-md hover:shadow-xl transition-shadow">
                                <div className="relative overflow-hidden rounded-t-lg">
                                    <img
                                        src="/placeholder.svg"
                                        alt="Mastering the Art of Productivity"
                                        width={600}
                                        height={400}
                                        className="object-cover aspect-[3/2] w-full"
                                    />
                                    <a href="#" className="absolute inset-0 z-10" >
                                        <span className="sr-only">Read more</span>
                                    </a>
                                </div>
                                <CardContent>
                                    <CardTitle>Mastering the Art of Productivity</CardTitle>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Discover practical tips and strategies to boost your productivity and achieve your goals.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <a href="#" className="font-medium text-primary" >
                                        Read More
                                    </a>
                                </CardFooter>
                            </Card>
                            <Card className="shadow-md hover:shadow-xl transition-shadow">
                                <div className="relative overflow-hidden rounded-t-lg">
                                    <img
                                        src="/placeholder.svg"
                                        alt="The Power of Positive Thinking"
                                        width={600}
                                        height={400}
                                        className="object-cover aspect-[3/2] w-full"
                                    />
                                    <a href="#" className="absolute inset-0 z-10" >
                                        <span className="sr-only">Read more</span>
                                    </a>
                                </div>
                                <CardContent>
                                    <CardTitle>The Power of Positive Thinking</CardTitle>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Learn how to cultivate a positive mindset and transform your life.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <a href="#" className="font-medium text-primary" >
                                        Read More
                                    </a>
                                </CardFooter>
                            </Card>
                            <Card className="shadow-md hover:shadow-xl transition-shadow">
                                <div className="relative overflow-hidden rounded-t-lg">
                                    <img
                                        src="/placeholder.svg"
                                        alt="Navigating the Digital Landscape"
                                        width={600}
                                        height={400}
                                        className="object-cover aspect-[3/2] w-full"
                                    />
                                    <a href="#" className="absolute inset-0 z-10" >
                                        <span className="sr-only">Read more</span>
                                    </a>
                                </div>
                                <CardContent>
                                    <CardTitle>Navigating the Digital Landscape</CardTitle>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Explore the latest trends and best practices in the digital world.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <a href="#" className="font-medium text-primary" >
                                        Read More
                                    </a>
                                </CardFooter>
                            </Card>
                            <Card className="shadow-md hover:shadow-xl transition-shadow">
                                <div className="relative overflow-hidden rounded-t-lg">
                                    <img
                                        src="/placeholder.svg"
                                        alt="The Art of Minimalism"
                                        width={600}
                                        height={400}
                                        className="object-cover aspect-[3/2] w-full"
                                    />
                                    <a href="#" className="absolute inset-0 z-10" >
                                        <span className="sr-only">Read more</span>
                                    </a>
                                </div>
                                <CardContent>
                                    <CardTitle>The Art of Minimalism</CardTitle>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Explore the benefits of living a minimalist lifestyle and how it can improve your well-being.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <a href="#" className="font-medium text-primary" >
                                        Read More
                                    </a>
                                </CardFooter>
                            </Card>
                            <Card className="shadow-md hover:shadow-xl transition-shadow">
                                <div className="relative overflow-hidden rounded-t-lg">
                                    <img
                                        src="/placeholder.svg"
                                        alt="Mastering the Art of Productivity"
                                        width={600}
                                        height={400}
                                        className="object-cover aspect-[3/2] w-full"
                                    />
                                    <a href="#" className="absolute inset-0 z-10" >
                                        <span className="sr-only">Read more</span>
                                    </a>
                                </div>
                                <CardContent>
                                    <CardTitle>Mastering the Art of Productivity</CardTitle>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Discover practical tips and strategies to boost your productivity and achieve your goals.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <a href="#" className="font-medium text-primary" >
                                        Read More
                                    </a>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}