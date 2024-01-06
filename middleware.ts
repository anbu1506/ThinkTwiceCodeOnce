export { default } from "next-auth/middleware"


export const config = { matcher: ["/home","/home/:all*"] }

// import { NextRequest, NextResponse } from "next/server";

// export async function middleware(request: NextRequest){
//     const isInHome = request.nextUrl.pathname.startsWith("/home");
//     const isLogedIn = request.cookies.get("next-auth.session-token")
//     if(isInHome){

//         if(isLogedIn)
//             return NextResponse.redirect(new URL(request.nextUrl.pathname,request.url))
//         else
//             return NextResponse.redirect(new URL("/",request.url))
//     }else if(isLogedIn){
//         return NextResponse.redirect(new URL("/home",request.url))
//     }

    
// }
