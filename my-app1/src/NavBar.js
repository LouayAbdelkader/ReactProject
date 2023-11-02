import React, { useState } from 'react';
import './App.css';
import louay from './Louay.jpg';

export default function NavBar() {
    const [darkMode, setDarkMode] = useState(false);

    function handleChange() {
        if (darkMode) {
            document.body.style.background = 'white';
            document.body.style.color = 'black';
        } else {
            document.body.style.background = '#424242';
            document.body.style.color = 'white';
        }
        setDarkMode(!darkMode);
    }

    return (
        <div>
            <nav>
                <div>
                    <img src={louay} alt="Louay" />
                    <span>Louay Abdelkader</span>
                </div>
                <div></div>
                <ul>
                    <a>Home</a>
                    <a>My Projects</a>
                    <a>Contact</a>
                    <div>
                        <i
                            className={`bi ${darkMode ? 'bi-brightness-high' : 'bi-moon-fill'}`}
                            onClick={handleChange}
                            id="bright"
                        ></i>
                    </div>
                </ul>
            </nav>
        </div>
    );
}
