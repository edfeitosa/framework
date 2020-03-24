import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import styles from './styles';
const useStyles = makeStyles(styles);

const List = ({ rows }) => {
  const classes = useStyles();

  return (
    <>
      <h2>Usuário {rows[0].userId}</h2>
      <Grid container spacing={2}>
        {
          rows && rows.map((row, key) => (
            <Grid key={key} item xs={12} md={6} style={{padding:'5px'}}>
              <div className={classes.block}>
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
  rows: PropTypes.array
}

export default List;