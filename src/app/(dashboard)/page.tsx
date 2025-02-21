// // Bakyt's
// import { UserButton } from "@clerk/nextjs";
// import { currentUser } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation";
// import React from "react";
// import { prisma } from "@/lib/prisma"; //changed with copilot

// export default async function DashboardPage() {
//   try {
//     const user = await currentUser();

//     if (!user) {
//       redirect("/");
//     }

//     const dbUser = await prisma.user
//       .upsert({
//         where: { id: user.id },//changed with copilot
//         create: {
//           clerkId: user.id,
//           fullname: `${user.firstName || ""} ${user.lastName || ""}`.trim(),
//           type: "user",
//         },
//         update: {},
//         include: {
//           campaigns: true,
//           domains: true,
//         },
//       })
//       .catch((error) => {
//         console.error("Error upserting user data:", error);
//         return null;
//       });

//     if (!dbUser) {
//       return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100">
//           <div className="bg-white p-8 rounded-lg shadow-md">
//             <h1 className="text-xl font-semibold text-red-600">
//               Error loading user data
//             </h1>
//             <p className="mt-2 text-gray-600">
//               Please try refreshing the page or sign in again.
//             </p>
//           </div>
//         </div>
//       );
//     }

//     return (
//       <div className="min-h-screen bg-gray-100">
//         <nav className="bg-white shadow-sm">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex justify-between h-16">
//               <div className="flex items-center">
//                 <h1 className="text-xl font-semibold">Dashboard</h1>
//               </div>
//               <div className="flex items-center gap-4">
//                 <span className="text-gray-600">
//                   Welcome, {user.firstName} {user.lastName}
//                 </span>
//                 <UserButton afterSignOutUrl="/" />
//               </div>
//             </div>
//           </div>
//         </nav>
//         <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
//           <div className="px-4 py-6 sm:px-0">
//             <div className="bg-white rounded-lg shadow p-6">
//               <h2 className="text-2xl font-bold mb-4">Your Account</h2>
//               <div className="space-y-4">
//                 <div>
//                   <h3 className="text-lg font-medium">Profile Information</h3>
//                   <p className="text-gray-600">
//                     Email: {user.emailAddresses[0]?.emailAddress}
//                   </p>
//                   <p className="text-gray-600">
//                     Name: {user.firstName} {user.lastName}
//                   </p>
//                 </div>

//                 <div>
//                   <h3 className="text-lg font-medium">Your Statistics</h3>
//                   <div className="grid grid-cols-2 gap-4 mt-2">
//                     <div className="bg-gray-50 p-4 rounded-lg">
//                       <p className="text-gray-600">Campaigns</p>
//                       <p className="text-2xl font-bold">
//                         {dbUser.campaigns.length}
//                       </p>
//                     </div>
//                     <div className="bg-gray-50 p-4 rounded-lg">
//                       <p className="text-gray-600">Domains</p>
//                       <p className="text-2xl font-bold">
//                         {dbUser.domains.length}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     );
//   } catch (error) {
//     console.error("Dashboard error:", error);
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-100">
//         <div className="bg-white p-8 rounded-lg shadow-md">
//           <h1 className="text-xl font-semibold text-red-600">
//             Error loading dashboard
//           </h1>
//           <p className="mt-2 text-gray-600">
//             Please try refreshing the page or sign in again.
//           </p>
//         </div>
//       </div>
//     );
//   }
// }

//WAS THIS - gives broken 403 page as before
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
