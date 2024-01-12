import React, { useEffect, useRef } from 'react'
import './Quote.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typed from 'typed.js';
const Quote = () => {
    const quote = useRef(null)
    useEffect(() => {
        const typed = new Typed(quote.current, {
            strings: ['CODE IS THE POETRY OF BETTER TOMMOROW.'],
            typeSpeed: 250,
            backSpeed: 250,
            startDelay: 3000,
            showCursor: false
        });
    })

    AOS.init({
        offset: 200,
        duration: 1000
    })
    return (
        <div className='quote' data-aos="fade-right">
            <div className='box'>
                <p className='small-text'>WHY CAPITUM?</p>
                <p className='big-text' ref={quote}></p>
            </div>

        </div>
    )
}

export default Quote
