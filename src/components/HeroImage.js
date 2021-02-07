import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import {useSpring, animated} from 'react-spring'
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

  const props = useSpring({
    config: { duration: 2000 },
    opacity: 1,
    from: { opacity: 0 },
  })

  return (
      <animated.div style={props}>
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
    </animated.div>
  );
}