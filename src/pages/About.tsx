import React from "react";
import { Box, Typography, Container, Paper, Grid } from "@mui/material";

const About: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1, width: "100vw", overflowX: "hidden" }}>
      {/* Hero Section */}
      <Box
        sx={{
          height: "40vh",
          width: "100%",
          backgroundImage: "url(https://example.com/about-hero-image.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <Typography variant="h2" component="h1" color="primary" gutterBottom>
          Sobre o Excursonator
        </Typography>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ mt: -4, mb: 6, position: "relative" }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" component="h2" gutterBottom>
                Nossa Missão
              </Typography>
              <Typography variant="body1" paragraph>
                O Excursonator é uma plataforma dedicada a conectar viajantes
                com experiências autênticas em sua cidade ou região. Acreditamos
                na promoção do turismo responsável e no apoio às comunidades
                locais.
              </Typography>
              <Typography variant="body1" paragraph>
                Nossa missão é facilitar a descoberta e participação em
                excursões únicas, desde passeios históricos até aventuras
                gastronômicas e trilhas na natureza. Ao reunir organizadores de
                excursões e viajantes curiosos, nosso objetivo é fomentar uma
                apreciação mais profunda do rico patrimônio cultural e natural
                de cada região.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" component="h2" gutterBottom>
                Nossos Valores
              </Typography>
              <Typography variant="body1" paragraph>
                1. Autenticidade: Promovemos experiências genuínas que refletem
                a verdadeira essência de cada local.
              </Typography>
              <Typography variant="body1" paragraph>
                2. Sustentabilidade: Incentivamos práticas de turismo que
                respeitam e preservam o meio ambiente e as culturas locais.
              </Typography>
              <Typography variant="body1" paragraph>
                3. Comunidade: Valorizamos a conexão entre viajantes e
                comunidades locais, fomentando o intercâmbio cultural.
              </Typography>
              <Typography variant="body1" paragraph>
                4. Inovação: Buscamos constantemente novas formas de melhorar a
                experiência de viagem para todos os envolvidos.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>

      {/* Call to Action */}
      <Box
        sx={{
          bgcolor: "primary.main",
          color: "primary.contrastText",
          py: 6,
          px: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Junte-se a Nós na Exploração
        </Typography>
        <Typography variant="body1" paragraph>
          Descubra as joias escondidas e histórias não contadas da sua área.
          Vamos viajar juntos!
        </Typography>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{ bgcolor: "background.paper", py: 6, px: 2, mt: "auto" }}
      >
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Excursonator. Todos os direitos
          reservados.
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
