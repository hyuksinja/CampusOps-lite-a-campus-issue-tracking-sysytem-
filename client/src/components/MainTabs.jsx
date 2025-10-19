import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import ReportForm from "./ReportForm";
import IssueList from "./IssueList";

export default function MainTabs({ user, onLogout, darkMode, setDarkMode }) {
  const [tab, setTab] = useState(0);

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            CampusOps Lite
          </Typography>
          <Typography sx={{ mr: 3 }}>
            Welcome, {user?.name || "User"} 👋
          </Typography>
          <IconButton
            color="inherit"
            onClick={() => setDarkMode(!darkMode)}
            sx={{ mr: 2 }}
          >
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          <Button color="inherit" onClick={onLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Tabs
        value={tab}
        onChange={(e, newValue) => setTab(newValue)}
        centered
        textColor="inherit"
        indicatorColor="secondary"
      >
        <Tab label="Report Issue" />
        <Tab label="My Issues" />
        <Tab label="Settings" />
      </Tabs>

      <Box sx={{ p: 4 }}>
        {tab === 0 && <ReportForm />}
        {tab === 1 && <IssueList />}
        {tab === 2 && (
          <Typography variant="h6" color="text.secondary">
            Settings coming soon ⚙️
          </Typography>
        )}
      </Box>
    </>
  );
}
