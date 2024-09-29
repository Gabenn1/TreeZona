import { useState, useEffect } from "react";
import { TreePine } from "lucide-react";
import Cards from "./Cards";
import SatelliteMap from "./Map";

function MapSection() {
  const [imageSrc, setImageSrc] = useState("/images/output.png");

  useEffect(() => {
    const interval = setInterval(() => {
      // Append a cache-busting timestamp to the image source
      setImageSrc(`/images/output.png?timestamp=${new Date().getTime()}`);
    }, 5000); // Check every 5 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="flex">
      {/* Map Section */}

      <div className="w-[73%]">
        <SatelliteMap />
      </div>

      {/* Right Sidebar */}

      <div className="flex flex-col h-[93vh] w-[26%] border-l text-3xl p-5 pt-8">
        <div className="flex items-center">
          <div className="flex flex-row gap-4 justify-center items-center">
            <div>
              <TreePine className="w-12 h-12" />
            </div>
            <div>
              <p className="leading-4">677 W Carter Dr</p>
              <p className="text-[14px] text-gray">Tempe, AZ 85282</p>
            </div>
          </div>
        </div>
        <div className="my-6">
          <img src={imageSrc} className="rounded-2xl " />
        </div>
        <SummarySection summary="The amount of trees covers 15.88% of the given area. This can be improved by around 14.12% for optimal coverage." />
        <div className="grid grid-cols-2 my-6 w-full">
          <LocationInfo
            category="City"
            info="Tempe"
            className="py-2 border-b border-r border-gray"
          />
          <LocationInfo
            category="Time"
            // Get current time
            info={new Date().toLocaleTimeString()}
            className="border-b py-2 pl-2 border-gray"
          />
          <LocationInfo
            category="Air Quality"
            info="25 AQI"
            className="py-2 border-b border-r border-gray"
          />
          <LocationInfo
            category="C02 Saturation"
            info="Acceptable"
            className="border-b py-2 pl-2 border-gray"
          />
        </div>

        <div className="flex flex-row gap-10 justify-center">
          <Cards coverageType="Current" coverageValue={15.88} />
          <Cards coverageType="Optimal" coverageValue={30} />
        </div>
      </div>
    </div>
  );
}

interface locationTypes {
  category: string;
  info: string;
  className: string;
}

function LocationInfo({ category, info, className }: locationTypes) {
  return (
    <div className={className}>
      <p className="text-[18px] leading-5 font-bold text-gray	"> {category} </p>
      <p className="text-[14px] leading-5"> {info}</p>
    </div>
  );
}

function SummarySection({ summary }: { summary: string }) {
  return (
    <div>
      <p className="detail text-gray">Summary:</p>
      <p className="detail leading-5">{summary}</p>
    </div>
  );
}

export default MapSection;
