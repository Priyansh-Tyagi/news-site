export default function Business() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchNewsByCategory("business").then(setArticles);
  }, []);

  return (
    <div className="container">
      <h1>Business News</h1>

      <div className="grid">
        {articles.map((a, i) => (
          <NewsCard key={i} article={a} />
        ))}
      </div>
    </div>
  );
}
