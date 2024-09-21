import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <div>
            <h2>Contact Us</h2>
            <div id="contact-card">
                <div id="form-map-container">
                    <div id="map">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.967853329414!2d88.35673631443349!3d22.54287693974334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02771f3cd33be1%3A0x8d62a4f2af7b1b41!2sLearning%20Spiral!5e0!3m2!1sen!2sin!4v1579588849829!5m2!1sen!2sin" 
                            frameBorder="0" 
                            allowFullScreen 
                            title="Google Map">
                        </iframe>
                    </div>

                    <form action="/submit_form" method="post">
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div>
                            <label htmlFor="phone">Phone Number:</label>
                            <input type="tel" id="phone" name="phone" required />
                        </div>
                        <div>
                            <label htmlFor="message">Your Message Here:</label>
                            <textarea id="message" name="message" rows="4" required></textarea>
                        </div>
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
