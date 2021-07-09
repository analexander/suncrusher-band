import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import {useSpring, animated} from 'react-spring'
import ShowAug31 from '../images/show2August31.jpeg'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    marginRight: 0
  }
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
                image={ShowAug31}
                title="Show August 31"
                onClick={()=> window.open("https://www.ticketweb.com/event/king-810-dream-alazia-suncrusher-the-forge-tickets/10864185", "_blank")}
                />
            </CardActionArea>
        </Card>
    </animated.div>
  );
}