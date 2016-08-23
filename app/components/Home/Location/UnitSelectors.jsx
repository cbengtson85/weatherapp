'use strict'

import React from 'react';

import {UnitSelector} from 'app/components/Home/Location';

const UnitSelectors = props => {
    return (
        <div className="unit-selector-container">
            <div className="unit-selector vertical-center">
                <UnitSelector unit="F" {...props} />
                <UnitSelector unit="C" {...props} />
            </div>
        </div>
    )
};

export default UnitSelectors;
