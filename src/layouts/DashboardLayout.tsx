import * as React from "react";
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AppProvider, Navigation, Router } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import Button from "@mui/material/Button";
import { Info, LogoutOutlined } from "@mui/icons-material";
import ProjectHeader from "../components/ProjectHeader";
import ProjectCards from "../components/grid/ProjectCards";
import SportsXi from "../pages/SportsXi";
import { Avatar, IconButton, Stack, TextField, Tooltip } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TuneIcon from "@mui/icons-material/Tune";
import FolderIcon from "@mui/icons-material/Folder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "Main items",
  },
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "boards",
    title: "Boards",
    icon: <FolderIcon />,
    children: [
      {
        title: "Create routes",
        segment: "create-routes",
      },
      {
        title: "Development React App",
        segment: "ReactApplication",
      },
      {
        title: "Sport Xi Project",
        segment: "sport-xi",
      },
      {
        title: "Wordpress theme",
        segment: "wordpress-theme",
      },
    ],
  },
  {
    segment: "messages",
    title: "Messages",
    icon: <ChatBubbleOutlineIcon />,
  },
  {
    segment: "calender",
    title: "Calendar",
    icon: <EditCalendarIcon />,
  },
  {
    segment: "team-members",
    title: "Team Members",
    icon: <PeopleAltIcon />,
  },
];

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }: { pathname: string }) {
  console.log("Current Pathname:", pathname); // Debug the pathname

  if (pathname.startsWith("/dashboard")) {
    switch (pathname) {
      case "/dashboard":
        return (
          <Box
            sx={{
              py: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <ProjectHeader />
            <ProjectCards />
          </Box>
        );
      case "/boards/sport-xi":
        return (
          <Box sx={{ py: 0 }}>
            <SportsXi />
          </Box>
        );
      default:
        return <Box>Page Not Found</Box>;
    }
  }

  switch (pathname) {
    case "/messages":
      return <Box>Messages Content</Box>;
    case "/team-members":
      return <Box>Team Members Content</Box>;
    case "/calender":
      return <Box>Calendar Content</Box>;
    default:
      return <Box>Page Not Found</Box>;
  }
}

function SidebarFooterAccount() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 0,
        alignItems: "center",
        width: "100%",
      }}
    >
      <Button href="#text-buttons" fullWidth startIcon={<Info />}>
        support
      </Button>
      <Button
        component="label"
        variant="contained"
        startIcon={<LogoutOutlined />}
        fullWidth
      >
        Logout
      </Button>
    </Box>
  );
}

function ToolbarActionsSearch() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" endIcon={<AddIcon />}>
        Create new board
      </Button>
      <Tooltip title="Search" enterDelay={1000}>
        <div>
          <IconButton
            type="button"
            aria-label="search"
            sx={{
              display: { xs: "inline", md: "none" },
            }}
          >
            <SearchIcon />
          </IconButton>
        </div>
      </Tooltip>
      <TextField
        label="Search"
        variant="outlined"
        size="small"
        slotProps={{
          input: {
            endAdornment: (
              <IconButton type="button" aria-label="search" size="small">
                <SearchIcon />
              </IconButton>
            ),
            sx: { pr: 0.5 },
          },
        }}
        sx={{ display: { xs: "none", md: "inline-block" }, mr: 1 }}
      />
      <TuneIcon />
      <NotificationsIcon />
      <Avatar />
    </Stack>
  );
}

export default function DashboardLayouts() {
  const [pathname, setPathname] = React.useState("/dashboard");

  const router = React.useMemo<Router>(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  return (
    <AppProvider
      navigation={NAVIGATION}
      branding={{
        logo: <img src="/Frame.png" alt="swimline-dellsony" />,
        title: "Board App",
      }}
      router={router}
      theme={theme}
    >
      <DashboardLayout
        slots={{
          toolbarAccount: () => null,
          sidebarFooter: SidebarFooterAccount,
          toolbarActions: ToolbarActionsSearch,
        }}
      >
        <DemoPageContent pathname={pathname} />
      </DashboardLayout>
    </AppProvider>
  );
}
