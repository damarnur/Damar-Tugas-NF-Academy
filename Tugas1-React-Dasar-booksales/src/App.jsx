import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
// import Hero from "./components/Hero";
// import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import Home from "./Home";

export default function App() {
  return (
    <div>
      <Header />
      <main className="flex-grow 1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<h1>Home</h1>} />
          <Route path="/book" element={<h1>Book</h1>} />
          <Route path="/team" element={<h1>Team</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
        </Routes>
      </main>
    </div>
  );
}
