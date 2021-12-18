import React, { useContext, useState } from "react";
import { View, Text, Button, StyleSheet, Image, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";
import SocialButton from "../components/SocialButton";
import { AuthContext } from "../navigation/AuthProvider";

function SignupScreen({ navigation }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const { register } = useContext(AuthContext);

	const emptyState = () => {
		setEmail("");
		setPassword("");
		setConfirmPassword("");
	};

	const handlePress = () => {
		console.log(email);
		if (!email) {
			Alert.alert("Email field is required.");
		} else if (!password) {
			Alert.alert("Password field is required.");
		} else if (!confirmPassword) {
			setPassword("");
			Alert.alert("Confirm password field is required.");
		} else if (password !== confirmPassword) {
			Alert.alert("Password does not match!");
		} else {
			register(email, password);
			emptyState();
		}
	};
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Create Account</Text>
			<FormInput
				placeholderText='Email'
				onChangeText={(userEmail) => {
					setEmail(userEmail);
				}}
				iconType='user'
				keyboardType='email-address'
				autoCapitalize='none'
				autoCorrect={false}
			/>
			<FormInput
				placeholderText='Password'
				onChangeText={(userPassword) => {
					setPassword(userPassword);
				}}
				iconType='lock'
				secureTextEntry={true}
			/>
			<FormInput
				placeholderText='Confirm Password'
				onChangeText={(userPassword) => {
					setConfirmPassword(userPassword);
				}}
				iconType='lock'
				secureTextEntry={true}
			/>
			<FormButton buttonTitle='Sign Up' onPress={() => handlePress()} />

			<TouchableOpacity style={styles.optionText} onPress={() => navigation.navigate("Signup")}>
				<Text style={styles.navButtonText}> Have an Account? Sign In</Text>
			</TouchableOpacity>
			<SocialButton
				buttonTitle='Sign up with Google'
				btnType='google'
				color='#de4d41'
				backgroundColor='#f5e7ea'
				onPress={() => alert("Google Sign Up")}
			/>
		</View>
	);
}

export default SignupScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-start",
		alignItems: "center",
		padding: 20,
		paddingTop: 20,
	},
	text: {
		fontSize: 28,

		color: "#051d5f",
		marginBottom: 20,
	},
	navButton: {
		marginTop: 15,
	},
	optionText: {
		marginTop: 20,
		marginBottom: 10,
	},
	navButtonText: {
		fontSize: 18,
		fontWeight: "500",
		color: "#2e64e5",
	},
});
