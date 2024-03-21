import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getFirstNameEmail(emailfull:string) {
  let name = emailfull.split('.')[0]
  return name[0].toUpperCase()+name.substring(1, name.length)
}