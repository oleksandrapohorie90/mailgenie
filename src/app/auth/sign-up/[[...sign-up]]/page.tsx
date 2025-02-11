"use client";
import { useEffect } from "react";
import { useAuth, SignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.push("/dashboard");
    }
  }, [isSignedIn, router]);

  return <SignUp />;
}

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