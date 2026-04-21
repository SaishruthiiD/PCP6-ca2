import React from "react";
import { useFitness } from "../context/FitnessContext";

function Stats() {
  const { state } = useFitness();

  // Q5 Logic: Filter invalid activities and calculate stats
  const validData = state.activities.filter(act => act.activityId && act.name);
  
  const goalAchieved = validData.filter(act => act.goalAchieved).length;
  const goalNotAchieved = validData.length - goalAchieved;

  return (
    <div className="stats-container">
      <h1>Activity Analytics</h1>
      <div className="stats-grid">
        <div className="stat-item">
          <h3>Total Valid Activities</h3>
          <p>{validData.length}</p>
        </div>
        <div className="stat-item">
          <h3>Goals Achieved</h3>
          <p className="success-text">{goalAchieved}</p>
        </div>
        <div className="stat-item">
          <h3>Goals Pending</h3>
          <p className="pending-text">{goalNotAchieved}</p>
        </div>
      </div>
    </div>
  );
}

export default Stats;