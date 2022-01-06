import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import themes from "./themes";
import NavigationScroll from "./layout/NavigationScroll";
import Routes from "./routes";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes({})}>
        <CssBaseline />
        <NavigationScroll>
          <Routes />
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
