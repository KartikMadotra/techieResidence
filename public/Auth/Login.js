import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import styles from "./style";
import GoogleSignScreen from "./GoogleSign";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      // Check if email and password are provided
      if (!email || !password) {
        console.error("Please provide both email and password");
        return;
      }

      const auth = getAuth();

      // Sign in the user with email and password
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Check if login was successful
      if (userCredential) {
        console.log("Login successful:", userCredential.user);
        // Optionally, you can perform additional actions or navigate to a different screen
        // For example, navigate to the home screen: navigation.navigate("Home");
      } else {
        console.error("Login failed");
        // Handle login failure (e.g., display an error message)
      }
    } catch (error) {
      console.error("Error during login:", error.message);
      // Handle any other errors during login
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
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
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <GoogleSignScreen />
      <Text
        style={styles.linkText}
        onPress={() => navigation.navigate("Register")}
      >
        Don't have an account? Register
      </Text>
    </View>
  );
};

export default LoginScreen;
