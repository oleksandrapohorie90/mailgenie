import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};

// BELOW GIVES AN ERROR
// import { authMiddleware } from "@clerk/nextjs";

// export default authMiddleware({
//   publicRoutes: ["/", "/auth/sign-in", "/auth/sign-up"], // Publicly accessible routes
// });

// export const config = {
//   matcher: ["/((?!_next/static|favicon.ico|.*\\..*).*)", "/(api|trpc)(.*)"], // Protect all other routes
// };


// Why this change?: Clerk automatically handles protection and public routes internally. 
// You only need to pass it all routes except static assets. 
// The custom isPublicRoute function is unnecessary in most setups. 
