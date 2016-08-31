'use strict'

import React from 'react';

const WeatherForecastItem = ({item, unitTemp, unitSpeed}) => {
    return (
        <div className="forecast">
            <div className="forecast-header">
                <div className="day">{item.dayOfWeek}</div>
                <div className="day">{item.formattedDate}</div>
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

WeatherForecastItem.propTypes = {
    unitTemp : React.PropTypes.string,
    unitSpeed : React.PropTypes.string,
    item : React.PropTypes.object
};

export default WeatherForecastItem;
