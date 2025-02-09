import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
  
  // This will ensure that the ClerkProvider is available to all pages in your Next.js app. 
  // And ensures that Clerk's authentication context is available throughout your app.


