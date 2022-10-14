import React from 'react'
import { useState } from 'react'
import {CgMenu, CgClose} from 'react-icons/cg'
import Logo from '../assets/logo.svg'
import Cart from '../assets/icon-cart.svg'
import Profile from '../assets/image-avatar.png'

const Navbar = () => {
  return (
    <div>
        <DesktopNav/>
        <MobileNav/>
    </div>
  )
}

const Navlinks = () =>{
    return(
        <div>
            <ul className='links'>
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

const DesktopNav = () =>{
    return(
        <div className='desktop'>
            <div className='logo'>
                <img src={Logo} alt="" />
            </div>

            <Navlinks/>
        </div>
    )
}

const MobileNav = () =>{
    const [toggle, setToggle] = useState(false)

    const handleToggle = ()=>{
        setToggle(!toggle)
    }

    const openMenu = <CgMenu onClick={handleToggle} className='menu' size={25}/>
    const closeMenu = <CgClose onClick={handleToggle} className='menu' size={25} />

    return(
        <div className='mobile'>
            <div className='left'>
                {toggle? closeMenu : openMenu}
                {toggle && <Navlinks/>}

                <div className='logo'>
                    <img src={Logo} alt="" />
                </div>
            </div>

            <div className='right'>
                <img className='cart' src={Cart} alt="Cart img" />
                <img className='profile' src={Profile} alt="Avatar img" />
            </div>
        </div>
    )
}

export default Navbar