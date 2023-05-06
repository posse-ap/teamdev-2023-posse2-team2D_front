import React, { useEffect, useMemo, useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useSnackbar } from "./snackbar/Snackbar";

const AlertButton = (props:any) => {
  const { showSnackbar } = useSnackbar();
  const [active, setActive] = useState(false);
  const classToggle = () => {
    setActive(!active)
  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant={props.variant} onClick={handleClickOpen} sx={{ fontWeight: "bold" }} color="error">
        {props.title}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {props.message}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            この操作は取り消せません。
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>戻る</Button>
          <Button
          autoFocus
          onClick={(event) => {
            event.preventDefault();
            handleClose();
            showSnackbar(`${props.title}しました`, 'warning');}}
          >
          確定</Button>
        </DialogActions>
      </Dialog>
    </div>
  );

  }

export default AlertButton;
