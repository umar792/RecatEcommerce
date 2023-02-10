import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/Reducer";
import axios from "axios";
 
const API = "http://localhost:3000/product";

const AppContext = createContext()

const initialstate ={
    isLoading:false,
    isError : false,
    Allproductsdata : [],
    boskiProduct: [],
    washWearProduct : [],
    kurtaProduct: [],
    shawlProduct : [],
    cottonProduct : [],
    karandiProduct : [],
    SiingleProdctData : [],
    SortingValue : "low"
}

const AppContextProvider = ({children})=>{
    const [state,dispatch] = useReducer(reducer,initialstate)
    const getApidata =async (url)=>{
      dispatch({type : "IS_LOASING"})
      try {
        let res = await axios.get(url);
        let products = await res.data;
        // let products = await url;
        dispatch({type : "SET_API_DATA" , payload: products})
      } catch (error) {
        dispatch({type : "IS_ERROR"})
        console.log("this is error" + error)
      }
      
    }

    
    // ==================== Singleproduct data

    const getSingleProduct =async (url) =>{
      dispatch({type : "IS_LOASING"})
      try {
        let res = await axios.get(url);
        let Singleproduct = await res.data;
        // let Singleproduct = await url;
        dispatch({type : "SET_SINGLE-PRODUCT" , payload: Singleproduct})
      } catch (error) {
        console.log("SinglePage Error is" + error);
      }
    }

    

    

    useEffect(()=>{
      getApidata(API)
    },[])
 return <AppContext.Provider value={{...state,getSingleProduct}}>{children}</AppContext.Provider>
}

const useAppContext = () =>{
    return useContext(AppContext)
}

export {AppContext,useAppContext,AppContextProvider}