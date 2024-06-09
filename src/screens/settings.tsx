import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	Alert,
} from "react-native";
import tw from "twrnc";

const AccountSettings = () => {
	const [username, setUsername] = useState("JohnDoe");
	const [email, setEmail] = useState("john.doe@example.com");
	const [password, setPassword] = useState("");

	const handleSaveChanges = () => {
		Alert.alert("Changes Saved", "Your account information has been updated.");
		// Logic to save changes goes here
	};

	const handleLogout = () => {
		Alert.alert("Logged Out", "You have been logged out.");
		// Logic to handle logout goes here
	};

	return (
		<View style={tw`flex-1 bg-black p-4`}>
			<Text style={tw`text-white text-2xl mb-4`}>Account Settings</Text>

			<Text style={tw`text-white text-lg mb-2`}>Username</Text>
			<TextInput
				style={styles.input}
				value={username}
				onChangeText={setUsername}
			/>

			<Text style={tw`text-white text-lg mt-4 mb-2`}>Email</Text>
			<TextInput
				style={styles.input}
				value={email}
				onChangeText={setEmail}
				keyboardType='email-address'
			/>

			<Text style={tw`text-white text-lg mt-4 mb-2`}>Password</Text>
			<TextInput
				style={styles.input}
				value={password}
				onChangeText={setPassword}
				secureTextEntry
				placeholder='Enter new password'
				placeholderTextColor='#ccc'
			/>

			<TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
				<Text style={styles.saveButtonText}>Save Changes</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
				<Text style={styles.logoutButtonText}>Log Out</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		backgroundColor: "#333",
		color: "white",
		padding: 10,
		borderRadius: 5,
		marginBottom: 10,
	},
	saveButton: {
		backgroundColor: "#00b894",
		padding: 15,
		borderRadius: 5,
		alignItems: "center",
		marginTop: 20,
	},
	saveButtonText: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
	},
	logoutButton: {
		backgroundColor: "#d63031",
		padding: 15,
		borderRadius: 5,
		alignItems: "center",
		marginTop: 20,
	},
	logoutButtonText: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
	},
});

export default AccountSettings;
