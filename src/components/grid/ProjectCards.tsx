// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid2";
// import { IconButton, Typography, Card, CardContent } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import CardHeader from "./CardHeader";

// // Styled Paper Item (for layout)
// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
//   ...theme.applyStyles("dark", {
//     backgroundColor: "#1A2027",
//   }),
// }));


// const data = {
//   "To do": [
//     { id: 1, title: "Task 1" },
//     { id: 2, title: "Task 2" },
//     { id: 3, title: "Task 3" },
//   ],
//   "In Progress": [
//     { id: 4, title: "Task A" },
//     { id: 5, title: "Task B" },
//   ],
//   "Approved": [
//     { id: 6, title: "Task X" },
//     { id: 7, title: "Task Y" },
//   ],
//   "Reject": [
//     { id: 8, title: "Task Z" },
//     { id: 9, title: "Task W" },
//   ],
// };

// export default function AutoGrid() {
//   return (
//     <Box sx={{ boxShadow: "none", width: "100%" }}>
//       <Grid container spacing={3}>
//         {Object.entries(data).map(([category, tasks]) => (
//           <Grid key={category} size={{ xs: 12, sm: 6, md: 3 }} padding={1}>
//             <CardHeader name={category} />

//             <Grid container spacing={1}>
//               {tasks.map((task) => (
//                 <Grid key={task.id} size={12}>
//                   <Card sx={{ margin: 1 }}>
//                     <CardContent>
//                       <Typography variant="h6">{task.title}</Typography>
//                       {/* You can add more task details here */}
//                     </CardContent>
//                   </Card>
//                 </Grid>
//               ))}
//             </Grid>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// }




import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Card, CardContent, Typography, Paper } from "@mui/material";
import axios from "axios";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function SwimlaneDashboard() {
  const [tasks, setTasks] = React.useState<
    { id: number; title: string; status: string }[]
  >([]);

  React.useEffect(() => {
    // Fetch the task data from the mock API (tasks.json file)
    axios
      .get("/fake-db/tasks.json") 
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleStatusChange = (taskId: number, newStatus: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  const categorizedTasks = tasks.reduce(
    (acc, task) => {
      if (!acc[task.status]) {
        acc[task.status] = [];
      }
      acc[task.status].push(task);
      return acc;
    },
    {} as Record<string, { id: number; title: string; status: string }[]>
  );

    const getBackgroundColor = (name: string) => {
      switch (name) {
        case "To do":
          return "#f0f4ff";
        case "In Progress":
          return "#FFA800";
        case "Approved":
          return "#AEE753";
        case "Reject":
          return "#F90430";
        default:
          return "#f0f4ff"; // Default color
      }
    };
  return (
    <Box sx={{ boxShadow: "none", width: "100%" }}>
      <Grid container spacing={0}>
        {["To Do", "In Progress", "Approved", "Reject"].map((status) => (
          <Grid key={status} item xs={12} sm={6} md={3} padding={1}>
            <Item>
        
              <Typography
                        sx={{
                          display: "inline-block",
                          backgroundColor: getBackgroundColor(status),
                          color: "#333",
                          padding: "3px 16px",
                          fontSize: "0.7rem",
                          borderRadius: 5,
                          textAlign: "center", 
                          width: "100%", 
                        }}
                      >
                        {status}
                      </Typography>
              <Grid container spacing={1} direction="column">
                {categorizedTasks[status]?.map((task) => (
                  <Grid key={task.id} item xs={12}>
                    <Card sx={{ margin: 1 }}>
                      <CardContent>
                        <Typography variant="h6">{task.title}</Typography>
                        {/* Additional task details can go here */}
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

