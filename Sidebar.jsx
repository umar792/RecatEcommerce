import React from 'react'
import {GiTireIronCross} from "react-icons/gi"
import { NavLink } from 'react-router-dom';
import "./Sidebar.css";

const Sidebar = ({togglemenu, setTogglemenu}) => {
  return (
    <>
      <div className={togglemenu ? "sidebar" : "sidebar mobile"}>
        <div className='sidebar-cross'>
          <p>Menu</p>
        <GiTireIronCross className='cross'  onClick={()=> setTogglemenu(!togglemenu)} />
        </div>
        <div>
            <ul className='sidebar-menus'>
                <NavLink  onClick={()=> setTogglemenu(!togglemenu)} to='/boski'><li>BOSKI</li> </NavLink>
                <NavLink onClick={()=> setTogglemenu(!togglemenu)}  to='/wash&wear'><li>WASH & WEAR</li> </NavLink>
                <NavLink onClick={()=> setTogglemenu(!togglemenu)}  to='/kurta'><li>KURTA</li> </NavLink>
                <NavLink onClick={()=> setTogglemenu(!togglemenu)}  to='/menshawl'><li>MEN SHAWL</li> </NavLink>
                <NavLink  onClick={()=> setTogglemenu(!togglemenu)} to='/cotton'><li>COTTON</li> </NavLink>
                <NavLink onClick={()=> setTogglemenu(!togglemenu)}  to='/karandi'><li>KARANDI</li> </NavLink>
            </ul>
        </div>
      </div>
    </>
  )
}

export default Sidebar
