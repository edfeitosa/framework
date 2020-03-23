import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <h1>Informações sobre usuários</h1>
      </Toolbar>
    </AppBar>
  );
};

export default Header;