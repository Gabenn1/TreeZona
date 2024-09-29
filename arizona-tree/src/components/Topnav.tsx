function TopNav() {
  return (
    <header className="flex justify-between items-center p-4 border-b border-gray-300 bg-gray-50 flex-wrap w-[95.2vw]">
      <div className="flex items-center space-x-4">
        <span className="text-lg font-semibold font-monteserrat">
          Arizona Tree
        </span>
      </div>
      <div className="flex items-center space-x-4 mt-2 md:mt-0">
        {/* Weather and Temperature */}
        <div className="flex items-center">
          <i className="fas fa-sun text-xl mr-2"></i>
          <span className="font-bold text-lg">109°</span>
        </div>
        {/* Location Dropdown */}
        <div className="location">
          <select className="py-1 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
            <option>Phoenix, Arizona</option>
          </select>
        </div>
      </div>
    </header>
  );
}

export default TopNav;
