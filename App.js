import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import RegisterScreen from "./public/Auth/Register";
import LoginScreen from "./public/Auth/Login";
import VerificationScreen from "./public/Auth/Verification";
import GoogleSignScreen from "./public/Auth/GoogleSign";
import HomeScreen from "./public/Home/home";
import firebaseConfig from "./public/Auth/config";
import { initializeApp } from "firebase/app";
import {
  Auth,
  getAuth,
  onAuthStateChanged,
  onIdTokenChanged,
  reauthenticateWithCredential,
} from "@firebase/auth";

const Stack = createStackNavigator();
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
console.log(auth);
export default function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
      // console.log(authUser);
      if (initializing) {
        // setInitializing(false);
      }
    });

    return () => unsubscribe();
  }, [initializing]);

  console.log(user);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user ? "Home" : "Login"}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Verification"
          component={VerificationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GoogleAuth"
          component={GoogleSignScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
