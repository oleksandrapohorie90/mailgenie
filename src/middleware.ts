//need to change
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
const isPublicRoute = createRouteMatcher(["/auth/sign-in(.*)", "/auth/sign-up(.*)"]);

export default clerkMiddleware(async (auth, request) => {
  if (!isPublicRoute(request)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    "/dashboard", 
    "/((?!_next/static|favicon.ico|.*\\..*).*)", // Excludes static files
    "/(api|trpc)(.*)", 
  ],
};

// import { clerkMiddleware } from "@clerk/nextjs/server";

// export default clerkMiddleware();

// export const config = {
//   matcher: [
//     "/dashboard", // ✅ Protects the dashboard
//     "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
//     "/(api|trpc)(.*)", // Protects API routes
//   ],
// };


//Sign In: http://localhost:3009/auth/sign-in
//Sign Up: http://localhost:3009/auth/sign-up