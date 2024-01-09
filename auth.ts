import { PrismaAdapter } from "@next-auth/prisma-adapter";
import {  NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import prisma from "./prisma/prisma";
export const authConfig:NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  callbacks:{
    async signIn({ user, account, profile, email, credentials }) {
      // console.log("Sign in")
      // console.log(user)
      return true
    },
    async session({ session, token, user }) {
      // console.log("Session")
      // console.log(user)

      const useSession = {
        id: user.id,
        name: user.name,
        email: user.email,
        image: user.image,
      }
      session.user = useSession
      return session
    }
  }
};
