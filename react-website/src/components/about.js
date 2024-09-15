import React from 'react'
import pic from '../assets/pic.png';
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';

const About = () => {
    return (
        <section className="aboutContainer" id="about">
            <h2 className="aboutTitle">About Me</h2>
            <div className="aboutContent">
                <img src={pic} alt="image" className="aboutPic" />
                <ul className="aboutItems">
                    <li className="item">
                        <img src={icon1} alt="image" className="icons"/>
                        <div className="aboutText">
                            <h3>Programmer</h3>
                            <p>I’m a dedicated programmer with a knack for solving complex problems through innovative coding solutions. 
                            With expertise in C++, I build efficient, scalable, and reliable software that meets the unique needs of each project.
                            </p>
                        </div>
                    </li>
                    <li className="item"> 
                        <img src={icon2} alt="image" className="icons"/>
                        <div className="aboutText">
                            <h3>Website Designer</h3>
                            <p>I design websites that are both beautiful and easy to use. I focus on making sure your site looks great and works on all devices.
                            </p>
                        </div>
                    </li>
                    <li className="item"> 
                        <img src={icon3} alt="image" className="icons"/>
                        <div className="aboutText">
                            <h3>UX/UI Designer</h3>
                            <p>I’m a UX/UI designer who creates user-friendly and visually appealing designs. 
                                I focus on making sure your website or app is easy to navigate and looks great. 
                                My goal is to improve user experiences and make your digital products shine. . 
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default About;