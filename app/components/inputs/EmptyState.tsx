const EmptyState = () => {
  return (
    <div
      className="h-full 
                    w-full 
                    px-10
                    py-6
                    flex
                    justify-center 
                    items-center 
                    bg-gray-100"
    >
      <h3 className="text-gray-900 leading-4 tracking-tight text-2xl font-bold">
        Select a chat or start a new conversation
      </h3>
    </div>
  );
};

export default EmptyState;
