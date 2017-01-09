'use strict'

import React from 'react';
import {SubscribeForm} from 'app/components/Footer';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <SubscribeForm />
                    </div>
                </div>

                <p className="colophon">Powered by <a href="http://forecast.io">Forecast.io</a></p>
                <p className="colophon">Free Website Templates by <a href="http://www.themezy.com">Themezy</a></p>
                <p className="colophon">Geo data powered by <a href="http://www.geonames.org/">geonames.org</a></p>
            </div>
        </footer>
    )
};

export default Footer;
