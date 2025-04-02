//must be sidebar in layout and passing children for all of the pages
// import Sidebar from "../components/sidebar";

// export default function DashboardLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="flex h-screen">
//       {/* Sidebar remains static */}
//       <Sidebar />
      
//       {/* Main Content */}
//       <main className="flex-1 p-6">{children}</main>
//     </div>
//   );
// }

//Arslan's code - What is ChatProvider? where should it be defined?
//if leave Sidebar without {} and leave my code in sidebar then old ui displayed
// import Sidebar from "../../components/sidebar";

// type Props = {
//   children: React.ReactNode;
// };

// export default async function OwnerLayout({ children }: Props) {
//   // Placeholder for authentication logic, modify this based on your auth flow
//   const authenticated = true; // Replace with actual authentication check
  
//   if (!authenticated) return null;

//   return (

//       <div className="flex h-screen w-full">
//         {/* Sidebar remains static */}
//         <Sidebar domains={domains}/>

//         {/* Dynamic content changes based on selected menu option */}
//         <div className="flex-1 h-screen flex flex-col p-6">{children}</div>
//       </div>

//   );
// }

//Bakyt's code throwing an error
// import { useUser } from "@clerk/nextjs";
// import { prisma } from "@/lib/prisma";
// import Sidebar from "@/components/sidebar";

// export default async function DashboardLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const { user } = useUser();
//   const domains = user
//     ? await prisma.domain.findMany({
//         where: {
//           user: {
//             clerkId: user.id,
//           },
//         },
//         select: {
//           id: true,
//           name: true,
//           icon: true,
//         },
//       })
//     : [];

//   return (
//     <div className="flex min-h-screen">
//       <Sidebar domains={domains} />
//       <main className="flex-1 overflow-y-auto">{children}</main>
//     </div>
//   );
// }

//was working
import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import Sidebar from "@/components/sidebar";
import { ChatProvider } from "@/context/use-chat-context"; // ✅ import this

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();

  const domains = user
    ? await prisma.domain.findMany({
        where: {
          user: {
            clerkId: user.id,
          },
        },
        select: {
          id: true,
          name: true,
          icon: true,
        },
      })
    : [];

  return (
    <ChatProvider> {/* ✅ Wrap the entire layout with context provider */}
      <div className="flex min-h-screen">
        <Sidebar domains={domains} />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </ChatProvider>
  );
}

// import { currentUser } from "@clerk/nextjs/server";
// import {prisma}  from "@/lib/prisma";
// import Sidebar from "@/components/sidebar";

// export default async function DashboardLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const user = await currentUser();
//   const domains = user
//     ? await prisma.domain.findMany({
//         where: {
//           user: {
//             clerkId: user.id,
//           },
//         },
//         select: {
//           id: true,
//           name: true,
//           icon: true,
//         },
//       })
//     : [];

//   return (
//     <div className="flex min-h-screen">
//       <Sidebar domains={domains} />
//       <main className="flex-1 overflow-y-auto">{children}</main>
//     </div>
//   );
// }
