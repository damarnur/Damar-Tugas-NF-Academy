import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import TeamHero from "../components/team/TeamHero";
import TeamList from "../components/team/TeamList";
import TeamFilter from "../components/team/TeamFilter";
import { teamData } from "../data/team";

export default function TeamPage() {
  const [filteredMembers, setFilteredMembers] = useState(teamData);
  const [departments, setDepartments] = useState([]);
  const [activeDepartment, setActiveDepartment] = useState("All");
  const [searchParams, setSearchParams] = useSearchParams();

  // Extract unique departments
  useEffect(() => {
    const allDepartments = [
      "All",
      ...new Set(teamData.map((member) => member.department)),
    ];
    setDepartments(allDepartments);

    // Check URL params for initial state
    const departmentParam = searchParams.get("department");

    if (departmentParam) {
      setActiveDepartment(departmentParam);
      applyFilters(departmentParam);
    }
  }, [searchParams]);

  // Apply filters based on department
  const applyFilters = (department = "All") => {
    let filtered = [...teamData];

    // Filter by department
    if (department && department !== "All") {
      filtered = filtered.filter((member) => member.department === department);
    }

    // Sort by leadership role first, then by order value
    filtered.sort((a, b) => {
      // First by leadership (leaders first)
      if (a.isLeader !== b.isLeader) {
        return a.isLeader ? -1 : 1;
      }
      // Then by order value if present
      if (a.order !== undefined && b.order !== undefined) {
        return a.order - b.order;
      }
      // Default to name sort
      return a.name.localeCompare(b.name);
    });

    setFilteredMembers(filtered);
  };

  // Handle department change
  const handleDepartmentChange = (department) => {
    setActiveDepartment(department);
    applyFilters(department);

    // Update URL params
    const params = new URLSearchParams(searchParams);
    params.set("department", department);
    setSearchParams(params);
  };

  return (
    <div>
      <TeamHero />

      <section className="py-5">
        <div className="container">
          {departments.length > 2 && (
            <div className="mb-5">
              <TeamFilter
                departments={departments}
                activeDepartment={activeDepartment}
                onDepartmentChange={handleDepartmentChange}
              />
            </div>
          )}

          <TeamList
            members={filteredMembers}
            activeDepartment={activeDepartment}
          />
        </div>
      </section>
    </div>
  );
}
