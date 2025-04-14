import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="py-4 mb-5">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <div className="mb-3 mb-md-0">
            <Link
              to="/"
              className="d-inline-flex align-items-center text-decoration-none"
            >
              <i
                className="fa-solid fa-book fa-2xl"
                style={{ color: "#4dabf7" }}
              ></i>
              <span className="ms-3 fs-4 fw-medium">bookstore</span>
            </Link>
          </div>

          <nav className="my-2 my-md-0 me-md-3">
            <ul className="nav d-flex gap-4 justify-content-center">
              <li>
                <Link className="nav-link px-0 text-dark fw-medium" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link px-0 text-secondary" to="/book">
                  Book
                </Link>
              </li>
              <li>
                <Link className="nav-link px-0 text-secondary" to="/team">
                  Team
                </Link>
              </li>
              <li>
                <Link className="nav-link px-0 text-secondary" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="d-flex gap-2">
            <button type="button" className="btn btn-outline-primary px-4">
              Login
            </button>
            <button type="button" className="btn btn-primary px-4">
              Register
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
