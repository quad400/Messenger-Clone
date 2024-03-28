import clsx from "clsx";
import Link from "next/link";

interface MobileItemProps {
  label: string;
  href: string;
  icon: any;
  active?: boolean;
  onClick?: () => void;
}

const MobileItem: React.FC<MobileItemProps> = ({
  active,
  icon: Icon,
  label,
  onClick,
  href,
}) => {

  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };
  
  return (
    <li
      onClick={handleClick}
      className={clsx(
        "w-full h-full hover:bg-gray-100 py-3 cursor-pointer",
        active && "bg-gray-100"
      )}
    >
      <Link
        href={href}
        className={clsx(
          "group flex  flex-col justify-center gap-y-2 items-center rounded-md hover:bg-gray-100 w-full"
        )}
      >
        <Icon className="h-6 w-6 shrink-0" />
        <span className="text-sm font-medium leading-3 ">{label}</span>
      </Link>
    </li>
  );
};

export default MobileItem;
