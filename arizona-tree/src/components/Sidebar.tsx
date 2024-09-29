function Sidebar() {
  return (
    <aside className="w-16 bg-gray-100 flex flex-col items-center py-4 border-r border-gray-300 bg-lightGray">
      <div className="mb-6">
        <img src="/public/logo.svg" />
      </div>
      <div className="flex flex-col space-y-6">
        <i className="fas fa-home text-xl text-gray-600 hover:text-blue-500"></i>
        <i className="fas fa-map text-xl text-gray-600 hover:text-blue-500"></i>
        <i className="fas fa-cog text-xl text-gray-600 hover:text-blue-500"></i>
      </div>
    </aside>
  );
}

export default Sidebar;
