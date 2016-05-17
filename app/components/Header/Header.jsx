'use strict'

import React from 'react';

const Header = () => {
    let slideToggle = () => {
        $('.mobile-navigation').slideToggle();
    }
    return (
        <header className="site-header">
            <div className="container">
                <a href="index.html" className="branding">
                    <img src="/img/logo.png" alt="" className="logo" />
                    <div className="logo-type">
                        <h1 className="site-title">Company name</h1>
                        <small className="site-description">tagline goes here</small>
                    </div>
                </a>
                <div className="main-navigation">
                    <button type="button" className="menu-toggle" onClick={slideToggle}><i className="fa fa-bars"></i></button>
                    <ul className="menu">
                        <li className="menu-item current-menu-item"><a href="index.html">Home</a></li>
                        <li className="menu-item"><a href="news.html">News</a></li>
                        <li className="menu-item"><a href="live-cameras.html">Live cameras</a></li>
                        <li className="menu-item"><a href="photos.html">Photos</a></li>
                        <li className="menu-item"><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <div className="mobile-navigation">
                    <ul className="menu">
                        <li className="menu-item current-menu-item"><a href="index.html">Home</a></li>
                        <li className="menu-item"><a href="news.html">News</a></li>
                        <li className="menu-item"><a href="live-cameras.html">Live cameras</a></li>
                        <li className="menu-item"><a href="photos.html">Photos</a></li>
                        <li className="menu-item"><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;
