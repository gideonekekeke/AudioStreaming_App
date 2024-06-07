import React from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	Image,
	KeyboardAvoidingView,
	// dingView,
	Platform,
	ScrollView,
	ImageBackground,
} from "react-native";
import tw from "twrnc";

const CreateNewAccount = () => {
	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}>
			<ScrollView
				contentContainerStyle={styles.scrollContainer}
				keyboardShouldPersistTaps='handled'>
				{/* Header */}
				<View style={styles.header}>
					{/* <TouchableOpacity style={styles.backButton}> */}
					{/* <Text style={styles.backButtonText}>{"<"}</Text> */}
					{/* </TouchableOpacity> */}
					<ImageBackground
						source={require("../../assets/images/form4.png")} // Replace with your image URL
						style={styles.headerImage}
					/>
				</View>

				{/* Create Account Title */}
				<View style={styles.titleContainer}>
					<Text style={styles.title}>Create New Accounts</Text>
				</View>

				{/* Social Login Buttons */}
				<View style={styles.socialLoginContainer}>
					<TouchableOpacity style={styles.socialButton}>
						<Text>F</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.socialButton}>
						<Text>T</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.socialButton}>
						<Text>G+</Text>
					</TouchableOpacity>
				</View>

				<Text style={styles.orText}>or use your email account</Text>

				{/* Form Fields */}
				<View style={styles.formContainer}>
					<TextInput
						style={styles.input}
						placeholder='Email'
						keyboardType='email-address'
					/>
					<TextInput style={styles.input} placeholder='Name' />
					<TextInput
						style={styles.input}
						placeholder='Password'
						secureTextEntry
					/>
				</View>

				{/* Register Button */}
				<TouchableOpacity style={styles.registerButton}>
					<Text style={styles.registerButtonText}>REGISTER</Text>
				</TouchableOpacity>

				{/* Footer */}
				<View style={styles.footer}>
					<Text style={tw`text-white`}>
						Already have an account?{" "}
						<Text style={styles.loginText}>Login here</Text>
					</Text>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#161616",
		// fontFamily: "Nunito_400Regular",
	},
	scrollContainer: {
		flexGrow: 1,
		justifyContent: "center",
	},

	header: {
		height: "40%",
		backgroundColor: "#00b894",
		borderBottomLeftRadius: 50,
		borderBottomRightRadius: 50,
		justifyContent: "center",
		alignItems: "center",
		position: "relative",
	},
	backButton: {
		position: "absolute",
		top: 40,
		left: 20,
	},
	backButtonText: {
		fontSize: 24,
		color: "#fff",
	},
	headerImage: {
		width: 300,
		height: 170,
		borderRadius: 75,
		objectFit: "contain",
	},
	titleContainer: {
		marginTop: -50,
		alignItems: "center",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#fff",
		// paddingBottom: 30,
	},
	socialLoginContainer: {
		flexDirection: "row",
		justifyContent: "center",
		marginTop: 50,
	},
	socialButton: {
		width: 40,
		height: 40,
		borderRadius: 20,
		backgroundColor: "#fff",
		justifyContent: "center",
		alignItems: "center",
		marginHorizontal: 10,
		elevation: 2,
	},
	orText: {
		textAlign: "center",
		marginVertical: 20,
		color: "#aaa",
	},
	formContainer: {
		paddingHorizontal: 20,
	},
	input: {
		height: 50,
		borderColor: "#ddd",
		borderWidth: 1,
		borderRadius: 25,
		paddingHorizontal: 20,
		marginBottom: 10,
		backgroundColor: "#fff",
	},
	registerButton: {
		backgroundColor: "#00b894",
		height: 50,
		borderRadius: 25,
		justifyContent: "center",
		alignItems: "center",
		marginHorizontal: 20,
		marginTop: 20,
	},
	registerButtonText: {
		color: "#fff",
		fontWeight: "bold",
	},
	footer: {
		marginTop: 20,
		alignItems: "center",
		color: "#fff",
	},
	loginText: {
		color: "#00b894",
		fontWeight: "bold",
	},
});

export default CreateNewAccount;
