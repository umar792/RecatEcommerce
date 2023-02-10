import React from 'react';
import { useAppContext } from '../Context/ProductContext';
import Allproducts from './Allproducts';


const Boski = () => {
  const {boskiProduct} = useAppContext();
  return (
    <>
    <Allproducts ProductsData={boskiProduct}/>
    </>
  )
}

export default Boski
