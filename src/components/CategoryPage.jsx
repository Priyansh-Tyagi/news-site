import { useEffect, useState } from "react";
import { fetchNewsByCategory } from "../services/newsService.js";
import NewsCard from "./NewsCard";


export default function CategoryPage({ category, title }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchNewsByCategory(category).then(setArticles);
  }, [category]);

  return (
    <div className="container">
      <h1>{title}</h1>

      <div className="grid">
        {articles.map((a, i) => (
          <NewsCard key={i} article={a} />
        ))}
      </div>
    </div>
  );
}
