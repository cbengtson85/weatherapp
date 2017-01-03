import React from 'react';
import {expect} from 'chai';
import {shallow, mount, render} from 'enzyme';

import {InputSubmit, AjaxSpinner, ClearIcon, CurrentLocationIcon, ErrorMessage} from './../../app/components/Common';

describe('AjaxSpinner', () => {
    it('AjaxSpinner should exist', () => {
        let component = shallow(<AjaxSpinner />);
        expect(component).to.exist;
    });
});
