import { ArrowUpTrayIcon, RectangleStackIcon, HomeIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

export default function NavBar() {
    return (<>
        <div className="flex justify-around   md:justify-between  bg-slate-950 fixed top-0 right-0 left-0   py-4 shadow-lg shadow-blue-500/50">
            <Link href={"/home"}><HomeIcon className="w-6 h-6 md:mx-6" /></Link>
            <div className=" text-bold text-blue-500  text-xl md:text-3xl text-center"> Think Twice Code Once</div>
            <div className="flex">
                <Link href={"/home/upload"} className="flex   md:p-2"><ArrowUpTrayIcon className="w-6 h-6 mx-2" />upload</Link>
                <Link href={"/home/myUploads"} className=" flex md:mx-4 md:p-2"><RectangleStackIcon className="w-6 h-6 mx-2" />my uploads</Link>
            </div>
        </div>

    </>)
}