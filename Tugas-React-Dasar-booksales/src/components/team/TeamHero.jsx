import React from "react";

export default function TeamHero() {
  return (
    <section className="py-5 bg-light">
      <div className="container py-4">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <span className="text-primary fw-semibold mb-3 d-block">
              Meet Our Team
            </span>
            <h1 className="display-4 fw-bold mb-4">The Bookstore Family</h1>
            <p
              className="fs-5 text-secondary mb-0 mx-auto"
              style={{ maxWidth: "700px" }}
            >
              Passionate book lovers dedicated to curating the best literary
              experiences for our customers. Get to know the people who make our
              bookstore special.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
