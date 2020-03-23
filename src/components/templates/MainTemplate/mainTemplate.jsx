import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../../../routes';
import ErrorBoundary from '../../errorBoundary';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Header from '../../molecules/Header/header';
import styles from '../../styles/styles';

const useStyles = makeStyles(styles);

const MainTemplate = () => {
  useStyles();
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Header />
        <Container style={{marginTop:'20px'}}>
          <Routes />
        </Container>
      </ErrorBoundary>
    </BrowserRouter>
  )
}

export default MainTemplate;