import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
// import Hero from "./components/Hero";
// import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import Home from "./Home";
import BookPage from "./pages/BookPage";
import TeamPage from "./pages/TeamPage";
import TeamMemberDetail from "./pages/TeamMemberDetail";

export default function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/book" element={<BookPage />} />
          <Route
            path="/book/:id"
            element={
              <h1 className="my-5 text-center">Book Details (Coming Soon)</h1>
            }
          />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/team/:id" element={<TeamMemberDetail />} />
          <Route
            path="/contact"
            element={<h1 className="my-5 text-center">Contact Us</h1>}
          />
          <Route
            path="*"
            element={<h1 className="my-5 text-center">Page Not Found</h1>}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
