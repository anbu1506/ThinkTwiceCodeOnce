import GithubProvider  from "next-auth/providers/github";


export const authConfig = {
    providers:[
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        })
    ],
    secret:process.env.NEXTAUTH_SECRET,
}