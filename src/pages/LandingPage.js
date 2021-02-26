import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '../components/AppBar'
import HeroImage from '../components/HeroImage'
import BottomAppBar from '../components/BottomAppBar';
import MusicVideo from '../components/MusicVideo';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function LandingPage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container
                spacing={3}
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={12}>
                    <AppBar />
                </Grid>
                <Grid item xs={12}>
                    <HeroImage />
                </Grid>
                <Grid item xs={12}>
                    <MusicVideo />
                </Grid>
                {/* <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid> */}
                <Grid item xs={12}>
                    <BottomAppBar />
                </Grid>
            </Grid>
        </div>
    );
}