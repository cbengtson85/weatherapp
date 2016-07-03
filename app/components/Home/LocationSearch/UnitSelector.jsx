'use strict'

import React from 'react';
import {Link} from 'react-router';

import * as ACTIONS from 'app/actions';

const UnitSelector = ({unit, currentUnit, dispatch}) => {
    let isSelected = currentUnit == unit ? true : false;
    const updateUnit = u => {
        if(u != currentUnit) {
            dispatch(ACTIONS.selectUnit(u));
            localStorage.setItem('unit', u);
        }
    }
    return (
        <div className={isSelected ? 'unit-selected' : ''} onClick={()=> updateUnit(unit)}>
            <sup>o</sup>{unit}
        </div>
    )
};

export default UnitSelector;
