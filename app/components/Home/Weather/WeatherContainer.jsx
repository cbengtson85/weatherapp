'use strict'

import React from 'react';
import {connect} from 'react-redux';

class WeatherContainer extends React.Component {
    render() {
        return (
            <div className="forecast-table">
                <div className="container">
                    <div className="forecast-container">
                        <div className="today forecast">
                            <div className="forecast-header">
                                <div className="day">Monday</div>
                                <div className="date">6 Oct</div>
                            </div>
                            <div className="forecast-content">
                                <div className="location">New York</div>
                                <div className="degree">
                                    <div className="num">23<sup>o</sup>C</div>
                                    <div className="forecast-icon">
                                        <img src="/img/icons/icon-1.svg" alt="" width="90" />
                                    </div>
                                </div>
                                <span><img src="/img/icon-umberella.png" alt="" />20%</span>
                                <span><img src="/img/icon-wind.png" alt="" />18km/h</span>
                                <span><img src="/img/icon-compass.png" alt="" />East</span>
                            </div>
                        </div>
                        <div className="forecast">
                            <div className="forecast-header">
                                <div className="day">Tuesday</div>
                            </div>
                            <div className="forecast-content">
                                <div className="forecast-icon">
                                    <img src="/img/icons/icon-3.svg" alt="" width="48" />
                                </div>
                                <div className="degree">23<sup>o</sup>C</div>
                                <small>18<sup>o</sup></small>
                            </div>
                        </div>
                        <div className="forecast">
                            <div className="forecast-header">
                                <div className="day">Wednesday</div>
                            </div>
                            <div className="forecast-content">
                                <div className="forecast-icon">
                                    <img src="/img/icons/icon-5.svg" alt="" width="48" />
                                </div>
                                <div className="degree">23<sup>o</sup>C</div>
                                <small>18<sup>o</sup></small>
                            </div>
                        </div>
                        <div className="forecast">
                            <div className="forecast-header">
                                <div className="day">Thursday</div>
                            </div>
                            <div className="forecast-content">
                                <div className="forecast-icon">
                                    <img src="/img/icons/icon-7.svg" alt="" width="48"  />
                                </div>
                                <div className="degree">23<sup>o</sup>C</div>
                                <small>18<sup>o</sup></small>
                            </div>
                        </div>
                        <div className="forecast">
                            <div className="forecast-header">
                                <div className="day">Friday</div>
                            </div>
                            <div className="forecast-content">
                                <div className="forecast-icon">
                                    <img src="/img/icons/icon-12.svg" alt="" width="48" />
                                </div>
                                <div className="degree">23<sup>o</sup>C</div>
                                <small>18<sup>o</sup></small>
                            </div>
                        </div>
                        <div className="forecast">
                            <div className="forecast-header">
                                <div className="day">Saturday</div>
                            </div>
                            <div className="forecast-content">
                                <div className="forecast-icon">
                                    <img src="/img/icons/icon-13.svg" alt="" width="48" />
                                </div>
                                <div className="degree">23<sup>o</sup>C</div>
                                <small>18<sup>o</sup></small>
                            </div>
                        </div>
                        <div className="forecast">
                            <div className="forecast-header">
                                <div className="day">Sunday</div>
                            </div>
                            <div className="forecast-content">
                                <div className="forecast-icon">
                                    <img src="/img/icons/icon-14.svg" alt="" width="48" />
                                </div>
                                <div className="degree">23<sup>o</sup>C</div>
                                <small>18<sup>o</sup></small>
                            </div>
                        </div>
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
