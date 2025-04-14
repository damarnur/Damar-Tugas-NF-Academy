export default function Footer() {
  return (
    <footer className="py-5 mt-5 border-top">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="mb-4 fw-semibold">bookstore</h5>
            <p className="text-secondary">
              Your destination for curated literary experiences, connecting
              readers with stories that inspire, entertain, and transform.
            </p>
          </div>
          <div className="col-md-2 mb-4 mb-md-0">
            <h6 className="mb-3 text-secondary fw-semibold">Navigation</h6>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-secondary">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-secondary">
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-secondary">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-secondary">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-secondary">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-4 mb-md-0">
            <h6 className="mb-3 text-secondary fw-semibold">Contact</h6>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-secondary">
                  Email
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-secondary">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <form>
              <h6 className="mb-3 text-secondary fw-semibold">
                Subscribe to our newsletter
              </h6>
              <div className="d-flex flex-column flex-sm-row gap-2">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email address"
                />
                <button className="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between pt-4 mt-4 border-top">
          <p className="text-secondary">&copy; 2025 Damar NurFadhil Akbar</p>
          <ul className="list-unstyled d-flex gap-3">
            <li>
              <a href="#" className="text-secondary">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#" className="text-secondary">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" className="text-secondary">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
