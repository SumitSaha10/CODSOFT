import React, { } from 'react'
import './Navbar.css'
import logo from '../assets/Sumit.png';

const showMenu = () => {
    const menu = document.getElementById('menu')
    if (menu?.style.display === "none") {
        menu.style.display = "block"
    } else {
        menu.style.display = "none"
    }
}
const Navbar = () => {


    return (
        <div className='navbar'>
            <div className="logo">
                <img src={logo} />
                <i className="fa-solid fa-bars" onClick={showMenu}></i>
            </div>
            <div className="menus" id="menu">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
