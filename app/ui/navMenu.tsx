"use client";

import Link from "next/link";

export default function NavMenu() {
  return (
    <div className="md:flex justify-around w-[30%] items-center font-semibold hidden hover:cursor-pointer">
      <Link className="text-white" href="/home">
        Home
      </Link>
      <p
        className="text-white"
        onClick={() => {
          document.getElementById("About")?.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
      >
        About
      </p>
      <Link className="text-white" href="/home/upload">
        Upload
      </Link>
    </div>
  );
}
