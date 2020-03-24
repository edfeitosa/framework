import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import styles from './styles';
const useStyles = makeStyles(styles);

const List = ({ small, rows }) => {
  const classes = useStyles();

  const height = () => small ? '70px' : '140px';
  console.log(height());
  return (
    <>
      <h2>Usuário {rows[0].userId}</h2>
      <Grid container spacing={2}>
        {
          rows && rows.map((row, key) => (
            <Grid key={key} item xs={12} md={6} style={{padding:'5px'}}>
              <div className={classes.block} style={{height:height()}}>
                <div className={classes.orderUser}>
                  Usuário: {row.userId} | Post nº: {row.id}
                </div>
                <div className={classes.title}>Título</div>
                {row.title}
                {
                  row.body && (
                    <>
                      <div className={classes.title}>Mensagem</div>
                      {row.body}
                    </>
                  )
                }
              </div>
            </Grid>
          ))
        }
      </Grid>
    </>
  );
}

List.propTypes = {
  small: PropTypes.bool,
  rows: PropTypes.array
}

List.defaultProps = {
  small: true
}

export default List;