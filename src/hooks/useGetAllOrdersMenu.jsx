import { useQuery } from "@tanstack/react-query";
import usePrivate from "./usePrivate";

const useGetAllOrdersMenu=()=>{
    const axiosPrivate=usePrivate()
    const { data: addedCard , refetch} = useQuery({
        queryKey: ['addedCard'],
        queryFn: async() =>{
          const cardAdded=await axiosPrivate.get('/getAllOrdersMenu')
          return cardAdded.data ;
          
        }      
      });
      return {addedCard , refetch}
}
export default useGetAllOrdersMenu;