import React from 'react';
import AppBar from './components/AppBar'
import HeroImage from './components/HeroImage'
import BottomAppBar from './components/BottomAppBar'
import AboutUs from './components/AboutUs'

function App() {
  return (
    <div style={{
      backgroundColor: 'black'}}>
    < AppBar />
    < HeroImage />
    < AboutUs />
    < BottomAppBar />
    </div>
  );
}

export default App;