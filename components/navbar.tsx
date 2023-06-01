'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Icons } from "./icons"
import { access } from "fs"


const items = [
    {
        'id': 1,
        'type': false,
        'name': 'Home',
        url: '/',
        icon: 'home'
    },
    {
        'id': 2,
        'type': false,
        'name': 'About',
        url: '/about',
        icon: 'person'
    },
    {
        'id': 3,
        'type': false,
        'name': 'GuestBook',
        url: '/guessbook',
        icon: 'book'
    },
    {
        'id': 4,
        'type': false,
        'name': 'Craft',
        url: '/craft',
        icon: 'pencil'
    },
    {
        'id': 5,
        'type': false,
        'name': 'Work',
        url: '/work',
        icon: 'workflow'
    },
    {
        'id': 6,
        'type': true,
        'name': 'twitter',
        url: 'twitter.com/nickblaq',
        icon: 'twitter'
    },
    // {
    //     'id': 7,
    //     'type': 'social',
    //     'name': 'Work',
    //     url: '/',
    //     icon: 'workflow'
    // },
]

const socials = [
    {
        'id': 1,
        'socials': true,
        'name': 'twitter',
        url: 'twitter.com/nickblaq',
        icon: 'twitter'
    }
]




function socialNav() {
     return (
        <>
        <div>
            {
                socials.map((s) => {
                    const Icon = Icons[s.icon]
                    return (
                        s.socials && (
                            <a href={s.url}>
                                 <span
                            className='group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground'
                            >
                            <Icon className=' h-4 w-4' />
                            <span>{s.name}</span>
                            </span>
                            </a>
                        )
                    )
                })
            }
            </div>
        </>
     )
}


function LgNav() {
    const pathname = usePathname()

    
    return (
        <>
        <nav className="md:flex items-center justify-around hidden">
            {items.map((item, index) => {
                const Icon = Icons[item.icon]
                return (
                    item.url && (
                        <Link key={index} href={item.url}>
                            <span
                            className={cn(
                                'group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                                pathname ===item.url ? 'bg-accent' : 'transparent'
                            )}
                            >
                            <Icon className='mr-2 h-4 w-4' />
                            <span>{item.name}</span>
                            </span>
                        </Link>
                    )
                )
            })}
        </nav>
        <div
        className="flex items-center">
        {}
        </div>
        </>
    )
}


 function MobileNav() {
    const pathname = usePathname()
    return (
        <>
        <div
        className="group fixed inset-x-0 bottom-0 z-40 w-screen cursor-grab bg-white pb-5 active:cursor-grabbing sm:hidden">
            <div
          className={`rounded-t-4xl -mb-1 flex h-7 w-full items-center justify-center border-t border-gray-200`}
        >
          <div className="-mr-1 h-1 w-6 rounded-full bg-gray-300 transition-all group-active:rotate-12" />
          <div className="h-1 w-6 rounded-full bg-gray-300 transition-all group-active:-rotate-12" />
        </div>
            <div className="flex items-center justify-around">
            {items.map((n) => {
                const Icon = Icons[n.icon]
                return (
                    !n.type && (
                       
                        <Link 
                        key={n.id} 
                        href={n.url}
                        >
                            <span
                            className={cn(
                                'group flex flex-col items-center rounded-md px-2 py-1 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                                pathname === n.url ? 'bg-accent' : 'transparent'
                            )}
                            >
                            <Icon className=' h-6 w-6' />
                            <span className="text-lg font-semibold">{n.name}</span>
                            </span>
                        </Link>
                      
                    )
                )
                
            })
            }
            </div>
            </div>
        </>
    )
}



export default function Navbar () {
    
    return (
        <>
        <div className="container h-16 flex justify-between items-center border-b border-gray-500">
        <h1>NQ</h1>
        <div className="flex items-center gap-10">
        <LgNav />
        <MobileNav />
        </div>
        <div className="flex items-center md:hidden">
        {items.map((item) => {
            const Icon = Icons[item.icon]
            return (
                item.type && (
                    <a href={item.url} target="blank">
                    <Icon />
                    </a>
                )
            )
        })}
        </div>
        </div>
        </>
    )
}

