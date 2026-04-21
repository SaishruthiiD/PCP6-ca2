export const fitnessReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_GOAL":
      return {
        ...state,
        activities: state.activities.map((act) => {
          if (act.activityId === action.payload) {
            // Check condition: steps > 8000
            const canAchieveGoal = act.steps > 8000;
            
            return { 
              ...act, 
              // Toggle logic: only set to true if condition is met
              goalAchieved: !act.goalAchieved && canAchieveGoal ? true : !act.goalAchieved 
            };
          }
          return act;
        }),
      };

    case "SET_ACTIVITIES":
      return {
        ...state,
        activities: action.payload,
      };

    default:
      return state;
  }
};