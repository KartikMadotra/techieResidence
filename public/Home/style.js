// styles.js

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logoutButton: {
    backgroundColor: "#e74c3c",
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  logoutButtonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  // Add your additional styles for content

  profileContainer: {
    position: "absolute",
    top: 20, // Adjust the top position as needed
    right: 20, // Adjust the right position as needed
    alignItems: "center",
  },
  profileCircle: {
    width: 50, // Adjust the size as needed
    height: 50, // Adjust the size as needed
    borderRadius: 25, // Adjust the size as needed
    backgroundColor: "#3498db",
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: 40, // Adjust the size as needed
    height: 40, // Adjust the size as needed
    borderRadius: 20, // Adjust the size as needed
  },
  profileImageText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default styles;
