"use client"

import { signIn } from "next-auth/react";

export default function LoginBtn() {
    return (
        <>
            <button onClick={() => {
                signIn('github');
                console.log("login")
            }} className="bg-blue-500 shadow-lg shadow-blue-500/50 text-white py-2 px-4 rounded-md">Login</button>
        </>
    );
}