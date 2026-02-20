import { useEffect, useState } from "react";
import { fetchNewsByCategory } from "../services/newsService";
import NewsCard from "./NewsCard";

export default function Sports() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchNewsByCategory("sports").then(setArticles);
  }, []);

  return (
    <div className="container">
      <h1>Sports News</h1>

      <div className="grid">
        {articles.map((a, i) => (
          <NewsCard key={i} article={a} />
        ))}
      </div>
    </div>
  );
}
