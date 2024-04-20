"use server";

import { authConfig } from "@/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function getUserAuth() {
  const session = await getServerSession(authConfig);
  const user = session?.user;
  if (!user) redirect("/api/auth/signin");
}

export async function redirectIfAuthenticated() {
  const session = await getServerSession(authConfig);
  const user = session?.user;
  if (user) redirect("/home");
}
