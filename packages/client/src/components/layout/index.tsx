import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";

import { Background } from "../background";
import { Steps } from "../steps";

export const Layout = () => {
  return (
    <Background>
      <Container
        sx={{
          height: "100vh",
          pt: 5,
          pb: 3
        }}
      >
        <Steps />
        <Outlet />
      </Container>
    </Background>
  );
};
