import clsx from "clsx";
import Link from "next/link";

interface DesktopItemProps {
  label: string;
  href: string;
  icon: any;
  active?: boolean;
  onClick?: () => void;
}

const DesktopItem: React.FC<DesktopItemProps> = ({
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
    <li onClick={handleClick}>
      <Link
        href={href}
        className={clsx(
          "group flex justify-between gap-x-3 items-center rounded-md p-3 hover:bg-gray-100"
        )}
      >
        <Icon className="h-6 w-6 shrink-0" />
      </Link>
    </li>
  );
};

export default DesktopItem;
