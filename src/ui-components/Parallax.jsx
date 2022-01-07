import { Grid, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import CardPresentation from "./CardPresentation";
import Hexagono from "./Hexagono";
import NodeJS from "../ui-components/icons/NodeJS";
import React from "../ui-components/icons/React";
import Flutter from "../ui-components/icons/Flutter";
import MongoDB from "../ui-components/icons/MongoDB";
import Dart from "../ui-components/icons/Dart";
import Python from "../ui-components/icons/Python";
import JavaScript from "../ui-components/icons/JavaScript";
import { useTheme } from "@mui/material/styles";

export default () => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        backgroundImage:
          "url(https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/11/reactjs-code.jpg)",
      }}
    >
      <Box
        sx={{
          height: "90vh",
          bgcolor: "rgba(255,255,255,.2)",
          backdropFilter: "blur(5px)",
        }}
      >
        <Grid container spacing={2}>
          <CardPresentation />
          <Grid
            item
            color="primary"
            flexDirection="column"
            justifyContent="center"
            xs={12}
            md={6}
            xl={6}
            sx={{
              height: "100vh",
              display: md ? "none" : "flex",
            }}
          >
            <Grid
              container
              justifyContent="center"
              data-aos="fade-left"
              data-aos-duration={2000}
            >
              <Grid item sx={{ display: "flex" }}>
                <Hexagono id="hexagono-top-left" title="ReactJS">
                  <React width={100} heigth={100} />
                </Hexagono>
                <Hexagono id="hexagono-top-right" title="Python">
                  <Python width={100} height={100} />
                </Hexagono>
              </Grid>
              <Grid item sx={{ display: "flex", mt: 5, mb: 5 }}>
                <Hexagono id="hexagono-center-left" title="NodeJS">
                  <NodeJS width={100} height={100} />
                </Hexagono>
                <Hexagono id="hexagono-center-middle" title="JavaScript">
                  <JavaScript width={100} height={100} />
                </Hexagono>
                <Hexagono id="hexagono-center-right" title="Flutter">
                  <Flutter width={100} height={100} />
                </Hexagono>
              </Grid>
              <Grid item sx={{ display: "flex" }}>
                <Hexagono title="MongoDB" id="hexagono-bottom-left">
                  <MongoDB widht={100} heigth={100} />
                </Hexagono>
                <Hexagono id="hexagono-bottom-right" title="Dart">
                  <Dart widht={100} heigth={100} />
                </Hexagono>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
