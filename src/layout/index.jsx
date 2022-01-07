import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  IconButton,
  LinearProgress,
  Toolbar,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import { Outlet } from "react-router-dom";
import ElevationScroll from "./ElevationScroll";
import { IconBrandGithub, IconCode } from "@tabler/icons";
import { styled } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import MobileMenu from "./MobileMenu";
import { Link } from "react-scroll";
import { useState } from "react";

const Main = styled("main")(({ theme, sm }) => ({
  ...theme.typography.mainContent,
  borderRadius: 12,
  width: "100%",
  padding: 0,
  marginRight: sm,
  marginLeft: sm,
  marginBottom: "20px",
  marginTop: "105px",
  overflow: "hidden",
}));

export default (props) => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const [progress, setProgress] = useState(20);

  const progressCollection = {
    home: 20,
    aboutme: 48,
    services: 73,
    contact: 100,
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar color="inherit" position="fixed">
          <Container maxWidth="xl">
            <Toolbar>
              <IconCode size={50} color={theme.palette.primary.main} />
              <Box sx={{ flexGrow: 1 }} />
              <Box
                sx={{
                  display: { xs: "none", sm: "flex", flexDirection: "column" },
                }}
              >
                <Box>
                  <Link
                    spy={true}
                    to="home"
                    smooth="easeOutCubic"
                    offset={-100}
                    duration={1000}
                    onSetActive={(to) => setProgress(progressCollection[to])}
                  >
                    <Button sx={{ mr: 2 }}>Home</Button>
                  </Link>
                  <Link
                    spy={true}
                    to="aboutme"
                    smooth="easeOutCubic"
                    offset={-150}
                    duration={1000}
                    onSetActive={(to) => setProgress(progressCollection[to])}
                  >
                    <Button sx={{ mr: 2 }}>About Me</Button>
                  </Link>
                  <Link
                    spy={true}
                    to="services"
                    smooth="easeOutCubic"
                    offset={-200}
                    duration={1000}
                    onSetActive={(to) => setProgress(progressCollection[to])}
                  >
                    <Button sx={{ mr: 2 }}>Services</Button>
                  </Link>

                  <Link
                    spy={true}
                    to="contact"
                    smooth="easeOutCubic"
                    offset={-220}
                    duration={1000}
                    onSetActive={(to) => setProgress(progressCollection[to])}
                  >
                    <Button sx={{ mr: 2 }}>Contact</Button>
                  </Link>
                </Box>
                <LinearProgress variant="determinate" value={progress} />
              </Box>
              <Tooltip title="GitHub">
                <IconButton aria-label="github" color="primary" sx={{ ml: 2 }}>
                  <IconBrandGithub />
                </IconButton>
              </Tooltip>
              <MobileMenu theme={theme} setProgress={setProgress} />
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <Main theme={theme} sm={sm ? "0" : "20px"} id="container-main">
        <Outlet />
      </Main>
    </Box>
  );
};
