import React from "react";

export default function TeamFilter({
  departments,
  activeDepartment,
  onDepartmentChange,
}) {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center justify-content-center mb-4">
      <span className="fw-semibold me-md-4 mb-3 mb-md-0">
        Filter by Department:{" "}
      </span>
      <div className="d-flex flex-wrap justify-content-center gap-2">
        {departments.map((department) => (
          <button
            key={department}
            onClick={() => onDepartmentChange(department)}
            className={`btn rounded-pill px-4 py-2 ${
              activeDepartment === department
                ? "btn-primary"
                : "btn-outline-secondary"
            }`}
          >
            {department}
          </button>
        ))}
      </div>
    </div>
  );
}
