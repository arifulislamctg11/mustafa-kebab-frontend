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
// import CategorySlide from "../CategorySlide/CategorySlide";

// const CardSearch=()=>{
//     return(
//         <>
//         <div className="lg:w-1/2 w-full z-[50]  sticky h-20 top-0 lg:mr-80  shadow-xl  bg-white p-7">
//         <div>
//             <form >
//             <input type="text" placeholder="Search  in Mustafa Kebab" className="input input-bordered  border border-black rounded-full md:w-1/2    text-black w-96" />
//             </form>
//         </div>
//          <CategorySlide></CategorySlide>
            
//         </div>
//         </>
//     )
// }
// export default CardSearch;
