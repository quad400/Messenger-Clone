"use client";

import Avatar from "@/app/components/Avatar";
import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";

interface UsersListProps {
  users: User[];
}

const UserList: React.FC<UsersListProps> = ({ users }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleClick = useCallback(
    (data: User) => {

      console.log(data)
      axios
        .post("/api/conversations", { userId: data.id })
        .then((res) => {
          router.push(`/conversations/${res.data.id}`);
        })
        .catch((error) => toast.error(error.message))
        .finally(() => setIsLoading(false));
    },
    [router]
  );

  return users.map((user) => (
    <div key={user.id} onClick={() => handleClick(user)} className="w-full cursor-pointer">
      <div className="mb-3 py-2 bg-white hover:bg-gray-100 mr-3 rounded-md flex justify-start px-4 gap-x-4 items-center ">
        <Avatar user={user} />
        <div className="text-sm font-medium text-gray-800 tracking-tight">
          {user.name}
        </div>
      </div>
    </div>
  ));
};

export default UserList;
