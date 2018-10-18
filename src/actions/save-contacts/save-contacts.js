// @flow
import { fetchContacts } from "../fetch-contacts/fetch-contacts";
import { saveContactsSuccess } from "./save-contacts-success";
import { saveContactsError } from "./save-contacts-error";
import { saveContactsToFirebase } from "../../utils/firebase-utils";

export const saveContacts = () => (dispatch: Function, getState: Function) => {
	return dispatch(fetchContacts()).then(() => {
		// Check if we got the contacts
		const error = getState().contacts.error;
		if (!error) {
			const fetchedContacts = getState().contacts.contactsList;
			saveContactsToFirebase(fetchedContacts);
			return dispatch(saveContactsSuccess());
		}
		return dispatch(saveContactsError());
	});
};
