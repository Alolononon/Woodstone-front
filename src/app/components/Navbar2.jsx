import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Navbar() {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#1f2933' }}>
      <Toolbar>

        {/* Logo + Brand */}
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <img
            src="/woodlogo.jpg"
            alt="Woodstone Logo"
            style={{ width: 40, height: 40, marginRight: 10 }}
          />
          <Typography variant="h6" component="div">
            Woodstone
          </Typography>
        </Box>

        {/* Nav Buttons */}
        <Button color="inherit" href="/">Home</Button>
        <Button color="inherit" href="/price">Price</Button>
        <Button color="inherit" href="/contact">Contact</Button>
        <Button color="inherit" href="/about">About</Button>

      </Toolbar>
    </AppBar>
  );
}
