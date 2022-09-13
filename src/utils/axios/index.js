import axios from "axios";
import { FailHandler } from "./failHandler";
import { SuccessHandler } from "./successHandler";
export const instance = axios.create({
  baseURL: "http://localhost:8000/api/v1",
  headers:{
    Authorization: 'Bearer ' + localStorage.getItem("TOKEN"),
    "Content-Type": "form-data"
  }
});

instance.interceptors.request.use(
  function (config) {
  
   window.loading=true
    
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  async function (response) {
    //loading
   
   return Promise.resolve(SuccessHandler(response))
  },
  async function (error) {
   
    return await Promise.reject(FailHandler(error));
  }
);
