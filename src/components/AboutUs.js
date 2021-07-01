import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {useSpring, animated} from 'react-spring'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    color: 'white',
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
  },
  title: {
    fontSize: 80,
    fontFamily: [
        'Creepster',
        'Cursive',
      ].join(','),
  },
  pos: {
    marginBottom: 5,
  },
});

export default function OutlinedCard() {
  const classes = useStyles();

  const props = useSpring({
    config: { duration: 2000 },
    opacity: 1,
    from: { opacity: 0 },
  })

  return (
    <animated.div style={props}>
    <Card className={classes.root} style={{backgroundColor: 'black'}}>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          Bio
        </Typography>
        <Typography variant="body2" component="p">
        In the beginning, there were two. One named Christian, and one named Luke. The lord smiled upon them, and it was good.
        These two would be the chosen ones to forge a path of righteousness.
        Some time after their birth, on a misty late night, a young man named Adrian would come to join in their collective harmony.
        After many years, and after an unbreakable bond of brotherhood was forged between the three of them,
        the beginning of what would later become Suncrusher was woven into a weary pattern.
        Once the foundation had been laid, they began to seek out others to help construct their mighty, overbearing entity.
        Two young gladiators, Mark and Nick, would be the final missing pieces of the prophecy.
        Now that they have finally joined together in one fast, melodic, passionate, musical conscious, their collective influence began to penetrate the ear of the common man.
        Through all of their lives' trials and tribulations, they maintain solace in each other.
        Once they are ready, the world will gladly spread its brush-lined, loose, flabby fuck-hole, ready to be obliterated by the erratic, yet soothing sounds of their destructive fury.
        </Typography>
      </CardContent>
    </Card>
    </animated.div>
  );
}