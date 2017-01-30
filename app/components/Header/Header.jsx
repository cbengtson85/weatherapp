'use strict'

import React from 'react';
import {Link} from 'react-router';
import {SocialLinks} from 'app/components/Social';

const Header = () => {
    return (
        <header className="site-header">
            <div className="container">
                <Link to="/" className="branding">
                    <img src="/img/logo.png" alt="" className="logo" />
                    <div className="logo-type">
                        <h1 className="site-title">Give Me The Weather</h1>
                    </div>
                </Link>
                <div className="social-links-container">
                    <SocialLinks />
                </div>
            </div>
        </header>
    )
};

export default Header;
