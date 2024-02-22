import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Admin from './components/Admin';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="*" element={<Homepage />} />
        {/* Additional routes for the App */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
