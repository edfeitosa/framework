import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';

import Menu from '../Menu/menu';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <h2 style={{color:'#fff'}}>Desafio Técnico</h2>
        <Menu />
      </Toolbar>
    </AppBar>
  );
};

export default Header;