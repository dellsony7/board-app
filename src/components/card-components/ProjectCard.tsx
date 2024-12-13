import * as React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";
import axios from "axios";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd"; // Updated import

import CardBody from "../card-components/CardBody";
import CardFooter from "../card-components/CardFooter";
import CardHeader from "../grid/CardHeader";

interface AssignedPerson {
  name: string;
  avatar: string;
}

interface Image {
  alt: string;
  src: string;
}

interface Task {
  id: number;
  title: string;
  type: string;
  status: string;
  priority: string;
  assigned: AssignedPerson[];
  dueDate: string;
  linked: string;
  image: Image[];
  color: string;
}

interface GroupedTasks {
  [key: string]: Task[];
}

export default function AutoGrid() {
  const [groupedTasks, setGroupedTasks] = React.useState<GroupedTasks>({});

  React.useEffect(() => {
    axios
      .get("/fake-db/tasks.json")
      .then((response) => {
        const fetchedTasks: Task[] = response.data;

        // Group tasks by status
        const grouped = fetchedTasks.reduce((acc: GroupedTasks, task: Task) => {
          if (!acc[task.status]) {
            acc[task.status] = [];
          }
          acc[task.status].push(task);
          return acc;
        }, {});

        setGroupedTasks(grouped);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Handle the drag end event
  const handleDragEnd = (result: any) => {
    const { destination, source } = result;
    if (!destination) return;

    // If the item is dropped in the same position, no need to do anything
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const sourceCategory = source.droppableId;
    const destinationCategory = destination.droppableId;

    // Reorder tasks
    const sourceTasks = Array.from(groupedTasks[sourceCategory]);
    const [removed] = sourceTasks.splice(source.index, 1);
    const destinationTasks = Array.from(groupedTasks[destinationCategory]);
    destinationTasks.splice(destination.index, 0, removed);

    setGroupedTasks((prevState) => ({
      ...prevState,
      [sourceCategory]: sourceTasks,
      [destinationCategory]: destinationTasks,
    }));
  };

  return (
    <Box sx={{ boxShadow: "none", width: "100%" }}>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Grid container spacing={3}>
          {Object.entries(groupedTasks).map(([category, tasks]) => (
            <Grid key={category} item xs={12} sm={6} md={3} padding={1}>
              <CardHeader name={category} />
              <Droppable droppableId={category}>
                {(provided) => (
                  <Grid
                    container
                    spacing={1}
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {tasks.map((task, index) => (
                      <Draggable
                        key={task.id}
                        draggableId={task.id.toString()}
                        index={index}
                      >
                        {(provided) => (
                          <Grid item xs={12}>
                            <Card
                              sx={{ margin: 1 }}
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <CardContent sx={{ textAlign: "left" }}>
                                <Typography
                                  gutterBottom
                                  sx={{
                                    color: "text.secondary",
                                    fontSize: 14,
                                    textAlign: "left",
                                  }}
                                >
                                  {task.type}
                                </Typography>
                                <Typography variant="h6">
                                  {task.title}
                                </Typography>
                              </CardContent>
                              <CardContent>
                                <CardBody
                                  assigned={task.assigned}
                                  priority={task.priority}
                                />
                                <CardMedia
                                  component="img"
                                  height="120"
                                  image="/images/images.png"
                                />
                              </CardContent>
                              <CardFooter
                                linked={task.linked}
                                dueDate={task.dueDate}
                              />
                            </Card>
                          </Grid>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </Grid>
                )}
              </Droppable>
            </Grid>
          ))}
        </Grid>
      </DragDropContext>
    </Box>
  );
}
