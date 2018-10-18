// @flow
import Contacts from "react-native-contacts";
import { PermissionsAndroid } from "react-native";

export const getContacts = () => {
	return requestContactsPermission().then(isGranted => {
		return new Promise((resolve, reject) => {
			if (!isGranted) {
				reject(new Error("Permission Denied"));
			}
			Contacts.getAll((err, contacts) => {
				if (err) {
					reject(err);
				}
				resolve(contacts);
			});
		});
	});
};

// Show permission Dialog on Android
// Only needed on Andorid
const requestContactsPermission = async () => {
	if (Platform.OS === 'ios') {
		return new Promise();
	}

	return await PermissionsAndroid.request(
		PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
		{
			title: "Ayez Contacts Permission",
			message: "Ayez App needs access to your Contacts "
		}
	);
};
