import React from 'react';
import AppBar from './components/AppBar'
import HeroImage from './components/HeroImage'
import BottomAppBar from './components/BottomAppBar'
import AboutUs from './components/AboutUs'
import MusicVideo from './components/MusicVideo'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Marvel',
      'sans-serif',
    ].join(','),
  },});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div style={{
      backgroundColor: 'black'}}>
    < AppBar />
    < HeroImage />
    < AboutUs />
    < MusicVideo />
    < BottomAppBar />
    </div>
    </ThemeProvider>
  );
}

export default App;