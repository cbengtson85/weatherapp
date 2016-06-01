'use strict'

import React from 'react';

import Header from 'app/components/Header';
import {Footer} from 'app/components/Footer';

const AppWrapper = (Component, page) => class extends React.Component {
    render() {
        return (
            <div>
                <Header page={page} />
                <Component />
                <Footer />
            </div>
        )
    }
};

export default AppWrapper;
