import { Avatar, Grid, Typography, useMediaQuery } from "@mui/material";

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
        <Grid
          data-aos="fade-right"
          data-aos-duration="2000"
          item
          justifyContent="space-between"
        >
          <Avatar
            alt="Remy Sharp"
            src="https://pps.whatsapp.net/v/t61.24694-24/74588997_137775440519508_5744834306687799081_n.jpg?ccb=11-4&oh=cc9b3b1b2e007cf4715f5f17be6716ac&oe=61DB85AC"
            sx={{ width: 200, height: 200, m: 5 }}
          />
        </Grid>
        <Grid item data-aos="fade-down" data-aos-duration="2000">
          <Typography
            variant="h1"
            align="center"
            textAlign="center"
            color="white"
          >
            Hi!
          </Typography>
          <Typography
            variant="h1"
            align="center"
            textAlign="center"
            color="primary"
          >
            I'm Alejandro Jerez
          </Typography>
          <Typography
            variant="h3"
            align="center"
            textAlign="center"
            color="white"
          >
            Fullstack Developer
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
