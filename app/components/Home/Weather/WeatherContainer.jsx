'use strict'

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {LoadingIndicator, ExtendedForecast, HourlyForecast} from 'app/components/Home/Weather';
import * as ACTIONS from 'app/actions';
const constants = require('config/constants');

class WeatherContainer extends React.Component {
    componentDidMount() {
        const {dispatch, currentUnit} = this.props;
        const {search, hourly} = this.props.match.params;
        dispatch(ACTIONS.getWeatherData(search, currentUnit, hourly));
    }
    componentWillReceiveProps(nextProps) {
        const {dispatch} = this.props;
        if(nextProps.match.params.search != this.props.match.params.search) {
            const {hourly} = nextProps.match.params;
            dispatch(ACTIONS.getWeatherData(nextProps.match.params.search, nextProps.currentUnit, hourly));
        }
        if(nextProps.match.params.hourly && !this.props.match.params.hourly)
            dispatch(ACTIONS.showHourlyForecast(true));
        else if(!nextProps.match.params.hourly && this.props.match.params.hourly)
            dispatch(ACTIONS.showHourlyForecast(false));
    }

    componentWillUnmount() {
        this.props.dispatch(ACTIONS.clearCoordinates());
    }

    render() {
        const {isLoading, showHourly, hourlyWeather, unitTemp, unitSpeed} = this.props;
        let toggleText = showHourly ? constants.VIEW_EXTENDED_FORECAST_TEXT : constants.VIEW_HOURLY_FORECAST_TEXT;
        let url = location.pathname;
        if(url.indexOf('/hourly/') > -1)
            url = url.replace('/hourly/', '/');
        else
            url = url.replace('/weather/', '/weather/hourly/');
        return (
            <div className="forecast-table">
                <div className="container">
                    {isLoading ? <LoadingIndicator /> : ''}
                    {showHourly ?
                        (<HourlyForecast hourlyWeather={hourlyWeather} unitTemp={unitTemp} unitSpeed={unitSpeed}/>)
                        :
                        (<ExtendedForecast {...this.props} />)
                    }
                    <div id="change-forecast-view"><Link to={url}>{toggleText}</Link></div>
                </div>
            </div>
        )
    }
}

if(process.env.NODE_ENV !== 'production') {
    WeatherContainer.propTypes = {
        match : PropTypes.object,
        isLoading : PropTypes.bool.isRequired,
        currentWeather : PropTypes.object,
        unitTemp : PropTypes.string,
        unitSpeed : PropTypes.string,
        dailyWeather : PropTypes.array,
        hourlyWeather : PropTypes.array,
        savedSelectedLocations : PropTypes.object,
        currentUnit : PropTypes.string,
        displayNameFromStorage : PropTypes.string,
        showHourly : PropTypes.bool,
        dispatch : PropTypes.func.isRequired
    };
}

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
