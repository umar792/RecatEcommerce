import React from 'react'
import { NavLink } from 'react-router-dom';

const Categories = () => {
  return (
    <div className='category'>
      <h2>Categories</h2>
      <ul>
          <NavLink to='/'><li>Men</li> </NavLink>
          <NavLink to='/boski'><li>BOSKI</li> </NavLink>
          <NavLink to='/wash&wear'><li>WASH & WEAR</li> </NavLink>
          <NavLink to='/kurta'><li>KURTA</li> </NavLink>
          <NavLink to='/menshawl'><li>MEN SHAWL</li> </NavLink>
          <NavLink to='/cotton'><li>COTTON</li> </NavLink>
            <NavLink to='/karandi'><li>KARANDI</li> </NavLink>
      </ul>
    </div>
  )
}

export default Categories
