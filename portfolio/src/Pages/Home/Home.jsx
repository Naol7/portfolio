import React from "react";
import './Home.css';
import naol from '../../assets/d.webp'; // Import the image

const Home = () => {
    return ( 
        <section id="home" className="home">
            <div className="home-text-wrapper">
                <h1>Hi, I am Naol <br />
                A passionate Software Developer.
                </h1>
            </div>
            <div className="profile">
                <img src={naol} alt="pic" /> {/* Use the imported image */}
            </div>
        </section>
     );
}
 
export default Home;
