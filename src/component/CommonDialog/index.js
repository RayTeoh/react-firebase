import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const CommonDialog = ({
  handleDialogClose,
  handleDialogAction,
  open,
  dialogTitle,
  dialogText
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleDialogClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{dialogTitle}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {dialogText}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDialogClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleDialogAction} color="primary" autoFocus>
          Okay
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CommonDialog;
