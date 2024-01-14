"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";

function Provider({ session, children }: any) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}

export default Provider;
