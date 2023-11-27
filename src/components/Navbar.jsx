import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import UseUserHook from '../AuthContext/userHook';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import { Tooltip } from '@mui/material';
import FeedIcon from '@mui/icons-material/Feed';

export default function Navbar() {
  const { handleLogout } = UseUserHook();
  const navigate = useNavigate();
  const navigateToPersonalizedNewsFeed = () => {
    navigate('/personalizes-feed');
  };

  const navigateToNewsFeed = () => {
    navigate('/');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            News App
          </Typography>
          <Tooltip title="Newsfeed">
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              //   aria-controls={menuId}
              aria-haspopup="true"
              onClick={navigateToNewsFeed}
              color="inherit"
            >
              <FeedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Personalized Newsfeed">
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              //   aria-controls={menuId}
              aria-haspopup="true"
              onClick={navigateToPersonalizedNewsFeed}
              color="inherit"
            >
              <SettingsAccessibilityIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Logout">
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              //   aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleLogout}
              color="inherit"
            >
              <LogoutIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
