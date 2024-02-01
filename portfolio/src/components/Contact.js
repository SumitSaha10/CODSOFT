import React from 'react'
import './Contact.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import contactImage from '../assets/Contactimage.png'
const Contact = () => {
    AOS.init({
        offset: 200,
        duration: 800
    });
    return (
        <div className='contact' id='contact'>
            <div className="contactHeading" data-aos='fade-down'>
                <i className="fa-solid fa-headphones-simple"></i>Get In Touch
            </div>
            <div className="contactSection">
                <img src={contactImage} alt="" data-aos='fade-right' />
                <div className="form">
                    <div className="fields" data-aos='fade-right' data-aos-delay='100'>
                        <i className="fa-solid fa-user"></i>
                        <input type="text" placeholder='Name' />
                    </div>
                    <div className="fields" data-aos='fade-right' data-aos-delay='200'>
                        <i className="fa-solid fa-envelope"></i>
                        <input type="text" placeholder='Email' />
                    </div>
                    <div className="fields" data-aos='fade-right' data-aos-delay='300'>
                        <i className="fa-solid fa-message"></i>
                        <textarea name="message" id="" cols="30" rows="10" placeholder='Enter Message Here'></textarea>
                    </div>
                    <div className="fields fieldsBtn" data-aos='fade-right' data-aos-delay='400'>
                        <button className='contactBtn'><i className="fa-regular fa-paper-plane"></i>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
