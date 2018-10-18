// @flow

import {
  FETCH_CONTACTS_ERROR,
  FETCH_CONTACTS_REQUEST,
  FETCH_CONTACTS_SUCCESS,
  SAVE_CONTACTS_SUCCESS
} from "../constants/action-types";

//https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
const genRandomCode = () => {
  return Math.random().toString(36).substring(7);
}

const initialState = {
  contactsList: {},
  isLoading: false,
  error: false,
  didSave: false,
  myCode: genRandomCode(),
};

const contactReducer = (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case FETCH_CONTACTS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: false,
        contactsList: action.payload.contactsList,
      };
    }
    case FETCH_CONTACTS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: false,
        contactsList: {},
      };
    }
    case FETCH_CONTACTS_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: true
      };
    }
    case SAVE_CONTACTS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: false,
        didSave: true
      };
    }
    default: {
      return state;
    }
  }
};

export default contactReducer;
