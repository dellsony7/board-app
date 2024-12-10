import React from "react";
import "./App.css";


const App: React.FC = () => {
  const projectData = {
    title: "Sport Xi Project",
    status: "In progress",
    description: "event production",
    assignees: [
      {
        avatar: "https://dashboard.codeparrot.ai/api/assets/Z1g7JvIZlX4DNz1z",
        id: "1",
      },
      {
        avatar: "https://dashboard.codeparrot.ai/api/assets/Z1g7JvIZlX4DNz10",
        id: "2",
      },
      {
        avatar: "https://dashboard.codeparrot.ai/api/assets/Z1g7JvIZlX4DNz11",
        id: "3",
      },
    ],
    lastUpdated: "04 April, 2022",
  };

  return (
    <div className="app">
      {/* <Header
        onSearch={(query) => console.log("Search:", query)}
        onCreateBoard={() => console.log("Create board clicked")}
      /> */}
      <div className="main-content">
        {/* <Sidebar /> */}
        <div className="project-content">
          <div className="project-header">
            <div className="project-info">
              <h1>{projectData.title}</h1>
              <span className="status-badge">{projectData.status}</span>
              <p className="description">{projectData.description}</p>
              <div className="project-meta">
                <div className="assignees">
                  {projectData.assignees.map((assignee, index) => (
                    <img
                      key={assignee.id}
                      src={assignee.avatar}
                      alt="Assignee"
                      style={{ marginLeft: index > 0 ? "-8px" : "0" }}
                    />
                  ))}
                  <span className="more-assignees">+2</span>
                </div>
                <button className="manage-button">
                  <img
                    src="https://dashboard.codeparrot.ai/api/assets/Z1g7JvIZlX4DNz12"
                    alt="Manage"
                  />
                  Manage
                </button>
              </div>
            </div>
            <div className="last-updated">
              Last updated on: {projectData.lastUpdated}
            </div>
          </div>
          {/* <ProjectBoard /> */}
        </div>
      </div>
    </div>
  );
};

export default App;
