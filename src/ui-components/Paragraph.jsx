import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default ({ content, list }) => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Typography
      variant="subtitle1"
      sx={{ ml: sm ? 1 : 10, mr: sm ? 1 : 10, mt: 5 }}
      color="gray"
      textAlign={sm ? "justify" : "left"}
      fontSize={20}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {content}
      {list && (
        <ul>
          {list.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
      )}
    </Typography>
  );
};
