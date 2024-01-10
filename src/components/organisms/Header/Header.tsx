import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import logo from '../../../static/icons/logo.svg';
import { Link } from 'react-router-dom';
import { SearchInput } from '../../atoms/Inputs/SearchInput';
import { CartIcon } from '../../atoms/Media/CartIcon';

export const Header: React.FC = () => {
  return (
    <Box>
      <AppBar 
        position="static" 
        sx={{ 
          backgroundColor: '#272727',
        }}
        elevation={2}
        >
        <Toolbar sx={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '16px',
        }}>
          <Link to='/'>
            <Box 
              component="img"
              sx={{
                height: 45,
              }}
              alt='Logo'
              src={logo}
            />
          </Link>

          
          <Box
            display={'flex'}
            alignItems={'center'}
            gap={2}
          >
            <SearchInput />
            <CartIcon />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
