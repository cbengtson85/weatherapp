'use strict'

import React from 'react';
import {Route} from 'react-router';

import AppWrapper from 'app/components/AppWrapper';
import HomeStatic from 'app/components/Home/HomeStatic';
import {LocationSearchContainer} from 'app/components/Home/LocationSearch';
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
                <HomeStatic />
            </main>
        )
    }
}

let Home = AppWrapper(HomeContent, 'Home');

export default Home;
