import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import DashboardLayouts from "./layouts/DashboardLayout";

const App: React.FC = () => {
  return (
    <Router>
      <DashboardLayouts>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </DashboardLayouts>
    </Router>
  );
};

export default App;
