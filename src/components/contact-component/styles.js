// @flow

import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		flex: 1
	},
	textContainer: {
		flex: 2,
		alignItems: "center",
		justifyContent: "center"
	},
	roundButton: {
		flex: 1,
		borderRadius: 10,
		margin: 10,
		padding: 10,
		backgroundColor: "#1976d2",
		alignItems: "center",
		justifyContent: "center"
	},
	disabledRoundButton: {
		flex: 1,
		borderRadius: 10,
		margin: 10,
		padding: 10,
		backgroundColor: "grey",
		alignItems: "center",
		justifyContent: "center"
	},
	whiteText: {
		color: "white",
		fontSize: 14
	},
	redText: {
		color: "red",
		fontSize: 14
	},
	greenText: {
		color: "green",
		fontSize: 14
	},
	largeText: {
		fontSize: 22
	}
});
