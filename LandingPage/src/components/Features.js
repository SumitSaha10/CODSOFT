import React from 'react'
import './Features.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import htmlImage from '../Assets/html.png'
import cssImage from '../Assets/css.png'
import jsImage from '../Assets/js.png'
const Features = () => {
    AOS.init({
        offset: 200,
        duration: 800
    });
    return (
        <div className='features' id='feature' data-aos="fade-right">
            <div className='box box1'>
                <img src={htmlImage} />
                <div className='sub-features'>
                    <p>HTML</p>
                    <a href='#'>LEARN NOW</a>
                </div>
            </div>
            <div className='box box2'>
                <img src={cssImage} />
                <div className='sub-features'>
                    <p>CSS</p>
                    <a href='#'>LEARN NOW</a>
                </div>
            </div>
            <div className='box box3'>
                <img src={jsImage} />
                <div className='sub-features'>
                    <p>JAVASCRIPT</p>
                    <a href='#'>LEARN NOW</a>
                </div>
            </div>
        </div>
    )
}

export default Features
