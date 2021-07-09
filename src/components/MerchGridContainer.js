import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ShirtContainer from './ShirtContainer';
import Mask1Container from './Mask1Container';
import Mask2Container from './Mask2Container';
import SuncrusherPolish from './SuncrusherPolish';
import BloodMoonPolish from './BloodMoonPolish';

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
  },
  merchName: {
    display: 'flex',
    color: 'white',
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
          <ShirtContainer />
          <Typography className={classes.merchName} gutterBottom>
            Suncrusher T-Shirt - $20
          </Typography>
        </Grid>
        <Grid item xs={12} sm={9} md={8}>
          <Mask1Container />
          <Typography className={classes.merchName} gutterBottom>
            Suncrusher Typography Mask - $15
          </Typography>
        </Grid>
        <Grid item xs={12} sm={9} md={8}>
          <Mask2Container />
          <Typography className={classes.merchName} gutterBottom>
            Suncrusher Logo Mask - $15
          </Typography>
        </Grid>
        <Grid item xs={12} sm={9} md={8}>
          <SuncrusherPolish />
          <Typography className={classes.merchName} gutterBottom>
            Suncrusher Nail Polish - $11
          </Typography>
        </Grid>
        <Grid item xs={12} sm={9} md={8}>
          <BloodMoonPolish />
          <Typography className={classes.merchName} gutterBottom>
            Blood Moon Nail Polish - $11
          </Typography>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Typography className={classes.title} gutterBottom>
        Merch
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