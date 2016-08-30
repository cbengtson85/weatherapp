'use strict'

import React from 'react';

import * as ACTIONS from 'app/actions';
import {setLocalStorageItem} from 'app/functions';

const UnitSelector = ({unit, currentUnit, dispatch}) => {
    let isSelected = currentUnit == unit ? true : false;
    const updateUnit = () => {
        if(unit != currentUnit) {
            dispatch(ACTIONS.selectUnit(unit));
            setLocalStorageItem('unit', unit);
        }
    }
    return (
        <div className={isSelected ? 'unit-selected' : ''} onClick={updateUnit}>
            <sup>o</sup>{unit}
        </div>
    )
};

UnitSelector.propTypes = {
    currentUnit : React.PropTypes.string,
    unit : React.PropTypes.string,
    dispatch : React.PropTypes.func.isRequired
};

export default UnitSelector;
