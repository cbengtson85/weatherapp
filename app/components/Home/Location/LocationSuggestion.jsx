'use strict'

import React from 'react';
import {Link} from 'react-router';

const LocationSuggestion = ({location, index, currentSuggestionIndex, handleSuggestionHover}) => {
    const suggestHover = () => {
        handleSuggestionHover(index);
    };
    return (
        <li>
            <Link onMouseEnter={suggestHover} to={location.formattedAddressForUrl} className={index==currentSuggestionIndex ? 'suggestion-highlight' : ''}>
                {location.formattedAddressForList}
            </Link>
        </li>
    )
};

LocationSuggestion.propTypes = {
    location : React.PropTypes.object,
    currentSuggestionIndex : React.PropTypes.number,
    index : React.PropTypes.number,
    handleSuggestionHover: React.PropTypes.func
};

export default LocationSuggestion;
