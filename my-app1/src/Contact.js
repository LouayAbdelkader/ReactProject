import React, { useEffect, useState } from 'react';
import './App.css'; // Import your CSS file for styling

export default function Contact() {
    const [isVi, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector('.contact-container');
            if (element) {
                const rect = element.getBoundingClientRect();
                setIsVisible(rect.top < window.innerHeight && rect.bottom >= 0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`contact-container ${isVi ? 'active' : ''}`}>
            <h1>Contact Us</h1>
            <form className="contact-form">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name" />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Your Email" />

                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Your Message"></textarea>
                <br></br>
                <button type="submit" className="button" id='button'>
                    <p>Submit</p>
                </button>
            </form>
        </div>
    );
}
