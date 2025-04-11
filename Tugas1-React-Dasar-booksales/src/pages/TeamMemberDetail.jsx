import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { teamData } from "../data/team";

export default function TeamMemberDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading delay for a more polished experience
    const timer = setTimeout(() => {
      const foundMember = teamData.find((m) => m.id.toString() === id);

      if (foundMember) {
        setMember(foundMember);
        setLoading(false);
      } else {
        setError(true);
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [id]);

  // Handle back button
  const handleBack = () => {
    navigate(-1);
  };

  if (loading) {
    return (
      <div className="container py-5 my-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">Loading team member profile...</p>
      </div>
    );
  }

  if (error || !member) {
    return (
      <div className="container py-5 my-5 text-center">
        <div className="alert alert-danger d-inline-block">
          <h3 className="h4 mb-2">Team Member Not Found</h3>
          <p>Sorry, we couldn't find the team member you're looking for.</p>
          <Link to="/team" className="btn btn-primary mt-2">
            View All Team Members
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/team">Team</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {member.name}
          </li>
        </ol>
      </nav>

      <div className="mb-4">
        <button
          onClick={handleBack}
          className="btn btn-outline-secondary rounded-pill px-4"
        >
          <i className="fa-solid fa-arrow-left me-2"></i> Back
        </button>
      </div>

      <div className="card border-0 shadow-sm rounded-4 overflow-hidden mb-5">
        <div className="row g-0">
          <div className="col-lg-4 position-relative">
            {/* Placeholder before image loads */}
            {!imageLoaded && (
              <div
                className="bg-light d-flex align-items-center justify-content-center"
                style={{ minHeight: "400px" }}
              >
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}

            {/* Team member image */}
            <img
              src={member.photo}
              alt={member.name}
              className={`w-100 h-100 ${!imageLoaded ? "d-none" : "d-block"}`}
              style={{
                objectFit: "cover",
                minHeight: "400px",
              }}
              onLoad={() => setImageLoaded(true)}
            />

            {/* Department badge */}
            <div className="position-absolute top-0 end-0 m-3">
              <span className="badge bg-light text-primary px-3 py-2 rounded-pill shadow-sm">
                {member.department}
              </span>
            </div>

            {/* Leadership badge if applicable */}
            {member.isLeader && (
              <div className="position-absolute top-0 start-0 m-3">
                <span className="badge bg-primary px-3 py-2 rounded-pill">
                  {member.leadershipTitle || "Leadership"}
                </span>
              </div>
            )}
          </div>

          <div className="col-lg-8">
            <div className="card-body p-4 p-lg-5">
              <h1 className="display-6 fw-bold mb-1">{member.name}</h1>
              <p className="text-primary fw-semibold fs-4 mb-4">
                {member.position}
              </p>

              <div className="d-flex gap-3 mb-4">
                {member.social?.email && (
                  <a
                    href={`mailto:${member.social.email}`}
                    className="btn btn-light rounded-circle"
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
                    className="btn btn-light rounded-circle"
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
                    className="btn btn-light rounded-circle"
                    aria-label={`${member.name}'s Twitter profile`}
                  >
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                )}
              </div>

              <div className="mb-4">
                <h2 className="h4 fw-semibold mb-3">About</h2>
                <p className="text-secondary mb-4">{member.bio}</p>

                {member.fullBio && (
                  <div>
                    <p className="text-secondary mb-4">{member.fullBio}</p>
                  </div>
                )}

                {member.quote && (
                  <blockquote className="blockquote border-start border-primary border-4 ps-4 my-4">
                    <p className="fst-italic mb-0">"{member.quote}"</p>
                  </blockquote>
                )}
              </div>

              {member.expertise && member.expertise.length > 0 && (
                <div className="mb-4">
                  <h2 className="h4 fw-semibold mb-3">Expertise</h2>
                  <div className="d-flex flex-wrap gap-2">
                    {member.expertise.map((skill, index) => (
                      <span
                        key={index}
                        className="badge bg-light text-secondary px-3 py-2 rounded-pill"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {member.education && member.education.length > 0 && (
                <div className="mb-4">
                  <h2 className="h4 fw-semibold mb-3">Education</h2>
                  <ul className="list-unstyled">
                    {member.education.map((edu, index) => (
                      <li key={index} className="mb-2">
                        <div className="d-flex align-items-center">
                          <i className="fa-solid fa-graduation-cap text-primary me-2"></i>
                          <span>{edu}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-4 pt-2">
                <Link
                  to="/team"
                  className="btn btn-outline-primary rounded-pill px-4 me-2"
                >
                  View All Team Members
                </Link>
                {member.social?.email && (
                  <a
                    href={`mailto:${member.social.email}`}
                    className="btn btn-primary rounded-pill px-4"
                  >
                    Contact {member.name.split(" ")[0]}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recommendations for other team members */}
      <div className="mt-5">
        <h2 className="h3 fw-bold mb-4 text-center">Meet More Team Members</h2>
        <div className="row g-4 justify-content-center">
          {teamData
            .filter(
              (m) => m.id !== member.id && m.department === member.department
            )
            .slice(0, 3)
            .map((relatedMember) => (
              <div key={relatedMember.id} className="col-md-4">
                <div className="card border-0 shadow-sm rounded-4 h-100">
                  <div className="card-body p-4 text-center">
                    <img
                      src={relatedMember.photo}
                      alt={relatedMember.name}
                      className="rounded-circle mx-auto mb-3"
                      style={{
                        width: "120px",
                        height: "120px",
                        objectFit: "cover",
                      }}
                      loading="lazy"
                    />
                    <h3 className="h5 fw-semibold mb-1">
                      {relatedMember.name}
                    </h3>
                    <p className="text-primary small mb-3">
                      {relatedMember.position}
                    </p>
                    <Link
                      to={`/team/${relatedMember.id}`}
                      className="btn btn-sm btn-outline-primary rounded-pill px-3"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
