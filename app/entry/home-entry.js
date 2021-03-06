'use strict'

import 'static/css/slick';
import 'static/css/styles';

import React from 'react';
import ReactDOM from 'react-dom';

if(process.env.NODE_ENV !== 'production') {
    let Perf = require('react-addons-perf');
    window.Perf = Perf;
}

import HomeRootContainer from 'app/components/Home';

ReactDOM.render(
    <HomeRootContainer />,
    document.getElementById('app')
 );
