export default function NewsCard({ article }) {
  return (
    <div className="card">
      <img
  src={article.image_url || "https://via.placeholder.com/300"}
  alt={article.title || "News image"}
/>

      <div className="card-body">
        <h3>{article.title}</h3>
        <p>{article.description}</p>

        <a href={article.url} target="_blank">
          Read More →
        </a>
      </div>
    </div>
  );
}
