//must be sidebar in layout and passing children for all of the pages
import Sidebar from "../components/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar remains static */}
      <Sidebar />
      
      {/* Main Content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}

//Arslan's code - errors
// import Sidebar from "@/components/sidebar";
// import { ChatProvider } from "@/context/use-chat-context";
// import React from "react";

// type Props = {
//   children: React.ReactNode;
// };

// const OwnerLayout = async ({ children }: Props) => {
//   const authenticated = await onLoginUser(); // Ensure authentication check

//   if (!authenticated) return null; // Prevent rendering if not authenticated

//   return (
//     <ChatProvider>
//       <div className="w-full h-screen flex">
//         {/* Sidebar with domain prop */}
//         <Sidebar domain={authenticated.domain} />

//         {/* Main content area */}
//         <div className="w-full h-screen flex flex-col pl-20 md:pl-4">
//           {children}
//         </div>
//       </div>
//     </ChatProvider>
//   );
// };

// export default OwnerLayout;

