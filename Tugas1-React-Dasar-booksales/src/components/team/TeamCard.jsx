import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function TeamCard({ member }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="card border-0 shadow-sm rounded-4 h-100 team-card">
      <div className="card-body p-4 text-center">
        <div
          className="position-relative mb-4 mx-auto"
          style={{ maxWidth: "200px" }}
        >
          {/* Placeholder before image loads */}
          {!imageLoaded && (
            <div
              className="rounded-circle bg-light d-flex align-items-center justify-content-center"
              style={{ width: "180px", height: "180px" }}
            >
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}

          {/* Actual image with lazy loading */}
          <img
            src={member.photo}
            alt={member.name}
            className={`rounded-circle mx-auto ${
              !imageLoaded ? "d-none" : "d-block"
            }`}
            style={{
              width: "180px",
              height: "180px",
              objectFit: "cover",
              transition: "opacity 0.3s ease",
            }}
            onLoad={() => setImageLoaded(true)}
            loading="lazy"
          />

          {/* Department badge */}
          <span className="position-absolute bottom-0 end-0 badge rounded-pill bg-light text-primary px-3 py-2 shadow-sm">
            {member.department}
          </span>
        </div>

        <h3 className="h4 fw-semibold mb-1">{member.name}</h3>
        <p className="text-primary mb-3">{member.position}</p>

        <p className="text-secondary mb-4">{member.bio}</p>

        <div className="d-flex justify-content-center gap-2 mb-3">
          {member.social?.email && (
            <a
              href={`mailto:${member.social.email}`}
              className="btn btn-sm btn-light rounded-circle"
              aria-label={`Email ${member.name}`}
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
          )}
          {member.social?.linkedin && (
            <a
              href={member.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-light rounded-circle"
              aria-label={`${member.name}'s LinkedIn profile`}
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          )}
          {member.social?.twitter && (
            <a
              href={member.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-light rounded-circle"
              aria-label={`${member.name}'s Twitter profile`}
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
          )}
        </div>

        <Link
          to={`/team/${member.id}`}
          className="btn btn-outline-primary rounded-pill px-4 mt-2"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
}
