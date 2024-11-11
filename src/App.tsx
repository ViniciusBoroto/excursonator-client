import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ExcursionForm from './pages/ExcursionForm';
import ExcursionDetails from './pages/ExcursionDetails';
import About from './pages/About';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4A008A', // Roxo
      light: '#42a5f5',
      dark: '#1565c0',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#913ABD', // Roxinho
      light: '#ffb74d',
      dark: '#f57c00',
      contrastText: '#000000',
    },
    background: {
      default: '#f5f5f5', // Cinza claro para o fundo geral
      paper: '#ffffff', // Branco para elementos de papel (cards, etc)
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-excursion" element={<ExcursionForm />} />
          <Route path="/excursion/:id" element={<ExcursionDetails />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;