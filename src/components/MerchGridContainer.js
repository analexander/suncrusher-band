import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MerchContainer from './MerchContainer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    justify: 'space-around'
  }
}));

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <MerchContainer />
        </Grid>
        <Grid item xs={4}>
        <MerchContainer />
        </Grid>
        <Grid item xs={4}>
        <MerchContainer />
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <div style={{ paddingLeft: 15, marginBottom: 20}}>
      <Grid container spacing={2}>
        <Grid container item xs={12} spacing={2}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={2}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={2}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={2}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={2}>
          <FormRow />
        </Grid>
      </Grid>
      </div>
    </div>
  );
}