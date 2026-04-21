import React, { useState } from "react";
import ActivityCard from "./activityCard";
import { useFitness } from "../context/FitnessContext";

function ActivityFilter() {
  const { state } = useFitness();
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");

  // Use only valid activities from Q1 logic
  const validData = state.activities.filter((act) => act.activityId);

  const filteredActivities = validData.filter((act) => {
    if (!searchTerm) return false;
    return (act.name || "Unknown").toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Q3: Handle validation messages
    if (value.trim() === "") {
      setError("Please enter a name to search.");
    } else {
      setError("");
    }
  };

  return (
    <div className="filter-page">
      <h2>Search Activities</h2>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleChange}
        className="search-input"
      />

      {error && <p className="error-msg" style={{ color: "red" }}>{error}</p>}

      <div className="results-container">
        {searchTerm && filteredActivities.length === 0 && !error && (
          <p>Invalid input or no activity found with that name.</p>
        )}

        {filteredActivities.map((act) => (
          <ActivityCard key={act.activityId} activity={act} />
        ))}
      </div>
    </div>
  );
}

export default ActivityFilter;