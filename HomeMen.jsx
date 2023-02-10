import React from 'react'
import "./HomeMen.css"
import HomeMenDressing from './HomeMenDressing'

const HomeMen = () => {
  return (
    <>
    <div className='Home-men'>
        <div className='men-data'>
            <h2>MEN</h2>
            <p>COLLECTION 2022</p>
        </div>
        {/* =======================  */}
       
        <div className='men-flex'>
                <HomeMenDressing />
        </div>
       
    </div>
      
    </>
  )
}

export default HomeMen
