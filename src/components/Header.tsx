"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { TextHighlight } from "./TextHighlight"
import { Menu } from "lucide-react"
import { useEffect, useState } from "react"


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
    const [isNavbarOpen, setIsNavbarOpen] = useState(false)

    useEffect(() => {
        setIsNavbarOpen(false)
    }, [pathname])

    return (
        <header className="w-full flex items-center justify-between px-10 h-[12vh] relative">
            <span className="text-4xl font-bold text-primary md:block hidden">MD <TextHighlight text="Rehan" /></span>
            <nav className={`flex overflow-hidden py-0 md:flex-row flex-col md:static absolute top-0 left-0 md:bg-transparent bg-black/20 backdrop-blur-xl md:w-auto transition-all duration-300 w-full items-center md:justify-start justify-center gap-12 md:pr-16 md:p-0 md:py-33 ${isNavbarOpen ? 'h-[100vh]' : 'h-0'} md:h-auto z-10`}>
                {
                    navItems.map(item => <Link onClick={() => setIsNavbarOpen(false)} key={item.href} className={`text-md hover:text-[#ff004f] transition-colors duration-300 font-medium ${pathname == item.href && "text-[#ff004f]"}`} href={item.href}>
                        {item.name}
                    </Link>)
                }
            </nav>
            <Menu className="md:hidden absolute top-10 right-10 z-20" onClick={() => setIsNavbarOpen(!isNavbarOpen)} />
        </header>
    )
}
