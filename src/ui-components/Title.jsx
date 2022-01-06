import { Divider, Typography } from "@mui/material";

export default ({ title }) => (
  <Divider
    data-aos="fade-up"
    data-aos-duration="1000"
    variant="middle"
    sx={{ mt: 5, mb: 5 }}
  >
    <Typography variant="h1" fontSize={50} color="primary">
      {title}
    </Typography>
  </Divider>
);
