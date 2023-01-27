import { styled } from "@mui/material/styles";

export const CustomStepIconStyled = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  zIndex: 1,
  color: theme.palette.common.white,
  width: theme.spacing(6),
  height: theme.spacing(6),
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(!ownerState.active && !ownerState.completed && {
    backgroundImage:
      `linear-gradient( 136deg, ${theme.palette.grey[300]} 0%, ${theme.palette.grey[500]} 50%, ${theme.palette.grey[700]} 100%)`,
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.active && {
    backgroundImage:
      `linear-gradient( 136deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 50%, ${theme.palette.primary.dark} 100%)`,
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      `linear-gradient( 136deg, ${theme.palette.success.light} 0%, ${theme.palette.success.main} 50%, ${theme.palette.success.dark} 100%)`,
      boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
}));