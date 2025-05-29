"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { TextHighlight } from "./TextHighlight"


type NavItem = {
    href: string,
    name: string
}

const navItems: NavItem[] = [
    {
        href: "/",
        name: "Home"
    },
        {
        href: "/about",
        name: "About"
    },
    {
        href: "/experience",
        name: "Experience"
    },
    {
        href: "/projects",
        name: "Projects"
    },

]

export function Header() {
    const pathname = usePathname()

    return (
        <header className="w-full flex items-center justify-between px-10 h-[12vh]">
            <span className="text-4xl font-bold text-primary">MD <TextHighlight text="Rehan" /></span>
            <nav className=" flex items-center justify-start gap-12 pr-16">
                {
                    navItems.map(item => <Link key={item.href} className={`text-md hover:text-[#ff004f] transition-colors duration-300 font-medium ${pathname == item.href && "text-[#ff004f]"}`} href={item.href}>
                        {item.name}
                    </Link>)
                }
            </nav>
        </header>
    )
}
