// @flow

import { SAVE_CONTACTS_ERROR } from '../../constants/action-types';

export const saveContactsError = () => (
  {
    type: SAVE_CONTACTS_ERROR,
    payload: { error: true },
  }
);
