import axios from "axios";

  const axiosPrivate=axios.create({
    baseURL: 'https://my-json-server.typicode.com/arifulislamctg11/mustafakebab-fakeapis'
    // baseURL: import.meta.env.BASE_URL
    // baseURL:'http://localhost:8000',
  })
  const usePrivate=()=>{
    console.log(import.meta.env.BASE_URL)
    return axiosPrivate;
  }
  export default usePrivate;