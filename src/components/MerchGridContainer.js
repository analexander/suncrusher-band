import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ShirtContainer from './ShirtContainer';
import Mask1Container from './Mask1Container';
import Mask2Container from './Mask2Container';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    
  },
  title: {
    display: 'flex',
    color: 'white',
    justifyContent: 'center',
    fontSize: 30,
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
        <Grid item xs={12} sm={9} md={7}>
          <ShirtContainer />
        </Grid>
        <Grid item xs={12} sm={9} md={7}>
          <Mask1Container />
        </Grid>
        <Grid item xs={12} sm={9} md={7}>
          <Mask2Container />
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
        <Typography className={classes.title} gutterBottom>
            Merch
        </Typography>
      <div style={{ justify: 'center', marginBottom: 20 }}>
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