import React from 'react';
import AppBar from './components/AppBar'
import HeroImage from './components/HeroImage'
import BottomAppBar from './components/BottomAppBar'
import AboutUs from './components/AboutUs'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ContactForm from './components/ContactForm';

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
    < ContactForm />
    < BottomAppBar />
    </div>
    </ThemeProvider>
  );
}

export default App;