import { styled } from "@mui/material/styles";

export const CustomStepIconStyled = styled("div")<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  zIndex: 1,
  color: theme.palette.common.white,
  width: theme.spacing(6),
  height: theme.spacing(6),
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(!ownerState.active &&
    !ownerState.completed && {
      backgroundColor: "rgba(158, 158, 158, 0.4)",
      boxShadow: "0 4px 10px 0 rgba(0, 0, 0, 0.1)",
      border: "1px solid rgba(255, 255, 255,0.1)",
      backdropFilter: "blur(12px)"
    }),
  ...(ownerState.active && {
    backgroundColor: "rgba(25, 118, 210, 0.4)",
    boxShadow: "0 4px 10px 0 rgba(0, 0, 0, 0.1)",
    border: "1px solid rgba(255, 255, 255,0.1)",
    backdropFilter: "blur(12px)"
  }),
  ...(ownerState.completed && {
    backgroundColor: "rgba(46, 125, 50, 0.4)",
    boxShadow: "0 4px 10px 0 rgba(0, 0, 0, 0.1)",
    border: "1px solid rgba(255, 255, 255,0.1)",
    backdropFilter: "blur(12px)"
  })
}));
