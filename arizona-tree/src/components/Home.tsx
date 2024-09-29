import MapSection from "./MapSection";
import Sidebar from "./Sidebar";
import TopNav from "./Topnav";

function Home() {
  return (
    <div className="flex flex-col md:flex-row h-screen w-[100vw]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className=" flex flex-col w-full">
        {/* Top Menu Bar */}
        <TopNav />

        {/* Main Map and Right Sidebar */}
        <MapSection />
      </div>
    </div>
  );
}

export default Home;
