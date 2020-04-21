import React from 'react';
import "./header.css";
import logo from "../assets/nasa_logo.jpg"

const Header = ({ getAnchor, setData }) => {

   

    return (
        <header>
            <div className="logo">
                <img src = {logo} alt = "Nasa Logo" className="img_logo" />
                <h1>Nasa Space Photos of the Day</h1>
            </div>
        </header>
    );
};

export default Header;