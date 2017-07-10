import * as ACTIONS from 'app/actions';
import {setLocalStorageItem} from 'app/functions';
const constants = require('config/constants');

export const localStorageMiddleWare = store => next => action => {
    let oldState = store.getState();
    let result = next(action);
    let newState = store.getState();
    switch (action.type) {
        case ACTIONS.SELECT_UNIT:
            setLocalStorageItem('unit', action.unit);
            break;
        case ACTIONS.REQUEST_WEATHER: {
            if(oldState.weather.currentUnit !== action.unit)
                setLocalStorageItem('unit', action.unit);
            break;
        }
        case ACTIONS.RECEIVE_WEATHER: {
            setLocalStorageItem(constants.VIEWED_LOCATIONS, JSON.stringify(newState.locations.viewedLocations));
            setLocalStorageItem(constants.VIEWED_LOCATIONS_OBJECTS, JSON.stringify(newState.locations.viewedLocationsObjects));
            break;
        }
    }
    if(action.type === ACTIONS.RECEIVE_PLACE_NAME_DATA) {

        let newState = store.getState();
        let {transactionList, transactionEntries} = newState;
        let dataObj = {transactionList, transactionEntries};
        setLocalStorageItem(localStorage, newState.currentUser, JSON.stringify(dataObj));
    }
    return result;
}
