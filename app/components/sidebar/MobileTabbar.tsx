"use client";

import useRoutes from "@/app/hooks/useRoutes";
import MobileItem from "../MobileItem";

const MobileTabbar = () => {
  const routes = useRoutes();
  return (
    <div className="relative">
      <div className="lg:hidden fixed bottom-0 z-40 left-0 right-0 w-full flex justify-center items-center border-t border-gray-100 ">
        <ul role="list" className="flex justify-around items-center w-full">
          {routes.map((item) => (
            <MobileItem
              key={item?.label}
              label={item?.label}
              icon={item?.icon}
              href={item?.href}
              active={item?.active}
              onClick={item?.onClick}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileTabbar;
