'use strict'

import React from 'react';

import Header from 'app/components/Header';
import Footer from 'app/components/Footer';
import Home from 'app/components/Home';

let AppWrapper = Component => class extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Component />
                <Footer />
            </div>
        )
    }
}

export default AppWrapper;
