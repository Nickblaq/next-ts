'use client'
import Leaflet from "./leaflet";
import { Icons } from "./icons";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const nav = [
    {
        'id': 1,
        'name': 'Home',
        url: '/',
        icon: 'home'
    },
    {
        'id': 2,
        'name': 'About',
        url: '/about',
        icon: 'person'
    },
    {
        'id': 3,
        'name': 'GuestBook',
        url: '/guessbook',
        icon: 'book'
    },
    {
        'id': 4,
        'name': 'Craft',
        url: '/craft',
        icon: 'pencil'
    },
    {
        'id': 5,
        'name': 'Work',
        url: '/work',
        icon: 'workflow'
    },
]

export default function MobileNav() {
    const pathname = usePathname()
    return (
        <>
        {/* <Leaflet> */}
        <div
        className="group fixed inset-x-0 bottom-0 z-40 w-screen cursor-grab bg-white pb-5 active:cursor-grabbing sm:hidden"
        >
            <div
          className={`rounded-t-4xl -mb-1 flex h-7 w-full items-center justify-center border-t border-gray-200`}
        >
          <div className="-mr-1 h-1 w-6 rounded-full bg-gray-300 transition-all group-active:rotate-12" />
          <div className="h-1 w-6 rounded-full bg-gray-300 transition-all group-active:-rotate-12" />
        </div>
            <div className="flex items-center justify-around">
            {nav.map((n) => {
                const Icon = Icons[n.icon]
                return (
                    n.url && (
                       
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
            {/* </Leaflet> */}
        </>
    )
}