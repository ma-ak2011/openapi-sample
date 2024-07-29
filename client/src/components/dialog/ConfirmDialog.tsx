import React, { FC } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

export type ConfirmDialogProps = {
  open: boolean;
  title: React.ReactNode;
  content: React.ReactNode;
  cancelButtonText?: string;
  okButtonText?: string;
  onClickCancel: () => void;
  onClickOK: () => void;
};

export const ConfirmDialog: FC<ConfirmDialogProps> = ({
  open,
  title,
  content,
  cancelButtonText = "キャンセル",
  okButtonText = "OK",
  onClickCancel,
  onClickOK,
}) => (
  <Dialog
    open={open}
    onClose={onClickCancel}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        {content}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClickOK} color="secondary" variant="contained">
        {okButtonText}
      </Button>
      <Button
        onClick={onClickCancel}
        color="info"
        variant="contained"
        autoFocus
      >
        {cancelButtonText}
      </Button>
    </DialogActions>
  </Dialog>
);
