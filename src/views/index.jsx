import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { IconDeviceDesktop, IconDeviceMobile, IconServer } from "@tabler/icons";
import CardService from "../ui-components/CardService";
import Paragraph from "../ui-components/Paragraph";
import Parallax from "../ui-components/Parallax";
import SubTitle from "../ui-components/SubTitle";
import Title from "../ui-components/Title";

export default () => {
  const theme = useTheme();
  return (
    <>
      <Parallax />
      <Title title="About Me" />
      <Grid container spacing={0} sx={{ display: "flex" }} alignItems="center">
        <SubTitle subtitle="¿Who I am?" />
        <Grid item xl={12} md={12} xs={12}>
          <Paragraph
            content="Colombiano, originario de Bogotá, Distrito Capital. He trabajado en
            diferentes proyectos como desarrollador backend principalmente,
            tambien he participado de algunos proyectos como frontend, aunque mi
            gran pasion es el backend ya que es ahi donde me desempeño de una
            mejor manera."
          />
          <Paragraph
            content="He liderado desarrollos de plataformas moviles vazadas en
            tecnologias como:"
            list={["Flutter (Principalmente).", "Ionic.", "React Native."]}
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
          <Paragraph
            content="Desarrollador backend con mas de 4 años de experiencia, creando mi
            primer sitio web en el 2015, trabaje durante un periodo de dos años
            liderando proyectos basados en tecnologias como Flutter en el
            apartado de aplicaciones moviles y NodeJS en el apartado de API'S o
            Backend este siendo su framework principal ExpressJS. Todo esto
            trabajando para una empresa de rastreo satelital."
          />
          <Paragraph
            content={
              <>
                En la actualidad me encuentro trabajando como desarrollador
                Freelance, cuento con mas de 20 certificados enfocados al
                desarrollo web y una carrera completa en la plataforma{" "}
                <a
                  href="https://platzi.com/p/DAJG/"
                  style={{ color: theme.palette.primary.main }}
                  target="_blank"
                >
                  platzi.com
                </a>
                . Actualmente estoy trabajando para perfeccionar mis habilidades
                en el idioma inglés.
              </>
            }
          />
        </Grid>
        <SubTitle subtitle="Recent Projects" />
        <Grid item xl={12} md={12} xs={12}>
          <Paragraph
            content="En la actualidad me encuentro trabajando en un proyecto freelance
            para una empresa de rastreo satelital."
          />
          <Paragraph
            content="Mi tiempo libre lo ocupo en un proyecto propio el cual se enfoca en
            el rublo de Ingenieria Civil. Basado en tecnologias como ReactJS,
            Firebase y MaterialUI. Esto acompañado de 3 compañeros."
          />
        </Grid>
      </Grid>
      <Title title="Services" />
      <Grid container spacing={2}>
        <Grid item sx={{ display: "flex" }} justifyContent="center" xs={4}>
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
        <Grid item sx={{ display: "flex" }} justifyContent="center" xs={4}>
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
        <Grid item sx={{ display: "flex" }} justifyContent="center" xs={4}>
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
      <Title title="Contact" />
      <Box sx={{ height: 100 }} />
    </>
  );
};
