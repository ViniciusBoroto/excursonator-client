import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Toolbar, Typography, Button, Container, Box, Card, CardContent, CardMedia, CardActionArea, Grid, Link } from '@mui/material';
import { Link as RouterLink, useParams } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
          Excursões Incríveis
        </Typography>
        <Button color="inherit" component={RouterLink} to="/">
          Início
        </Button>
        <Button color="inherit" component={RouterLink} to="/excursoes">
          Excursões
        </Button>
      </Toolbar>
    </AppBar>
  );
}

function Home() {
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

interface Excursao {
  id: number;
  titulo: string;
  descricao: string;
  imagem: string;
  detalhes: string;
  preco: number;
}

const excursoes: Excursao[] = [
  { 
    id: 1, 
    titulo: 'Trilha na Floresta', 
    descricao: 'Uma aventura emocionante pela natureza', 
    imagem: 'https://source.unsplash.com/random/800x600?nature',
    detalhes: 'Explore a beleza natural de nossa floresta local nesta trilha guiada de 5 km. Ideal para iniciantes e experientes.',
    preco: 50
  },
  { 
    id: 2, 
    titulo: 'Passeio de Barco', 
    descricao: 'Explore rios e lagos deslumbrantes', 
    imagem: 'https://source.unsplash.com/random/800x600?boat',
    detalhes: 'Desfrute de um passeio relaxante de 2 horas em nosso barco confortável, observando a vida selvagem e as paisagens ao redor.',
    preco: 75
  },
  { 
    id: 3, 
    titulo: 'Escalada em Montanhas', 
    descricao: 'Desafie-se nas mais belas montanhas', 
    imagem: 'https://source.unsplash.com/random/800x600?mountain',
    detalhes: 'Uma experiência desafiadora para escaladores intermediários. Equipamento fornecido e guia experiente incluído.',
    preco: 100
  },
];

function ExcursoesList() {
  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Nossas Excursões
      </Typography>
      <Grid container spacing={4}>
        {excursoes.map((excursao) => (
          <Grid item key={excursao.id} xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea component={RouterLink} to={`/excursao/${excursao.id}`}>
                <CardMedia
                  component="img"
                  height="140"
                  image={excursao.imagem}
                  alt={excursao.titulo}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {excursao.titulo}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {excursao.descricao}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

function ExcursaoDetalhes() {
  const { id } = useParams<{ id: string }>();
  const excursao = excursoes.find(e => e.id === Number(id));

  if (!excursao) {
    return <Typography>Excursão não encontrada</Typography>;
  }

  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Card>
        <CardMedia
          component="img"
          height="300"
          image={excursao.imagem}
          alt={excursao.titulo}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {excursao.titulo}
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            {excursao.detalhes}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
            <Typography variant="h6" color="primary">
              Preço: R$ {excursao.preco}
            </Typography>
            <Button variant="contained" color="primary">
              Reservar Agora
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Excursões Incríveis. Todos os direitos reservados.
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          <Link color="inherit" href="#">
            Política de Privacidade
          </Link>
          {' | '}
          <Link color="inherit" href="#">
            Termos de Uso
          </Link>
        </Typography>
      </Container>
    </Box>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <Box component="main" sx={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/excursoes" element={<ExcursoesList />} />
              <Route path="/excursao/:id" element={<ExcursaoDetalhes />} />
            </Routes>
          </Box>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}