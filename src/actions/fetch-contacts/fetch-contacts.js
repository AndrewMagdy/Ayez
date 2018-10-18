// @flow
import { getContacts } from '../../utils/contacts-utils';
import { fetchContactsError } from './fetch-contacts-error';
import { fetchContactsRequest } from './fetch-contacts-request';
import { fetchContactsSuccess } from './fetch-contacts-success';


export const fetchContacts = () => (
  (dispatch: Function) => {
  	dispatch(fetchContactsRequest());
  	return getContacts()
  	.then((contactsList) => dispatch(fetchContactsSuccess(contactsList)))
  	.catch(() => dispatch(fetchContactsError()));
  }
);

