//was working can be used
//  "use client";
// import { SignUp } from "@clerk/nextjs";
// import { useEffect } from 'react'
// import { useAuth } from '@clerk/nextjs'
// import { useRouter } from 'next/navigation'

// export default function SignUpPage() {
//   const { isSignedIn } = useAuth();
//   const router = useRouter();

//   useEffect(() => {
//     if (isSignedIn) {
//       router.push('/dashboard');
//     }
//   }, [isSignedIn, router]);

//   return <SignUp />;
// }

"use client";

import { SignUp } from "@clerk/nextjs";
import { useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.push("/dashboard");
    }
  }, [isSignedIn, router]);

  return <SignUp fallbackRedirectUrl="/dashboard" />;
}


//Bakyt's gives blank page
// import { SignUp } from "@clerk/nextjs";

// export default function SignUpPage() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-100">
//       <SignUp
//         appearance={{
//           elements: {
//             formButtonPrimary: "bg-blue-500 hover:bg-blue-600",
//             footerActionLink: "text-blue-500 hover:text-blue-600",
//           },
//         }}
//         path="/auth/sign-up"
//         routing="path"
//         signInUrl="/sign-in"
//         redirectUrl="/dashboard"
//       />
//     </div>
//   );
// }


//was working recent one
// "use client";

// import { SignUp } from "@clerk/nextjs";

// export default function SignUpPage() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-100">
//       <SignUp
//         appearance={{
//           elements: {
//             formButtonPrimary: "bg-blue-500 hover:bg-blue-600",
//             footerActionLink: "text-blue-500 hover:text-blue-600",
//           },
//         }}
//         path="/auth/sign-up"  
//         routing="path"
//         signInUrl="/auth/sign-in"
//         afterSignUpUrl="/dashboard"
//       />
//     </div>
//   );
// }

//was this from github but gives 403
// "use client";
// import { useEffect } from "react";
// import { useAuth, SignUp } from "@clerk/nextjs";
// import { useRouter } from "next/navigation";

// export default function SignUpPage() {
//   const { isSignedIn } = useAuth();
//   const router = useRouter();

//   useEffect(() => {
//     if (isSignedIn) {
//       router.push("/dashboard");
//     }
//   }, [isSignedIn, router]);

//   return <SignUp />;
// }



//WAS THIS
// "use client";
// import { useEffect } from "react";
// import { useAuth, SignUp } from "@clerk/nextjs";
// import { useRouter } from "next/navigation";

// export default function SignUpPage() {
//   const { isSignedIn } = useAuth();
//   const router = useRouter();

//   useEffect(() => {
//     if (isSignedIn) {
//       router.push("/dashboard");
//     }
//   }, [isSignedIn, router]);

//   return <SignUp />;
// }

// "use client";

// import { useEffect } from "react";
// import { useAuth } from "@clerk/nextjs";
// import { useRouter } from "next/navigation";
// import { SignUp } from "@clerk/nextjs"; // Ensure SignUp is imported correctly

// export default function SignUpPage() {
//   const { isSignedIn } = useAuth();
//   const router = useRouter();

//   useEffect(() => {
//     if (isSignedIn) {
//       router.push("/dashboard");
//     }
//   }, [isSignedIn]);

//   return <SignUp />;
// }