import { StepConnector, stepConnectorClasses } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CustomStepConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: `linear-gradient( 95deg,${theme.palette.success.main} 0%,${theme.palette.primary.main})`
    }
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: `linear-gradient( 95deg,${theme.palette.success.main} 0%,${theme.palette.success.light} 50%,${theme.palette.success.main} 100%)`
    }
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundImage: `linear-gradient( 95deg,${theme.palette.grey[500]} 0%,${theme.palette.grey[300]} 50%,${theme.palette.grey[500]} 100%)`,
    borderRadius: 1
  }
}));
