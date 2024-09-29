import { TreePine } from "lucide-react";
import Cards from "./Cards";

function Rightbar() {
  return (
    <div className="flex">
      {/* Map Section */}
      <div className="w-[75%]">Map here</div>

      {/* Right Sidebar */}

      <div className="flex flex-col h-[100vh] w-[24%] border-l text-3xl p-5 pt-8">
        <div className="flex items-center">
          <div className="flex flex-col justify-center">
            <div className="flex">
              <TreePine />
              <p className="leading-4">677 W Carter Dr</p>
            </div>
            <p className="text-[14px] text-gray">Tempe, AZ 85282</p>
          </div>
        </div>
        <div className="my-6">
          <img src="/dummyImage.jpg" className="rounded-2xl" />
        </div>
        <div>
          <p className="detail text-gray">Summary:</p>
          <p className="detail leading-5">
            This area has a green view index of 50%. More trees can improve
            temperature.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 my-6 w-full">
          <div>
            <p className="text-[18px] leading-5 font-bold text-gray	"> City </p>
            <p className="text-[14px] leading-5"> Tempe</p>
          </div>
          <div>
            <p className="text-[18px] leading-5 font-bold	  text-gray	"> Time </p>
            <p className="text-[14px] leading-5"> 12:00pm</p>
          </div>
          <div>
            <p className="text-[18px] leading-5 font-bold  text-gray		">
              {" "}
              Air Quality{" "}
            </p>
            <p className="text-[14px] leading-5"> 62</p>
          </div>
          <div>
            <p className="text-[18px] leading-5 font-bold  text-gray		">
              {" "}
              CO2 Consumption{" "}
            </p>
            <p className="text-[14px] leading-5"> 25</p>
          </div>
        </div>

        <Cards />
      </div>
    </div>
  );
}

export default Rightbar;
