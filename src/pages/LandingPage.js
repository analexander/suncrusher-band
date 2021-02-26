import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '../components/AppBar'
import HeroImage from '../components/HeroImage'
import BottomAppBar from '../components/BottomAppBar';
import MusicVideo from '../components/MusicVideo';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    }
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
                <Grid item xs={12}>
                    <BottomAppBar />
                </Grid>
            </Grid>
        </div>
    );
}