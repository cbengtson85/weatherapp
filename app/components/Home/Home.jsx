'use strict'

import React from 'react';
import ReactDOM from 'react-dom';

import AppWrapper from 'app/components/AppWrapper'

class HomeContent extends React.Component {
    render() {
        return (
            <div>
                test
            </div>
        )
    }
}

let Home = AppWrapper(HomeContent);

export default Home;
