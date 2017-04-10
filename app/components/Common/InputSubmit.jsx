'use strict'

import React from 'react';
import PropTypes from 'prop-types';

const InputSubmit = ({value}) => {
    return (
        <input type="submit" value={value} />
    )
};

if(process.env.NODE_ENV !== 'production') {
    InputSubmit.propTypes = {
        value : PropTypes.string
    };
}

export default InputSubmit;
