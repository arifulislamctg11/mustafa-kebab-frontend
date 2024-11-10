import { FaArrowRight, FaBars, FaSearch } from "react-icons/fa";
import CategorySlide from "../CategorySlide/CategorySlide";
import { IoSearch } from "react-icons/io5";


const CardSearch=()=>{
    return(
        <>
        <div className="lg:w-[1169px] w-full z-[50]  sticky h-20 top-0   bg-white p-7">
        <div className="relative w-full ">
        <input 
          type="text" 
          placeholder="Mustafa Kebab"
          className="w-full border border-gray-300 rounded-full py-3 pl-10 pr-16 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        {/* Search Icon */}
        <FaSearch className="absolute left-4 top-2.5 mt-2 text-orange-400" />
        {/* Right Icons */}
        
      </div>
         <CategorySlide></CategorySlide>
            
        </div>
        </>
    )
}
export default CardSearch;