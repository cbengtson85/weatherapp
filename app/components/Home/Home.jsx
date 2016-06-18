'use strict'

import React from 'react';

import AppWrapper from 'app/components/AppWrapper';
import HomeStatic from 'app/components/Home/HomeStatic';
import {LocationSearchContainer} from 'app/components/Home/LocationSearch';
import {WeatherContainer} from 'app/components/Home/Weather';

class HomeContent extends React.Component {
    render() {
        return (
            <main className="main-content">
                <LocationSearchContainer />
                <WeatherContainer />
                <HomeStatic />
            </main>
        )
    }
}

let Home = AppWrapper(HomeContent, 'Home');

export default Home;
