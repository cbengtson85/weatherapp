'use strict'

import React from 'react';

const CurrentWeather = ({currentWeather, unitTemp, unitSpeed, selectedLocation, weatherCoordinates, savedSelectedLocations}) => {
    let dayOfWeek;
    let formattedDate;
    let temp;
    let icon;
    let precipitation;
    let windSpeed;
    let windDirection;
    if(currentWeather != null) {
         dayOfWeek = currentWeather.dayOfWeek;
         formattedDate = currentWeather.formattedDate;
         temp = currentWeather.temp;
         icon = currentWeather.icon;
         precipitation = currentWeather.precipitation;
         windSpeed = currentWeather.windSpeed;
         windDirection = currentWeather.windDirection;
    }
    let formattedAddressForDisplay;
    let ssl = savedSelectedLocations[weatherCoordinates];
    if(ssl != undefined)
        formattedAddressForDisplay = ssl.formattedAddressForDisplay;

    return (
        <div className="today forecast">
            <div className="forecast-header">
                <div className="day">{dayOfWeek}</div>
                <div className="date">{formattedDate}</div>
            </div>
            <div className="forecast-content">
                <div className="location">{formattedAddressForDisplay}</div>
                <div className="degree">
                    <div className="num">{temp}<sup>o</sup>{unitTemp}</div>
                    <div className="forecast-icon">
                        {icon != undefined ? <img src={"/img/icons/" + icon + ".svg"} alt="" width="90" /> : ''}
                    </div>
                </div>
                <span><img src="/img/icon-umberella.png" alt="" />{precipitation}%</span>
                <span><img src="/img/icon-wind.png" alt="" />{windSpeed}{unitSpeed}</span>
                <span><img src="/img/icon-compass.png" alt="" />{windDirection}</span>
            </div>
        </div>
    )
};

export default CurrentWeather;
