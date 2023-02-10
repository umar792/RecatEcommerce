import React  from 'react';
import { useAppContext } from '../Context/ProductContext';
import Allproducts from './Allproducts';

const Karandi = () => {
  const {karandiProduct} = useAppContext()
  return (
    <>
    <Allproducts  ProductsData={karandiProduct}/>
    </>
  )
}

export default Karandi
