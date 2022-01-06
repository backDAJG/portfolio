import { Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default ({ subtitle }) => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      item
      xl={12}
      md={12}
      xs={12}
      sx={{ display: "flex", ml: sm ? 1 : 10, mr: 10, mt: 5 }}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <Typography
        variant="caption"
        fontSize={40}
        align="center"
        textAlign="left"
        color="primary"
      >
        <strong>{subtitle}</strong>
      </Typography>
    </Grid>
  );
};
