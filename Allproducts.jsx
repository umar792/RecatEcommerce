import React, { useState } from 'react'
import './Allproducts.css';
import Categories from './Categories';
import {FaSearchPlus} from "react-icons/fa";
import {AiOutlineHeart,AiOutlineShoppingCart} from "react-icons/ai";
import { NavLink } from 'react-router-dom';

const Allproducts = ({ProductsData}) => {
  let productLenght= `${ProductsData.length}`
  const [productslen , setproducts] = useState(productLenght)
  return (
    <>
  <div>
      <div className='products-flex'>
     <div className='catage'>
     <Categories/>
     </div>
<div>
{
  productslen > 0 ? <div className='Allproducts' >
  {
    ProductsData.map((curElem,index)=>{
      
      return(
        <div key={index}>
        <NavLink to={`/singleproduct/${curElem.id}` }>
        <div className='Allproducts-grid' key={index}>
        <img src={curElem.imgsrc} style={{width :"100%", height:"85%"}} />
        <p className='title'>{curElem.titel}</p>
        <p className='price'>{curElem.price}</p>
        <div className='allp-icons'>
         <AiOutlineShoppingCart className='a-ocon' />
          <FaSearchPlus className='a-ocon' />
          <AiOutlineHeart  className='a-ocon'/>
        </div>
        </div>
        </NavLink>
        </div>
        
        )
      })
    }


    </div> : <p>No Products avalilable</p>
}
      </div>
    </div>
    </div>
    
    </>
  )
}

export default Allproducts
