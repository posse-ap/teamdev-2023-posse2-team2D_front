import { Box } from '@mui/material';
import React from 'react';
import logo from '../logo.jpg';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#333',
        fontSize: 12,
        height: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <img src={logo} alt="" height={18} />
    </Box>
  );
}
