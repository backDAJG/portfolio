import { Grid, Typography } from "@mui/material";

export default ({ subtitle }) => (
  <Grid
    xl={12}
    md={12}
    xs={12}
    sx={{ display: "flex", ml: 10, mr: 10, mt: 5 }}
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
