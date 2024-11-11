import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', py: 3, px: 2 }}>
      <Typography variant="body2" align="center">
        © {new Date().getFullYear()} ViagemComigo. Todos os direitos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;