'use strict'

import React from 'react';

import {UnitSelector} from 'app/components/Home/LocationSearch';

const UnitSelectors = props => {
    return (
        <div className="unit-selector-container">
            <div className="unit-selector vertical-center">
                <UnitSelector unit="F" {...props} unit="F" />
                <UnitSelector unit="C" {...props} unit="C" />
            </div>
        </div>
    )
};

export default UnitSelectors;
