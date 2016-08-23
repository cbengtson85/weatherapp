'use strict'

import React from 'react';

const InputSubmit = ({value}) => {
    return (
        <input type="submit" value={value} />
    )
};


InputSubmit.propTypes = {
    value : React.PropTypes.string
};

export default InputSubmit;
