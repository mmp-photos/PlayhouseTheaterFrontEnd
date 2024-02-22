// PRIMARY FILE FOR NUCAMP SITE CREATES THE SITE BY ARRANGING ALL COMPONENTS //

// IMPORTS //
import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
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
        <Route path="/" element={<Outlet />}>
          <Route index element={<Homepage />} />
        </Route>
      </Routes>
      <Footer />
      </>
  );
}
// PAGE CONSTRUCTION END //

// EXPORT STATEMENT //
export default App;