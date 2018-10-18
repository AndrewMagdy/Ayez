// @flow

import { FETCH_CONTACTS_REQUEST } from '../../constants/action-types';

export const fetchContactsRequest = () => (
  {
    type: FETCH_CONTACTS_REQUEST,
    payload: { isLoading: true },
  }
);
