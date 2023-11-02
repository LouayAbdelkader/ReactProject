import React from "react";
import "./App.css"; // Add a separate CSS file for the card styles

import louayImage from "./Louay2.jpg"; // Import your image


export default function Card() {
    return (
        <div className="card">
            <div className="avatar-container">
                <img src={louayImage} alt="Louay" className="avatar" />
            </div>
            <div className="content">
                <h2 className="name">About Me <i class="bi bi-search"></i></h2>
                <p className="description">
                    I'm Louay Abdelkader, a passionate developer who recently started exploring design and
                    photography. I enjoy combining my technical skills with creativity to
                    create engaging and user-friendly applications.
                </p>
            </div>
        </div>
    );
}
