// @flow

import {
  FETCH_CONTACTS_ERROR,
  FETCH_CONTACTS_REQUEST,
  FETCH_CONTACTS_SUCCESS,
  SAVE_CONTACTS_SUCCESS
} from "../constants/action-types";


const initialState = {
  contactsList: {},
  isLoading: false,
  error: false,
  didSave: false,
  myCode: "asd",
};

const contactReducer = (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case FETCH_CONTACTS_SUCCESS: {
      return {
        isLoading: false,
        error: false,
        contactsList: action.payload.contactsList,
        myCode: "asd",
      };
    }
    case FETCH_CONTACTS_REQUEST: {
      return {
        isLoading: true,
        error: false,
        contactsList: {},
         myCode: "asd",
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
