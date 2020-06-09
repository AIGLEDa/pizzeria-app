import React from "react";
//import {} from "@material-ui/core";
import { bool, func } from "prop-types";
import Popin from "../Popin";

export default function PopinCart({ open, hidePopinCart }) {
  const actions = [
    { label: "Annuler", onClick: hidePopinCart },
    { label: "Commander", primary: true },
  ];

  return (
    <Popin
      open={open}
      onClose={hidePopinCart}
      title="Passer commande"
      actions={actions}
    >
      Récapitulatif des pizzas en commande
    </Popin>
  );
}

PopinCart.protoTypes = {
  open: bool,
  hidePopinCart: func,
};

PopinCart.defaultProps = {
  open: false,
  hidePopinCart: Function.prototype,
};
