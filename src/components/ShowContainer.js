import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Show1 from '../components/Show1';
import Show2 from '../components/Show2';
import Show3 from '../components/Show3'

const useStyles = makeStyles({
  root: {
    flexGrow: 1

  },
  title: {
    display: 'flex',
    color: 'white',
    justifyContent: 'center',
    fontSize: 80,
    fontFamily: [
      'Creepster',
      'Cursive',
    ].join(','),
    textAlign: 'center'
  },
  merchName: {
    display: 'flex',
    color: 'red',
    justifyContent: 'center',
    fontSize: 25,
    fontFamily: [
      'Creepster',
      'Cursive',
    ].join(','),
  }
});

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={12} sm={9} md={8}>
          <Typography className={classes.merchName} gutterBottom>
          Sunday, July 11th 2021 - WC Social Club
          </Typography>
          <Show1 />
        </Grid>
        <Grid item xs={12} sm={9} md={8}>
          <Typography className={classes.merchName} gutterBottom>
            Thursday, August 12th 2021 - Reggies Rock Club
          </Typography>
          <Show2 />
        </Grid>
        <Grid item xs={12} sm={9} md={8}>
          <Typography className={classes.merchName} gutterBottom>
          Tuesday, August 31st 2021 - The Forge
          </Typography>
          <Show3 />
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Typography className={classes.title} gutterBottom>
        Shows
      </Typography>
      <div style={{ justify: 'center', marginBottom: 20, marginRight: 0 }}>
        <Grid container spacing={2}>
          <Grid container item xs={12} spacing={2}
            alignItems="center"
            justify="center">
            <FormRow />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}