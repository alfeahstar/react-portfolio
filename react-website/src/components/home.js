import React from 'react'
import bg from '../assets/bg4.png';
import { Link } from 'react-scroll';

const Home = () => {
    return(
        <section id="home">
            <div className="homeContents">
                <span className="intro">I'm <span className="introName">Alfeah Star Punzalan</span><br />Website Designer</span>
                <p className="desc">I'm a passionate website designer dedicated to crafting visually stunning <br/>and user-friendly digital experiences. </p>
                <button className="btn" onClick={()=>{document.getElementById('contact').scrollIntoView({behavior: 'smooth'});}}>Contact Me</button>
            </div>
            <img src={bg} alt="background" className="bg" />
        </section>
    )
}

export default Home;