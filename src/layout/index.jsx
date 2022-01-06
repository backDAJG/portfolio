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
import {
  IconBrandGithub,
} from "@tabler/icons";
import { styled } from "@mui/styles";
import { useTheme } from "@emotion/react";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const Main = styled("main")(({ theme }) => ({
  ...theme.typography.mainContent,
  borderRadius: 12,
  width: "100%",
  padding: 0,
  marginRight: "20px",
  marginLeft: "20px",
  marginBottom: "20px",
  marginTop: "73px",
  overflow: "hidden",
}));

export default (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar color="inherit" position="fixed">
          <Container maxWidth="xl">
            <Toolbar>
              <Typography
                variant="h1"
                noWrap
                component="div"
                sx={{ mr: 2, display: "flex" }}
              >
                Logo
              </Typography>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <Button variant="text">Home</Button>
                <Button variant="text">About Me</Button>
                <Button variant="text">Services</Button>
                <Button variant="text">Contact</Button>
                <Tooltip title="GitHub">
                  <IconButton aria-label="github" color="primary">
                    <IconBrandGithub />
                  </IconButton>
                </Tooltip>
              </Box>
              <MobileMenu theme={theme} />
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
