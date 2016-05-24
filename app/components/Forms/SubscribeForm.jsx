'use strict'

import React from 'react';
import {InputSubmit} from 'app/components/Common'

const SubscribeForm = () => {
    return (
        <form action="#" className="subscribe-form">
            <input type="text" placeholder="Enter your email to subscribe..." maxLength="50" />
            <InputSubmit value="Subscribe" />
        </form>
    )
};

export default SubscribeForm;
