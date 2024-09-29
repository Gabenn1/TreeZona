import Rightbar from "./Rightbar";
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
        <Rightbar />
      </div>
    </div>
  );
}

export default Home;
