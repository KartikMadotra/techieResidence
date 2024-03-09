import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Devices = () => {
  const [deviceInfo, setDeviceInfo] = useState({
    name: "ESP32 Device",
    macAddress: "00:11:22:33:44:55", // Replace with the actual MAC address
    status: "Online", // Change to "Offline" to see the red dot
  });

  const insets = useSafeAreaInsets();
  const scaledFontSize = (baseSize) => {
    const scaleFactor = 1600; // Width of iPhone 6/7/8
    const width = Dimensions.get("window").width - insets.left - insets.right;
    const scale = width / scaleFactor;
    return baseSize * scale;
  };

  const scaledImageSize = (baseSize) => {
    const scaleFactor = 1600; // Width of iPhone 6/7/8
    const width = Dimensions.get("window").width - insets.left - insets.right;
    const scale = width / scaleFactor;
    return baseSize * scale;
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top - 20 }]}>
      <View style={styles.deviceInfoContainer}>
        <Text style={[styles.deviceName, { fontSize: scaledFontSize(28) }]}>
          {deviceInfo.name}
        </Text>
        <Text style={[styles.macAddress, { fontSize: scaledFontSize(18) }]}>
          MAC Address: {deviceInfo.macAddress}
        </Text>
        <View
          style={[
            styles.statusDot,
            {
              backgroundColor: deviceInfo.status === "Online" ? "green" : "red",
            },
          ]}
        />
        <Text style={[styles.status, { fontSize: scaledFontSize(18) }]}>
          Status: {deviceInfo.status}
        </Text>
        <Image
          source={{
            uri: "https://wokwi.com/images/homepage/esp32.svg", // Replace with the actual image URL
          }}
          style={[
            styles.deviceImage,
            { width: scaledImageSize(150), height: scaledImageSize(150) },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3E4095",
    borderRadius: 20,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    height: Dimensions.get("window").height / 18,
    width: Dimensions.get("screen").width - 40,
    marginTop: Dimensions.get("window").height / 60,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  deviceInfoContainer: {
    alignItems: "center",
  },
  deviceName: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFA500",
    marginBottom: 10,
    textAlign: "center",
  },
  macAddress: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 8,
  },
  statusDot: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    marginBottom: 8,
  },
  status: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 8,
  },
  deviceImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginVertical: 20,
  },
});

export default Devices;
