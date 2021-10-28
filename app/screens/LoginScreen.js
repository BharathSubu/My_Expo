import React, { useContext, useState } from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  ErrorMessage,
} from "../components/forms";
import defaultStyles from "../config/styles";
import authApi from "../api/auth";

import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

import useAuth from "../auth/useAuth";
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  const auth = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    auth.logIn(result.data);
  };
  // always use app font loading last
  let [fontsLoaded] = useFonts({
    Yellowtail: require("../assets/fonts/Yellowtail-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/logoHandShake.png")}
      />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <View style={styles.appNameContainer}>
          <Text style={styles.subline}>SREC'S</Text>
          <Text style={styles.tagline}>College Mate</Text>
        </View>
        <ErrorMessage
          error="Invalid Email and/or Password"
          visible={loginFailed}
        />
        <AppFormField
          name="email"
          autoCorrect={false}
          autoCapitalize="none"
          icon="email"
          keyboardType="email-address"
          placeholder="(ClickMe)Email"
          textContentType="emailAddress"
        />

        <AppFormField
          name="password"
          secureTextEntry
          autoCorrect={false}
          autoCapitalize="none"
          icon="lock"
          placeholder="(ClickMe)Password"
          textContentType="password"
        />

        <View style={styles.button}>
          <SubmitButton title="login" />
        </View>
      </AppForm>
    </Screen>
  );
}
const styles = StyleSheet.create({
  appNameContainer: {
    alignSelf: "center",
  },
  button: {
    top: 35,
    margin: 30,
  },
  container: {
    padding: 10,
    backgroundColor: defaultStyles.colors.lightGreen,
  },
  logo: {
    width: 150,
    height: 120,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  subline: {
    fontSize: 15,
    fontWeight: "700",
    alignSelf: "center",
  },
  tagline: {
    fontSize: 45,
    fontWeight: "600",
    fontFamily: "Yellowtail",
    paddingBottom: 20,
  },
});
export default LoginScreen;
