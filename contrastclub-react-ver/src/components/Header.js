import React from 'react';

export default function Header() {
    return (
        // logo image and a horizontal line for header
        <div className="header-container">
            <div className="logo-container">
                <a href="https://thecontrastclub.com">
                    <img src="https://thecontrastclub.com/wp-content/uploads/2024/01/PNG800transparent.png" className="logo" alt="Contrast Club company logo" />
                </a>
            </div>
                <div className="horizontal-line"></div>
        </div>
    );
}