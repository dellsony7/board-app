import React from "react";
import ProjectHeader from "../components/ProjectHeader";
import ProjectCards from "../components/grid/ProjectCards";

const Dashboard: React.FC = () => {
  return (
    <div>
      <ProjectHeader />
      <ProjectCards />
    </div>
  );
};

export default Dashboard;
