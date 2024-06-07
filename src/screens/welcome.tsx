import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import Swiper from "../components/Swiper";

const ChurchAudioCarousel = () => {
	return (
		<View style={styles.container}>
			<Swiper />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	wrapper: {
		height: "100%",
	},
	slide: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	gradient: {
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#fff",
		marginBottom: 10,
	},
	description: {
		fontSize: 16,
		color: "#fff",
		textAlign: "center",
		marginBottom: 20,
	},
	button: {
		backgroundColor: "#007AFF",
		paddingVertical: 12,
		paddingHorizontal: 24,
		borderRadius: 8,
	},
	buttonText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "bold",
	},
});

export default ChurchAudioCarousel;
