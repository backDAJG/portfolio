import { Box, Button, Grid, TextField, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  IconDeviceDesktop,
  IconDeviceMobile,
  IconSend,
  IconServer,
} from "@tabler/icons";
import CardService from "../ui-components/CardService";
import Paragraph from "../ui-components/Paragraph";
import Parallax from "../ui-components/Parallax";
import SubTitle from "../ui-components/SubTitle";
import Title from "../ui-components/Title";
import { Element } from "react-scroll";
import FormContact from "../ui-components/FormContact";

export default () => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down("md"));
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Element name="home">
        <Parallax />
      </Element>
      <Element name="aboutme">
        <Title title="About Me" />
        <Grid
          container
          spacing={0}
          sx={{ display: "flex" }}
          alignItems="center"
        >
          <SubTitle subtitle="¿Who I am?" />
          <Grid item xl={12} md={12} xs={12}>
            <Paragraph content="Colombian, originally from Bogotá, D.C. I have worked in different projects as a Backend mainly, I also participate in some projects such as Frontend, although my great passion is the Backend since it is where I perform in a better way." />
            <Paragraph
              content="I have led developments of Mobile platforms based on technologies such as:"
              list={["Flutter (Mainly).", "Ionic.", "React Native."]}
            />
          </Grid>
          <SubTitle subtitle="My Skills" />
          <Grid item xl={12} md={12} xs={12}>
            <Paragraph
              list={[
                "JavaScript.",
                "Flutter.",
                "React.",
                "Node.",
                "MongoDB.",
                "GitHub.",
              ]}
            />
          </Grid>
          <SubTitle subtitle="My Trajectory" />
          <Grid item xl={12} md={12} xs={12}>
            <Paragraph content="Backend Developer with more than 4 years of experience, creating my first website in 2015, I worked for a period of three years leading projects based on technologies such as Flutter in the section of Mobile applications and NodeJS in the section of API'S or Backend this being its main ExpressJS Framework. All this working for a satellite tracking company." />
            <Paragraph
              content={
                <>
                  Currently I am working as a Freelance developer, I have more
                  than 20 certificates focused on web development and a full
                  career on the platform{" "}
                  <a
                    href="https://platzi.com/p/DAJG/"
                    style={{ color: theme.palette.primary.main }}
                    target="_blank"
                  >
                    platzi.com
                  </a>
                  . I am currently working to hone my skills in the English
                  language.
                </>
              }
            />
          </Grid>
          <SubTitle subtitle="Recent Projects" />
          <Grid item xl={12} md={12} xs={12}>
            <Paragraph content="I am currently working on a Freelance project for a satellite tracking company." />
            <Paragraph content="My free time is spent on my own project which focuses on the Civil Engineering ruble. Based on technologies like ReactJS, Firebase and MaterialUI. This accompanied by 3 companions." />
          </Grid>
        </Grid>
      </Element>
      <Element name="services">
        <Title title="Services" />
        <Grid container spacing={2} sx={{ pl: 2, pr: 2 }} columns={9}>
          <Grid
            item
            sx={{ display: "flex" }}
            justifyContent="center"
            xs={12}
            md={3}
          >
            <CardService
              image="https://img.freepik.com/free-vector/low-poly-abstract-white-golden-lines-background_1017-26507.jpg?size=626&ext=jpg"
              title="Web Design"
              icon={
                <IconDeviceDesktop
                  size={50}
                  color={theme.palette.primary.dark}
                  stroke={1}
                />
              }
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur, sapiente."
            />
          </Grid>
          <Grid
            item
            sx={{ display: "flex" }}
            justifyContent="center"
            xs={12}
            md={3}
          >
            <CardService
              image="https://image.freepik.com/vector-gratis/hermoso-fondo-blanco-formas-lineas-doradas_1017-27145.jpg"
              title="API"
              icon={
                <IconServer
                  size={50}
                  color={theme.palette.primary.dark}
                  stroke={1}
                />
              }
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur, sapiente."
            />
          </Grid>
          <Grid
            item
            sx={{ display: "flex" }}
            justifyContent="center"
            xs={12}
            md={3}
          >
            <CardService
              image="https://image.freepik.com/vector-gratis/fondo-blanco-formas-lineas-lujo-dorado_1017-27144.jpg"
              title="Mobile Development"
              icon={
                <IconDeviceMobile
                  size={50}
                  color={theme.palette.primary.dark}
                  stroke={1}
                />
              }
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur, sapiente."
            />
          </Grid>
        </Grid>
      </Element>
      <Element name="contact" id="contact">
        <Title title="Contact" />
        <FormContact md={md} theme={theme} sm={sm} />
        <Box sx={{ height: 100 }} />
      </Element>
    </>
  );
};
