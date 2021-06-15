import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '../components/AppBar';
import BottomAppBar from '../components/BottomAppBar';
import AboutUs from '../components/AboutUs';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    }
}));

export default function MerchStore() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar />
            <AboutUs />
            <BottomAppBar />
        </div>
    )
}