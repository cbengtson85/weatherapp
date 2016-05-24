'use strict'

import React from 'react';
import {SocialLinks} from 'app/components/Social'
import {SubscribeForm} from 'app/components/Forms'

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <SubscribeForm />
                    </div>
                    <div className="col-md-3 col-md-offset-1">
                        <SocialLinks />
                    </div>
                </div>

                <p className="colophon">Powered by <a href="http://forecast.io">Forecast.io</a></p>
            </div>
        </footer>
    )
};

export default Footer;
