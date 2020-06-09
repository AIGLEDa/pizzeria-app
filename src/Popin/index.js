import React from "react";
import { bool, arrayOf, func, string, shape, node } from "prop-types";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core";
//import { fromPairs } from "ramda";
//import shape from "@material-ui/core/styles/shape";

export default function Popin({ open, title, children, actions, onClose }) {
  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>{children}</DialogContent>
        <DialogActions>
          {actions.map(({ label, onClick, primary }) => (
            <Button
              key={label}
              color={primary ? "primary" : "secondary"}
              onClick={onClick}
            >
              {label}
            </Button>
          ))}

          {/* <Button color="primary" autoFocus>
            Commander
          </Button> */}
        </DialogActions>
      </Dialog>
      ); }
    </>
  );
}

Popin.propTypes = {
  open: bool,
  title: string,
  children: node.isRequired,
  actions: arrayOf(
    shape({
      label: string,
      onClick: func,
    })
  ),
  onClose: func,
};

Popin.defaultProps = {
  open: false,
  title: null,
  actions: [],
};
