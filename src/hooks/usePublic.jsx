import axios from "axios";

  const axiosPublic=axios.create({
    baseURL:'https://my-json-server.typicode.com/arifulislamctg11/mustafakebab-fakeapis',
  })
  const usePublic=()=>{
    return axiosPublic;
  }
  export default usePublic;