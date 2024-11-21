import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box, Button, Rating } from '@mui/material';

const mockExcursion = {
  id: 1,
  title: 'Historical City Tour',
  theme: 'Historical',
  description: 'Explore the rich history of our city...',
  itinerary: '10:00 AM - Meet at City Hall\n11:00 AM - Visit the Old Cathedral\n...',
  date: '2023-07-15',
  contact: 'John Doe: +1 234 567 8900',
  rating: 4.5,
};

const ExcursionDetails: React.FC = () => {
  useParams<{ id: string; }>();
  const excursion = mockExcursion;

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {excursion.title}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        Theme: {excursion.theme}
      </Typography>
      <Typography variant="body1" paragraph>
        {excursion.description}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Itinerary
      </Typography>
      <Typography variant="body1" paragraph component="pre" sx={{ whiteSpace: 'pre-wrap' }}>
        {excursion.itinerary}
      </Typography>
      <Box sx={{ mb: 2 }}>
        <Typography variant="body2" color="text.secondary">
          Date: {excursion.date}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Contact: {excursion.contact}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Typography component="legend">Rating:</Typography>
        <Rating name="read-only" value={excursion.rating} readOnly />
      </Box>
      <Button variant="contained" color="primary">
        Contact Organizer
      </Button>
    </Container>
  );
};

export default ExcursionDetails;