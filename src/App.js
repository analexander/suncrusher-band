import React from 'react';
import AppBar from './components/AppBar'
import HeroImage from './components/HeroImage'
import BottomAppBar from './components/BottomAppBar'

function App() {
  return (
    <div style={{
      backgroundColor: 'black'}}>
    < AppBar />
    < HeroImage />
    < BottomAppBar />
    </div>
  );
}

export default App;