import React, { useState, useMemo } from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { deepPurple, indigo } from "@mui/material/colors";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import MainTabs from "./components/MainTabs";

export default function App() {
  const [user, setUser] = useState(null);
  const [hasAccount, setHasAccount] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          primary: {
            main: darkMode ? deepPurple[300] : indigo[600],
          },
          background: {
            default: darkMode ? "#121212" : "#f7f7f7",
          },
        },
        typography: {
          fontFamily: "Poppins, sans-serif",
        },
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {!user ? (
        hasAccount ? (
          <Login onLogin={setUser} toggle={() => setHasAccount(false)} />
        ) : (
          <SignUp onSignUp={setUser} toggle={() => setHasAccount(true)} />
        )
      ) : (
        <MainTabs
          user={user}
          onLogout={() => setUser(null)}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      )}
    </ThemeProvider>
  );
}
