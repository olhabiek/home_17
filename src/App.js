import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Typography,
} from "@mui/material";
import "./App.css";
import { useState } from "react";
import styled from "@emotion/styled";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
  },
});

const ThemeButton = styled("button")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.text.primary,
  borderRadius: "5px",
  padding: "10px 20px",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <div>
        <h1>{isDarkMode ? "Dark" : "Light"} Mode</h1>
        <ThemeButton onClick={toggleTheme}>Toggle Theme</ThemeButton>
      </div>
    </ThemeProvider>
  );
}

export default App;
