import getCurrentUser from "@/app/actios/getCurrentUser";
import DesktopSidebar from "./DesktopSidebar";
import MobileTabbar from "./MobileTabbar";

async function Sidebar({ children }: { children: React.ReactNode }) {
  const user = await getCurrentUser();

  return (
    <div className="h-full">
      <DesktopSidebar currentUser={user!} />
      <MobileTabbar />
      <main className="lg:pl-20 h-full">{children}</main>
    </div>
  );
}

export default Sidebar;
