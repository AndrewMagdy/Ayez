// @flow
import { fetchContacts } from "../fetch-contacts/fetch-contacts";
import { saveContactsSuccess } from "./save-contacts-success";
import { saveContactsToFirebase } from "../../services/firebase-utils";

export const saveContacts = () => (dispatch: Function, getState: Function) => {
	return dispatch(fetchContacts()).then(() => {
		const fetchedContacts = getState().contacts.contactsList;
		saveContactsToFirebase(fetchedContacts);
		return dispatch(saveContactsSuccess());
	});
};
