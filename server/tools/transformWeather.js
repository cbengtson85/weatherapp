'use strict'
/*
 *
 * Module will transform weather api response json to a standard json format
 *
*/

const constants = require('config/constants');
const dateFormat = require('dateformat');
const getDirectionFromDeg = require('server/tools').getDirectionFromDeg;

const getUnitTemp = units => {
    if(units == 'us')
        return 'F';
    else
        return 'C';
};

const getUnitSpeed = units => {
    if(units == 'us')
        return 'mph';
    else
        return 'km/h';
};

const getDayOfWeek = time => {
    return dateFormat(time, 'dddd');
};

const getFormattedDate = time => {
    return dateFormat(time, 'mmm d');
};

const getFormattedDateHourly = time => {
    return dateFormat(time, 'h:00 TT');
};

module.exports = (data, units) => {
    let transformedData = Object.assign({}, constants.WEATHER_RESPONSE_FORMAT);
    transformedData.unitTemp = getUnitTemp(units);
    transformedData.unitSpeed = getUnitSpeed(units);

    let current = Object.assign({}, constants.WEATHER_DATA_FORMAT);

    if(data.currently != undefined) {
        const time = new Date(data.currently.time*1000);

        current.dayOfWeek = getDayOfWeek(time);
        current.formattedDate = getFormattedDate(time);
        current.formattedDateHourly = getFormattedDateHourly(time);
        current.icon = data.currently.icon;
        current.temp = data.currently.temperature;
        current.tempHigh = data.currently.temperature;
        current.tempLow = data.currently.temperature;
        current.precipitation = data.currently.precipProbability;
        current.windSpeed = data.currently.windSpeed;
        current.windDirection = getDirectionFromDeg(data.currently.windBearing);
    }
    transformedData.current = current;

    let hourlyList = [];
    if(data.hourly != undefined && data.hourly.data != undefined) {
        data.hourly.data.map((item, index) => {
            let hourlyItem = Object.assign({}, constants.WEATHER_DATA_FORMAT);
            const time = new Date(item.time*1000);

            hourlyItem.dayOfWeek = getDayOfWeek(time);
            hourlyItem.formattedDate = getFormattedDate(time);
            hourlyItem.formattedDateHourly = getFormattedDateHourly(time);
            hourlyItem.icon = item.icon;
            hourlyItem.temp = item.temperature;
            hourlyItem.tempHigh = item.temperature;
            hourlyItem.tempLow = item.temperature;
            hourlyItem.precipitation = item.precipProbability;
            hourlyItem.windSpeed = item.windSpeed;
            hourlyItem.windDirection = getDirectionFromDeg(item.windBearing);

            hourlyList.push(hourlyItem);
        });
    }
    transformedData.hourly = hourlyList;

    let dailyList = [];
    if(data.daily != undefined && data.daily.data != undefined) {
        data.daily.data.map((item, index) => {
            let dailyItem = Object.assign({}, constants.WEATHER_DATA_FORMAT);
            const time = new Date(item.time*1000);

            dailyItem.dayOfWeek = getDayOfWeek(time);
            dailyItem.formattedDate = getFormattedDate(time);
            dailyItem.formattedDateHourly = getFormattedDateHourly(time);
            dailyItem.icon = item.icon;
            dailyItem.temp = item.temperature;
            dailyItem.tempHigh = item.temperatureMax;
            dailyItem.tempLow = item.temperatureMin;
            dailyItem.precipitation = item.precipProbability;
            dailyItem.windSpeed = item.windSpeed;
            dailyItem.windDirection = getDirectionFromDeg(item.windBearing);

            dailyList.push(dailyItem);
        });
    }
    transformedData.daily = dailyList;
    return transformedData;
};
