import { Slider } from "./ui/slider";

interface cardInfo {
  coverageType: string;
  coverageValue: number;
}

function Cards({ coverageType, coverageValue }: cardInfo) {
  return (
    <div className="flex flex-row gap-10 my-6">
      <div className="p-4 border-2 border-gray rounded-xl w-[10vw]">
        <div className="text-[11px] text-gray">
          {coverageType} Coverage
          <p className="text-2xl text-black py-3">{coverageValue}%</p>
          <Slider defaultValue={[coverageValue]} max={100} step={1} />
        </div>
      </div>
    </div>
  );
}

export default Cards;
