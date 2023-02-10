import React,{useState} from 'react';
import "./ViewCard.css";
import {GiTireIronCross} from "react-icons/gi"
import { NavLink } from 'react-router-dom';
import { UseCradContext } from '../Context/CardContext';
import CardCounter from './CardCounter';
const bold = {
    fontWeight: "bold"
}

const ViewCard = () => {
  
  const {card,removeItem,subTotal,id,Decrease,Increase} = UseCradContext();
   
  return (
    <>
    <div className='viewcard'>
        <div className='left-view-card'>
        <div className='first-img-data'>
        <div className='data-name data-name-boder'>
           <div className='left-data-name'>
           {/* <img src=''/> */}
           <p>Product</p>
           </div>
           <div className='right-name-data'>
           <p style={bold}>Price</p>
            <p style={bold}>Quantity</p>
            <p style={bold}>Subtotal</p>
           </div>
        </div>
        {
          card.map((curElem,index)=>{
           
            return(
              <div className='with-image-data' key={index}>
              <div className='data-name'>
                 <div className='left-data-name'>
                  <GiTireIronCross className='remove-icon-left' onClick={()=> removeItem(curElem.id)}/>
                 <img src={curElem.imgsrc}/>
                 <p>{curElem.title}</p>
                 </div>
                 <div className='right-name-data'>        
                  <p>{curElem.price}</p>
                  <div className='counter'>
                  <CardCounter 
                   className="counter"
                   amount={curElem.count}
                   decrease={()=> Decrease(curElem.id)}
                   increace = {()=> Increase(curElem.id)}
                   />
                </div>
                <p>{curElem.count * curElem.price}Rs</p> 
                
                 </div>
              </div>
              </div>
            )
          })
        }
       
        </div>


        {/* ====================== at with 764px  */}
        {
          card.map((curElem , index)=>{
            return(
              <div className='second-img-data' key={index}>
              <div className='leftdata'>
                  <div>
                  <GiTireIronCross className='remove-icon-left'/>
                  <img src={curElem.imgsrc}/>
                  
                  </div>
                  <div>
                  <p style={bold}>{curElem.title}</p>
                  <div className='total'>
                      <div>
                          <p>Quantity</p>
                      </div>
                      <div className='flex-data'>
                      <CardCounter 
                   className="counter"
                   amount={curElem.count}
                   decrease={()=> Decrease(curElem.id)}
                   increace = {()=> Increase(curElem.id)}
                   />
                      </div>
                  </div>
                  <div className='total'>
                      <p>Subtotal</p>
                      <p>{curElem.count * curElem.price}Rs</p>
                  </div>
                  </div>
              </div>
          </div>
            )
          })
        }
       
        </div>
        
       
        
        {/* ============ */}
        <div className='right-view-card'>
          <div className='right-card-content'>
          <p style={bold}>Cart totals</p>
            <div className='subtotal'>
                <p>Subtotal</p>
                <p>{subTotal}</p>
            </div>
            <div className='total'>
                <p>Total</p>
                <p>6,600.00₨</p>
            </div>
          </div>
          <NavLink to="/billing">
            <button className='checkout'>
              PROCEED TO CHECKOUT  
            </button>
            </NavLink>
        </div>
    </div>
      
    </>
  )
}

export default ViewCard
