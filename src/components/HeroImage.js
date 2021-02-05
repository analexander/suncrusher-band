import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import BandPhoto from '../images/suncrusherbandwithlogojpg.jpg'

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  marginAutoItem: {
    margin: 'auto'
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="band photo"
        //   height="140"
          image={BandPhoto}
          title="band photo"
          className={classes.marginAutoItem}
          position='fixed'
        />
      </CardActionArea>
    </Card>
  );
}