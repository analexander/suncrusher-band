import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '../components/AppBar';
import BottomAppBar from '../components/BottomAppBar';
import MerchGridContainer from '../components/MerchGridContainer';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    title: {
        fontSize: 30,
        fontFamily: [
            'Creepster',
            'Cursive',
            ].join(','),
         },
    }
}));

export default function MerchStore() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar />
            <MerchGridContainer />
            <BottomAppBar />
        </div>
    )
}