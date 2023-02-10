import React  from 'react'
import { useAppContext } from '../Context/ProductContext';
import Allproducts from './Allproducts';

const Washweasr = () => {
  const {washWearProduct} = useAppContext();
  return (
   <>
   <Allproducts ProductsData={washWearProduct} />
   </>
  )
}

export default Washweasr
