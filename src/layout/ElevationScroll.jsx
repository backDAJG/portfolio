import { useScrollTrigger } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import { cloneElement } from "react";

const ElevationScroll = ({ children, window }) => {
  const theme = useTheme();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
    sx: trigger
      ? { backdropFilter: "blur(10px)", bgcolor: "rgba(255, 255, 255, 0.7)" }
      : null,
  });
};

ElevationScroll.prototype = {
  children: PropTypes.node.isRequired,
  window: PropTypes.func,
};

export default ElevationScroll;
