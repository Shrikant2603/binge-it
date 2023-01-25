import React from 'react'
import './Header.css'
import logo from './logobi.png'
const Header = ()=> {
  return (
    <div className='header'>
        {/* <span className='header' onClick={()=> window.scroll(0,0)}>Binge - It</span> */}
        <img className='logo' onClick={()=> window.scroll(0,0)} src={logo} alt="Binge-it" />
    </div>
  )
}

export default Header