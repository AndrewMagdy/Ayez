import firebase from "@firebase/app";
import "@firebase/database";

const firebaseConfig = {
	apiKey: "AIzaSyAb4EdbQqqVUIb8Ha-mStw9RN0IKg87H6k",
	authDomain: "asdasddd-ae3eb.firebaseapp.com",
	databaseURL: "https://asdasddd-ae3eb.firebaseio.com",
	projectId: "asdasddd-ae3eb",
	storageBucket: "asdasddd-ae3eb.appspot.com",
	messagingSenderId: "47765101125"
};

firebase.initializeApp(firebaseConfig);

export const databaseRef = firebase.database().ref();
