import React from "react";
import { Link } from "react-router-dom";

function ActivityCard({ activity, onToggleGoal }) {
  // Logic for edge cases: missing name or date
  const displayName = activity.name || "Unknown";
  const displayDate = activity.date || "No Date";

  return (
    <div className="activity-card">
      <h3>{displayName}</h3>
      <p className="activity-date">📅 {displayDate}</p>
      
      <div className="stats-row">
        <span>Steps: **{activity.steps}**</span>
        <span>Mins: **{activity.workoutMinutes}**</span>
      </div>

      <div className={`status-badge ${activity.goalAchieved ? "success" : "pending"}`}>
        {activity.goalAchieved ? "Goal Achieved ✅" : "Goal Pending 🏃"}
      </div>

      <div className="card-actions">
        <Link to={`/activities/${activity.activityId}`} className="view-link">
          View Details
        </Link>
        <button 
          onClick={() => onToggleGoal(activity.activityId)}
          className="toggle-btn"
        >
          Update Status
        </button>
      </div>
    </div>
  );
}

export default ActivityCard;