import React from "react";
//import {} from "@material-ui/core";
import { bool } from "prop-types";
import Popin from "../Popin";

export default function PopinCart({ open }) {
  const actions = [{ label: "Annuler" }, { label: "Commander", primary: true }];

  return (
    <Popin open={open} title="Passer commande" actions={actions}>
      Récapitulatif des pizzas en commande
    </Popin>
  );
}

PopinCart.protoTypes = {
  open: bool,
};

PopinCart.defaultProps = {
  open: false,
};
