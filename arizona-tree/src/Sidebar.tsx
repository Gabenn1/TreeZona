import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar */}

      
      <aside className="w-16 bg-gray-100 flex flex-col items-center py-4 border-r border-gray-300">
        <div className="mb-6">
          <i className="fas fa-leaf text-green-500 text-xl"></i>
        </div>
        <div className="flex flex-col space-y-6">
          <i className="fas fa-home text-xl text-gray-600 hover:text-blue-500"></i>
          <i className="fas fa-map text-xl text-gray-600 hover:text-blue-500"></i>
          <i className="fas fa-cog text-xl text-gray-600 hover:text-blue-500"></i>
        </div>
      </aside>
      

      {/* Main Content Area */}
      <div className=" flex-1 flex flex-col">
        {/* Top Menu Bar */}
        <header className="flex justify-between items-center p-4 border-b border-gray-300 bg-gray-50 flex-wrap">
          <div className="flex items-center space-x-4">
            <span className="text-lg font-semibold">Image 9</span>
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

        {/* Main Map and Right Sidebar */}
        <div className="flex flex-1 flex-row md:flex-row">
          {/* Map Section */}
          <div className="flex-1 bg-gray-200 p-4 w-100">
            <h2 className="text-center">Map goes here</h2>
          </div>

          {/* Right Sidebar */}
          <aside className="w-full md:w-64 bg-white p-4 border-l border-gray-300">
            <div className="mb-4">
              <h3 className="font-semibold text-lg">677 W Carter Dr</h3>
              <p className="text-gray-500">Tempe, AZ 85282</p>
            </div>
            <div className="my-4">
              <label className="block text-sm font-medium text-gray-700">
                Green View Index
              </label>
              <input
                type="range"
                min="0"
                max="100"
                defaultValue="50"
                className="w-full mt-2"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>0%</span>
                <span>50%</span>
                <span>100%</span>
              </div>
            </div>
            <div className="flex items-center bg-orange-500 text-white px-4 py-2 rounded-lg">
             
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default App;
