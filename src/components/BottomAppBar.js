import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Logo from '../images/SunCrusher-logo_UPDATED_W.png'

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
      }
    }
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
        <Button color="inherit" className={classes.navText}>About</Button>
        <Button color="inherit" className={classes.navText}>Shop</Button>
        <Button color="inherit" className={classes.navText}>Contact</Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}