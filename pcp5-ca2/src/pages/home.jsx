import React from "react";
import { useFitness } from "../context/FitnessContext";
import ActivityCard from "../components/activityCard";

function Activities() {
  const { state, dispatch } = useFitness();

  // Q1 Logic: Filter valid activities (must have ID) without mutation
  const validActivities = state.activities.filter(act => act.activityId);

  const handleToggle = (id) => {
    dispatch({ type: "TOGGLE_GOAL", payload: id });
  };

  return (
    <div className="page-container">
      <h1>Fitness Dashboard</h1>
      <div className="activity-grid">
        {validActivities.map(activity => (
          <ActivityCard 
            key={activity.activityId} 
            activity={activity} 
            onToggleGoal={handleToggle}
          />
        ))}
      </div>
    </div>
  );
}

export default Activities;