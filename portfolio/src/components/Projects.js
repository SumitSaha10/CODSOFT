import React from 'react'
import './Projects.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ecommerceImage from '../assets/ecommerce.png'
import amazonImage from "../assets/amazon.png";
import spotifyImage from "../assets/spotify.jpg";
import weatherImage from "../assets/weather.jpg";
import mynotebookImage from '../assets/mynotebook.png'
import tictactoeImage from '../assets/tic.jpg'
const Projects = () => {
    AOS.init({
        offset: 200,
        duration: 800
    });
    return (
        <div className='projects' data-aos='fade-down' id='projects'>
            <div className="projectsHeading">
                <i className="fa-solid fa-laptop-code"></i> My Projects
            </div>
            <div className="projectsGrid">
                <div className="projectsGridItems" data-aos='fade-right' data-aos-delay="100">
                    <img src={ecommerceImage} alt="" />
                    <div className="showImageInfo">
                        <p> Ecommerce website incorporating sign-in, register, add to cart, purchase, payment processing via Stripe, an admin panel, and contact functionality using the MERN stack.</p>
                        <div className="shoImageInfoBtns">
                            <a href="https://ecommerce-ruddy-six.vercel.app/" target='_' className="showImageInfoBtn"><i className="fa-solid fa-laptop-code"></i>View</a>
                            <a href="https://github.com/SumitSaha10/EcommerceDeploy" target='_' className="showImageInfoBtn"><i className="fa-solid fa-code"></i>Code</a>
                        </div>
                    </div>
                    <p>Ecommerce</p>
                </div>
                <div className="projectsGridItems" data-aos='fade-right' data-aos-delay="200">
                    <img src={amazonImage} alt="" />
                    <div className="showImageInfo">
                        <p>Amazon clone featuring add to cart, buy now, sign-in, register, and payment processing using Stripe, among other functionalities using MERN stack.</p>
                        <div className="shoImageInfoBtns">
                            <a href="https://clone-cabff.web.app/" target='_' className="showImageInfoBtn"><i className="fa-solid fa-laptop-code"></i>View</a>
                            <a href="https://github.com/SumitSaha10/Amazon-Clone" target='_' className="showImageInfoBtn"><i className="fa-solid fa-code"></i>Code</a>
                        </div>
                    </div>
                    <p>Amazon Clone</p>
                </div>
                <div className="projectsGridItems" data-aos='fade-right' data-aos-delay="300">
                    <img src={spotifyImage} alt="" />
                    <div className="showImageInfo">
                        <p>Spotify clone with play, stop, next song, and previous song functionalities.</p>
                        <div className="shoImageInfoBtns">
                            <a href="https://sumitsaha10.github.io/Spotify---Clone/" target='_' className="showImageInfoBtn"><i className="fa-solid fa-laptop-code"></i>View</a>
                            <a href="https://github.com/SumitSaha10/Spotify---Clone" target='_' className="showImageInfoBtn"><i className="fa-solid fa-code"></i>Code</a>
                        </div>
                    </div>
                    <p>Spotify Clone</p>
                </div>
                <div className="projectsGridItems" data-aos='fade-right' data-aos-delay="400">
                    <img src={weatherImage} alt="" />
                    <div className="showImageInfo">
                        <p>Weather app that displays information such as temperature, humidity, wind speed, and feels-like conditions in various locations.</p>
                        <div className="shoImageInfoBtns">
                            <a href="https://sumitsaha10.github.io/Weather-App/" target='_' className="showImageInfoBtn"><i className="fa-solid fa-laptop-code"></i>View</a>
                            <a href="https://github.com/SumitSaha10/Weather-App" target='_' className="showImageInfoBtn"><i className="fa-solid fa-code"></i>Code</a>
                        </div>
                    </div>
                    <p>Weather App</p>
                </div>
                <div className="projectsGridItems" data-aos='fade-right' data-aos-delay="500">
                    <img src={mynotebookImage} alt="" />
                    <div className="showImageInfo">
                        <p>Task Manager app for organizing to-do tasks with functionalities including delete, update, sign-in, create user, and search.</p>
                        <div className="shoImageInfoBtns">
                            <a href="https://task-manager-9ca41.web.app/" target='_' className="showImageInfoBtn"><i className="fa-solid fa-laptop-code"></i>View</a>
                            <a href="https://github.com/SumitSaha10/Task-Manager" target='_' className="showImageInfoBtn"><i className="fa-solid fa-code"></i>Code</a>
                        </div>
                    </div>
                    <p>Task-Manager</p>
                </div>
                <div className="projectsGridItems" data-aos='fade-right' data-aos-delay="600">
                    <img src={tictactoeImage} alt="" />
                    <div className="showImageInfo">
                        <p>TicTacToe game with traditional game logic</p>
                        <div className="shoImageInfoBtns">
                            <a href="https://sumitsaha10.github.io/TicTacToe-Game/" target='_' className="showImageInfoBtn"><i className="fa-solid fa-laptop-code"></i>View</a>
                            <a href="https://github.com/SumitSaha10/TicTacToe-Game" target='_' className="showImageInfoBtn"><i className="fa-solid fa-code"></i>Code</a>
                        </div>
                    </div>
                    <p>TicTacToe Game</p>
                </div>
            </div>
        </div>
    )
}

export default Projects
