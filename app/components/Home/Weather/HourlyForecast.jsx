'use strict'

import React from 'react';
import PropTypes from 'prop-types';
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

if(process.env.NODE_ENV !== 'production') {
    HourlyForecast.propTypes = {
        unitTemp : PropTypes.string,
        unitSpeed : PropTypes.string,
        hourlyWeather : PropTypes.array
    };
}

export default HourlyForecast;
