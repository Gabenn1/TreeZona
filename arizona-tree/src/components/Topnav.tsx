import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

function TopNav() {
  return (
    <header className="flex justify-between items-center p-4 border-b border-gray-300 bg-gray-50 flex-wrap w-[95.2vw]">
      <div className="flex items-center space-x-4">
        <span className="text-3xl font-semibold">Arizona Tree</span>
      </div>
      <div className="flex items-center space-x-4 mt-2 md:mt-0">
        {/* Weather and Temperature */}
        <div className="flex items-center">
          <i className="fas fa-sun text-xl mr-2"></i>
          <span className="font-bold text-lg">109°</span>
        </div>
        {/* Location Dropdown */}
        <div className="location">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Tempe " />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Tempe</SelectItem>
              <SelectItem value="dark">Phoenix</SelectItem>
              <SelectItem value="system">Glendale</SelectItem>
              <SelectItem value="system">Peoria</SelectItem>
              <SelectItem value="system">Tuscon</SelectItem>
              <SelectItem value="system">Flagstaff</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </header>
  );
}

export default TopNav;
