import React, { useState } from 'react';
import { Container, Typography, TextField, Button, MenuItem, Box } from '@mui/material';

const ExcursionForm: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    theme: '',
    description: '',
    itinerary: '',
    date: '',
    contact: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Here you would typically send the data to your backend
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Create a New Excursion
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="title"
          label="Excursion Title"
          name="title"
          autoFocus
          value={formData.title}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="theme"
          label="Theme"
          id="theme"
          select
          value={formData.theme}
          onChange={handleChange}
        >
          <MenuItem value="historical">Historical</MenuItem>
          <MenuItem value="gastronomic">Gastronomic</MenuItem>
          <MenuItem value="nature">Nature</MenuItem>
        </TextField>
        <TextField
          margin="normal"
          required
          fullWidth
          name="description"
          label="Description"
          id="description"
          multiline
          rows={4}
          value={formData.description}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="itinerary"
          label="Itinerary"
          id="itinerary"
          multiline
          rows={4}
          value={formData.itinerary}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="date"
          label="Date"
          id="date"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={formData.date}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="contact"
          label="Contact Information"
          id="contact"
          value={formData.contact}
          onChange={handleChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Create Excursion
        </Button>
      </Box>
    </Container>
  );
};

export default ExcursionForm;
