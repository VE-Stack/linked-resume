import { Box, keyframes, useTheme } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Background: FC<PropsWithChildren> = ({ children }) => {
  const theme = useTheme();
  const animation = keyframes`
    0%{
      transform: translateY(0) rotate(0deg);
      opacity: 1;
      border-radius: 0;
    }

    100%{
      transform: translateY(-1000px) rotate(720deg);
      opacity: 0;
      border-radius: 50%;
    }
  `;

  return (
    <Box
      sx={{
        "position": "relative",
        "backgroundColor":
          theme.palette.mode === "dark" ? theme.palette.grey[800] : theme.palette.grey[200],
        "overflow": "hidden",
        ".animation-element": {
          "position": "absolute",
          "display": "block",
          "listStyle": "none",
          "width": theme.spacing(2),
          "height": theme.spacing(2),
          "animation": `${animation} 25s linear infinite`,
          "bottom": theme.spacing(-25),
          "zIndex": 1,

          "&:nth-child(1)": {
            left: "25%",
            width: theme.spacing(10),
            height: theme.spacing(10),
            animationDelay: "0s"
          },

          "&:nth-child(2)": {
            left: "10%",
            width: theme.spacing(2),
            height: theme.spacing(2),
            animationDelay: "2s",
            animationDuration: "12s"
          },

          "&:nth-child(3)": {
            left: "70%",
            width: theme.spacing(2),
            height: theme.spacing(2),
            animationDelay: "4s"
          },

          "&:nth-child(4)": {
            left: "40%",
            width: theme.spacing(7),
            height: theme.spacing(7),
            animationDelay: "0s",
            animationDuration: "18s"
          },

          "&:nth-child(5)": {
            left: "65%",
            width: theme.spacing(2),
            height: theme.spacing(2),
            animationDelay: "0s"
          },

          "&:nth-child(6)": {
            left: "75%",
            width: theme.spacing(14),
            height: theme.spacing(14),
            animationDelay: "3s"
          },

          "&:nth-child(7)": {
            left: "35%",
            width: theme.spacing(18),
            height: theme.spacing(18),
            animationDelay: "7s"
          },

          "&:nth-child(8)": {
            left: "50%",
            width: theme.spacing(3),
            height: theme.spacing(3),
            animationDelay: "15s",
            animationDuration: "45s"
          },

          "&:nth-child(9)": {
            left: "20%",
            width: theme.spacing(2),
            height: theme.spacing(2),
            animationDelay: "2s",
            animationDuration: "35s"
          },

          "&:nth-child(10)": {
            left: "85%",
            width: theme.spacing(18),
            height: theme.spacing(18),
            animationDelay: "0s",
            animationDuration: "11s"
          }
        }
      }}
    >
      <LinkedInIcon htmlColor={theme.palette.primary.main} className="animation-element" />
      <GitHubIcon htmlColor={theme.palette.grey[900]} className="animation-element" />
      <LinkedInIcon htmlColor={theme.palette.primary.main} className="animation-element" />
      <GitHubIcon htmlColor={theme.palette.grey[900]} className="animation-element" />
      <LinkedInIcon htmlColor={theme.palette.primary.main} className="animation-element" />
      <GitHubIcon htmlColor={theme.palette.grey[900]} className="animation-element" />
      <LinkedInIcon htmlColor={theme.palette.primary.main} className="animation-element" />
      <GitHubIcon htmlColor={theme.palette.grey[900]} className="animation-element" />
      <LinkedInIcon htmlColor={theme.palette.primary.main} className="animation-element" />
      <GitHubIcon htmlColor={theme.palette.grey[900]} className="animation-element" />
      {children}
    </Box>
  );
};
