'use strict'

import 'static/css/slick.css';
import 'static/css/styles.css';

import React from 'react';
import ReactDOM from 'react-dom';

if(process.env.NODE_ENV !== 'production') {
    let Perf = require('react-addons-perf');
    window.Perf = Perf;
}

import HomeRootContainer from 'app/components/Home';

ReactDOM.render(
    <HomeRootContainer />,
    $('#app').get(0)
 );
