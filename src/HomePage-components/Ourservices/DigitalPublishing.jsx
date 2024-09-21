// src/DigitalPublishing.js
import React from 'react';
import './DigitalPublishing.css';
// import logo from '../../assets/logo-2-550x123-1.jpg';
import deImage from '../../assets/de1.jpg';
import BulletPoints from './BulletPoints';
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/footer';

const DigitalPublishing = () => {
    return (
        <div>
        <Navbar/><br></br>

            <div className="imagesection">
            <h1><p className="text-center"><b>Digital Publishing</b> Services Rooted in Effectiveness</p></h1>
                <img src={deImage} alt="Image Description" width="800" height="auto" />
                <p className="text-right1">We are proud to be one of India's leading Digital Publishing Solution 
                providers, consistently exceeding client expectations with a technology-driven approach. Our services 
                are innovative, fast, and error-free, grounded in effective, tested Internet marketing strategies. 
                We aim to help you build a sustainable, intuitive, results-driven online presence through our 
                comprehensive digital publishing solutions.</p>
            </div>

            <BulletPoints />

            
            <Footer/>

            
        </div>
        //    </div>
    );
};

export default DigitalPublishing;