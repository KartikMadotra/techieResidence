import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { getAuth, signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import styles from "../style";
import Weather from "./weather";
import Devices from "./devices";
const auth = getAuth();

const Navbar = () => {
  const navigation = useNavigation();
  const [profilePicUrl, setProfilePicUrl] = useState(null);

  useEffect(() => {
    // Set the profile pic URL from the user object
    setProfilePicUrl(auth.currentUser?.photoURL || null);
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // Navigate to the login screen after logout
      navigation.navigate("Login");
    } catch (error) {
      console.error("Error during logout:", error.message);
    }
  };

  const handleProfileClick = () => {
    // Navigate to the account screen when the user clicks the profile photo
    navigation.navigate("Account");
  };

  return (
    <View style={styles.container}>
      <Weather />
      <Devices />
      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>

      {/* Add your content here */}

      <TouchableOpacity
        onPress={handleProfileClick}
        style={styles.profileContainer}
      >
        <View style={styles.profileCircle}>
          {profilePicUrl ? (
            <Image
              source={{ uri: profilePicUrl }}
              style={styles.profileImage}
            />
          ) : (
            <Text style={styles.profileImageText}>No Photo</Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
