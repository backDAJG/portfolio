import { Avatar, Grid, Fade } from "@mui/material";
import { Box } from "@mui/system";
import { Parallax } from "react-parallax";
import CardPresentation from "./CardPresentation";
import Hexagono from "./Hexagono";
import NodeJS from "../ui-components/icons/NodeJS";
import React from "../ui-components/icons/React";
import Flutter from "../ui-components/icons/Flutter";
import MongoDB from "../ui-components/icons/MongoDB";
import Dart from "../ui-components/icons/Dart";
import Python from "../ui-components/icons/Python";
import JavaScript from "../ui-components/icons/JavaScript";

export default () => {
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
            //sm={12}
            xl={6}
            sx={{
              height: "100vh",
              display: "flex",
            }}
          >
            <Grid container justifyContent="center">
              <Grid item sx={{ display: "flex" }}>
                <Hexagono timeout={2000} aos="fade-down">
                  <React width={100} heigth={100} />
                </Hexagono>
                <Hexagono timeout={2000} aos="fade-down">
                  <Python width={100} height={100} />
                </Hexagono>
              </Grid>
              <Grid item sx={{ display: "flex", mt: 5, mb: 5 }}>
                <Hexagono timeout={2000} aos="fade-right">
                  <NodeJS width={100} height={100} />
                </Hexagono>
                <Hexagono timeout={2000} aos="zoom-in">
                  <JavaScript width={100} height={100} />
                </Hexagono>
                <Hexagono timeout={2000} aos="fade-left">
                  <Flutter width={100} height={100} />
                </Hexagono>
              </Grid>
              <Grid item sx={{ display: "flex" }}>
                <Hexagono timeout={2000} aos="fade-up">
                  <MongoDB widht={100} heigth={100} />
                </Hexagono>
                <Hexagono timeout={2000} aos="fade-up">
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
