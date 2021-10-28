import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";
const key = "authToken";
const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log("Error storing the Authtoken");
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("error geting auth token");
  }
};

const getUser = async () => {
  const token = await getToken();
  return token ? jwtDecode(token) : null;
};

const removeToken = async () => {
  {
    try {
      await SecureStore.deleteItemAsync(key);
    } catch (error) {
      console.log("Error removing The auth token", error);
    }
  }
};

export default { getToken, getUser, removeToken, storeToken };
