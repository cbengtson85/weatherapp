'use strict'

import React from 'react';

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

ExtendedForecast.propTypes = {
    unitTemp : React.PropTypes.string,
    unitSpeed : React.PropTypes.string,
    dailyWeather : React.PropTypes.array
};

export default ExtendedForecast;
