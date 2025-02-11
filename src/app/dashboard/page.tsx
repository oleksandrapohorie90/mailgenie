"use client";

import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isSignedIn) {
      router.push("/auth/sign-in"); // Redirect if not signed in
    }
  }, [isSignedIn]);

  if (!isSignedIn) return null; // Prevents flickering before redirect

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <p>You are successfully logged in.</p>
    </div>
  );
}


// "use client";

// import { useEffect } from "react";
// import { useAuth } from "@clerk/nextjs";
// import { useRouter } from "next/navigation";

// export default function Dashboard() {
//   const { isSignedIn } = useAuth();
//   const router = useRouter();

//   useEffect(() => {
//     if (!isSignedIn) {
//       router.push("/auth/sign-in");
//     }
//   }, [isSignedIn]);

//   return <h1>Welcome to Dashboard</h1>;
// }


// import { clerkMiddleware } from "@clerk/nextjs/server";

// export default clerkMiddleware();

// export const config = {
//   matcher: [
//     "/dashboard", 
//     "/((?!_next/static|favicon.ico|.*\\..*).*)", // Excludes static files
//     "/(api|trpc)(.*)", // Protects API routes
//   ],
// };

//worked
// export default function DashboardPage() {
//   return (
//     <div>
//       <h1>Welcome to the Dashboard</h1>
//       <p>You are successfully signed in.</p>
//     </div>
//   );
// }


// "use client";
// import { useAuth } from "@clerk/nextjs";

// export default function DashboardPage() {
//   const { isSignedIn, userId } = useAuth();

//   if (!isSignedIn) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       <h1>Welcome to your Dashboard</h1>
//       <p>Your Clerk ID: {userId}</p>
//     </div>
//   );
// }
