import React, { useState } from 'react';
import { MdOutlineCompareArrows } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import SidebarCard from './SidebarCard';
import { UseCradContext } from '../Context/CardContext';
import CardCounter from './CardCounter';


const SingleproductData = ({ title, price, imgsrc, stock, product, id }) => {
  const { addtoCard } = UseCradContext();
  const [sideCard, setSideCard] = useState(false);
  const [count, setCount] = useState(1)

  const increace = () => {
    if (count < stock) {

      setCount(count + 1)
    }
  }
  const decrease = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }
  const downsidebar = () => {
    setSideCard(!sideCard);
    addtoCard(id, count, title,price,imgsrc,stock,product);

  }
  return (
    <>
      <div className='singlrproduct blackBack'>
        <div className='singleimges'>
          <div className='bigimg'>
            <img src={imgsrc} alt="Loading Error" />

          </div>

        </div>
        <div className='singleproduct-conent'>
          <h2>{title}</h2>
          <p> {price}</p>
          {stock > 0 ? `Quanitity ${stock}` : "0 Quantity"}
          <div className='addtocard'>
           <CardCounter 
           amount={count}
           className={count}
           increace={increace}
           decrease={decrease}
           />
            {
              stock < 1 ? <button disabled  style={{opacity : ".3"}}  className="addtocard-btn" onClick={downsidebar}>
              By now
            </button> : <button  className="addtocard-btn " onClick={downsidebar}>
              By now
            </button> 
            }
            
              
              
           
          </div>
          <div className='add-icon'>
            <div className='icon1'>
              <AiOutlineHeart className='add-i' /> <span>ADD TO WISHLIST</span>
            </div>
            <div className='icon2'>
              <MdOutlineCompareArrows className='add-i' /> <span>COMPARE</span>
            </div>
          </div>
          <div className='Available'>
            Product :  {
              count < stock ? `in Stock` : "out of Stock"
            }
          </div>

        </div>
        <SidebarCard sideCard={sideCard} setSideCard={setSideCard} />
      </div>
    </>
  )
}

export default SingleproductData
