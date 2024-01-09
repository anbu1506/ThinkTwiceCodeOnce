import { authConfig } from "@/auth";
import { getServerSession } from "next-auth";
import { MySession } from "./mySession";

export default async function getSession() {
  return (await getServerSession(authConfig)) as MySession;
}
