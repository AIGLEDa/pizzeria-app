import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";
import { bool } from "prop-types";

export default function PopinCart({ open }) {
  return (
    <Dialog
      open={open}
      // onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Passer Commande
        {"Use Google's location service?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Récapitulatif des pizzas en commande
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="secondary">annuler</Button>
        <Button color="primary" autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
}

PopinCart.protoTypes = {
  open: bool,
};
