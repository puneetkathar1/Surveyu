import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar.js'
import HeroSection from './HeroSection.js';
import Footer from './Footer'
import Axios from 'axios';


function App({isAuth}) {

  return (
    <div className="App">
      <HeroSection />
      <Footer />
    </div>
  );
}

export default App;
