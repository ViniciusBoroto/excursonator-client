import React from 'react';
import { Container, Typography } from '@mui/material';

const About: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        About ViagemComigo
      </Typography>
      <Typography variant="body1" paragraph>
        ViagemComigo is a platform dedicated to connecting travelers with authentic experiences in their city or region. We believe in promoting responsible tourism and supporting local communities.
      </Typography>
      <Typography variant="body1" paragraph>
        Our mission is to make it easy for people to discover and participate in unique excursions, from historical tours to gastronomic adventures and nature hikes. By bringing together excursion organizers and curious travelers, we aim to foster a deeper appreciation for the rich cultural and natural heritage of each region.
      </Typography>
      <Typography variant="body1">
        Join us in exploring the hidden gems and untold stories of your area. Let's travel together!
      </Typography>
    </Container>
  );
};

export default About;