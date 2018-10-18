// @flow
import { combineReducers } from 'redux';
import contactReducer from './contact-reducer';

// Root Reducer
const rootReducer = combineReducers({
  contacts: contactReducer,
});

export default rootReducer;
