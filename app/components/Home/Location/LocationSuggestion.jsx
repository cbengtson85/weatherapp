'use strict'

import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

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

if(process.env.NODE_ENV !== 'production') {
    LocationSuggestion.propTypes = {
        location : PropTypes.object,
        currentSuggestionIndex : PropTypes.number,
        index : PropTypes.number,
        handleSuggestionHover: PropTypes.func
    };
}

export default LocationSuggestion;
