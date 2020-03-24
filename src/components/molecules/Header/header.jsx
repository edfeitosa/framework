import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <h2 style={{color:'#fff'}}>Informações sobre usuários</h2>
      </Toolbar>
    </AppBar>
  );
};

export default Header;