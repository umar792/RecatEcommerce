import React from "react"

import { useAppContext } from '../Context/ProductContext';
import Allproducts from "./Allproducts";

const Kurta = () => {
  const {kurtaProduct} = useAppContext()
  return (
    <>
    <Allproducts  ProductsData={kurtaProduct}/>
      
    </>
  )
}

export default Kurta
