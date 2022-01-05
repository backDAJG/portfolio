import PropTypes from "prop-types";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NavigationScroll = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return children || null;
};

NavigationScroll.prototype = {
  children: PropTypes.node,
};

export default NavigationScroll;
