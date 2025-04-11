export default function ContactInfo() {
  return (
    <div className="mt-4 mt-lg-0">
      <h3 className="mb-4 fw-bold">Contact Information</h3>

      <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
        <div className="d-flex mb-4">
          <div className="rounded-circle bg-primary bg-opacity-10 p-3 me-3">
            <i className="fa-solid fa-location-dot text-primary"></i>
          </div>
          <div>
            <h5 className="fw-semibold mb-1">Our Location</h5>
            <p className="text-secondary mb-0">
              123 Bookstore Ave, Literary District
              <br />
              New York, NY 10001
            </p>
          </div>
        </div>

        <div className="d-flex mb-4">
          <div className="rounded-circle bg-primary bg-opacity-10 p-3 me-3">
            <i className="fa-solid fa-envelope text-primary"></i>
          </div>
          <div>
            <h5 className="fw-semibold mb-1">Email Us</h5>
            <p className="text-secondary mb-0">
              <a href="mailto:info@bookstore.com" className="text-secondary">
                info@bookstore.com
              </a>
              <br />
              <a href="mailto:support@bookstore.com" className="text-secondary">
                support@bookstore.com
              </a>
            </p>
          </div>
        </div>

        <div className="d-flex">
          <div className="rounded-circle bg-primary bg-opacity-10 p-3 me-3">
            <i className="fa-solid fa-phone text-primary"></i>
          </div>
          <div>
            <h5 className="fw-semibold mb-1">Call Us</h5>
            <p className="text-secondary mb-0">
              <a href="tel:+12345678900" className="text-secondary">
                +1 (234) 567-8900
              </a>
              <br />
              <a href="tel:+12345678901" className="text-secondary">
                +1 (234) 567-8901
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
        <h5 className="fw-semibold mb-3">Business Hours</h5>
        <ul className="list-unstyled mb-0">
          <li className="d-flex justify-content-between mb-2">
            <span className="text-secondary">Monday - Friday:</span>
            <span className="fw-medium">9:00 AM - 8:00 PM</span>
          </li>
          <li className="d-flex justify-content-between mb-2">
            <span className="text-secondary">Saturday:</span>
            <span className="fw-medium">10:00 AM - 6:00 PM</span>
          </li>
          <li className="d-flex justify-content-between">
            <span className="text-secondary">Sunday:</span>
            <span className="fw-medium">Closed</span>
          </li>
        </ul>
      </div>

      <div className="card border-0 shadow-sm rounded-4 p-4">
        <h5 className="fw-semibold mb-3">Follow Us</h5>
        <div className="d-flex gap-3">
          <a
            href="#"
            className="btn btn-outline-primary rounded-circle"
            aria-label="Facebook"
          >
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a
            href="#"
            className="btn btn-outline-primary rounded-circle"
            aria-label="Twitter"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="#"
            className="btn btn-outline-primary rounded-circle"
            aria-label="Instagram"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="#"
            className="btn btn-outline-primary rounded-circle"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
