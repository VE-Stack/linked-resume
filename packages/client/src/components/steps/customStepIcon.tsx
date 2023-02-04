import { StepIconProps, useTheme } from "@mui/material";
import { FC, ReactElement } from "react";
import PublicIcon from "@mui/icons-material/Public";
import StyleIcon from "@mui/icons-material/Style";
import DescriptionIcon from "@mui/icons-material/Description";
import DoneIcon from "@mui/icons-material/Done";

import { CustomStepIconStyled } from "./customStepIcon.style";

export const CustomStepIcon: FC<StepIconProps> = ({ active, completed, className, icon }) => {
  const theme = useTheme();
  
  const selectedIcon: { [key: string]: ReactElement } = {
    1: <PublicIcon />,
    2: <StyleIcon />,
    3: <DescriptionIcon />
  };

  return (
    <CustomStepIconStyled ownerState={{ completed, active }} className={className}>
      {completed ? <DoneIcon /> : selectedIcon[icon as string]}
    </CustomStepIconStyled>
  );
};
