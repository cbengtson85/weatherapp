'use strict'

import React from 'react';
import PropTypes from 'prop-types';

import AppWrapper from 'app/components/AppWrapper';
import {LocationSearchContainer} from 'app/components/Home/Location';
import {WeatherContainer} from 'app/components/Home/Weather';

class HomeContent extends React.Component {
    render() {
        let weatherCoordinates;
        if(this.props.params.search == undefined || this.props.params.search == '')
            weatherCoordinates = null;
        else
            weatherCoordinates = this.props.params.search;
        return (
            <main className="main-content">
                <LocationSearchContainer />
                {weatherCoordinates != null && weatherCoordinates != undefined ? <WeatherContainer weatherCoordinates={weatherCoordinates} /> : ''}
            </main>
        )
    }
}

if(process.env.NODE_ENV !== 'production') {
    HomeContent.propTypes = {
        params : PropTypes.object
    };
}

let Home = AppWrapper(HomeContent, 'Home');

export default Home;
