import React from "react";

import {
  AppBar,
  Badge,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core";

//import IconButton from "@material-ui/core/IconButton";
//import { Mail } from "@material-ui/icons/Mail";
//import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { number } from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  title: {
    flexGrow: 1,
  },
});

export default function Header({ shoppingCartCount }) {
  const classes = useStyles();
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Pizzaria Nala
        </Typography>
        <IconButton aria-label={`${shoppingCartCount} pizzas `} color="inherit">
          <Badge badgeContent={shoppingCartCount} color="secondary">
            {/* <Badge badgeContent={4} color="secondary"> */}
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        {/* <Button color="inherit">Login</Button> */}
      </Toolbar>
    </AppBar>
  );
}

Header.defaultProps = {
  shoppingCartCount: 0,
};

Header.propTypes = {
  shoppingCartCount: number,
};
