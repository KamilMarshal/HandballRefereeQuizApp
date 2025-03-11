import axios from "axios";

const API_URL = "http://192.168.0.201:5000/api/quiz";
// const API_URL = "http://10.55.15.27:5000/api/quiz";

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

