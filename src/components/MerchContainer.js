import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import {useSpring, animated} from 'react-spring'
import PlaceholderImg from '../images/placeholder.png'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexGrow: 1,
    justify: "space-around"
  },
  marginAutoItem: {
    margin: 'auto'
  },
});

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
                image={PlaceholderImg}
                title="placeholder"
                className={classes.marginAutoItem}
                />
            </CardActionArea>
        </Card>
    </animated.div>
  );
}