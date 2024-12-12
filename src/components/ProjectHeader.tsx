import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Button, Card, CardContent, Divider } from "@mui/material";
import Edit from "@mui/icons-material/Edit";

const ProjectHeader: React.FC = () => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        width: "100%",
      }}
    >
      <Card>
        <CardContent>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", textAlign: "left" }}
          >
            Sport Xi Project
          </Typography>
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14, textAlign: "left" }}
          >
            event production
          </Typography>
          <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
            <Typography
              gutterBottom
              sx={{
                color: "text.secondary",
                fontSize: 14,
                mb: 1,
                textAlign: "left",
                mr: 2,
              }}
            >
              Assigned
            </Typography>

            <Stack direction="row" spacing={-2} alignItems="center">
              <Avatar src=""></Avatar>
              <Avatar src=""></Avatar>
              <Avatar src=""></Avatar>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar sx={{ bgcolor: "grey.400" }}>+2</Avatar>{" "}
              </Box>
            </Stack>
            <Button
              sx={{ ml: 1.5, borderRadius: 5 }}
              variant="outlined"
              endIcon={<Edit />}
            >
              Manage
            </Button>
          </Box>
          <Divider />
          <Box sx={{ mt: 2, display: "flex", alignItems: "center" }}>
            <Typography
              gutterBottom
              sx={{
                color: "text.secondary",
                fontSize: 14,
                mb: 1,
                textAlign: "left",
                mr: 2,
              }}
            >
              Last Updated on: 04 April, 2022
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProjectHeader;
