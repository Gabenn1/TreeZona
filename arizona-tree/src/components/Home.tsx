import Sidebar from "./Sidebar";
import TopNav from "./Topnav";

function Home() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className=" flex flex-col w-[97vw]">
        {/* Top Menu Bar */}
        <TopNav />

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

            <div className="flex items-center bg-orange-500 text-white px-4 py-2 rounded-lg"></div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Home;
