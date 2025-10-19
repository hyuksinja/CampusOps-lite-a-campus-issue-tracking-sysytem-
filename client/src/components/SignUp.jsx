// src/components/SignUp.jsx
import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Paper,
  Link,
} from "@mui/material";

export default function SignUp({ onSignUp, toggle }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignUp({ email });
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={6} sx={{ p: 4, mt: 10, borderRadius: 3 }}>
        <Typography variant="h4" align="center" fontWeight="bold" mb={3}>
          Create an Account
        </Typography>
        <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" gap={2}>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            required
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            required
          />
          <Button variant="contained" color="primary" size="large" type="submit">
            Sign Up
          </Button>
          <Typography align="center">
            Already have an account?{" "}
            <Link component="button" onClick={toggle}>
              Login
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}
