import React from 'react'
import './Skills.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import reactImage from '../assets/Reactjs.png'
import jsImage from '../assets/Javascript.png'
import htmlImage from '../assets/Html.png'
import cssImage from '../assets/Css.webp'
import javaImage from '../assets/Java.png'
import nodeImage from '../assets/Nodejs.png'
import reduxImage from '../assets/Reactjs.png'
import pythonImage from '../assets/Python.png'
import mongodbImage from '../assets/Mongodb.png'
import cImage from '../assets/C.png'
import sqlImage from '../assets/Sql.png'
import postmanImage from '../assets/Postman.png'
import thunderImage from '../assets/Thunder.png'
import tailwindImage from '../assets/Tailwind.png'
import typescriptImage from '../assets/Typescript.png'
import gitImage from '../assets/Git.png'
import githubImage from '../assets/Github.png'
import nextImage from '../assets/Next.png'

const Skills = () => {
    AOS.init({
        offset: 200,
        duration: 800
    });
    return (
        <div className='skills' data-aos='fade-down' id='skills'>
            <div className="skillsHeading">
                <i className="fa-solid fa-code"></i> My Skills
            </div>
            <div className="skillsGrid">
                <div className="skillsGridItems" data-aos='fade-right' data-aos-delay='100'>

                    <img src={reactImage} alt="" />
                    <p className="skillName">Reactjs</p>

                </div>
                <div className="skillsGridItems" data-aos='fade-right' data-aos-delay='200'>

                    <img src={jsImage} alt="" />
                    <p className="skillName">JavaScript</p>

                </div>
                <div className="skillsGridItems" data-aos='fade-right' data-aos-delay='300'>

                    <img src={htmlImage} alt="" />
                    <p className="skillName">HTML</p>

                </div>
                <div className="skillsGridItems" data-aos='fade-right' data-aos-delay='400'>

                    <img src={cssImage} alt="" />
                    <p className="skillName">CSS</p>

                </div>
                <div className="skillsGridItems" data-aos='fade-right' data-aos-delay='500'>

                    <img src={javaImage} alt="" />
                    <p className="skillName">Java</p>

                </div>
                <div className="skillsGridItems" data-aos='fade-right' data-aos-delay='600'>

                    <img src={nodeImage} alt="" />
                    <p className="skillName">Nodejs</p>

                </div>
                <div className="skillsGridItems" data-aos='fade-right' data-aos-delay='700'>

                    <img src={reduxImage} alt="" />
                    <p className="skillName">Reduxjs</p>

                </div>
                <div className="skillsGridItems" data-aos='fade-right' data-aos-delay='800'>

                    <img src={pythonImage} alt="" />
                    <p className="skillName">Python</p>

                </div>
                <div className="skillsGridItems" data-aos='fade-right' data-aos-delay='900'>

                    <img src={mongodbImage} alt="" />
                    <p className="skillName">MongoDB</p>

                </div>
                <div className="skillsGridItems" data-aos='fade-right' data-aos-delay='1000'>

                    <img src={cImage} alt="" />
                    <p className="skillName">C</p>

                </div>
                <div className="skillsGridItems" data-aos='fade-right' data-aos-delay='1100'>

                    <img src={sqlImage} alt="" />
                    <p className="skillName">SQL</p>

                </div>
                <div className="skillsGridItems" data-aos='fade-right' data-aos-delay='1200'>

                    <img src={postmanImage} alt="" />
                    <p className="skillName">Postman</p>

                </div>
                <div className="skillsGridItems" data-aos='fade-right' data-aos-delay='1300'>

                    <img src={thunderImage} alt="" />
                    <p className="skillName">ThunderClient</p>

                </div>
                <div className="skillsGridItems" data-aos='fade-right' data-aos-delay='1400'>

                    <img src={tailwindImage} alt="" />
                    <p className="skillName">TailwindCSS</p>

                </div>
                <div className="skillsGridItems" data-aos='fade-right' data-aos-delay='1500'>

                    <img src={typescriptImage} alt="" />
                    <p className="skillName">Typescript</p>

                </div>
                <div className="skillsGridItems" data-aos='fade-right' data-aos-delay='1600'>

                    <img src={gitImage} alt="" />
                    <p className="skillName">Git</p>

                </div>
                <div className="skillsGridItems" data-aos='fade-right' data-aos-delay='1700'>

                    <img src={githubImage} alt="" />
                    <p className="skillName">Github</p>

                </div>
                <div className="skillsGridItems" data-aos='fade-right' data-aos-delay='1700'>

                    <img src={nextImage} alt="" />
                    <p className="skillName">Nextjs</p>

                </div>
            </div>
        </div>
    )
}

export default Skills
