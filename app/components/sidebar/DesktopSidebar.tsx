"use client";

import useRoutes from "@/app/hooks/useRoutes";
import DesktopItem from "../DesktopItem";
import { User } from "@prisma/client";
import Avatar from "../Avatar";

interface DesktopSidebarProps {
  currentUser: User;
}

const DesktopSidebar: React.FC<DesktopSidebarProps> = ({ currentUser }) => {
  const routes = useRoutes();

  return (
    <div
      className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-40
    lg:w-16 lg:overflow-y-auto lg:bg-white 
    lg:border-r-[1px] border-gray-100 lg:flex lg:py-4 lg:flex-col items-center justify-between"
    >
      <ul role="list" className="flex flex-col items-center space-y-1">
        {routes.map((item) => (
          <DesktopItem
            key={item?.label}
            label={item?.label}
            icon={item?.icon}
            href={item?.href}
            active={item?.active}
            onClick={item?.onClick}
          />
        ))}
      </ul>
      <Avatar user={currentUser} />
    </div>
  );
};

export default DesktopSidebar;
