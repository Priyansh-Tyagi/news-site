const API_KEY = "pub_7e9afab256f54419b9d78e91a3bdc6b0";
const BASE_URL = "https://newsdata.io/api/1/latest?";

export const fetchNewsByCategory = async (category = "") => {
  const url = `${BASE_URL}?country=us&category=${category}&apiKey=${API_KEY}`;

  const res = await fetch(url);
  const data = await res.json();

  return data.articles || [];
};
