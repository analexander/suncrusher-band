import React from "react"
import ReactPlayer from "react-player"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      margin: '0 10px;'
    },
  });


function MusicVideo() {
const classes = useStyles();
  return (
    <div className={classes.root}>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=x_qZ1-uTW4Y&t=0s"
      />
    </div>
  )
}

export default MusicVideo