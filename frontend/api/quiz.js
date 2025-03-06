import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// const API_URL = "http://localhost:5000/api/quiz";
const API_URL = "http://10.55.14.122:5000/api/quiz";

export const getRandomQuestion = async (lang = "pl") => {
  try {

    const res = await axios.get(`${API_URL}/random-one`, {
      params: { lang: lang },
    });

    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    console.log("Błąd API:", err.response?.data || err.message);
    return false;
  }
};

