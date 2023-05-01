import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
// import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Box sx={{ minHeight: 'calc(100vh - 30px)' }}>
        {/* Header navigation */}
        <Header />

        {/* Main contents */}
        <Box component="main" sx={{ px: 1, py: 12, "@media screen and (max-width:600px)": {
        py: 8,
    },}}>
          <Outlet />
        </Box>
      </Box>

      {/* Footer */}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
