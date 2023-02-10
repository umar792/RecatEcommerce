import React from 'react';
import "./BillingData.css";

const BillingData = () => {
  return (
    <>
      <div className='billing'>

        <div className='left-bill-data'>
            <h2>Billing details</h2>
         <form className='form-inputs'>
          <div className='username'>
            <div>
                <label htmlFor="fname">First name *</label>
                <input type="text" id='fname'/>
            </div>
            <div>
                <label htmlFor="lname">Last name *</label>
                <input type="text" id='lname'/>
            </div>
          </div>
          <div>
                <label htmlFor="Company">Company name (optional)</label>
                <input type="text" id='Company'/>
            </div>
          <div>
                <label htmlFor="Street">Street address *</label>
                <input type="text" id='Street' placeholder='House number and street name'/>
            </div>
          <div>
                <input type="text" id='Street' placeholder='Apartment, suite, unit ,etc (optional)'/>
            </div>
          <div>
                <label htmlFor="Town">Town / City *</label>
                <input type="text" id='Town'/>
            </div>
          <div>
                <label htmlFor="State">State / County *</label>
                <input type="text" id='State'/>
            </div>
          <div>
                <label htmlFor="Postcode">Postcode / ZIP *</label>
                <input type="text" id='Postcode'/>
            </div>
          <div>
                <label htmlFor="Phone">Phone *</label>
                <input type="number" id='Phone'/>
            </div>
          <div>
                <label htmlFor="Email">Email address *</label>
                <input type="email" id='Email'/>
            </div>
         </form>
        </div>
        <div className='right-bill-data'>
         <h2>Your order</h2>
         <div className='total'>
            <p>Product</p>
            <p>Subtotal</p>
         </div>
         <div className='total'>
            <p>Chocolate - L, Blue  × 2</p>
            <p>4,400.00₨</p>
         </div>
         <div className='total'>
            <p>Subtotal</p>
            <p>4,400.00₨</p>
         </div>
         <div className='total'>
            <p>Total</p>
            <h3>4,400.00₨</h3>
         </div>
         <div className='discription'>
         <p>Cash on delivery </p>
         <p>Pay with cash upon delivery. </p>
         <p className='dis'>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
         </div>
         <button className='viecard'>
            PLACE ORDER
         </button>
        </div>
      </div>
    </>
  )
}

export default BillingData
