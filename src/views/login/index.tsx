import { Paper, Stack, Button, Typography, useTheme, Box, Tooltip } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import { Paths } from "../../ts/enums";
import { Social } from "../../components";

const Login = () => {
  const theme = useTheme();

  return (
    <Stack
      sx={{
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Paper
        sx={{
          p: {xs: 2, md: 6},
          maxWidth: theme.spacing(60)
        }}
      >
        <Stack spacing={2} alignItems="center">
          <Box sx={{ mb: 6 }}>
            <Typography variant="h5" component="h1" fontWeight={600} gutterBottom>
              Choose your social network
            </Typography>
            <Typography variant="subtitle2" paragraph gutterBottom>
              Your resume will be generated based on your selected social network info
            </Typography>
            <Stack alignItems="center">
              <Social
                sx={{
                  height: {
                    xs: "100%",
                    md: "70%"
                  },
                  width: {
                    xs: "100%",
                    md: "70%"
                  }
                }}
              />
            </Stack>
          </Box>
          <Button
            variant="linkedin"
            startIcon={<LinkedInIcon />}
            sx={{
              width: {
                xs: "100%",
                md: "70%"
              }
            }}
          >
            LinkedIn
          </Button>
          <Tooltip title="⚠ Still in Developing!">
            <Button
              variant="github"
              startIcon={<GitHubIcon />}
              sx={{
                width: {
                  xs: "100%",
                  md: "70%"
                }
              }}
            >
              GitHub
            </Button>
          </Tooltip>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default Login;
