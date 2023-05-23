import React from 'react';
import '../styles/Footer.css';
import facebook from '../img/icons/facebook.png';
import instagram from '../img/icons/instagram.png';
import youtube from '../img/icons/youtube.png';

export const Footer = () =>{
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                <div className="footer-links">
                    <ul className="footer-menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-social">
                    {/* Add your social media icons and links */}
                    <a href="https://facebook.com/ScholarFinder" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"><img src={facebook} alt='-'></img></i>
                    </a>
                    <a href="https://facebook.com/ScholarFinder" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"><img src={youtube} alt='-'></img></i>
                    </a>
                    <a href="https://instagram.com/ScholarFinder" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"><img src={instagram} alt='-'></img></i>
                    </a>
                </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
            </div>
    </footer>
  )
}
