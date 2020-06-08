import React from "react";
import { CssBaseline, CircularProgress } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme";
import Header from "../Header";
import PizzaList from "../PizzaList";
import { useQuery } from "react-query";
//import db from "../db.json";

//import CssBaseline from "@material-ui/core/CssBaseline";
//import "./App.css";

const fetchPizzas = () =>
  fetch("http://localhost:3001/pizzas").then((response) => response.json());

export default function App() {
  //const [pizzas, setPizzas] = React.useState([]);
  const { status, data } = useQuery("pizzas", fetchPizzas);
  // React.useEffect(() => {
  //   fetch("http://localhost:3001/pizzas")
  //     .then((response) => response.json())
  //     .then((pizzas) => setPizzas(pizzas));
  // }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Header shoppingCartCount={3} />
      {status === "loading" && <CircularProgress />}
      {status === "success" && <PizzaList data={data} />}
    </ThemeProvider>
  );
}
