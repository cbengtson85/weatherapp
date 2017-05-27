'use strict'

import React from 'react';
import {Route, Switch } from 'react-router-dom';

import AppWrapper from 'app/components/AppWrapper';
import {LocationSearchContainer} from 'app/components/Home/Location';
import {WeatherContainer} from 'app/components/Home/Weather';

class HomeContent extends React.Component {
    render() {
        return (
            <main className="main-content">
                <LocationSearchContainer />
                <Switch>
                    <Route path="/weather/:hourly/*/:search" component={WeatherContainer} />
                    <Route path="/weather/*/:search" component={WeatherContainer} />
                </Switch>
            </main>
        )
    }
}

let Home = AppWrapper(HomeContent, 'Home');

export default Home;
