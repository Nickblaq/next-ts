'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Icons } from "./icons"
import { access } from "fs"

export default function Nav() {
    const pathname = usePathname()

    const items = [
        {
            id: 1,
            href: "/",
            label: "Home",
            icon: ''
        },
        {
            id: 2,
            href: "/about",
            label: "About",
            icon: ''
        }
    ]
    
    return (
        <>
        <nav className="grid items-start gap-2">
            {items.map((item, index) => {
                const Icon = Icons[item.icon || "arrowRight"]
                return (
                    item.href && (
                        <Link key={index} href={item.href}>
                            <span
                            className={cn(
                                'group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                                pathname ===item.href ? 'bg-accent' : 'transparent'
                            )}
                            >
                            <Icon className='mr-2 h-4 w-4' />
                            <span>{item.label}</span>
                            </span>
                        </Link>
                    )
                )
            })
            }
        </nav>
        </>
    )
}