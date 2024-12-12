import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./layouts/DashboardLayout";


const App: React.FC = () => {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
};

export default App;
