import React from 'react';
import Allproducts from './Allproducts';
import { useAppContext } from '../Context/ProductContext';

const Cotton = () => {
  const {cottonProduct} = useAppContext();
  return (
    <>
    <Allproducts ProductsData={cottonProduct}/>
    </>
  )
}

export default Cotton
