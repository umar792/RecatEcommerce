import React from 'react'
import { NavLink } from 'react-router-dom'

const ApicallData = ({link ,imgsrc,title }) => {
  return (
    <div>
      <NavLink to={link} style={{color : "black" , textDecoration : "none"}}>
                <img src={imgsrc} alt="Loading Error"/>
                <p className='text-title'>{title}</p>
                </NavLink>
    </div>
  )
}

export default ApicallData
