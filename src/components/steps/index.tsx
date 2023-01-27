import { Step, StepLabel, Stepper, Typography, useTheme } from "@mui/material";
import { Children } from "react";

import { steps } from "../../constants";
import { CustomStepConnector } from "./customStepConnector";
import { CustomStepIcon } from "./customStepIcon";

export const Steps = () => {
  const theme = useTheme();

  return (
    <Stepper
      activeStep={1}
      alternativeLabel
      connector={<CustomStepConnector />}
      sx={{
        position: "absolute",
        top: theme.spacing(5),
        left: "50%",
        transform: "translateX(-50%)",
        width: {
          xs: "90%",
          md: "70%"
        }
      }}
    >
      {Children.toArray(
        steps.map(({ label }) => (
          <Step>
            <StepLabel StepIconComponent={CustomStepIcon}>
              <Typography  sx={{
                color: theme.palette.common.white,
                letterSpacing: 0.5
              }}>{label}</Typography>
            </StepLabel>
          </Step>
        ))
      )}
    </Stepper>
  );
};
