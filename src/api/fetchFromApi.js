import axios from "axios";

const BASE_URL = "https://anime-db.p.rapidapi.com";
const options = {
  url: BASE_URL,
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
    "x-rapidapi-host": "anime-db.p.rapidapi.com",
  },
};

export const fetchFromAPi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
