import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
    width: "100%",
  },
  button: {
    backgroundColor: "blue",
    padding: 12,
    borderRadius: 6,
    width: "100%",
    alignItems: "center",
    marginTop: 12,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  googleButton: {
    backgroundColor: "red",
    padding: 12,
    borderRadius: 6,
    width: "100%",
    alignItems: "center",
    marginTop: 12,
  },
  googleButtonText: {
    color: "white",
    fontSize: 16,
  },
  linkText: {
    marginTop: 16,
    color: "blue",
    textDecorationLine: "underline",
  },
});

export default styles;
