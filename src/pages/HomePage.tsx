import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

const featuredExcursions = [
  { 
    id: 1, 
    title: 'Passeio Histórico pelo Centro', 
    image: '/images/excursao-historica.jpg'
  },
  { 
    id: 2, 
    title: 'Tour Gastronômico', 
    image: '/images/tour-gastronomico.jpg'
  },
  { 
    id: 3, 
    title: 'Trilha na Floresta da Tijuca', 
    image: '/images/trilha-tijuca.jpg'
  },
];

const HomePage: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1, width: '100vw', overflowX: 'hidden' }}>
      {/* Hero Section */}
      <Box
        sx={{
          height: '50vh',
          width: '100%',
          backgroundImage: 'url(/images/hero-image.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Excursonator
        </Typography>
        <Typography variant="h5" gutterBottom sx= {{ mb: 4, color: 'black' }}>
          Descubra experiências autênticas em sua região
        </Typography>
      </Box>

      {/* Featured Excursions */}
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4, color: 'text.primary' }}>
          Excursões em Destaque
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {featuredExcursions.map((excursion) => (
            <Grid item key={excursion.id} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={excursion.image}
                  alt={excursion.title}
                />
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <Typography gutterBottom variant="h6" component="div" color="text.primary">
                    {excursion.title}
                  </Typography>
                  <Button size="small" color="primary" variant="contained" sx={{ mt: 2 }}>
                    Saiba Mais
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', py: 6, px: 2, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Explore Sua Região
        </Typography>
        <Typography variant="body1" paragraph>
          Excursonator oferece uma variedade de excursões para todos os gostos. 
          De passeios históricos a aventuras na natureza, temos algo para você.
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Ver Todas as Excursões
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;