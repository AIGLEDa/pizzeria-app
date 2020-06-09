import React from "react";
import { CssBaseline, CircularProgress } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme";
import Header from "../Header";
import PizzaList from "../PizzaList";
import { useQuery } from "react-query";
import PopinCart from "../PopinCart";
import { useList } from "react-use";

//import db from "../db.json";

//import CssBaseline from "@material-ui/core/CssBaseline";
//import "./App.css";

const fetchPizzas = () => {
  const baseUrlApi =
    process.env.REACT_APP_BASE_URL_API || "http://localhost:3001";

  return fetch(`${baseUrlApi}/pizzas`).then((response) => response.json());
};

export default function App() {
  //const [pizzas, setPizzas] = React.useState([]);
  const { status, data } = useQuery("pizzas", fetchPizzas);
  const [popinCartOpen, setPopinCardOpen] = React.useState(false);
  const displayPopinCart = () => {
    setPopinCardOpen(true);
  };

  const hidePopinCart = () => {
    setPopinCardOpen(false);
  };
  const [cart, { push }] = useList([]);

  // React.useEffect(() => {
  //   fetch("http://localhost:3001/pizzas")
  //     .then((response) => response.json())
  //     .then((pizzas) => setPizzas(pizzas));
  // }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Header
        shoppingCartCount={cart.length}
        displayPopinCart={displayPopinCart}
      />
      {status === "loading" && <CircularProgress />}
      {status === "success" && <PizzaList data={data} addToCart={push} />}
      <PopinCart open={popinCartOpen} hidePopinCart={hidePopinCart} />
    </ThemeProvider>
  );
}
