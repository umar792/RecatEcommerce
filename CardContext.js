import { createContext, useContext, useReducer } from "react";
import reducer from "../Reducer/CardReducer";

const Cardcontext = createContext();
const initialsatate ={
    card : [],
    subTotal : "",
    counter : "",
    id: ""
}


const CardProvider = ({children}) => {
 const [state , dispatch] = useReducer(reducer , initialsatate);

//  ==================== addtoCard

const addtoCard =(id, count, title,price,imgsrc,stock)=>{
    dispatch({type : "ADD_TO_CARD" , payload: {id, count, title,price,imgsrc,stock}})
}

// ========================removeItem

const removeItem = (id) =>{
    dispatch({type : "REMOVE_ITEM" , payload : id})
}

// =================== Decrease

const Decrease = (id)=>{
dispatch({type : "SET_DECREASE", payload: id})
  
}
const Increase = (id)=>{
    dispatch({type : "SET_INCREASE", payload: id})
}

    return <Cardcontext.Provider value={{...state,addtoCard,removeItem,Decrease,Increase}}>{children}</Cardcontext.Provider>
}

const UseCradContext = () =>{
    return useContext(Cardcontext)
}

export {Cardcontext,UseCradContext,CardProvider}