import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Icon } from '@iconify/react';
import spotifyIcon from '@iconify-icons/mdi/spotify';


const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  logo: {
    maxWidth: 160,
  },
  rightToolbar: {
    marginLeft: "auto",
    marginRight: -12,
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 10,
    '&:hover': {
      color: 'red',
      }
  }
}));

function ScrollTop(props) {
  const { children } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function BackToTop(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline/>
      <HideOnScroll {...props}>
      <AppBar style={{backgroundColor: 'transparent'}}>
        <Toolbar className={classes.rightToolbar} >
          <InstagramIcon className={classes.icon} onClick={()=> window.open("https://instagram.com/svncrvsher?igshid=14i3ibkybo5oe", "_blank")}/>
          <FacebookIcon className={classes.icon} onClick={()=> window.open("https://www.facebook.com/svncrvsher/", "_blank")}/>
          <YouTubeIcon className={classes.icon} onClick={()=> window.open("https://youtube.com/channel/UCsbWjZ1xagEe0w7YJlCys5Q", "_blank")}/>
          <Icon icon={spotifyIcon} className={classes.icon} onClick={()=> window.open("https://open.spotify.com/artist/0iQy7yKIe8wEuh7x3xp9HV?si=aWlv4A2gQLeswaskdanXhA", "_blank")}/>
        </Toolbar>
      </AppBar>
      </HideOnScroll>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}