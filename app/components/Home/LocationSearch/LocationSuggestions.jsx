'use strict'

import React from 'react';

//className="suggestion-highlight
const LocationSuggestions = (props) => {
    return (
        <div className="location-suggestions-container">
            <div className="location-suggestions">
                <ul className="location-suggestions-list">
                    {props.locationsList.map((location, index) =>
                        <li key={location.city + location.state + location.countryCode + location.longitude}>
                            <a href="#" className={index==0 ? "suggestion-highlight" : ""} data-longitude={location.longitude} data-latitude={location.latitude}>
                                {location.formattedAddressForList}
                            </a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
};

export default LocationSuggestions;
