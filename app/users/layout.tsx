import getUsers from "../actios/getUsers";
import Sidebar from "../components/sidebar/Sidebar";
import UserList from "./components/UserList";

export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const users = await getUsers();

  return (
    <Sidebar>
      <div className="h-full">
        <aside className="fixed inset-y-0 lg:w-80 lg:left-20 lg:block overflow-y-auto border-r border-gray-200 block w-full left-0">
          <h3 className="font-semibold text-neutral-800 mt-6 px-6 text-2xl">
            People
          </h3>
          <UserList users={users} />
        </aside>

        {children}
      </div>
    </Sidebar>
  );
}
