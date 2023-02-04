import { Components, colors } from "@mui/material";

export const paper:Components = {
  MuiPaper: {
    defaultProps: {
      elevation: 16
    },
    styleOverrides: {
      root: {
        backgroundColor: "rgba(255,255,255, 0.55)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.1)",
        zIndex: 2
      }
    }
  }
}