import React from "react";
import ActivityCard from "./activityCard";
import { useFitness } from "../context/FitnessContext";

function ActivityList() {
  const { state, dispatch } = useFitness();

  // Q1: Filter valid activities (must have an ID) without mutating original state
  const validActivities = state.activities.filter((act) => act.activityId);

  // Q4: Toggle Goal functionality using Reducer
  const handleToggle = (id) => {
    dispatch({ type: "TOGGLE_GOAL", payload: id });
  };

  return (
    <div className="activity-list-container">
      <h2>Activity Dashboard</h2>
      {validActivities.length === 0 ? (
        <p>No valid activities found.</p>
      ) : (
        <div className="activity-grid">
          {validActivities.map((activity) => (
            <ActivityCard 
              key={activity.activityId} 
              activity={activity} 
              onToggleGoal={handleToggle}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ActivityList;