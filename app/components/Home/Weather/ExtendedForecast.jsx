'use strict'

import React from 'react';
import PropTypes from 'prop-types';

import {CurrentWeather, WeatherForecastItem} from 'app/components/Home/Weather';

class ExtendedForecast extends React.Component {
    render() {
        const {dailyWeather, unitTemp, unitSpeed} = this.props;
        return (
            <div className="forecast-container">
                <CurrentWeather {...this.props} />
                {dailyWeather.map((item, index) =>
                    <WeatherForecastItem key={index} headingDateTime={item.dayOfWeek} item={item} unitTemp={unitTemp} unitSpeed={unitSpeed} />
                )}
            </div>
        )
    }
}

if(process.env.NODE_ENV !== 'production') {
    ExtendedForecast.propTypes = {
        unitTemp : PropTypes.string,
        unitSpeed : PropTypes.string,
        dailyWeather : PropTypes.array
    };
}

export default ExtendedForecast;
