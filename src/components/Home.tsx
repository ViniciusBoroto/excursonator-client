import { Container, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function Home() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Bem-vindo às Excursões Incríveis
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Descubra aventuras emocionantes e paisagens deslumbrantes
        </Typography>
        <Button variant="contained" color="primary" component={RouterLink} to="/excursoes" size="large" sx={{ mt: 2 }}>
          Ver Excursões
        </Button>
      </Box>
    </Container>
  );
}