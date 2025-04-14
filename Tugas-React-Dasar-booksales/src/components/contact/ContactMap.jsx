export default function ContactMap() {
  return (
    <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
      <div className="ratio ratio-21x9">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215685965721!2d-73.98656492396913!3d40.75889333574369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1690214974672!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Bookstore Location"
          aria-label="Map showing our bookstore location"
        ></iframe>
      </div>
      <div className="card-body p-4">
        <div className="row align-items-center">
          <div className="col-md-6 mb-3 mb-md-0">
            <h5 className="card-title fw-bold mb-2">Visit Our Bookstore</h5>
            <p className="card-text text-secondary mb-0">
              123 Bookstore Ave, Literary District, New York, NY 10001
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <a
              href="https://maps.google.com/?q=Times+Square,+New+York,+NY"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <i className="fa-solid fa-directions me-2"></i>
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
