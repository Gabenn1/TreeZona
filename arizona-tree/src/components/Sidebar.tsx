import { Map } from "lucide-react";

import { Settings } from "lucide-react";

function Sidebar() {
  return (
    <aside className="w-16 bg-gray-100 flex flex-col items-center py-4 border-r border-gray-300 bg-lightGray">
      <div className="mb-6">
        <img src="/logo.svg" />
      </div>
      <div className="flex flex-col gap-8">
        <Map className="w-[30px] h-[30px] hover:text-orange hover:cursor-pointer" />
        <Settings className="w-[30px] h-[30px] hover:text-orange hover:cursor-pointer" />
        <i className="fas fa-cog text-xl text-gray-600 hover:text-blue-500"></i>
      </div>
    </aside>
  );
}

export default Sidebar;
