


const Reducer = (state,action) => {
 switch(action.type){
  
    case "SET_API_DATA" : 
    let allFakeProduct = [...action.payload];
    const boski = allFakeProduct.filter((curElem)=>{
        return curElem.boski === true;
    })
    const washProduct = allFakeProduct.filter((curElem)=>{
        return curElem.wash === true;
    })
    const kurtaproducts = allFakeProduct.filter((curElem)=>{
        return curElem.kurta === true;
    })
    const shawlproducts = allFakeProduct.filter((curElem)=>{
        return curElem.shawl === true;
    })
    const cottonProduct = allFakeProduct.filter((curElem)=>{
        return curElem.cotton === true;
    })
    return{
        ...state,
        isLoading : true,
        isError : false,
        Allproductsdata : action.payload,
        boskiProduct : boski,
        washWearProduct : washProduct,
        kurtaProduct : kurtaproducts,
        shawlProduct : shawlproducts,
        cottonProduct : cottonProduct,
    }
    case "SET_SINGLE-PRODUCT" :
        return{
            ...state,
            SiingleProdctData : action.payload,
        }

    default :
    return state;
 }
 }


export default Reducer
