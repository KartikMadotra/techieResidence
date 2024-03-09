import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import styles from "./style";
import firebaseConfig from "./config";
import GoogleSignScreen from "./GoogleSign";
import { useNavigation } from "@react-navigation/native";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [number, setNumber] = useState("");
  const handleRegister = async () => {
    try {
      // Check if email and password are provided
      if (!email || !password) {
        console.error("Please provide both email and password");
        setError("Please provide both Emial & Password");

        return;
      }

      // Create a new user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        number,
        password
      );

      // Check if registration was successful
      if (userCredential) {
        console.log("Registration successful:", userCredential.user);

        // Send email verification
        await sendEmailVerification(userCredential.user);

        console.log("Email verification sent to:", email);

        // Optionally, you can perform additional actions or navigate to a different screen
        // For example, navigate to the login screen: navigation.navigate("Login");
        navigation.navigate("Verification");
      } else {
        setError("Registration Failed");
        console.error("Registration failed");
        // Handle registration failure (e.g., display an error message)
      }
    } catch (error) {
      console.error("Error during registration:", error.message);
      // Handle any other errors during registration
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
      <GoogleSignScreen />
      {error ? (
        <Text
          style={{
            color: "red",
            backgroundColor: "black",
            padding: 15,
            flex: 2,
            borderCurve: "circular",
            borderRadius: 30,
            margin: 14,
            fontWeight: "900",
          }}
        >
          {error}
        </Text>
      ) : (
        <Text></Text>
      )}
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      {/* Add the rest of your UI components as needed */}
    </View>
  );
};

export default RegisterScreen;
