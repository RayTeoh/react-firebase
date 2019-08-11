import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const FormDialog = ({
  open,
  handleDialogAction,
  dialogTitle,
  dialogText,
  textOnChange,
  handleDialogClose,
  textLabel,
  textValue
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleDialogClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">{dialogTitle}</DialogTitle>
      <DialogContent>
        <DialogContentText>{dialogText}</DialogContentText>
        <TextField
          value={textValue}
          margin="dense"
          label={textLabel}
          type="text"
          fullWidth
          onChange={textOnChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDialogClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleDialogAction} color="primary">
          Okay
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FormDialog;
