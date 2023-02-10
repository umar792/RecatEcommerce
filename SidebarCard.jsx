import React from 'react';
import "./SidebarCard.css";
import { GiTireIronCross } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import { UseCradContext } from '../Context/CardContext';

const SidebarCard = ({ sideCard, setSideCard }) => {
  const { card,removeItem ,subTotal} = UseCradContext();

  return (
    <>
      <div className={sideCard ? 'sidearcard ' : "sidearcard sidebar-bottom"}>
        <div className='hide-side'>
          <h2>Shopping Cart</h2>
          <GiTireIronCross className="card-cross" onClick={() => setSideCard(!sideCard)} />
        </div>

        {
          card.map((curElem, index) => {
            return (
              <div className='sidecard-data' key={index}>
                <div className='image-table'>
                  <div style={{
                    display: "flex",
                  }}>

                    <img src={curElem.imgsrc} alt='loading error' />
                    <div className='card-flex'>
                      <p>{curElem.title}</p>
                      <p>{ (curElem.price) * (curElem.count)}Rs</p>
                     <p>Quantity: {curElem.count}</p>
                      
                    </div>
                  </div>
                  <GiTireIronCross className="remove-cross" onClick={()=> removeItem(curElem.id)}/>
                </div>

              </div>
            )
          })
        }
        <div className='subtotal'>
          <p>Subtotal:</p>
          <p>{subTotal}</p>
        </div>

        <div>
          <NavLink to="/viewcard">
            <button className='viecard'>
              View card
            </button>
          </NavLink>

        </div>
        <div>
          <NavLink to="/billing">
            <button className='checkout'>
              checkout
            </button>
          </NavLink>
        </div>
      </div>

    </>
  )
}

export default SidebarCard
