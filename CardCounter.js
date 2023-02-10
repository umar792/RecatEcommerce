import React from 'react'
import "./Singleproduct.css";

const CardCounter = ({decrease,increace,amount}) => {
  return (
    <>
       <div className='count'>
              <button className='count-btn' onClick={decrease} >-</button>
              <p>{amount}</p>
              <button className='count-btn' onClick={increace}>+</button>
            </div>
    </>
  )
}

export default CardCounter
