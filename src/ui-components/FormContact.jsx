import { Box, Button, Grid, TextField } from "@mui/material";
import { IconSend } from "@tabler/icons";

export default ({ md, theme, sm }) => {
  return (
    <Box
      data-aos={sm ? null : "fade-up"}
      data-aos-duration={sm ? null : "1000"}
      sx={{ position: "relative", mb: 5 }}
    >
      <Grid container spacing={0}>
        <Grid
          item
          sm={6}
          md={6}
          sx={6}
          sx={{
            height: "500px",
            bgcolor: "white",
            borderTopRightRadius: "30px",
            borderBottomRightRadius: "30px",
            display: md ? "none" : "flex",
            alignItems: "center",
          }}
        >
          <img
            src="https://berrydashboard.io/static/media/img-groupmail.b23eba3a.png"
            className="floating-animation"
          />
        </Grid>
        <Grid
          item
          sm={6}
          md={6}
          sx={6}
          sx={{
            height: "500px",
            bgcolor: theme.palette.primary.light,
            display: md ? "none" : "block",
          }}
        ></Grid>
      </Grid>
      <Box
        sx={
          md
            ? {
                bgcolor: theme.palette.primary.light,
                borderRadius: "12px",
                //boxShadow: "rgb(0 0 0 / 20%) 0px 0px 50px",
                p: 5,
              }
            : {
                position: "absolute",
                width: "50%",
                top: "50%",
                left: "50%",
                transform: "translate(-30%, -50%)",
                bgcolor: theme.palette.primary.light,
                borderRadius: "12px",
                boxShadow: "rgb(0 0 0 / 20%) 0px 0px 50px",
                p: 5,
              }
        }
      >
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField fullWidth id="outlined-basic" label="Name" />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Phone Number (optional)"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth id="outlined-basic" label="Name" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth id="outlined-basic" label="Subject" />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-basic"
              multiline
              rows={4}
              label="Message"
            />
            <Button
              sx={{ mt: 2 }}
              variant="outlined"
              fullWidth
              endIcon={<IconSend />}
            >
              Send Mail
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
