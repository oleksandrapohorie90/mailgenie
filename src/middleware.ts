import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    "/dashboard", // ✅ Protects the dashboard
    "/((?!_next/static|favicon.ico|.*\\..*).*)", // Excludes static files
    "/(api|trpc)(.*)", // Protects API routes
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