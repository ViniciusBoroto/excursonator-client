//site de excursoes 
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ExcursionForm from './pages/ExcursionForm';
import ExcursionDetails from './pages/ExcursionDetails';
import About from './pages/About';

const theme = createTheme({
  // Customize your theme here
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