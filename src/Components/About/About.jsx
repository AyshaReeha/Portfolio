
import React from 'react'
import './About.css'
import theme from '../../assets/theme_pattern.svg'
import profile from '../../assets/profilefull.jpeg'
const About = () => {
    return (
        <div id='about' className='about'>
            <div className='about-title'>
                <h1>About me</h1>

            </div>
            <div className='about-sections'>
                <div className='about-left'>
                    <img src={profile} alt=""></img>
                </div>
                <div className='about-right'>
                    <div className='about-para'>
                        <p>I’m Aysha Reeha E.V, a third-year Computer Science undergraduate at Rajiv Gandhi Institute of Technology, Kottayam. With a passion for web development , problem-solving, and creative design to bring ideas to life through technology.

                        </p>
                        <p>I specialize in building responsive and dynamic web applications using HTML, CSS, JavaScript, React.js with a keen eye for creating user-friendly experiences that are both functional and visually engaging.

                        </p>
                        <p>
                            In addition to my technical skills, I’m a quick learner, a collaborative team player, and someone who thrives on tackling new challenges with a strong academic background.
                        </p>
                    </div>


                </div>
            </div>
            <div className="about-education">
                <h2>Education</h2>
                <div className="education-timeline">

                    <div className="education-item">
                        <div className="edu-dot" />
                        <div className="edu-content">
                            <h3>Irshad English School</h3>
                            <span className="edu-period">2019 - 2020</span>
                            <p> 10th grade</p>
                            <p><strong>Percentage:</strong> 94.4%</p>
                            
                        </div>
                    </div>

                    <div className="education-item">
                        <div className="edu-dot" />
                        <div className="edu-content">
                            <h3>PCNGHSS Mokkuthala</h3>
                            <span className="edu-period">2020-2022</span>
                            <p>12th grade </p>
                            <p><strong>Percentage:</strong> 99%</p>
                            
                        </div>
                    </div>
                    <div className="education-item">
                        <div className="edu-dot" />
                        <div className="edu-content">
                            <h3>Rajiv Gandhi Institute of Technology, Kottayam</h3>
                            <span className="edu-period">2022 - Present</span>
                            <p>Bachelor of Technology in Computer Science</p>
                            <p><strong>CGPA:</strong>9.42 (upto 6th semester)</p>
                            <p><strong>University:</strong> APJ Abdul Kalam Technological University</p>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}
export default About