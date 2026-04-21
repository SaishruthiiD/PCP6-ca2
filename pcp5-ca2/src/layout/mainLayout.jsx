import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header"; // Adjust path based on your folder
import Footer from "../components/footer"; // Adjust path based on your folder

function MainLayout() {
  return (
    <div className="app-container">
      {/* Persists on every page */}
      <Header />

      {/* Main Content Area */}
      <main className="main-content">
        <div className="content-wrapper">
          {/* The Outlet renders the current child route 
            (e.g., ActivityList, Stats, or Details) 
          */}
          <Outlet />
        </div>
      </main>

      {/* Persists on every page */}
      <Footer />
    </div>
  );
}

export default MainLayout;