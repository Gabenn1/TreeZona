import SatelliteMap from "./Map"; // Import SatelliteMap component

function Rightbar() {
  return (
    <div className="flex">
      {/* Map Section */}
      <div className="w-[75%]">
        <SatelliteMap />
      </div>

      {/* Right Sidebar */}
      <div className="h-[100vh] w-[25%] border-l">677 W Carter Dr</div>
    </div>
  );
}

export default Rightbar;
