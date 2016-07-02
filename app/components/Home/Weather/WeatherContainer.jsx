'use strict'

import React from 'react';
import {connect} from 'react-redux';

import {CurrentWeather, WeatherForecastItem, LoadingIndicator} from 'app/components/Home/Weather';
import * as ACTIONS from 'app/actions';

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

    render() {
        const {isLoading, dailyWeather, unitTemp, unitSpeed} = this.props;
        return (
            <div className="forecast-table">
                <div className="container">
                    {isLoading ? <LoadingIndicator /> : ''}
                    <div className="forecast-container">
                        <CurrentWeather {...this.props} />
                        {dailyWeather.map((item, index) =>
                            <WeatherForecastItem key={index} item={item} unitTemp={unitTemp} unitSpeed={unitSpeed} />
                        )}
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
    savedSelectedLocations : React.PropTypes.object,
    currentUnit : React.PropTypes.string,
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
        currentUnit : weather.currentUnit
    }
};

export default connect(mapStateToProps)(WeatherContainer);
