import { createTheme } from "@mui/material/styles";
import colors from "../assets/stylus/_themes-vars.module.styl";
import themePalette from "./palette";
import themeTypography from "./typography";
import componentStyleOverrides from "./compStyleOverride";
/**
 * Represent theme style and structure as per Material-UI
 * @param {JsonObject} customization //customization parameter object
 */

const theme = (customization) => {
  const color = colors;

  const themeOption = {
    colors: color,
    heading: color.grey900,
    paper: color.paper,
    backgroundDefault: color.paper,
    background: color.primaryLight,
    darkTextPrimary: color.grey700,
    darkTextSecondary: color.grey500,
    textDark: color.grey900,
    menuSelected: color.secondaryDark,
    menuSelectedBack: color.secondaryLight,
    divider: color.grey200,
    customization,
  };

  const themeOptions = {
    direction: "ltr",
    palette: themePalette(themeOption),
    mixins: {
      toolbar: {
        minHeight: "48px",
        padding: "16px",
        "@media (min-width: 600px)": {
          minHeight: "48px",
        },
      },
    },
    typography: themeTypography(themeOption),
  };

  const theme = createTheme(themeOptions);
  theme.components = componentStyleOverrides(themeOption);

  return theme;
};

export default theme;
