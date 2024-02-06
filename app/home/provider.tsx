"use client";
import { SessionProvider } from "next-auth/react";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Provider({ session, children }: any) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return <SessionProvider session={session}>{children}</SessionProvider>;
}

export default Provider;
