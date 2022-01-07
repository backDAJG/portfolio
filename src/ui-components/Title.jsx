import {
  Divider,
  Typography,
  useMediaQuery,
  useScrollTrigger,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useEffect, useRef } from "react";

export default ({ title, window }) => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Divider
      data-aos={sm ? null : "fade-up"}
      data-aos-duration={sm ? null : "1000"}
      variant="middle"
      sx={{ mt: 5, mb: 5 }}
    >
      <Typography variant="h1" fontSize={50} color="primary">
        {title}
      </Typography>
    </Divider>
  );
};
