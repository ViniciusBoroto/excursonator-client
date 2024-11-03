import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, AppBar, Toolbar, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const featuredExcursions = [
  { id: 1, title: 'Passeio Histórico pela Cidade', image: 'https://example.com/image1.jpg' },
  { id: 2, title: 'Aventura Gastronômica', image: 'https://example.com/image2.jpg' },
  { id: 3, title: 'Trilha na Natureza', image: 'https://example.com/image3.jpg' },
];

const HomePage: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1, width: '100vw', overflowX: 'hidden' }}>
      {/* Hero Section */}
      <Box
        sx={{
          height: '50vh',
          width: '100%',
          backgroundImage: 'url(https://example.com/hero-image.jpg)',
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
          ViagemComigo
        </Typography>
        <Typography variant="h5" gutterBottom>
          Descubra experiências autênticas em sua região
        </Typography>
      </Box>

      {/* Search Bar */}
      <AppBar position="static" color="default" sx={{ boxShadow: 'none' }}>
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Box sx={{ position: 'relative', width: '100%', maxWidth: 600 }}>
            <SearchIcon sx={{ position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)' }} />
            <InputBase
              placeholder="Buscar excursões..."
              sx={{
                width: '100%',
                bgcolor: 'background.paper',
                '& .MuiInputBase-input': {
                  padding: '10px 10px 10px 40px',
                },
              }}
            />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Featured Excursions */}
      <Box sx={{ py: 6, px: 2 }}>
        <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
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
                  <Typography gutterBottom variant="h6" component="div">
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
      </Box>

      {/* Call to Action */}
      <Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', py: 6, px: 2, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Explore Sua Região
        </Typography>
        <Typography variant="body1" paragraph>
          ViagemComigo oferece uma variedade de excursões para todos os gostos. 
          De passeios históricos a aventuras na natureza, temos algo para você.
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Ver Todas as Excursões
        </Button>
      </Box>

      {/* Footer */}
      <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6, px: 2, mt: 'auto' }}>
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} ViagemComigo. Todos os direitos reservados.
        </Typography>
      </Box>
    </Box>
  );
};

export default HomePage;