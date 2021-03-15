import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Logo from '../images/SunCrusher-logo_UPDATED_W.png'
import { Link } from 'wouter';

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  logo: {
    maxWidth: 160,
  },
  navText: {
    '&:hover': {
      color: 'red',
      },
      color: 'white',
      margin: '20px',
      textDecoration: 'none'
    },
}));

export default function BottomAppBar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Paper square className={classes.paper}>
      </Paper>
      <AppBar className={classes.appBar} style={{backgroundColor: 'black'}}>
        <Toolbar>
        <img src={Logo} alt="logo" className={classes.logo}/>
        <Link to="/" className={classes.navText}>HOME</Link>
        <Link to="/about" className={classes.navText}>ABOUT</Link>
        <Link to="/merch"className={classes.navText}>SHOP</Link>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}