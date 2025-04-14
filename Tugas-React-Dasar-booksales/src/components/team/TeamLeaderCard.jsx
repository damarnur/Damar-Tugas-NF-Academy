import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function TeamLeaderCard({ member }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="card border-0 shadow-sm rounded-4 h-100 team-leader-card">
      <div className="card-body p-0">
        <div className="row g-0 h-100">
          <div className="col-md-5 position-relative">
            {/* Placeholder before image loads */}
            {!imageLoaded && (
              <div className="bg-light d-flex align-items-center justify-content-center h-100 rounded-start-4">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}

            {/* Actual image with lazy loading */}
            <img
              src={member.photo}
              alt={member.name}
              className={`h-100 w-100 rounded-start-4 ${
                !imageLoaded ? "d-none" : "d-block"
              }`}
              style={{
                objectFit: "cover",
                transition: "opacity 0.3s ease",
                minHeight: "300px",
              }}
              onLoad={() => setImageLoaded(true)}
              loading="lazy"
            />

            {/* Leadership badge */}
            <div className="position-absolute top-0 start-0 m-3">
              <span className="badge bg-primary px-3 py-2 rounded-pill">
                {member.leadershipTitle || "Leadership"}
              </span>
            </div>
          </div>

          <div className="col-md-7 d-flex flex-column p-4">
            <div>
              <h3 className="h3 fw-bold mb-1">{member.name}</h3>
              <p className="text-primary fw-semibold mb-3">{member.position}</p>

              <div className="d-flex gap-2 mb-4">
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
            </div>

            <div className="mb-4 flex-grow-1">
              <p className="text-secondary">{member.bio}</p>
              {member.quote && (
                <blockquote className="blockquote mt-3 border-start border-primary border-4 ps-3">
                  <p className="small fst-italic mb-0">"{member.quote}"</p>
                </blockquote>
              )}
            </div>

            <div className="mt-auto">
              <Link
                to={`/team/${member.id}`}
                className="btn btn-primary rounded-pill px-4"
              >
                View Full Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
