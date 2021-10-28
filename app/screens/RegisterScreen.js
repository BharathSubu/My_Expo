import React, { useState } from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  SubmitButton,
  ErrorMessage,
} from "../components/forms";
import defaultStyles from "../config/styles";
import Screen from "../components/Screen";
import usersApi from "../api/users";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";

import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen(props) {
  const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);
  const auth = useAuth();
  const [error, setError] = useState();

  const handleSubmit = async (userInfo) => {
    const result = await registerApi.request(userInfo);

    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error occurred.");
        console.log(result);
      }
      return;
    }

    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    );
    auth.logIn(authToken);
  };

  let [fontsLoaded] = useFonts({
    Yellowtail: require("../assets/fonts/Yellowtail-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <Screen style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../assets/logoHandShake.png")}
        />
        <AppForm
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <View style={styles.appNameContainer}>
            <Text style={styles.subline}>SREC'S</Text>
            <Text style={styles.tagline}>College Mate</Text>
          </View>
          <ErrorMessage error={error} visible={error} />
          <AppFormField
            name="name"
            autoCorrect={false}
            icon="account"
            placeholder="(ClickMe)Name"
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
            <SubmitButton title="Register" />
          </View>
        </AppForm>
      </Screen>
    </>
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
export default RegisterScreen;
