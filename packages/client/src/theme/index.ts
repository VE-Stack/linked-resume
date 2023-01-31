import { createTheme } from "@mui/material";

import { button } from "./button";
import { paper } from "./paper";

export const theme = createTheme({
  components: {
    ...button,
    ...paper
  }
});
