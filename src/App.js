import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import LandingPage from './pages/LandingPage';
import MerchStore from './pages/MerchStore';
import AboutUsPage from './pages/AboutUsPage';
import { Route, Switch } from "wouter";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Marvel',
      'sans-serif',
    ].join(','),
  },
  shadows: ["none"]
});



function App() {
  return (
    <ThemeProvider theme={theme}>
    <div style={{
      backgroundColor: 'black'}}>
        <Switch>
        <Route path="/" component={LandingPage} />
        <Route path="/merch" component={MerchStore} />
        <Route path="/about" component={AboutUsPage} />
        </Switch>
    </div>
    </ThemeProvider>
  );
}

export default App;