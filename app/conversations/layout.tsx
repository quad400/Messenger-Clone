import Sidebar from "../components/sidebar/Sidebar";

const ConversationsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Sidebar>
      <div className="h-full">
        <aside className="fixed inset-y-0 lg:w-80 lg:left-20 lg:block overflow-y-auto bg-white border-r border-gray-200 block w-full left-0">
          <h3 className="font-semibold text-neutral-800 mt-6 px-6 text-2xl">
            Messages
          </h3>
          {/* <UserList users={users} /> */}
        </aside>
        {children}
      </div>
    </Sidebar>
  );
};

export default ConversationsLayout;
