import React, { createContext, useContext, useReducer } from "react";
import { fitnessReducer } from "../reducer/fitnessReducer";

const FitnessContext = createContext();

// Initial dataset based on your example
const initialState = {
  activities: [
    {
      activityId: 2030,
      name: "Jaya",
      steps: 4500,
      caloriesBurned: 180,
      workoutMinutes: 25,
      goalAchieved: false,
      date: "2026-03-10",
    },
    {
      activityId: 2031,
      name: "", // Edge case: missing name (should show Unknown)
      steps: 9000,
      caloriesBurned: 400,
      workoutMinutes: 45,
      goalAchieved: false,
      date: "", // Edge case: missing date (should show No Date)
    },
  ],
};

export const FitnessProvider = ({ children }) => {
  const [state, dispatch] = useReducer(fitnessReducer, initialState);

  // Helper function for Q5: Analytics Dashboard
  // This calculates stats while strictly ignoring invalid entries
  const getStats = () => {
    const validActivities = state.activities.filter(
      (act) => act.activityId && (act.name || act.steps)
    );

    const totalValid = validActivities.length;
    const goalAchievedCount = validActivities.filter(
      (act) => act.goalAchieved === true
    ).length;
    const goalNotAchievedCount = totalValid - goalAchievedCount;

    return {
      totalValid,
      goalAchievedCount,
      goalNotAchievedCount,
    };
  };

  return (
    <FitnessContext.Provider value={{ state, dispatch, getStats }}>
      {children}
    </FitnessContext.Provider>
  );
};

// Custom hook for easy access
export const useFitness = () => {
  const context = useContext(FitnessContext);
  if (!context) {
    throw new Error("useFitness must be used within a FitnessProvider");
  }
  return context;
};