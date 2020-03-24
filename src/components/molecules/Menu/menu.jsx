import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import LinkMenu from '../../atoms/LinkMenu/linkMenu';
import styles from './styles';

const useStyles = makeStyles(styles);

const Menu = () => {
  const classes = useStyles();
  return (
    <div className={classes.menu}>
      <LinkMenu href='/' title='Home' />
      <LinkMenu href='/posts' title='Posts' />
      <LinkMenu href='/albums' title='Albums' />
      <LinkMenu href='/todos' title='Todos' />
    </div>
  )
}

export default Menu;