import muiTheme from '../../themes/muiTheme';

const styles = {
  menu: {
    display: 'flex',
    marginBottom: '0px',
    justifyContent: 'space-between',
    position: 'absolute',
    right: '0',
    '& a': {
      textAlign: 'center',
      fontSize: '0.70rem',
      fontWeight: '500',
      borderRadius: '3px',
      backgroundColor: muiTheme.palette.secondary.main,
      color: '#fff',
      textDecoration: 'none',
      minWidth: '35px',
      padding: '5px',
      margin: '0px 10px',
      width: '100px'
    }
  }
}

export default styles;