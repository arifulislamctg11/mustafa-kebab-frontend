import axios from "axios";

  const axiosPrivate=axios.create({
    baseURL:'http://localhost:8000',
  })
  const usePrivate=()=>{
    return axiosPrivate;
  }
  export default usePrivate;