import { StepConnector, stepConnectorClasses } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CustomStepConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: `linear-gradient(95deg,rgba(46, 125, 50, 0.55) 0%,rgba(25, 118, 210, 0.55) 100%)`,
      boxShadow: "0 4px 10px 0 rgba(0, 0, 0, 0.2)",
      border: "1px solid rgba(255, 255, 255,0.1)",
      backdropFilter: "blur(12px)"
    }
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: `linear-gradient(95deg,rgba(76, 175, 80, 0.55) 0%,rgba(46, 125, 50, 0.55) 50%,rgba(27, 94, 32, 0.55) 100%)`,
      boxShadow: "0 4px 10px 0 rgba(0, 0, 0, 0.2)",
      border: "1px solid rgba(255, 255, 255,0.1)",
      backdropFilter: "blur(12px)"
    }
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 5,
    border: 0,
    backgroundImage: `linear-gradient(95deg,rgba(158, 158, 158, 0.55) 0%,rgba(224, 224, 224, 0.55) 50%,rgba(158, 158, 158, 0.55) 100%)`,
    borderRadius: 1
  }
}));
