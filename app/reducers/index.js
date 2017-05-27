'use strict'

import {combineReducers} from 'redux';
import * as locationReducers from 'app/reducers/locationReducers';
import * as weatherReducers from 'app/reducers/weatherReducers';

const rootReducer = combineReducers({...locationReducers, ...weatherReducers});

export default rootReducer;
