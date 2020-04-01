import React from 'react';
import Home from './components/Home'
import Update from "./components/Update";
import Footer from './components/Footer'
import { Router } from '@reach/router'
import Wrapper from './components/Wrapper';


function App() {
  return (
    <div>
      <Router>
        <Wrapper path="/" />
        <Home path="/home" />
        <Update path="/update"/>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
