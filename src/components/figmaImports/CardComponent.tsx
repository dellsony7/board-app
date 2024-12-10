import React from "react";

interface CardFooterBarProps {
  messageCount?: number;
  dueDate?: string;
}

const CardFooterBar: React.FC<CardFooterBarProps> = ({
  messageCount = 8,
  dueDate = "Due: 22 April, 2022",
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "24px",
        padding: "0",
        width: "fit-content",
        height: "fit-content",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "4px",
        }}
      >
        <img
          src="https://dashboard.codeparrot.ai/api/assets/Z1hefBumsXhj3jsb"
          alt="message icon"
          style={{
            width: "16px",
            height: "16px",
          }}
        />
        <span
          style={{
            fontFamily: "Poppins",
            fontSize: "12px",
            fontWeight: 500,
            lineHeight: "18px",
            color: "#777E90",
          }}
        >
          {messageCount}
        </span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "4px",
        }}
      >
        <img
          src="https://dashboard.codeparrot.ai/api/assets/Z1hefBumsXhj3jsc"
          alt="calendar icon"
          style={{
            width: "16px",
            height: "16px",
          }}
        />
        <span
          style={{
            fontFamily: "Poppins",
            fontSize: "12px",
            fontWeight: 500,
            lineHeight: "18px",
            color: "#777E90",
          }}
        >
          {dueDate}
        </span>
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
  const styles = {
    container: {
      width: `${width}px`,
      height: `${height}px`,
      position: "relative" as const,
      overflow: "hidden",
      backgroundColor: "#2C2C2C",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "8px",
    },
    image: {
      width: "24px",
      height: "24px",
      objectFit: "contain" as const,
    },
  };

  return (
    <div style={styles.container}>
      <img
        src={`https://placeholder.pics/svg/${imageId}`}
        alt="Placeholder"
        style={styles.image}
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
      imageUrl: "https://dashboard.codeparrot.ai/api/assets/Z1hefBumsXhj3jsd",
    },
    {
      id: "2",
      imageUrl: "https://dashboard.codeparrot.ai/api/assets/Z1hefBumsXhj3jse",
    },
    {
      id: "3",
      imageUrl: "https://dashboard.codeparrot.ai/api/assets/Z1hefBumsXhj3jsf",
    },
  ],
  additionalCount = 2,
  status = {
    label: "Low",
    icon: "https://dashboard.codeparrot.ai/api/assets/Z1hefBumsXhj3jsg",
  },
}: AssignedUsersProps) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        width: "fit-content",
        height: "fit-content",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          position: "relative",
          width: "58px",
          height: "20px",
        }}
      >
        {users.map((user, index) => (
          <div
            key={user.id}
            style={{
              position: "absolute",
              left: `${index * 12}px`,
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              backgroundColor: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: users.length - index,
            }}
          >
            <img
              src={user.imageUrl}
              alt={`User ${index + 1}`}
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
              }}
            />
          </div>
        ))}
        {additionalCount > 0 && (
          <div
            style={{
              position: "absolute",
              left: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "22px",
              height: "20px",
            }}
          >
            <div
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                backgroundColor: "#ffffff",
                position: "absolute",
              }}
            />
            <span
              style={{
                fontFamily: "Poppins",
                fontWeight: 600,
                fontSize: "9px",
                lineHeight: "13.5px",
                color: "#353945",
                position: "relative",
                zIndex: 1,
              }}
            >
              +{additionalCount}
            </span>
          </div>
        )}
      </div>

      {status && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            padding: "4px",
            backgroundColor: "#f4f5f6",
            borderRadius: "5px",
            height: "fit-content",
          }}
        >
          <img
            src={status.icon}
            alt="Status icon"
            style={{
              width: "12px",
              height: "12px",
            }}
          />
          <span
            style={{
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: "8px",
              lineHeight: "12px",
              color: "#b1b5c3",
            }}
          >
            {status.label}
          </span>
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
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "260px",
        height: "32px",
        padding: "0 12px",
        backgroundColor: "#FFFFFF",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <div
          style={{
            width: "8px",
            height: "8px",
            backgroundColor: categoryColor,
            borderRadius: "50%",
          }}
        />
        <span
          style={{
            fontFamily: "Poppins",
            fontSize: "12px",
            fontWeight: 400,
            lineHeight: "18px",
            color: "#B1B5C3",
          }}
        >
          {category}
        </span>
      </div>

      <button
        onClick={onMoreClick}
        style={{
          background: "none",
          border: "none",
          padding: 0,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "14px",
          height: "14px",
        }}
      >
        <img
          src="https://dashboard.codeparrot.ai/api/assets/Z1hefRumsXhj3jsh"
          alt="more options"
          width={14}
          height={14}
        />
      </button>
    </div>
  );
};

const CardComponent: React.FC = () => {
  return (
    <div
      style={{
        width: "260px",
        border: "1px solid #E6E8EC",
        borderRadius: "8px",
        backgroundColor: "#FFFFFF",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
        padding: "12px",
        boxSizing: "border-box",
      }}
    >
      <CardTopBar />
      <h3
        style={{
          fontFamily: "Poppins",
          fontSize: "14px",
          fontWeight: 600,
          lineHeight: "21px",
          color: "#353945",
          margin: "8px 0",
        }}
      >
        Check Clients Feedback
      </h3>
      {/* <AssignedUsers /> */}
      <ImagePlaceholder />
      <CardFooterBar />
    </div>
  );
};

export default CardComponent;
