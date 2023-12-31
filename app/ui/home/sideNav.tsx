"use client";

import { ArrowUpTrayIcon, HomeIcon, PowerIcon, RectangleStackIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [{ name: "home", path: "/home", icon: HomeIcon },
{ name: "upload", path: "/home/upload", icon: ArrowUpTrayIcon },
{ name: "myUploads", path: "/home/myUploads", icon: RectangleStackIcon }
]


export default function SideNav() {
    const path = usePathname()
    return (<>
        <div className="h-full grow flex md:flex-col flex-row bg-slate-950">
            {
                links.map((link, index) => {
                    const Icon = link.icon
                    return (
                        <Link key={index} className={
                            clsx("flex items-center p-2 m-2 hover:bg-slate-600 hover:rounded-md hover:p-4",
                                { "bg-gray-700 rounded-md p-4": path === link.path, }
                            )
                        } href={link.path}><Icon className="h-6 w-6" /><p>{link.name}</p></Link>
                    )
                })
            }
            <form action="" className=" md:p-2 w-full" >
                <button className="w-full flex hover:bg-slate-600 hover:rounded-md md:p-2"><PowerIcon className="w-6 h-6 my-2 " /><div className="my-2">Logout</div></button>
            </form>
        </div>

    </>)
}