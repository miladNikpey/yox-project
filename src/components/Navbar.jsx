import React from 'react'
import style from './Navbar.module.scss'
import Logo from '../assets/images/Logo.png'

const Navbar = () => {
  return (
    <div className={style.NavbarHandle}>
        <div className={Logo}>
        <img src={Logo}/>
        </div>
        <div>
            <input type="text" />
        </div>

      
        
        
        
        </div>
  )
}

export default Navbar