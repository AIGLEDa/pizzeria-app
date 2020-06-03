import React from "react";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme";
import Header from "../Header";
//import CssBaseline from "@material-ui/core/CssBaseline";
//import "./App.css";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <AppBar></AppBar>
      <MainContent></MainContent> */}

      <Header shoppingCartCount={3} />
    </ThemeProvider>
  );
}
