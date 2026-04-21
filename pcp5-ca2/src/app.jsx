import React from "react";
import "./App.css";
import { FitnessProvider } from "./context/FitnessContext";
import AppRouter from "./router/Approuter";

function App() {
  return (
    /** * Wrap the entire app in the Provider. 
     * This allows any child component (Header, Activities, Stats) 
     * to use the 'useFitness' hook.
     */
    <FitnessProvider>
      <div className="app">
        <AppRouter />
      </div>
    </FitnessProvider>
  );
}

export default App;