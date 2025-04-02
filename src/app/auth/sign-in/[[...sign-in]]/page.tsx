// was working can be used
// "use client";

// import { useEffect } from "react";
// import { useAuth } from "@clerk/nextjs";
// import { useRouter } from "next/navigation";
// import { SignIn } from "@clerk/nextjs";

// export default function SignInPage() {
//   const { isSignedIn, isLoaded } = useAuth();

//   const router = useRouter();

//   useEffect(() => {

//     if (isLoaded && isSignedIn) {
//       router.replace("/dashboard"); // Use `replace` to prevent back navigation
//     }
//   }, [isSignedIn, isLoaded, router]);

//   if (!isLoaded) return <p>Loading...</p>; // Prevent flickering

//   if (isSignedIn) return null; // Prevent SignIn component from rendering

//   return <SignIn afterSignInUrl="/dashboard" />;
// }


"use client";

import { useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  const { isSignedIn, isLoaded } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.replace("/dashboard"); // Redirect after sign-in
    }
  }, [isSignedIn, isLoaded, router]);

  if (!isLoaded) return <p>Loading...</p>; // Prevent flickering

  if (isSignedIn) return null; // Prevent re-rendering

  return <SignIn fallbackRedirectUrl="/dashboard" routing="hash" />;
}


//Bakyt's gives blank page
// "use client";
// import { SignIn } from "@clerk/nextjs";

// export default function SignInPage() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-100">
//       <SignIn
//         appearance={{
//           elements: {
//             formButtonPrimary: "bg-blue-500 hover:bg-blue-600",
//             footerActionLink: "text-blue-500 hover:text-blue-600",
//           },
//         }}
//         routing="path"
//         path="/sign-in"
//         signUpUrl="/sign-up"
//         redirectUrl="/dashboard"
//       />
//     </div>
//   );
// }

//was working but when sign up navigated back sign in
//  "use client";

// import { SignIn } from "@clerk/nextjs";

// export default function SignInPage() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-100">
//       <SignIn
//         appearance={{
//           elements: {
//             formButtonPrimary: "bg-blue-500 hover:bg-blue-600",
//             footerActionLink: "text-blue-500 hover:text-blue-600",
//           },
//         }}
//         afterSignInUrl="/dashboard" // ✅ Use `afterSignInUrl` (not `forceRedirectUrl`)
//       />
//     </div>
//   );
// }


//WAS THIS VERSION from github but gives 403
// "use client";
// import { useEffect } from "react";
// import { useAuth, SignIn } from "@clerk/nextjs";
// import { useRouter } from "next/navigation";

// export default function SignInPage() {
//   const { isSignedIn } = useAuth();
//   const router = useRouter();

//   useEffect(() => {
//     if (isSignedIn) {
//       router.push("/dashboard");
//     }
//   }, [isSignedIn, router]);

//   return <SignIn />;
// }