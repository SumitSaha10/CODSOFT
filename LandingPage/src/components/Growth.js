import React from 'react'
import './Growth.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Growth = () => {
    AOS.init({
        offset: 200,
        duration: 1000
    })
    return (
        <div className='growth' id='growth' data-aos='fade-right'>
            <p>GROWTH & CONNECTIONS</p>
            <div className='growth-heading'>GROWING EVERY SINGLE DAY</div>
            <a href='growth-btn'>START</a>
        </div>
    )
}

export default Growth
