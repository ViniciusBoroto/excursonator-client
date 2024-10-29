import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

const featuredExcursions = [
  { id: 1, title: 'Historical City Tour', image: 'https://example.com/image1.jpg' },
  { id: 2, title: 'Gastronomic Adventure', image: 'https://example.com/image2.jpg' },
  { id: 3, title: 'Nature Hike', image: 'https://example.com/image3.jpg' },
];

const HomePage: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to ViagemComigo
      </Typography>
      <Typography variant="body1" paragraph>
        Discover authentic experiences in your region with our curated excursions.
      </Typography>
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Featured Excursions
      </Typography>
      <Grid container spacing={4}>
        {featuredExcursions.map((excursion) => (
          <Grid item key={excursion.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={excursion.image}
                alt={excursion.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {excursion.title}
                </Typography>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;