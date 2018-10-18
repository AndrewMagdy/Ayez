// @flow

import { FETCH_CONTACTS_SUCCESS } from '../../constants/action-types';

export const fetchContactsSuccess = (contactsList: Object) => (
  {
    type: FETCH_CONTACTS_SUCCESS,
    payload: { contactsList },
  }
);
