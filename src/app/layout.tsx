import { ClerkProvider, SignedIn, SignedOut, UserButton, SignInButton, SignUpButton } from "@clerk/nextjs";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <div id="app">
            <header className="flex justify-end items-center p-4 gap-4 h-16">
              <SignedOut>
                <SignInButton />
                <SignUpButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </header>
            {children} {/* Ensuring children is wrapped inside a single div */}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}



// was this and working
// import { ClerkProvider, SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
// import { Geist, Geist_Mono } from 'next/font/google'
// import './globals.css'

// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// })

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// })

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <ClerkProvider>
//       <html lang="en">
//         <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
//           <header className="flex justify-end items-center p-4 gap-4 h-16">
//             <SignedOut>
//               <SignInButton />
//               <SignUpButton />
//             </SignedOut>
//             <SignedIn>
//               <UserButton />
//             </SignedIn>
//           </header>
//           {children}
//         </body>
//       </html>
//     </ClerkProvider>
//   )
// }

// was working but sign up started not responding
// import { ClerkProvider } from "@clerk/nextjs";
// import { Inter } from "next/font/google";
// import React from "react";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

// // Dynamically get the Next.js server URL from process.env
// const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

// export const metadata = {
//   title: "ChatBot",
//   description: "Your AI Assistant",
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <ClerkProvider
//       publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
//       signInUrl={`${appUrl}/auth/sign-in`}
//       signUpUrl={`${appUrl}/auth-sign-up`}
//       afterSignInUrl={`${appUrl}/dashboard`} // ✅ Use this instead
//       afterSignUpUrl={`${appUrl}/dashboard`} // ✅ Use this instead
//     >
//       <html lang="en">
//         <body className={inter.className}>{children}</body>
//       </html>
//     </ClerkProvider>
//   );
// }

//was working recent one
// import { ClerkProvider } from "@clerk/nextjs";
// import { Inter } from "next/font/google";
// import React from "react";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

// // Get the base app URL dynamically from environment variables
// const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

// export const metadata = {
//   title: "ChatBot",
//   description: "Your AI Assistant",
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <ClerkProvider
//       publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
//       signInUrl="/auth/sign-in"
//       signUpUrl="/auth/sign-up"
//       afterSignInUrl="/dashboard"
//       afterSignUpUrl="/dashboard"
//     >
//       <html lang="en">
//         <body className={inter.className}>{children}</body>
//       </html>
//     </ClerkProvider>
//   );
// }



// import { ClerkProvider } from "@clerk/nextjs";

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <ClerkProvider>
//       <html lang="en">
//         <body>{children}</body>
//       </html>
//     </ClerkProvider>
//   );
// }

// import { ClerkProvider } from "@clerk/nextjs";
// import "./globals.css";

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <ClerkProvider>
//       <html lang="en">
//         <body>{children}</body>
//       </html>
//     </ClerkProvider>
//   );
// }

// gives 403 broken page
// import {
//   ClerkProvider,
//   SignInButton,
//   SignedIn,
//   SignedOut,
//   UserButton
// } from '@clerk/nextjs'
// import './globals.css'
// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <ClerkProvider>
//       <html lang="en">
//         <body>
//           <SignedOut>
//             <SignInButton />
//           </SignedOut>
//           <SignedIn>
//             <UserButton />
//           </SignedIn>
//           {children}
//         </body>
//       </html>
//     </ClerkProvider>
//   )
// }


  
  // This will ensure that the ClerkProvider is available to all pages in your Next.js app. 
  // And ensures that Clerk's authentication context is available throughout your app.


