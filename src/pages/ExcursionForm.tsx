import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  MenuItem,
  Paper,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const ExcursionForm: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [formData, setFormData] = useState({
    title: "",
    theme: "",
    description: "",
    itinerary: "",
    date: "",
    contact: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Here you would typically send the data to your backend
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100vw",
        overflowX: "hidden",
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          height: isMobile ? "20vh" : "30vh",
          width: "100%",
          backgroundImage:
            "url(https://example.com/create-excursion-hero-image.jpg)",
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
        <Typography
          variant={isMobile ? "h4" : "h2"}
          component="h1"
          color="primary"
          gutterBottom
        >
          Criar Nova Excursão
        </Typography>
      </Box>

      {/* Main Content */}
      <Container maxWidth="md" sx={{ flexGrow: 1, py: 4 }}>
        <Paper elevation={3} sx={{ p: { xs: 2, sm: 4 } }}>
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="title"
                  label="Título da Excursão"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="theme"
                  label="Tema"
                  id="theme"
                  select
                  value={formData.theme}
                  onChange={handleChange}
                >
                  <MenuItem value="historical">Histórico</MenuItem>
                  <MenuItem value="gastronomic">Gastronômico</MenuItem>
                  <MenuItem value="nature">Natureza</MenuItem>
                  <MenuItem value="cultural">Cultural</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="description"
                  label="Descrição"
                  id="description"
                  multiline
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="itinerary"
                  label="Itinerário"
                  id="itinerary"
                  multiline
                  rows={4}
                  value={formData.itinerary}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="date"
                  label="Data da Excursão"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="contact"
                  label="Informações de Contato"
                  id="contact"
                  value={formData.contact}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  Criar Excursão
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>

      {/* Footer */}
      <Box
        component="footer"
        sx={{ bgcolor: "background.paper", py: 3, px: 2, mt: "auto" }}
      >
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Excursonator. Todos os direitos
          reservados.
        </Typography>
      </Box>
    </Box>
  );
};

export default ExcursionForm;
