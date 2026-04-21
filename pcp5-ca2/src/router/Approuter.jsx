import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layout/mainLayout";
import Activities from "../pages/home";
import ActivityDetail from "../pages/activitesDetails";
import ActivityFilter from "../components/activityFilter";
import Stats from "../pages/stats";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* MainLayout contains your Header and Footer */}
        <Route element={<MainLayout />}>
          {/* Q1: Display valid activities */}
          <Route path="/" element={<Activities />} />
          <Route path="/activities" element={<Activities />} />
          
          {/* Q2: Activity Details View */}
          <Route path="/activities/:id" element={<ActivityDetail />} />
          
          {/* Q3: Filter Activity */}
          <Route path="/filter" element={<ActivityFilter />} />
          
          {/* Q5: Analytics Dashboard */}
          <Route path="/stats" element={<Stats />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;