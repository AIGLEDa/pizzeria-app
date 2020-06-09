import React from "react";
//import {} from "@material-ui/core";
import { bool, func, arrayOf, shape, number, string } from "prop-types";
import Popin from "../Popin";
import Price from "../Price";
import {
  TableHead,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@material-ui/core";
import { isNotEmpty } from "ramda-adjunct";

export default function PopinCart({ open, hidePopinCart, cart, reset }) {
  const actions = [
    { label: "Annuler", onClick: hidePopinCart },
    {
      label: "Commander",
      primary: true,
      onClick: () => {
        reset();
        hidePopinCart();
      },
    },
  ];

  return (
    <Popin
      open={open}
      onClose={hidePopinCart}
      title="Passer commande"
      actions={actions}
    >
      {isNotEmpty(cart) && (
        <TableContainer component={Paper}>
          <Table
            //className={classes.table}
            size="small"
            aria-label="Ma commande de pizzas"
          >
            <TableHead>
              <TableRow>
                <TableCell>Pizza</TableCell>
                <TableCell align="right">Prix</TableCell>
                {/* <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map(({ addedAt, name, price }) => (
                <TableRow key={addedAt}>
                  <TableCell component="th" scope="row">
                    {name}
                  </TableCell>
                  <TableCell align="right">
                    <Price value={price} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      Récapitulatif des pizzas en commande
    </Popin>
  );
}

PopinCart.protoTypes = {
  open: bool,
  hidePopinCart: func,
  cart: arrayOf(
    shape({
      id: number,
      name: string,
      price: number,
      addedAt: number,
    })
  ),
};

PopinCart.defaultProps = {
  open: false,
  hidePopinCart: Function.prototype,
  cart: [],
  reset: Function.protoTypes,
};
