'use strict'

import React from 'react';
import {connect} from 'react-redux';

import {CurrentWeather, WeatherForecastItem} from 'app/components/Home/Weather';
import * as ACTIONS from 'app/actions';

class WeatherContainer extends React.Component {
    componentWillMount() {
        const {dispatch, weatherCoordinates} = this.props;
        dispatch(ACTIONS.getWeatherData(weatherCoordinates));
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.weatherCoordinates != this.props.weatherCoordinates) {
            const {dispatch} = this.props;
            dispatch(ACTIONS.getWeatherData(nextProps.weatherCoordinates));
        }
    }

    render() {
        const {isLoading} = this.props;
        return (
            <div className="forecast-table">
                <div className="container">
                    <div className="forecast-container">
                        <CurrentWeather {...this.props} />
                        <WeatherForecastItem />
                        <WeatherForecastItem />
                        <WeatherForecastItem />
                        <WeatherForecastItem />
                        <WeatherForecastItem />
                        <WeatherForecastItem />
                    </div>
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
    dispatch : React.PropTypes.func.isRequired
};

const mapStateToProps = state => {
    const {weather} = state;
    return {
        isLoading : weather.loading,
        currentWeather : weather.current,
        dailyWeather : weather.daily,
        hourlyWeather : weather.hourly,
        unitTemp : weather.unitTemp,
        unitSpeed : weather.unitSpeed
    }
};

export default connect(mapStateToProps)(WeatherContainer);
