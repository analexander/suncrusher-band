import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ShirtContainer from './ShirtContainer';
import Mask1Container from './Mask1Container';
import Mask2Container from './Mask2Container';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    display: 'flex',
    justify: 'center',
    alignItems: 'center'
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
      <div style={{ paddingLeft: 15, marginBottom: 20}}>
      <Grid container spacing={2}>
        <Grid container item xs={12} spacing={2}>
          <FormRow />
        </Grid>
      </Grid>
      </div>
    </div>
  );
}