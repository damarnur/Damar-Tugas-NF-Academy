import Hero from "./components/Hero";
import books from "./Utils/books.js";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="py-5 my-5">
        <div className="container">
          <div className="row mb-5 text-center">
            <div className="col-lg-8 mx-auto">
              <span className="text-primary fw-semibold mb-3 d-block">
                koleksi buku
              </span>
              <h2 className="display-5 fw-bold mb-44"> Buku Terpopuler</h2>
              <p
                className="fs-5 text-secondary mb-5 lh-lg mx-auto"
                style={{ maxWidth: "700px" }}
              >
                Jelajahi koleksi yang kami sediakan. Berbagai macam buku yang
                siap anda baca.
              </p>
              <div className="d-flex gap-3 justify-content-center">
                <Link to="/book" className="btn btn-primary px-4 py-2">
                  Lihat Semua
                </Link>
                <button className="btn btn-outline-secondary px-4 py-2">
                  Buku Terbaru
                </button>
              </div>
            </div>
          </div>

          <div className="row g-5">
            {books.map((book) => (
              <div key={book.id} className="col-md6 col-lg-4">
                <div className="card border-0 h-100">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="card-img-top rounder-4 shadow-sm"
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                  <div className="card-body px-0 pt-4">
                    <h3 className="card-title fw-semibold mb-3">
                      {book.title}
                    </h3>
                    <p className="card-text text-secondary mb-4">
                      {book.description}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="text-primary">{book.author}</span>
                      <span className="text-secondary fs-sm">{book.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
