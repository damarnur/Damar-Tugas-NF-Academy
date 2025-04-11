import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
// import Hero from "./components/Hero";
// import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import Home from "./Home";

export default function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/book"
            element={<h1 className="my-5 text-center">Book Collection</h1>}
          />
          <Route
            path="/team"
            element={<h1 className="my-5 text-center">Our Team</h1>}
          />
          <Route
            path="/contact"
            element={<h1 className="my-5 text-center">Contact Us</h1>}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
