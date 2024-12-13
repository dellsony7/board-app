import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import DashboardLayouts from "./layouts/DashboardLayout";
import SportsXi from "./pages/SportsXi";

const App: React.FC = () => {
  return (
    <Router>
      <DashboardLayouts>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard/sport-xi" element={<SportsXi />} />
        </Routes>
      </DashboardLayouts>
    </Router>
  );
};

export default App;
