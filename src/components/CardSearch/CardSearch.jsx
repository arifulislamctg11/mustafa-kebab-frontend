import { FaSearch } from "react-icons/fa";
import CategorySlide from "../CategorySlide/CategorySlide";

const CardSearch = () => {
  return (
    <div className="w-full lg:w-[1169px] z-[50] sticky h-20 top-0 bg-white p-4 lg:p-7">
      <div className="relative w-full">
        <input 
          type="text" 
          placeholder="Mustafa Kebab"
          className="w-full border border-gray-300 rounded-full py-3 pl-10 pr-16 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        {/* Search Icon */}
        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-400" />
      </div>
      
      {/* Category Slide Component */}
      <div >
        <CategorySlide />
      </div>
    </div>
  );
}

export default CardSearch;
