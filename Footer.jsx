import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='footer1'>
            <h5>Subscribe to receive Moren News</h5>
            <div className='footer-email'>
                <input type="email" placeholder='Email'/>
                <button type='submit'>Sign Up</button>
            </div>
        </div>
        <div className='footer2'>
           <h5>Help</h5>
         <div className='footer2-flex'>
          <p>Shipping</p>
          <p>Contact Us</p>
         </div>
          <p>Returns/Exchange</p>
        </div>
        <div className='footer3'>
            <h5>Explore</h5>
            <p>About Us</p>
            <p>About Us</p>
        </div>
        {/* ============= bottom footer  */}
       
      </div>
      <div className='bottom-footer'>
            <p>copyright 2022</p>
        </div>
    </>
  )
}

export default Footer
