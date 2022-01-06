import { Grid, Typography } from "@mui/material";

export default () => {
  return (
    <Grid
      item
      color="primary"
      xs={12}
      md={6}
      sm={12}
      xl={6}
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid container justifyContent="center" alignItems="center">
        <Grid item data-aos="fade-down" data-aos-duration="2000">
          <Typography
            variant="h1"
            align="center"
            textAlign="center"
            color="white"
            fontSize={80}
          >
            Hi!
          </Typography>
          <Typography
            variant="h1"
            align="center"
            textAlign="center"
            color="primary"
            fontSize={50}
          >
            I'm Alejandro Jerez
          </Typography>
          <Typography
            variant="h3"
            align="center"
            textAlign="center"
            color="white"
            fontSize={40}
          >
            Fullstack Developer
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
