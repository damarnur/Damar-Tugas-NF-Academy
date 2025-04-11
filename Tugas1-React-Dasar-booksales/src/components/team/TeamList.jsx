import React from "react";
import TeamCard from "./TeamCard";
import TeamLeaderCard from "./TeamLeaderCard";

export default function TeamList({ members, activeDepartment }) {
  if (members.length === 0) {
    return (
      <div className="text-center py-5">
        <i className="fa-solid fa-users fa-3x text-secondary mb-3"></i>
        <h4 className="mb-2">No team members found</h4>
        <p className="text-secondary">
          There are no team members in this department.
        </p>
      </div>
    );
  }

  // Group leaders (if any exist)
  const leaders = members.filter((member) => member.isLeader);
  const regularMembers = members.filter((member) => !member.isLeader);

  return (
    <div>
      {/* Display department title if filtering by department */}
      {activeDepartment !== "All" && (
        <div className="text-center mb-5">
          <h2 className="h2 fw-bold">{activeDepartment} Team</h2>
          <p className="text-secondary">
            Meet our dedicated {activeDepartment.toLowerCase()} professionals
          </p>
        </div>
      )}

      {/* Leadership section if there are leaders */}
      {leaders.length > 0 && activeDepartment === "All" && (
        <div className="mb-5">
          <div className="text-center mb-4">
            <h2 className="h2 fw-bold">Leadership</h2>
            <p className="text-secondary mb-4">
              Meet the talented individuals who guide our vision and mission
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {leaders.map((leader) => (
              <div
                key={leader.id}
                className={`col-lg-${leaders.length > 1 ? "6" : "8"} col-md-6 ${
                  leaders.length === 1 ? "mx-auto" : ""
                }`}
              >
                <TeamLeaderCard member={leader} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Regular team members */}
      <div className="row g-4 justify-content-center">
        {(activeDepartment === "All" ? regularMembers : members).map(
          (member) => (
            <div key={member.id} className="col-lg-4 col-md-6">
              <TeamCard member={member} />
            </div>
          )
        )}
      </div>
    </div>
  );
}
