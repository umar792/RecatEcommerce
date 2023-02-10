import React from 'react'
import { useAppContext } from '../Context/ProductContext';
import Allproducts from './Allproducts';

const MenShawl = () => {
  const {shawlProduct} = useAppContext()
  return (
   <>
   <Allproducts ProductsData={shawlProduct}/>
   </>
   
  )
}

export default MenShawl
