import { FlashOnOutlined } from "@mui/icons-material";
import { Avatar, AvatarGroup, Box, Stack, Typography } from "@mui/material";
import React from "react";

interface CardBodyProps {
  assigned: { name: string; avatar: string }[];
  priority: string;
}

const CardBody: React.FC<CardBodyProps> = ({ assigned, priority }) => {
  return (
    <Box>
      <Stack direction="row" spacing={2} alignItems="center">
        <AvatarGroup max={4}>
          {assigned.map((person, index) => (
            <Avatar key={index} alt={person.name} src={person.avatar} />
          ))}
        </AvatarGroup>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            ml: 10,
            backgroundColor: "grey.300",
            borderRadius: 1,
            padding: "2px 6px",
          }}
        >
          <FlashOnOutlined sx={{ fontSize: 14, color: "white" }} />
          <Typography
            variant="body2"
            sx={{ ml: 1, fontSize: 12, color: "white" }}
          >
            {priority}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default CardBody;
