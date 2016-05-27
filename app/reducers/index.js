'use strict'

import { combineReducers } from 'redux';
import * as locationReducers from 'app/reducers/locationReducers';

const rootReducer = combineReducers(locationReducers);

export default rootReducer;
