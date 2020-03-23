import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6700da'
    },
    secondary: {
      main: '#16D94F'
    },
    text: {
      main: '#616161',
      h1: '#858e94',
      h2: '#9ca7ad'
    },
    error: {
      main: '#f00',
      contrastText: '#fff'
    }
  }
});

export default theme;