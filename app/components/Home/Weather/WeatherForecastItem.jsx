'use strict'

import React from 'react';

const WeatherForecastItem = ({item, unitTemp}) => {

    return (
        <div className="forecast">
            <div className="forecast-header">
                <div className="day">{item.dayOfWeek}</div>
                <div className="day">{item.formattedDate}</div>
            </div>
            <div className="forecast-content">
                <div className="forecast-icon">
                    <img src={"/img/icons/" + item.icon + ".svg"} alt="" width="48" />
                </div>
                <div className="degree">{item.temp}<sup>o</sup>{unitTemp}</div>
                <small>18<sup>o</sup></small>
            </div>
        </div>
    )
};

export default WeatherForecastItem;
