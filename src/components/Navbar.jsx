import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">DailyNews</h2>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/sports">Sports</Link>
        <Link to="/tech">Tech</Link>
        <Link to="/business">Business</Link>
        <Link to="/health">Health</Link>
      </div>
    </nav>
  );
}
