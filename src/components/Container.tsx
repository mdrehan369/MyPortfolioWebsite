import { twMerge } from "tailwind-merge"

export function Container({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={twMerge("w-[100vw] min-h-[88vh]", className)}>
            {children}
        </div>
    )
}
