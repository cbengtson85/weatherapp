'use strict'

import React from 'react';
import PropTypes from 'prop-types';

import * as ACTIONS from 'app/actions';

const UnitSelector = ({unit, currentUnit, dispatch}) => {
    let isSelected = currentUnit == unit ? true : false;
    const updateUnit = () => {
        if(unit != currentUnit) {
            dispatch(ACTIONS.selectUnit(unit));
        }
    }
    return (
        <div className={isSelected ? 'unit-selected' : ''} onClick={updateUnit}>
            <sup>o</sup>{unit}
        </div>
    )
};

if(process.env.NODE_ENV !== 'production') {
    UnitSelector.propTypes = {
        currentUnit : PropTypes.string,
        unit : PropTypes.string,
        dispatch : PropTypes.func.isRequired
    };
}

export default UnitSelector;
