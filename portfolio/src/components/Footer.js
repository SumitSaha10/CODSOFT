import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footerInfo">
                <div className="footerHeading">Sumit's Portfolio</div>
                <p>Thank you for visiting my personal portfolio website. Connect with me over socials.</p>
            </div>
            <div className="quickLinks">
                <div className="footerHeading">Quick Links</div>
                <div className="footerQuickLinks">
                    <a href="#home"><i class="fa-solid fa-house"></i>Home</a>
                    <a href="#about"><i className="fa-regular fa-address-card"></i>About</a>
                    <a href="#skills"><i className="fa-solid fa-code"></i>Skills</a>
                    <a href="#projects"><i className="fa-solid fa-laptop-code"></i>Projects</a>
                    <a href="#contact"><i className="fa-solid fa-headphones-simple"></i>Contact Me</a>
                </div>
            </div>
            <div className="footerContact">
                <div className="footerHeading">Contact Me</div>
                <div className="contactInfo">
                    <i className="fa-solid fa-envelope"></i><p>sumitsaha1233@gmail.com</p>
                </div>
                <div className="contactInfo">
                    <i class="fa-solid fa-location-dot"></i><p>Siliguri,India</p>
                </div>
                <div className="contactSocialLinks">
                    <a href="https://www.linkedin.com/in/sumit-saha-393169222/" target='_'><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://github.com/SumitSaha10" target='_'><i className="fa-brands fa-square-github"></i></a>
                    <a href="https://www.instagram.com/sumitsaha641/" target='_'><i className="fa-brands fa-square-instagram"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Footer
