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
import Sidebar from "../components/sidebar";

type Props = {
  children: React.ReactNode;
};

export default async function OwnerLayout({ children }: Props) {
  // Placeholder for authentication logic, modify this based on your auth flow
  const authenticated = true; // Replace with actual authentication check
  
  if (!authenticated) return null;

  return (

      <div className="flex h-screen w-full">
        {/* Sidebar remains static */}
        <Sidebar />

        {/* Dynamic content changes based on selected menu option */}
        <div className="flex-1 h-screen flex flex-col p-6">{children}</div>
      </div>

  );
}


