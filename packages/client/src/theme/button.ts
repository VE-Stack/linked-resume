import { Components, colors } from "@mui/material";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    linkedin: true;
    github: true;
  }
}

export const button: Components = {
  MuiButton: {
    variants: [
      {
        props: { variant: "linkedin" },
        style: {
          "backgroundColor": "#2977c9",
          "color": colors.common.white,
          ":hover": {
            backgroundColor: "#006097"
          },
          ":disabled": {
            color: "rgba(0, 0, 0, 0.26)",
            boxShadow: "none",
            backgroundColor: "rgba(0, 0, 0, 0.12)"
          }
        }
      },
      {
        props: { variant: "github" },
        style: {
          "backgroundColor": "#333333",
          "color": colors.common.white,
          ":hover": {
            backgroundColor: "#555555"
          },
          ":disabled": {
            color: "rgba(0, 0, 0, 0.26)",
            boxShadow: "none",
            backgroundColor: "rgba(0, 0, 0, 0.12)"
          }
        }
      }
    ]
  }
};
