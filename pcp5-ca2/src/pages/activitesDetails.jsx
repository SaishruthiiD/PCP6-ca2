import React from "react";
import { useParams } from "react-router-dom";
import { useFitness } from "../context/FitnessContext";

function ActivityDetail() {
  const { id } = useParams();
  const { state } = useFitness();

  const activity = state.activities.find(a => a.activityId === parseInt(id));

  // Q2 Edge Case: Invalid ID
  if (!activity) {
    return (
      <div className="error-container">
        <h2>Activity not found</h2>
        <p>The activity ID you are looking for does not exist.</p>
      </div>
    );
  }

  // Q2 Logic: Compute Efficiency Score dynamically
  const efficiencyScore = (activity.caloriesBurned / activity.workoutMinutes).toFixed(2);

  return (
    <div className="detail-view">
      <h2>Activity Details: {activity.name || "Unknown"}</h2>
      <div className="detail-card">
        <p><strong>Steps:</strong> {activity.steps}</p>
        <p><strong>Calories Burned:</strong> {activity.caloriesBurned}</p>
        <p><strong>Efficiency Score:</strong> {efficiencyScore} cal/min</p>
        <p><strong>Status:</strong> {activity.goalAchieved ? "Goal Achieved" : "Pending"}</p>
      </div>
    </div>
  );
}

export default ActivityDetail;