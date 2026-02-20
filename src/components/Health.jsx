export default function Health() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchNewsByCategory("health").then(setArticles);
  }, []);

  return (
    <div className="container">
      <h1>Health News</h1>

      <div className="grid">
        {articles.map((a, i) => (
          <NewsCard key={i} article={a} />
        ))}
      </div>
    </div>
  );
}
