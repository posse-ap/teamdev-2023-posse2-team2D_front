import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../logo.jpg';
import Avatar from '@mui/material/Avatar';
import Drawer from '@mui/material/Drawer';
import SideMenu from './SideMenu';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [drawerOpened, setDrawerOpened] = useState(false);

  const handleMenuItemClick = (key: string, path: string) => {
    setDrawerOpened(false);
    if (key === 'logout') {
      localStorage.clear();
      window.location.href = "login";
    } else {
      navigate(path);
    }
  };

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="fixed" sx={{bgcolor: "#f5f5f5", color: '#666666'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, "@media screen and (max-width:498px)": {mr: 0}}}
          >
            <MenuIcon 
            onClick={() => setDrawerOpened(true)}
            />
            <Drawer
              anchor={'left'}
              open={drawerOpened}
              onClick={() => setDrawerOpened(false)}>
              <SideMenu 
                handleMenuItemClick={handleMenuItemClick}
                onClose={() => setDrawerOpened(false)}
              />
            </Drawer>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={'/'} style={{ textDecoration: 'none' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1}}>
                  <Avatar src={logo}  sx={{"@media screen and (max-width:498px)": {width: 25, height: 25} }} alt="PeerPerk" />
              <Typography sx={{ fontSize: 20, "@media screen and (max-width:498px)": {fontSize: 14}, color: '#666666' }} >
                PeerPerk
              </Typography>

              </Box>
            </Link>
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{flexGrow: 0.07, display: { fontSize: 18, "@media screen and (max-width:660px)": {fontSize: 14}, xs: 'none', sm: 'block' } }}
          >
            獲得予定ポイント : 5000pt
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{flexGrow: 0.01, display: { fontSize: 18, "@media screen and (max-width:660px)": {fontSize: 14},sm: 'block' } }}
          >
            所有ポイント : 5000pt
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;