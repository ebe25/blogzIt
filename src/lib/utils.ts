import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { BE_URL } from "./api-config";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export async function authenticate(path: string, data: Record<string, any>) {
  try {
    let endpoint = path === "register" ? "/register" : "/login";
    const response = await fetch(`${BE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    })
    if (response.ok) {
      const { data: token } = await response.json();
      if (typeof (data) != "undefined" && typeof (data) != "string") {
        localStorage.setItem("token", token)
      }
    }
    return response;
  } catch (error) {
    throw new Error("Your sign up request failed. Please try again..");

  }

}


