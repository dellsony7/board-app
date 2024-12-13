import { Divider, ListItem, Stack, Typography } from "@mui/material";
import React from "react";
import LinkIcon from "@mui/icons-material/Link";

interface CardFooterProps {
  linked: string;
  dueDate: string;
}

const CardFooter: React.FC<CardFooterProps> = ({ linked, dueDate }) => {
  return (
    <Stack sx={{ padding: 1 }}>
      <Divider variant="middle" sx={{ marginBottom: 2 }} />
      <Stack direction="row" spacing={2} alignItems="center">
        <ListItem sx={{ padding: 0 }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <LinkIcon fontSize="small" />
            <Typography variant="body2">{linked}</Typography>
          </Stack>
        </ListItem>
        <ListItem sx={{ padding: 0 }}>
          <Typography variant="body2">{`Due: ${dueDate}`}</Typography>
        </ListItem>
      </Stack>
    </Stack>
  );
};

export default CardFooter;
