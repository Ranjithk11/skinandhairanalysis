import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
// import { getSession } from "next-auth/react";
// import { APP_ROUTES } from "./utils/routes";
import NextAuth from "next-auth";
import authOptions from "./app/api/auth/[...nextauth]/utils/authOptions";

export default NextAuth(authOptions).auth;

export async function middleware(request: NextRequest) {
  return NextResponse.next();
  // const url = request.nextUrl.clone();
  // const variant = request.cookies.get("experiment-variant");
  // console.log(variant);
  // const requestForNextAuth = {
  //   headers: {
  //     cookie: request.headers.get("cookie") ?? undefined,
  //   },
  // };
  // const session = await getSession({ req: requestForNextAuth });
  // if (!session?.user && url.pathname === APP_ROUTES.SKIN_ANALYSIS) {
  //   return NextResponse.next();
  // } else if (session?.user && url.pathname === APP_ROUTES.SKIN_ANALYSIS) {
  //   return NextResponse.redirect(new URL(APP_ROUTES.SELFIE, request.url));
  // } else if (!session?.user && url.pathname !== APP_ROUTES.SKIN_ANALYSIS) {
  //   return NextResponse.redirect(new URL(APP_ROUTES.HOME, request.url));
  // } else {
  //   return NextResponse.next();
  // }
}

export const config = {};

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: [
//     "/skinanalysis",
//     "/skinanalysis/selfie",
//     "/skinanalysis/recommendations",
//     "/skinanalysis/brochure",
//     "/auth/mobile",
//   ],
// };
