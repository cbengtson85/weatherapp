'use strict'

import React from 'react';
import PropTypes from 'prop-types';

const WeatherForecastItem = ({item, unitTemp, unitSpeed, headingDateTime}) => {
    return (
        <div className="forecast hourly-forecast">
            <div className="forecast-header">
                <div className="day">{headingDateTime}</div>
                <div className="date">{item.formattedDate}</div>
            </div>
            <div className="forecast-content">
                <div className="forecast-icon">
                    <img src={'/img/icons/' + item.icon + '.svg'} alt="" width="48" />
                </div>
                <div className="degree">{item.tempHigh}<sup>o</sup>{unitTemp}</div>
                <small>{item.tempLow}<sup>o</sup>{unitTemp}</small>
                <div className="extended-details">
                    <span><img src="/img/icon-umberella.png" alt="" />{item.precipitation}%</span>
                </div>
                <div className="extended-details">
                    <span><img src="/img/icon-wind.png" alt="" />{item.windSpeed}{unitSpeed}</span>
                </div>
            </div>
        </div>
    )
};

if(process.env.NODE_ENV !== 'production') {
    WeatherForecastItem.propTypes = {
        unitTemp : PropTypes.string,
        unitSpeed : PropTypes.string,
        item : PropTypes.object,
        headingDateTime : PropTypes.string
    };
}

export default WeatherForecastItem;
