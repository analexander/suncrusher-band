import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import LandingPage from './pages/LandingPage'
import MerchStore from './pages/MerchStore';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Marvel',
      'sans-serif',
    ].join(','),
  }});



function App() {
  return (
    <ThemeProvider theme={theme}>
    <div style={{
      backgroundColor: 'black'}}>
        <MerchStore />
    </div>
    </ThemeProvider>
  );
}

export default App;