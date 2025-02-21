import Sidebar from "../components/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar for all dashboard pages */}
      <Sidebar />
      
      {/* Main Content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
