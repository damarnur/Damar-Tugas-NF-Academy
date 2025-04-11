import React from "react";

export default function BookHero() {
  return (
    <section className="py-5 bg-light">
      <div className="container py-4">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <span className="text-primary fw-semibold mb-3 d-block">
              Explore Our Library
            </span>
            <h1 className="display-4 fw-bold mb-4">Book Collection</h1>
            <p
              className="fs-5 text-secondary mb-0 mx-auto"
              style={{ maxWidth: "700px" }}
            >
              Discover our comprehensive collection of books spanning various
              genres, from timeless classics to contemporary bestsellers. Find
              your perfect literary companion today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
