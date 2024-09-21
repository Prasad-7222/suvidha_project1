import React, { useState, useEffect, useRef } from 'react';
import './slider.css'; 
import wa from '../../assets/Images/wa.png';
import img1final from "../../assets/Images/1final.png";
import img1rsm from "../../assets/Images/1rsm.png";
import img2final from "../../assets/Images/2final.png";
import img2rsm from "../../assets/Images/2rsm.png";
import img3final from "../../assets/Images/3final.png";
import img3rsmf from "../../assets/Images/3rsmf.png";
import img4final from "../../assets/Images/4final.png";
import img4rsmf from "../../assets/Images/4rsmf.png";

const SliderComponent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null); // useRef for referencing the slider element
    const images = [
        { large: img1final, small: img1rsm, alt: 'slide 1' },
        { large: img2final, small: img2rsm, alt: 'slide 2' },
        { large: img3final, small: img3rsmf, alt: 'slide 3' },
        { large: img4final, small: img4rsmf, alt: 'slide 4' }
    ];

    useEffect(() => {
        const slideInterval = 5000; // 5 seconds (adjust as needed)
        const slideTimer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
        }, slideInterval);

        return () => clearInterval(slideTimer);
    }, [images.length]);

    useEffect(() => {
        updateSliderPosition();
    }, [currentIndex]);

    const updateSliderPosition = () => {
        const slider = sliderRef.current;
        if (slider) {
            const width = slider.clientWidth;
            slider.style.transition = 'transform 1s ease-in-out';
            slider.style.transform = `translateX(-${currentIndex * width}px)`;
        }
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
    };

    return (
        <div className="slider-body">
            <div className="slider-container">
                <img src={wa} className="arrow left" alt="left arrow" onClick={prevSlide} />
                <div className="slider" ref={sliderRef}>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={window.innerWidth <= 695 ? image.small : image.large}
                            alt={image.alt}
                            className={`sliderimage ${index === currentIndex ? 'active' : ''}`}
                        />
                    ))}
                </div>
                <img src={wa} className="arrow right" alt="right arrow" onClick={nextSlide} />
            </div>
        </div>
    );
};

export default SliderComponent;
