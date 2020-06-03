import React from "react";
import { Button, CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme";
//import CssBaseline from "@material-ui/core/CssBaseline";
//import "./App.css";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <header>
        <h1>Pizzeria Nala</h1>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </header>
    </ThemeProvider>
  );
}
