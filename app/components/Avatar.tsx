import { User } from "@prisma/client";
import Image from "next/image";

interface AvatarProps {
  user: User;
}

const Avatar: React.FC<AvatarProps> = ({ user }) => {
  return (
    <div className="relative">
      <div className="h-9 w-9 rounded-full relative inline-block overflow-hidden md:h-11 md:w-11">
        <Image
          fill
          alt="Avatar"
          src={user?.image || "/images/placeholder.jpg"}
        />
      </div>
      <span className="h-2 w-2 absolute bottom-2 right-1 bg-green-500 rounded-full ring ring-white " />
    </div>
  );
};

export default Avatar;
