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
    if(units == undefined)
        return 'F';
    else
        return units;
};

const getUnitSpeed = units => {
    if(units == 'F')
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

const round = value => {
    return Math.round(value);
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
        current.temp = round(data.currently.temperature);
        current.precipitation = round(data.currently.precipProbability*100);
        current.windSpeed = round(data.currently.windSpeed);
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
            hourlyItem.temp = round(item.temperature);
            hourlyItem.tempHigh = round(item.temperature);
            hourlyItem.tempLow = round(item.temperature);
            hourlyItem.precipitation = round(item.precipProbability*100);
            hourlyItem.windSpeed = round(item.windSpeed);
            hourlyItem.windDirection = getDirectionFromDeg(item.windBearing);

            hourlyList.push(hourlyItem);
        });
    }
    transformedData.hourly = hourlyList;

    let dailyList = [];
    if(data.daily != undefined && data.daily.data != undefined) {
        data.daily.data.map((item, index) => {
            if(index == 0) {
                transformedData.current.tempHigh = round(item.temperatureMax);
                transformedData.current.tempLow = round(item.temperatureMin);
            } else if(index <= constants.MAX_FORECAST_DAYS) {
                let dailyItem = Object.assign({}, constants.WEATHER_DATA_FORMAT);
                const time = new Date(item.time*1000);

                dailyItem.dayOfWeek = getDayOfWeek(time);
                dailyItem.formattedDate = getFormattedDate(time);
                dailyItem.formattedDateHourly = getFormattedDateHourly(time);
                dailyItem.icon = item.icon;
                dailyItem.temp = round(item.temperatureMax);
                dailyItem.tempHigh = round(item.temperatureMax);
                dailyItem.tempLow = round(item.temperatureMin);
                dailyItem.precipitation = round(item.precipProbability*100);
                dailyItem.windSpeed = round(item.windSpeed);
                dailyItem.windDirection = getDirectionFromDeg(item.windBearing);

                dailyList.push(dailyItem);
            }
        });
    }
    transformedData.daily = dailyList;
    return transformedData;
};
