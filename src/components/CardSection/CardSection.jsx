
import datas from '../../../public/homejson.json'
import { BsExclamationCircle } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import CategorySlide from '../CategorySlide/CategorySlide';
import CardSearch from '../CardSearch/CardSearch';
const CardSection=()=>{
    console.log(datas)
    return(
        <>
        <div className=" ">
            {/* <CardSearch></CardSearch> */}
            {/* Cards */}
            <div className="">
                {
                    datas.map(data => <div key={data.category}>
                         <div>
                          <h1 className="font-bold text-xl ml-10">{data.category}</h1>
                          <div className="">
                      {
                        data.items.map(da =>    <div key={da.title} className="lg:p-6   lg:py-12 mt-5 lg:mr-72 w-screen lg:w-auto card   mb-5  bg-white border border-gray-300">
                          <div className="container mx- ">
                            <div className="flex  flex-row  justify-between lg:p-0 p-5 ">
                              <div>
                              <h2 className=" text-2xl tracking-tighter flex font-bold">{
                                da.title}
                                <span><BsExclamationCircle className=" lg:ml-2 text-xl md:-mt-1 text-black  " /></span>
                              </h2>
                              <p>{da.menu.ingredients}</p>
                              <p className="font-bold text-2xl">{da.price}zt</p>
                              </div>
                              <div className="space-x-2 text-center py-2  lg:py-0">
                              <FaPlus className="text-orange-500  rounded-full bg-white border border-gray-300 md:p-2 p-1 text-xl md:text-4xl" />
                              </div>
                            </div>
                          </div>
                        </div>)
                      }
                         </div>
                         </div>
                    </div>)
                }
            </div>
        </div>
        </>
    )
}
export default CardSection;