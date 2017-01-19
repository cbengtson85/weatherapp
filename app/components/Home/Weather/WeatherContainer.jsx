'use strict'

import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import {LoadingIndicator, ExtendedForecast, HourlyForecast} from 'app/components/Home/Weather';
import * as ACTIONS from 'app/actions';
const constants = require('config/constants');

class WeatherContainer extends React.Component {
    componentWillMount() {
        const {dispatch, weatherCoordinates, currentUnit} = this.props;
        dispatch(ACTIONS.getWeatherData(weatherCoordinates, currentUnit));
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.weatherCoordinates != this.props.weatherCoordinates) {
            const {dispatch} = this.props;
            dispatch(ACTIONS.getWeatherData(nextProps.weatherCoordinates, nextProps.currentUnit));
        }
    }

    getForecastUrl = () => {
        let url = location.pathname;
        if(url.indexOf('/hourly/') > -1)
            url = url.replace('/hourly/', '/');
        else
            url = url.replace('/weather/', '/weather/hourly/');
        return url;
    }

    render() {
        const {isLoading, showHourly, hourlyWeather, unitTemp, unitSpeed} = this.props;
        let toggleText = showHourly ? constants.VIEW_EXTENDED_FORECAST_TEXT : constants.VIEW_HOURLY_FORECAST_TEXT;
        return (
            <div className="forecast-table">
                <div className="container">
                    {isLoading ? <LoadingIndicator /> : ''}
                    {showHourly ?
                        (<HourlyForecast hourlyWeather={hourlyWeather} unitTemp={unitTemp} unitSpeed={unitSpeed}/>)
                        :
                        (<ExtendedForecast {...this.props} />)
                    }
                    <div id="change-forecast-view"><Link to={this.getForecastUrl}>{toggleText}</Link></div>
                </div>
            </div>
        )
    }
}

WeatherContainer.propTypes = {
    weatherCoordinates : React.PropTypes.string,
    isLoading : React.PropTypes.bool.isRequired,
    currentWeather : React.PropTypes.object,
    unitTemp : React.PropTypes.string,
    unitSpeed : React.PropTypes.string,
    dailyWeather : React.PropTypes.array,
    hourlyWeather : React.PropTypes.array,
    savedSelectedLocations : React.PropTypes.object,
    currentUnit : React.PropTypes.string,
    displayNameFromStorage : React.PropTypes.string,
    showHourly : React.PropTypes.bool,
    dispatch : React.PropTypes.func.isRequired
};

const mapStateToProps = state => {
    const {weather, locations} = state;
    return {
        isLoading : weather.loading,
        currentWeather : weather.current,
        dailyWeather : weather.daily,
        hourlyWeather : weather.hourly,
        unitTemp : weather.unitTemp,
        unitSpeed : weather.unitSpeed,
        savedSelectedLocations : locations.savedSelectedLocations,
        currentUnit : weather.currentUnit,
        displayNameFromStorage : locations.displayNameFromStorage,
        showHourly : weather.showHourly
    }
};

export default connect(mapStateToProps)(WeatherContainer);
