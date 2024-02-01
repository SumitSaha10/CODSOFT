import React from 'react'
import './About.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import sumit from '../assets/sumit.jpg'
const About = () => {
    AOS.init({
        offset: 200,
        duration: 800
    });
    return (
        <div className='about' data-aos='fade-up' id='about'>
            <div className="aboutTitle"><i className="fa-regular fa-address-card"></i>About Me</div>
            <div className="aboutBox">
                <div className="mainpic">
                    <img src={sumit} alt="" />
                </div>
                <div className="maininfo">
                    <div className='aboutName'>I'm Sumit Saha</div>
                    <div className='aboutRole'>Fullstack Developer</div>
                    <div className='aboutDescription'>Enthusiastic web developer committed to crafting seamless digital experiences. Proficient in MERN Stack, I specialize in turning ideas into responsive and user-friendly websites. With a keen eye for design and a passion for innovation, I bring a collaborative mindset to every project. Let's code something amazing together!</div>
                    <div className='aboutEmail'>Email: sumitsaha1233@gmail.com</div>
                    <div className='aboutBtns'>
                        <a href="#contact" className='aboutContact'>Contact<i className="fa-regular fa-address-book"></i></a>
                        <a href="https://drive.google.com/file/d/1XRvc5WIJwLEP6dBioNcV6t30n4VUEYCo/view?usp=sharing" target='_' className='aboutResume'>Resume<i className="fa-solid fa-file"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
