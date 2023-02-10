
const CardReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CARD":
      let { id, count, title, price, imgsrc ,stock} = action.payload;
      let CardProduct;
      CardProduct = {
        id, count, title, price, imgsrc,stock
      }


  let exictingProduct = state.card.find((curElem) => curElem.id === id);
  
   if(exictingProduct){
    let updateexictingProduct = state.card.map((curElem)=>{
      if(curElem.id === id){
        let newamount = curElem.count + count;
        if(newamount >= curElem.stock){
          newamount = curElem.stock
        }
        return{
          ...curElem,
          count : newamount,
          id : id,
        }
      }else{
        return curElem;
      }
    })
    return {
      card: updateexictingProduct,
      id: id,
      
     
    }
  }else{
    return {
      card: [...state.card, CardProduct],
      counter : count,
      id: id,
      
    }
   }

      
      
      case "REMOVE_ITEM" :
        let updateCard = state.card.filter((curElem)=>{
          return curElem.id !== action.payload;
        })
        return{
          ...state,
          card : updateCard,
        }

        // ========= SET_DECREASE
        case "SET_DECREASE" : 
        let updateViewCardProductdecrease = state.card.map((curElem)=>{
          if(curElem.id === action.payload){
            let deCount =curElem.count -1 ;
            if(deCount <= 1){
              deCount =1
            }
            
            return{
              ...curElem,
              count : deCount,
            }
          }else{
            return curElem;
          }
        })
        return{
          ...state,
          card : updateViewCardProductdecrease,
        }
        // ========= SET_INCREASE
        case "SET_INCREASE" : 
        let updateViewCardProductincrease = state.card.map((curElem)=>{
          if(curElem.id === action.payload){
            let increCount =curElem.count ++;
            if(increCount >= curElem.stock){
              increCount = curElem.stock;
            }
            return{
              ...curElem,
              count : increCount,
            }
          }else{
            return curElem;
          }
        })
        return{
          ...state,
          card : updateViewCardProductincrease,
        }


        


       
          


    default:
      return state;
  }
}

export default CardReducer;
