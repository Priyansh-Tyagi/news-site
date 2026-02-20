const API_KEY = "c7102b3a4e6c4e948dc6423556b39272";
const BASE_URL = "https://newsapi.org/v2/top-headlines";

export const fetchNewsByCategory = async (category = "") => {
  const url = `${BASE_URL}?country=us&category=${category}&apiKey=${API_KEY}`;

  const res = await fetch(url);
  const data = await res.json();

  return data.articles || [];
};
