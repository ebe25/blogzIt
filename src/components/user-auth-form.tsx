
import * as React from "react"
// import { useSearchParams } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
// import { signIn } from "next-auth/react"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { authenticate, cn } from "@/lib/utils"
import { userAuthSchema } from "@/lib/validations/auth"
import { buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/icons"
import toast from 'react-hot-toast'
import { useNavigate } from "react-router-dom"
import { Toggle } from "./ui/toggle"
import { useDispatch } from "react-redux"
import { useLoginMutation, useUserDetailsQuery } from "@/services/api"
import { setCredentials } from "@/features/authSlice"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
    path: string
}

type FormData = z.infer<typeof userAuthSchema>

export function UserAuthForm({ className, path, ...props }: UserAuthFormProps) {
    const {
        register,
        handleSubmit,
        reset,
        formState,
        formState: { errors, isSubmitSuccessful },
    } = useForm<FormData>({
        resolver: zodResolver(userAuthSchema),
    })
    const [isGitHubLoading, setIsGitHubLoading] = React.useState<boolean>(false)
    const navigate = useNavigate();
    const [togglePassword, setTogglePassword] = React.useState<boolean>(false);
    const dispatch = useDispatch();
    const [login, { isLoading: loginLoadingStatus }] = useLoginMutation();
    const [userDetails, { isLoading: userDetailsStatus }] = useUserDetailsQuery();

    React.useEffect(() => {
        if (isSubmitSuccessful) {
            reset()
        }

    }, [formState, reset]);
    async function onSubmit(data: FormData) {

        const username = data.email;

        const { data: userData } = userDetails(username);
        console.log("user-data", userData)
        try {
            const { data: token } = await login(data).unwrap();
            // console.log({user: username, accessToken: token})
            dispatch(setCredentials({ user: username, accessToken: token }))
            toast.success("Login successful")
            setTimeout(() => {
                navigate("/")
            }, 2000);
        } catch (err) {
            if (!err?.response) {

                toast.error("No server response!")
            } else if (err?.response?.status === 400) {
                toast.error("Missing email or password")
            } else if (err?.response?.status === 401) {
                toast.error("UnAuthorized");
            } else {
                toast.error("Login Failed!")
            }
        }
        // toast.promise(
        //     authenticate(path, data),
        //     {
        //         loading: 'Saving...',
        //         success: (res) => {
        //             setIsLoading(false);
        //             if (res.status == 500) {
        //                 throw new Error(res.statusText)
        //             }
        //             if (res.status == 200) {
        //                 setTimeout(() => { path === "register" ? navigate("/login") : navigate("/") }, 2000)
        //             }

        //             return (path === "register" ? <b>We sent you a login link. Be sure to check your spam too.</b> : <b>Login Successful</b>)
        //         },
        //         error: (error) => <b>{error.message}</b>,
        //     }
        // );


    }

    return (
        <div className={cn("grid gap-6", className)} {...props}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-2">
                    <div className="grid gap-1">
                        <Label className="sr-only" htmlFor="email">
                            Email
                        </Label>
                        <Input
                            id="email"
                            placeholder="name@example.com"
                            type="email"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            disabled={loginLoadingStatus || isGitHubLoading}
                            {...register("email")}
                        />
                        {errors?.email && (
                            <p className="px-1 text-xs text-red-600">
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                    <div className="grid gap-1">
                        <Label className="sr-only" htmlFor="email">
                            Password
                        </Label>

                        <Input
                            id="password"
                            placeholder="******"
                            type={togglePassword ? "password" : "text"}
                            autoCapitalize="none"
                            autoCorrect="off"
                            disabled={loginLoadingStatus || isGitHubLoading}
                            {...register("password")}
                            icon={
                                <Toggle><Icons.eye onClick={() => setTogglePassword(!togglePassword)} size={20} className=" cursor-pointer" /></Toggle>
                            }
                        />


                        {errors?.password && (
                            <p className="px-1 text-xs text-red-600">
                                {errors.password.message}
                            </p>
                        )}
                    </div>
                    <button className={cn(buttonVariants())} disabled={loginLoadingStatus}>
                        {loginLoadingStatus && (
                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        Sign In with Email
                    </button>
                </div>
            </form>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                        Or continue with
                    </span>
                </div>
            </div>
            <button
                type="button"
                className={cn(buttonVariants({ variant: "outline" }))}
                onClick={() => {
                    setIsGitHubLoading(true)
                    //   signIn("github")
                }}
                disabled={loginLoadingStatus || isGitHubLoading}
            >
                {isGitHubLoading ? (
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                    <Icons.gitHub className="mr-2 h-4 w-4" />
                )}{" "}
                Github
            </button>
        </div>
    )
}