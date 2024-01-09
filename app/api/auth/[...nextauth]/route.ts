import { authConfig } from "@/auth";
import NextAuth from "next-auth";

const handler = NextAuth(authConfig);

// export const authOptions = authConfig;

export {handler as GET, handler as POST}