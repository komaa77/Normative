import React from 'react'
import svg from '../assets/Component.svg'
import svg1 from '../assets/Heart.svg'
import svg2 from '../assets/Buy.svg'



const Navbar = () => {
    return (
        <div className='header-box'>
            <div className="logo">
                <p className="logo__text">Exclusive</p>
            </div>

            <nav className="navbar">
                <ul className="menu">
                    <li><a href="#" className="active">Home</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="sign.html">Sign Up</a></li>
                </ul>
            </nav>
            <div className="search">
                <input type="text" placeholder="What are you looking for?"/>
                   <button className="search__button">
                        <img src={svg} alt="search icon"/>
                    </button>
            </div>
            <div className='icons'>
                <img src={svg1} alt="heart icon" />
                <img src={svg2} alt="buy icon" />
            </div>
        </div>
    );
};

export default Navbar