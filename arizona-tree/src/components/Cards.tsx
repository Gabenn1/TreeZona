import { Slider } from "@/components/ui/slider";

function Cards() {
  return (
    <div className="flex flex-row gap-10">
      <div className="p-4 border-4 border-gray rounded-xl w-[15vw] h-[16vh] ">
        <div className="text-[11px] text-gray">
          Current Coverage
          <p className="text-2xl text-black py-3">50%</p>
          <Slider defaultValue={[33]} max={100} step={1} />
        </div>
      </div>
      <div className="p-4 border-4  border-gray rounded-xl w-[15vw] h-[16vh]">
        <div className="text-[11px] text-gray	">
          Optimal Coverage
          <p className="text-2xl text-black py-3">50%</p>
          <Slider defaultValue={[33]} max={100} step={1} />
        </div>
      </div>
    </div>
  );
}

export default Cards;
