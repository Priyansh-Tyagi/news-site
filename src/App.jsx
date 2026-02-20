import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CategoryPage from "./components/CategoryPage";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/sports"
          element={<CategoryPage category="sports" title="Sports News" />}
        />

        <Route
          path="/tech"
          element={<CategoryPage category="technology" title="Tech News" />}
        />

        <Route
          path="/business"
          element={<CategoryPage category="business" title="Business News" />}
        />

        <Route
          path="/health"
          element={<CategoryPage category="health" title="Health News" />}
        />
      </Routes>
    </BrowserRouter>
  );
}
