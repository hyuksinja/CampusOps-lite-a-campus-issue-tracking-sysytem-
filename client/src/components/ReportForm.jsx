// src/components/ReportForm.jsx
import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

export default function ReportForm() {
  const [issue, setIssue] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Issue reported: ${issue} at ${location}`);
    setIssue("");
    setLocation("");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" gap={2}>
      <TextField
        label="Issue"
        variant="outlined"
        fullWidth
        value={issue}
        onChange={(e) => setIssue(e.target.value)}
      />
      <TextField
        label="Location"
        variant="outlined"
        fullWidth
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <Button variant="contained" color="secondary" type="submit">
        Submit Report
      </Button>
      <Typography variant="body2" color="text.secondary">
        Thank you for helping improve campus life!
      </Typography>
    </Box>
  );
}
