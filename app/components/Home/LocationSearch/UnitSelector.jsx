'use strict'

import React from 'react';

import * as ACTIONS from 'app/actions';
import {setLocalStorageItem} from 'app/functions';

const UnitSelector = ({unit, currentUnit, dispatch}) => {
    let isSelected = currentUnit == unit ? true : false;
    const updateUnit = u => {
        if(u != currentUnit) {
            dispatch(ACTIONS.selectUnit(u));
            setLocalStorageItem('unit', u);
        }
    }
    return (
        <div className={isSelected ? 'unit-selected' : ''} onClick={()=> updateUnit(unit)}>
            <sup>o</sup>{unit}
        </div>
    )
};

export default UnitSelector;
