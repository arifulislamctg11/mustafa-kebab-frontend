import CategorySlide from "../CategorySlide/CategorySlide";

const CardSearch=()=>{
    return(
        <>
        <div className="lg:w-full w-full z-[50]  sticky h-20 top-0  shadow-xl  bg-white p-7">
        <div>
            <form >
            <input type="text" placeholder="Search  in Mustafa Kebab" className="input input-bordered  border border-black rounded-full md:w-1/2    text-black w-96" />
            </form>
        </div>
         <CategorySlide></CategorySlide>
            
        </div>
        </>
    )
}
export default CardSearch;