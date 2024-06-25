import React from 'react'
import { Button } from '../ui/button'
import { Credenza, CredenzaTrigger, CredenzaContent, CredenzaHeader, CredenzaTitle, CredenzaDescription, CredenzaBody, CredenzaFooter, CredenzaClose } from '../ui/credenza'
import { CardHeader, CardTitle, CardDescription } from '../ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar'
import { Label } from '@radix-ui/react-label'
import { TwitterIcon, LinkedinIcon, GitlabIcon, X, UserIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

type Props = {}

export default function ProfileModal({ }: Props) {
    return (
        <Credenza >
            <CredenzaTrigger asChild>
                <div className="hover:cursor-pointer flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">

                    <UserIcon className="h-4 w-4" /><span>Profile</span>
                </div>
            </CredenzaTrigger>
            <CredenzaContent>
                <CredenzaHeader>
                    <CredenzaTitle>
                        Profile

                    </CredenzaTitle>
                    <CredenzaDescription>
                        Update your profile information.
                    </CredenzaDescription>
                </CredenzaHeader>
                <CredenzaBody className='space-y-6'>
                    <div className="flex items-center gap-4">
                        <Avatar className="h-20 w-20">
                            <AvatarImage src="https://avatar.iran.liara.run/public"  />
                            <AvatarFallback>JP</AvatarFallback>
                        </Avatar>
                        <Button variant="outline">Change Photo</Button>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Jared Palmer" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="jared@example.com" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea
                            id="bio"
                            placeholder="Tell us a bit about yourself..."
                            className="min-h-[100px]"
                            // defaultValue="I'm a software engineer and I love to code. I'm passionate about building beautiful and functional web applications."
                        />
                    </div>
                    <div className="space-y-2">
                        <Label>Socials</Label>
                        <div className="flex items-center gap-2">
                            <Link to="#" className="text-muted-foreground hover:text-foreground" >
                                <X className="w-5 h-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link to="#" className="text-muted-foreground hover:text-foreground" >
                                <LinkedinIcon className="w-5 h-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                            <Link to="#" className="text-muted-foreground hover:text-foreground">
                                <GitlabIcon className="w-5 h-5" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                            <Button variant="ghost" size="sm" className="ml-auto">
                                Add Social Link
                            </Button>
                        </div>
                    </div>
                </CredenzaBody>
                <CredenzaFooter className='flex justify-end'>
                    <CredenzaClose asChild>
                        <Button>Save Changes</Button>
                    </CredenzaClose>
                </CredenzaFooter>
            </CredenzaContent>
        </Credenza>
    )
}