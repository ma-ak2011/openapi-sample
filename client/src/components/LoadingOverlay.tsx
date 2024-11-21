import React, { CSSProperties } from "react";
import {CircularProgress} from "@mui/material";

const classes: { [key: string]: CSSProperties } = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    minWidth: "100vw",
    height: "100%",
    minHeight: "100vh",
    opacity: 0.7,
    backgroundColor: "white",
    zIndex: 1000,
  },
  circular: {
    position: "fixed",
    top: "calc(50vh - 20px)",
    left: "calc(50% - 20px)",
    opacity: 0.7,
    zIndex: 1001,
  },
};

const LoadingOverlay: React.FC = () => (
  <div style={classes.overlay}>
    <div>
      <CircularProgress color="primary" style={classes.circular} />
    </div>
  </div>
);

export default LoadingOverlay;
