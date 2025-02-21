//Bakyt's
// import { clerkMiddleware } from "@clerk/nextjs/server";

// const isPublicRoute = ["/", "/api/auth/webhook"];

// export default clerkMiddleware(async (auth, request) => {
//   if (!isPublicRoute.includes(request.url)) {
//     await auth.protect();
//   }
// });

// export const config = {
//   matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
// };


import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/api/auth/webhook",
  "/auth/sign-in",
  "/auth/sign-up", 
]);

export default clerkMiddleware(async (auth, request) => {
  console.log("🚀 Incoming Request URL:", request.url);
  console.log("🔍 NEXT_PUBLIC_APP_URL:", process.env.NEXT_PUBLIC_APP_URL);

  const session = await auth();
  const userId = session?.userId;

  if (!isPublicRoute(request)) {
    if (!userId) {
      console.log("🔴 User not authenticated, redirecting...");
      return new Response(null, {
        status: 307,
        headers: {
          Location: `${process.env.NEXT_PUBLIC_APP_URL}/auth/sign-in` || "/auth/sign-in",
        },
      });
    }
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};


//gives a broken page 403

// import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// const isPublicRoute = createRouteMatcher(['/api/auth/webhook']);

// export default clerkMiddleware(async (auth, request) => {
//   if (!isPublicRoute(request)) {
//     await auth.protect()
//   }
// })

// export const config = {
//   matcher: [
//     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//     // Always run for API routes
//     '/(api|trpc)(.*)',
//   ],
// }


//old version
// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
// const isPublicRoute = createRouteMatcher(["/auth/sign-in(.*)", "/auth/sign-up(.*)"]);

// export default clerkMiddleware(async (auth, request) => {
//   if (!isPublicRoute(request)) {
//     await auth.protect();
//   }
// });

// export const config = {
//   matcher: [
//     "/dashboard", 
//     "/((?!_next/static|favicon.ico|.*\\..*).*)", // Excludes static files
//     "/(api|trpc)(.*)", 
//   ],
// };


//Sign In: http://localhost:3009/auth/sign-in
//Sign Up: http://localhost:3009/auth/sign-up