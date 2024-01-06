"use client";

import { ArrowUpTrayIcon, HomeIcon, PowerIcon, RectangleStackIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { signOut } from "next-auth/react";

const links = [{ name: "home", path: "/home", icon: HomeIcon },
{ name: "upload", path: "/home/upload", icon: ArrowUpTrayIcon },
{ name: "myUploads", path: "/home/myUploads", icon: RectangleStackIcon }
]


export default function SideNav() {
    const path = usePathname()
    console.log(path)
    return (<>
        <div className="h-full grow flex  justify-end border shadow-md bg-gray-50">
            {
                links.map((link, index) => {
                    const Icon = link.icon
                    return (
                        <Link key={index} className={
                            clsx("flex items-center md:p-2 m-2 text-slate-400 font-semibold",
                                { "text-slate-950 font-bold": path === link.path, }
                            )
                        } href={link.path}><Icon className="h-6 w-6" /><p >{link.name}</p></Link>
                    )
                })
            }
            <form action="" className="flex items-center mx-2 text-slate-400 font-semibold" >
                <button onClick={() => { signOut() }} className="flex"><PowerIcon className="w-6 h-6 " /><div >Logout</div></button>
            </form>
        </div>

    </>)
}