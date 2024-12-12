import React from "react";
import "../styles/ProjectHeader.css";

const ProjectHeader: React.FC = () => {
  return (
    <div className="projectHeader">
      <div className="headerTitle">
        <span className="projectTitle">Sport Xi Project</span>
        <div className="projectInfo"></div>
      </div>
      <span className="projectCategory">Event Production</span>
      <div className="assignedMembersSection">
        <span className="assignedLabel">Assigned</span>
        <div className="assignedMembers">
          <div className="memberName"></div>
          <div className="memberName"></div>
          <div className="memberName"></div>
          <div className="extraMembers">
            <div className="infoIcon"></div>
            <span className="extraMembersCount">+2</span>
          </div>
        </div>
      </div>
      <div className="manageSection">
        <span className="manageLabel">Manage</span>
        <div className="manageActions"></div>
      </div>
      <div className="lastUpdatedSection">
        <span className="lastUpdated">Last updated on: 04 April, 2022</span>
      </div>
    </div>
  );
};

export default ProjectHeader;
