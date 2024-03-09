import { StyleSheet, Text, View, Pressable } from "react-native";
import styles from "./style";
import { useState } from "react";
import firebaseConfig from "./config";
import { GoogleAuthProvider } from "@firebase/auth";
import { signInWithPopup } from "@firebase/auth";
import { initializeApp } from "@firebase/app";
import { getAuth } from "@firebase/auth";
import { useNavigation } from "@react-navigation/native";

export default function GoogleSignScreen() {
  const [error, setError] = useState(null);
  const navigation = useNavigation();
  const handleGoogleSignIn = async () => {
    try {
      // Reset the error state
      setError("");
      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app);

      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      // Check if Google Sign-In was successful
      if (result.user) {
        console.log("Google Sign-In successful:", result.user);

        // Optionally, you can perform additional actions or navigate to a different screen
        // For example, navigate to the home screen: navigation.navigate("Home");
        navigation.navigate("Home");
      } else {
        setError("Google Sign-In failed");
        // Handle Google Sign-In failure (e.g., display an error message)
      }
    } catch (error) {
      setError("Error during Google Sign-In: " + error.message);
      // Handle any other errors during Google Sign-In
    }
  };
  return (
    <View style={styles.coniner}>
      <Pressable style={styles.googleButton} onPress={handleGoogleSignIn}>
        <Text style={styles.googleButtonText}>Sign Up with Google</Text>
      </Pressable>
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
    </View>
  );
}
