import { createTheme } from "@mui/material";
import { button } from "./button";

export const theme = createTheme({
  components: {
    ...button
  }
});
