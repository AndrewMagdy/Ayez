import { databaseRef } from "../lib/firebase";

export const saveContactsToFirebase = contacts => {
	let contactsRef = databaseRef.child("contacts");
	for (let contact of contacts) {
		let recordId = contact["recordID"];
		let recordRef = contactsRef.child("" + recordId);
		recordRef.set(contact);
	}
};
