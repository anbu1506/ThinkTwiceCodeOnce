"use client";

import { signIn } from "next-auth/react";

export default function LoginBtn() {
  return (
    <>
      <button
        onClick={() => {
          signIn("github");
          console.log("login");
        }}
        className="bg-gray-500 text-white text-sm px-4 py-2 rounded-md md:mr-10"
      >
        Login
      </button>
    </>
  );
}
