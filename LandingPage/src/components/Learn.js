import React from 'react'
import './Learn.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Learn = () => {
    AOS.init({
        offset: 200,
        duration: 1000
    })
    return (
        <div className='learn' id='learn' data-aos='fade-right'>
            <div className='learn-box' >
                <p>THE SOLUTION</p>
                <div className='learn-box-heading'>
                    IT’S TIME TO TAKE BACK CONTROL
                </div>
                <div className='learn-box-description'>
                    In the world of coding, there are no problems, only solutions. Every line of code is a step towards progress and innovation.
                </div>
                <div>
                    <a className='learn-box-btn'>
                        LEARN ABOUT CAPITUM
                    </a>
                </div>
            </div>
            <iframe src="https://giphy.com/embed/xT9IgzoKnwFNmISR8I" width="480" height="429" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        </div>
    )
}

export default Learn
