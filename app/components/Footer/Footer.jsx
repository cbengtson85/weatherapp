'use strict'

import React from 'react';
import {SocialLinks} from 'app/components/Social'

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <form action="#" className="subscribe-form">
                            <input type="text" placeholder="Enter your email to subscribe..." />
                            <input type="submit" value="Subscribe" />
                        </form>
                    </div>
                    <div className="col-md-3 col-md-offset-1">
                        <SocialLinks />
                    </div>
                </div>

                <p className="colophon">Copyright 2014 Company name. Designed by Themezy. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer;
