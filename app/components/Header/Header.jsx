'use strict'

import React from 'react';
import {MenuItems} from 'app/components/Header/Menu';
import {slideToggle} from 'app/functions';

const Header = (props) => {
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
                    <button type="button" className="menu-toggle" onClick={() => slideToggle('.mobile-navigation')}><i className="fa fa-bars"></i></button>
                    <MenuItems {...props} />
                </div>
                <div className="mobile-navigation">
                    <MenuItems {...props} />
                </div>
            </div>
        </header>
    )
};

export default Header;
