import React from "react";
import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";
import AppButton from "../components/AppButton.js";
//for fonts
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

function WelcomeScreen({ navigation }) {
  let [fontsLoaded] = useFonts({
    Yellowtail: require("../assets/fonts/Yellowtail-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ImageBackground
      blurRadius={0.5}
      style={styles.background}
      source={require("../assets/app_bg.png")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/logoHandShake.png")}
        />

        <Text style={styles.subline}>SREC'S</Text>
        <Text style={styles.tagline}>College Mate</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate("Login")} />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 15,
    width: "100%",
    paddingBottom: 80,
  },
  logo: {
    width: 250,
    height: 250,
  },
  logoContainer: {
    position: "absolute",
    top: 60,
    alignItems: "center",
  },
  subline: {
    fontSize: 15,
    fontWeight: "700",
  },
  tagline: {
    fontSize: 45,
    fontWeight: "600",
    fontFamily: "Yellowtail",
  },
});

export default WelcomeScreen;
