// @flow

import { FETCH_CONTACTS_ERROR } from '../../constants/action-types';

export const fetchContactsError = () => (
  {
    type: FETCH_CONTACTS_ERROR,
    payload: { error: true },
  }
);
