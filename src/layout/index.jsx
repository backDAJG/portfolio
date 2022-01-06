import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { Outlet } from "react-router-dom";
import ElevationScroll from "./ElevationScroll";
import { IconBrandGithub } from "@tabler/icons";
import { styled } from "@mui/styles";
import { useTheme } from "@emotion/react";

const Main = styled("main")(({ theme }) => ({
  ...theme.typography.mainContent,
  borderRadius: 12,
  width: "100%",
  padding: 0,
  marginRight: "20px",
  marginLeft: "20px",
  marginBottom: "20px",
  marginTop: "73px",
  overflow: 'hidden'
}));

export default (props) => {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar color="inherit">
          <Container maxWidth="xl">
            <Toolbar>
              <Typography
                variant="h1"
                noWrap
                component="div"
                sx={{ mr: 2, display: "flex", flexGrow: 1 }}
              >
                Logo
              </Typography>
              <Button variant="text">Home</Button>
              <Button variant="text">About</Button>
              <Button variant="text">Services</Button>
              <Button variant="text">Portfolio</Button>
              <Button variant="text">Contact</Button>
              <Tooltip title="GitHub">
                <IconButton aria-label="github" color="primary">
                  <IconBrandGithub />
                </IconButton>
              </Tooltip>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <Main theme={theme}>
        <Outlet />
      </Main>
    </Box>
  );
};
