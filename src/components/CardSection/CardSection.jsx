import { BsExclamationCircle } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import CardSearch from '../CardSearch/CardSearch';// Assuming this import is required
import { useQuery } from "@tanstack/react-query";
import usePublic from "../../hooks/usePublic";

import usePrivate from "../../hooks/usePrivate";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useGetAllOrdersMenu from "../../hooks/useGetAllOrdersMenu";

const CardSection = () => {
  const axiosPublic=usePublic()
  const axiosPrivate=usePrivate()
  const {refetch}=useGetAllOrdersMenu()
  // card menu data
  const { data: cardDataMenu} = useQuery({
    queryKey: ['cardMenu'],
    queryFn: async() =>{
      const cardData=await axiosPublic.get('/menu')

      console.log(cardData.data)
      return cardData.data;
    }      
  });

  // added Card Button and post added card data
  const handleCard=async(da)=>{
     const orderMenu={
      itemName:da.itemName,
      orderItemId:da._id,
      category:da.category,
      description: da.description,
      price: parseInt(da.price),
      createdAt:new Date(),
     }
     const menuOrder=await axiosPrivate.post('/ordersMenu',orderMenu)
     console.log(menuOrder.data)
     if(menuOrder?.data?.insertedId){
       refetch()
       toast(`${da.itemName} is added`)
     }
  }

  return (
    <>
      <div>
        <CardSearch />
        <div className="mt-20">
              <div className="">
                {cardDataMenu?.map(da => (
                   <div key={da._id}>
                    <h1  className="font-bold text-xl ml-10 uppercase">{da.category}</h1>
                  <div onClick={() =>handleCard(da)} className="lg:p-6 lg:py-12 mt-5 lg:mr-72 w-screen lg:w-auto card mb-5 lg:ml-10 bg-white border border-gray-300">
                    <div className="container mx-auto">
                      <div className="flex flex-row justify-between lg:p-0 p-5">
                        <div>
                          <h2 className="text-2xl tracking-tighter font-bold flex">
                            {da.itemName}
                            <span><BsExclamationCircle className="lg:ml-2 ml-3 text-xl md:-mt-1 text-black" /></span>
                          </h2>
                          {/* <p>{da}</p> */}
                          <p className="font-bold text-2xl">{da.price}zt</p>
                        </div>
                        <div className="space-x-2 text-center py-2 lg:py-0">
                          <FaPlus className="btn text-orange-500 rounded-full bg-white border border-gray-300 md:p-2 p-1 text-xl md:text-4xl" />
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                ))}
              </div>
            
        </div>
      </div>
              <ToastContainer />
    </>
  );
};

export default CardSection;
