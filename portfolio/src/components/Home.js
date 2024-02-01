import React from 'react'
import './Home.css'
import Typed from 'typed.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import pic from '../assets/mainpic.jpg'
const Home = () => {
    const el = React.useRef(null);
    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['FrontEnd Developer', 'BackEnd Developer', 'Web Developer'],
            typeSpeed: 100,
            backSpeed: 100,
            loop: true

        });
        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    })

    AOS.init({
        offset: 200,
        duration: 800
    });
    return (
        <div className='home' data-aos='fade-up' id='home'>
            <div className="content">

                <p className="greet">Hi There,</p>
                <p className="name">I'm <span>Sumit Saha</span></p>
                <p className="knowledge">I am into <span ref={el}></span></p>
                <a href="#about" className="btnhome">ABOUT ME</a>
                <div className="social">
                    <a href="https://www.linkedin.com/in/sumit-saha-393169222/" target='_'><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://github.com/SumitSaha10" target='_'><i className="fa-brands fa-square-github"></i></a>
                    <a href="https://www.instagram.com/sumitsaha641/" target='_'><i className="fa-brands fa-square-instagram"></i></a>
                </div>

            </div>
            <div className="photo">
                <div className="shape"></div>
                <img src={pic} />
            </div>
        </div>
    )
}

export default Home
