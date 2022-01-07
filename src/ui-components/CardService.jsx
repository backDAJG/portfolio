import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default ({ image, icon, title, content }) => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Card
      sx={{ width: {sm: "70%", xs: "100%", md: "100%", lg: "70%"}, position: "relative" }}
      data-aos={sm ? null : "fade-up"}
      data-aos-duration={sm ? null : "1000"}
    >
      <CardMedia
        component="img"
        alt="banner card service"
        height="140"
        image={image}
      />
      <Box
        style={{
          display: "flex",
          marginTop: -50,
          position: "absolute",
          width: "100%",
        }}
        justifyContent="center"
      >
        <Avatar
          sx={{
            width: 100,
            height: 100,
            backgroundColor: "#e3f2fd",
            border: "3px solid white",
          }}
        >
          {icon}
        </Avatar>
      </Box>
      <CardContent sx={{ mt: 5 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          align="center"
          color="primary"
        >
          {title}
        </Typography>
        <Typography
          gutterBottom
          variant="subtitle1"
          component="div"
          align="center"
        >
          {content}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="large" fullWidth variant="outlined">
          Get Service
        </Button>
      </CardActions> */}
    </Card>
  );
};
