// PRIMARY FILE FOR NUCAMP SITE CREATES THE SITE BY ARRANGING ALL COMPONENTS //

// IMPORTS //
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Admin from './components/Admin';

// PAGE CONSTRUCTION START //
function App() {
  return (
      <>
      <Header />
        <Routes>
            <Route exact path="/" element = {<Homepage />} />
            <Route exact path="/" element = {<Admin />} />
        </Routes>
      <Footer />
      </>
  );
}
// PAGE CONSTRUCTION END //

// EXPORT STATEMENT //
export default App;