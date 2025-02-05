import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const API_URL = "http://192.168.0.202:5000/api/auth";

// 🔐 Logowanie
export const login = async (username, password) => {
  try {
    console.log("(front api)  username:",username,"Pass",password)
    const res = await axios.post(`${API_URL}/login`, { username: username, password: password });
    console.log("(front api) res.data:" , res.data)

    await AsyncStorage.setItem("token", res.data.token);
    return true;
  } catch (err) {
    console.log(err)
    return false;
  }
};

// 📌 Sprawdzanie, czy użytkownik jest zalogowany
export const checkAuth = async () => {
  const token = await AsyncStorage.getItem("token");
  if (!token) return false;

  try {
    const res = await axios.post(`${API_URL}/verify`, { token });
    return res.data.valid;
  } catch (err) {
    return false;
  }
};

// 🚪 Wylogowanie
export const logout = async () => {
  await AsyncStorage.removeItem("token");
};