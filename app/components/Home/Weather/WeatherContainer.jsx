'use strict'

import React from 'react';
import {connect} from 'react-redux';

import {CurrentWeather, WeatherForecastItem} from 'app/components/Home/Weather';

class WeatherContainer extends React.Component {
    render() {
        return (
            <div className="forecast-table">
                <div className="container">
                    <div className="forecast-container">
                        <CurrentWeather />
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
    isLoading : React.PropTypes.bool.isRequired,
    locationsList : React.PropTypes.array,
    searchTermLength : React.PropTypes.number,
    searchVal : React.PropTypes.string,
    currentSuggestionIndex : React.PropTypes.number,
    dispatch : React.PropTypes.func.isRequired
};

const mapStateToProps = state => {
    const {locations} = state;
    const searchTerm = locations.currentSearchTerm;
    const loading = locations.loading;
    const locationsList = locations.locationsList;
    return {
        isLoading : loading,
        locationsList : locationsList[searchTerm],
        searchTermLength : searchTerm.length,
        searchVal : searchTerm,
        currentSuggestionIndex : locations.currentSuggestionIndex
    }
};

export default connect(mapStateToProps)(WeatherContainer);
