import { useState } from "react";

export default function ContactForm({ onSubmit, isLoading, formSubmitted }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general",
    attachment: null,
  });

  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    // Validate file size (max 5MB)
    if (file && file.size > 5 * 1024 * 1024) {
      setErrors({
        ...errors,
        attachment: "File size should not exceed 5MB",
      });
      return;
    }

    setFormData({ ...formData, attachment: file });

    // Clear error when user uploads valid file
    if (errors.attachment) {
      setErrors({ ...errors, attachment: "" });
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (formData.phone && !/^[0-9+\-\s()]*$/.test(formData.phone)) {
      newErrors.phone = "Phone number is invalid";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message should be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormError("");
    setFormSuccess("");

    // Validate form
    if (!validateForm()) {
      setFormError("Please fix the errors in the form");
      return;
    }

    // Submit form
    const result = await onSubmit(formData);

    if (result.success) {
      setFormSuccess(result.message);
      // Reset form on successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        inquiryType: "general",
        attachment: null,
      });
      // Reset file input
      const fileInput = document.getElementById("attachment");
      if (fileInput) fileInput.value = "";
    } else {
      setFormError(result.message);
    }
  };

  return (
    <div id="contact-form" className="card border-0 shadow-sm rounded-4 p-4">
      {formSubmitted ? (
        <div className="text-center py-5">
          <div className="mb-4">
            <i className="fa-solid fa-circle-check text-success fa-4x"></i>
          </div>
          <h3 className="mb-3">Thank You!</h3>
          <p className="text-secondary mb-0">
            Your message has been sent successfully. We'll get back to you soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          {formError && (
            <div className="alert alert-danger" role="alert">
              {formError}
            </div>
          )}

          {formSuccess && (
            <div className="alert alert-success" role="alert">
              {formSuccess}
            </div>
          )}

          <div className="row">
            <div className="col-md-6 mb-4">
              <label htmlFor="name" className="form-label fw-medium">
                Full Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name}</div>
              )}
            </div>

            <div className="col-md-6 mb-4">
              <label htmlFor="email" className="form-label fw-medium">
                Email Address <span className="text-danger">*</span>
              </label>
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <label htmlFor="phone" className="form-label fw-medium">
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                <div className="invalid-feedback">{errors.phone}</div>
              )}
            </div>

            <div className="col-md-6 mb-4">
              <label htmlFor="inquiryType" className="form-label fw-medium">
                Inquiry Type
              </label>
              <select
                className="form-select"
                id="inquiryType"
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
              >
                <option value="general">General Inquiry</option>
                <option value="support">Customer Support</option>
                <option value="orders">Order Information</option>
                <option value="feedback">Feedback</option>
                <option value="partnership">Business Partnership</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="subject" className="form-label fw-medium">
              Subject <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className={`form-control ${errors.subject ? "is-invalid" : ""}`}
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter the subject"
              required
            />
            {errors.subject && (
              <div className="invalid-feedback">{errors.subject}</div>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="form-label fw-medium">
              Message <span className="text-danger">*</span>
            </label>
            <textarea
              className={`form-control ${errors.message ? "is-invalid" : ""}`}
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Type your message here"
              required
            ></textarea>
            {errors.message && (
              <div className="invalid-feedback">{errors.message}</div>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="attachment" className="form-label fw-medium">
              Attachment (Optional)
            </label>
            <input
              type="file"
              className={`form-control ${
                errors.attachment ? "is-invalid" : ""
              }`}
              id="attachment"
              name="attachment"
              onChange={handleFileChange}
            />
            <div className="form-text">
              Max file size: 5MB. Accepted formats: PDF, JPG, PNG, DOC
            </div>
            {errors.attachment && (
              <div className="invalid-feedback">{errors.attachment}</div>
            )}
          </div>

          <div className="mb-4">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="privacyPolicy"
                required
              />
              <label className="form-check-label" htmlFor="privacyPolicy">
                I agree to the{" "}
                <a href="#" className="text-decoration-underline">
                  Privacy Policy
                </a>{" "}
                and consent to processing my data
                <span className="text-danger">*</span>
              </label>
            </div>
          </div>

          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-primary py-3"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
