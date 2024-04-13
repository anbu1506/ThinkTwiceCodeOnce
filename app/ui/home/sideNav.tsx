"use client";

import {
  ArrowUpTrayIcon,
  HomeIcon,
  PowerIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import clsx from "clsx";
import { signOut } from "next-auth/react";
import { UserCircleIcon } from "@heroicons/react/16/solid";

const links = [
  { name: "home", path: "/home", icon: HomeIcon },
  { name: "upload", path: "/home/upload", icon: ArrowUpTrayIcon },
  { name: "myAccount", path: "/home/myAccount", icon: UserCircleIcon },
];

export default function SideNav() {
  const path = usePathname();
  console.log(path);
  return (
    <>
      <div className="h-full  flex grow justify-evenly  md:justify-end m-w-[200px] ">
        {links.map((link, index) => {
          const Icon = link.icon;
          return (
            <Link
              key={index}
              className={clsx(
                "flex items-center md:p-2 m-2 text-blue-400 font-semibold",
                {
                  " md:text-white font-bold md:bg-homeColor md:border-none border p-1 bg-blue-100 rounded-full md:rounded-none":
                    path === link.path,
                }
              )}
              href={link.path}
            >
              <Icon className="h-6 w-6" />
              <p className="md:block hidden">{link.name}</p>
            </Link>
          );
        })}
        <form
          action=""
          className="flex items-center mx-2 text-blue-500 font-semibold"
        >
          <button
            onClick={async () => {
              await signOut();
              redirect("/");
            }}
            className="flex "
          >
            <PowerIcon className="w-6 h-6 " />
            <div>Logout</div>
          </button>
        </form>
      </div>
    </>
  );
}
