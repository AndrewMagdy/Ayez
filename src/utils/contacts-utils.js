// @flow
import Contacts from "react-native-contacts";
import { Platform, PermissionsAndroid } from "react-native";

export const getContacts = () => {
	return requestContactsPermission().then(result => {
		return new Promise((resolve, reject) => {
			if (result !== "granted") {
				return reject(new Error("Permission Denied"));
			}
			Contacts.getAll((err, contacts) => {
				if (err) {
					return reject(err);
				}
				return resolve(contacts);
			});
		});
	});
};

// Show permission Dialog on Android
// Only needed on Andorid
const requestContactsPermission = async () => {
	if (Platform.OS === "ios") {
		// Follow Android granted return value
		return new Promise("granted");
	}

	return await PermissionsAndroid.request(
		PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
		{
			title: "Ayez Contacts Permission",
			message: "Ayez App needs access to your Contacts "
		}
	);
};
