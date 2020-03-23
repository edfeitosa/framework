import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import MainTemplate from '../components/templates/MainTemplate/mainTemplate';

import theme from './themes/muiTheme';

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <MainTemplate />
    </MuiThemeProvider>
  );
}

export default App;