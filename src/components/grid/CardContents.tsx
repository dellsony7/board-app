import React from "react";

interface CardFooterBarProps {
  messageCount?: number;
  dueDate?: string;
}

const CardFooterBar: React.FC<CardFooterBarProps> = ({
  messageCount = 8,
  dueDate = "22 April, 2022",
}) => {
  return (
    <div className="footer-bar">
      <div className="message-container">
        <img
          src="https://dashboard.codeparrot.ai/api/assets/Z1vNMZs-923gCQWy"
          alt="message"
          width={16}
          height={16}
          className="icon"
        />
        <span className="count">{messageCount}</span>
      </div>
      <div className="calendar-container">
        <img
          src="https://dashboard.codeparrot.ai/api/assets/Z1vNMZs-923gCQWz"
          alt="calendar"
          width={16}
          height={16}
          className="icon"
        />
        <span className="due-date">Due: {dueDate}</span>
      </div>
    </div>
  );
};

interface ImagePlaceholderProps {
  width?: number;
  height?: number;
  imageId?: string;
}

const ImagePlaceholder = ({
  width = 234,
  height = 90,
  imageId = "I14:4981;21:4207",
}: ImagePlaceholderProps) => {
  return (
    <div className="image-placeholder">
      <img
        src={`https://placeholder.pics/svg/${imageId}`}
        alt="Placeholder"
        className="placeholder-image"
      />
    </div>
  );
};

interface UserProfile {
  id: string;
  imageUrl: string;
}

interface AssignedUsersProps {
  users: UserProfile[];
  additionalCount?: number;
  status?: {
    label: string;
    icon: string;
  };
}

const AssignedUsers = ({
  users = [
    {
      id: "1",
      imageUrl: "https://dashboard.codeparrot.ai/api/assets/Z1vNMps-923gCQW0",
    },
    {
      id: "2",
      imageUrl: "https://dashboard.codeparrot.ai/api/assets/Z1vNMps-923gCQW1",
    },
    {
      id: "3",
      imageUrl: "https://dashboard.codeparrot.ai/api/assets/Z1vNMps-923gCQW2",
    },
  ],
  additionalCount = 2,
  status = {
    label: "Low",
    icon: "https://dashboard.codeparrot.ai/api/assets/Z1vNMps-923gCQW3",
  },
}: AssignedUsersProps) => {
  return (
    <div className="assigned-users">
      <div className="user-images">
        {users.map((user, index) => (
          <div
            key={user.id}
            className="user-image"
            style={{ left: `${index * 12}px` }}
          >
            <img src={user.imageUrl} alt={`User ${index + 1}`} />
          </div>
        ))}
        {additionalCount > 0 && (
          <div className="additional-users">
            <span>+{additionalCount}</span>
          </div>
        )}
      </div>
      {status && (
        <div className="status">
          <img src={status.icon} alt="Status icon" />
          <span>{status.label}</span>
        </div>
      )}
    </div>
  );
};

interface CardTopBarProps {
  category?: string;
  categoryColor?: string;
  onMoreClick?: () => void;
}

const CardTopBar: React.FC<CardTopBarProps> = ({
  category = "Feedback",
  categoryColor = "#B1B5C3",
  onMoreClick = () => {},
}) => {
  return (
    <div className="card-top-bar">
      <div className="category">
        <div className="category-dot" />
        <span>{category}</span>
      </div>
      <button onClick={onMoreClick} className="more-button">
        <img
          src="https://dashboard.codeparrot.ai/api/assets/Z1vNMps-923gCQW4"
          alt="more options"
        />
      </button>
    </div>
  );
};

const CardContents: React.FC = () => {
  return (
    <div className="card-component">
      <CardTopBar />
      <h2>Check Clients Feedback</h2>
      {/* <AssignedUsers /> */}
      <ImagePlaceholder />
      <CardFooterBar />
    </div>
  );
};

export default CardContents;
