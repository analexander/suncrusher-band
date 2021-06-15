import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import {useSpring, animated} from 'react-spring'
import SuncrusherMask2 from '../images/suncrushermask2.jpeg'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1
  },
  marginAutoItem: {
    padding: theme.spacing(2),
  },
}));

export default function NestedGrid() {
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
                alt="placeholder"
                image={SuncrusherMask2}
                title="placeholder"
                className={classes.marginAutoItem}
                />
            </CardActionArea>
        </Card>
    </animated.div>
  );
}