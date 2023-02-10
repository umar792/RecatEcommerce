import React, { useState } from 'react'
import TopHeader from './TopHeader'
import {AiOutlineSearch,AiOutlineInstagram,AiOutlineShoppingCart} from "react-icons/ai";
import {FaFacebookF} from "react-icons/fa";
import {TfiMenuAlt} from "react-icons/tfi"
import Sidebar from './Sidebar';
import { NavLink } from 'react-router-dom';



const Header = () => {
  const [togglemenu, setTogglemenu] = useState(false);
  const [navebar,setNavebar] = useState(false);
  const chnageBackground = () =>{
    if(window.scrollY > 0){
      setNavebar(true)
    }else{
      setNavebar(false)
    }
  }
window.addEventListener("scroll" , chnageBackground)
  
  return (
    <>
      <TopHeader/>
      <nav className={navebar ? 'header headerBackgrund' : "header"}>
        {/* ===================== left-header  */}
        <div className='left-header'>
          <span>Menu</span>
          <TfiMenuAlt className='menu-icon' onClick={()=> setTogglemenu(!togglemenu)}/>
        </div>
        {/* =============== middle-header  */}
        <div className='middle-header'>
        <NavLink to="/">
        <img src='https://binyousaf.pk/wp-content/uploads/2022/11/logo.png' alt='Loading Error'/>
        </NavLink>
        </div>
        {/* ================== right-header  */}
        <div className='right-header'>
          <AiOutlineSearch className='right-icon'/>
          <AiOutlineShoppingCart className='right-icon'/>
          <FaFacebookF className='right-icon'/>
          <AiOutlineInstagram className='right-icon'/>
        </div>
      </nav>
      <Sidebar togglemenu={togglemenu} setTogglemenu={setTogglemenu}/>
    </>
  )
}

export default Header
