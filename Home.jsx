import React from 'react';
import Hero from './Hero';
import HomeMen from './HomeMen';
import "./Home.css";
import {BsArrowRight} from "react-icons/bs"

const Home = () => {
  return (
    <div>
      <Hero/>
      <HomeMen/>
      <div className='newsletter'>
        <h1>NEWSLETTERS</h1>
        <p>Subscribe our newsletter to get notify about discount and latest update. Don’t worry, we not spam!</p>
        <div className='newsletter-input' >
          <input type="text" placeholder='Enter your email here'/>
          <BsArrowRight style={{fontSize : "22px" , cursor : "pointer"}}/>
        </div>
      </div>
      

    </div>
  )
}

export default Home
