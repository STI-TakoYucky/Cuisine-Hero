import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const concatString = (string:string) => {
    const length = string.length

    if (length > 25) {
        return `${string.substring(0, 25)}...`
    }
    return string
}

export const getDifficultyColor = (difficulty: string) => {
if (!difficulty) return 'bg-gray-200'

switch (difficulty.toLowerCase()) {
    case "easy":
    return "bg-green-200 text-green-800";
    case "medium":
    return "bg-yellow-200 text-yellow-800";
    case "hard":
    return "bg-red-200 text-red-800";
    default:
    return "bg-gray-200 text-gray-800";
}
};
