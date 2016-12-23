'use strict'

import React from 'react';
import Slider from 'react-slick';

const constants = require('config/constants');

import {WeatherForecastItem} from 'app/components/Home/Weather';

class HourlyForecast extends React.Component {
    render() {
        const {hourlyWeather, unitTemp, unitSpeed} = this.props;
        return (
            <div className="forecast-container">
                {hourlyWeather != undefined && hourlyWeather.length > 0 ?
                    (
                        <Slider {...constants.SLIDER_OPTIONS_HOURLY}>
                            {hourlyWeather.map((item, index) =>
                                <div className="hourly-item" key={index} data-index={index}><WeatherForecastItem  headingDateTime={item.formattedDateHourly} item={item} unitTemp={unitTemp} unitSpeed={unitSpeed} /></div>
                            )}
                        </Slider>
                    )
                    : ''
                }
            </div>
        )
    }
}

HourlyForecast.propTypes = {
    unitTemp : React.PropTypes.string,
    unitSpeed : React.PropTypes.string,
    hourlyWeather : React.PropTypes.array
};

export default HourlyForecast;
