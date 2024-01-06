import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import logo from '../../../static/icons/logo.png';
import cart from '../../../static/icons/Shopping_bag_Cart.svg';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <Box>
      <AppBar 
        position="static" 
        sx={{ 
          backgroundColor: '#9e9e9e',
        }}
        elevation={2}
        >
        <Toolbar sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}>
          <Link to='/'>
            <Box 
              component="img"
              sx={{
                height: 56,
              }}
              alt='Logo'
              src={logo}
            />
          </Link>

          
            
          <Link to='/cart'>
            <Box 
              component="img"
              sx={{
                height: 20,
              }}
              alt='cart icon'
              src={cart}
            />
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
