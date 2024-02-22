import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import Admin from './components/Admin';

const Main = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<App />} /> {/* This route is for the root URL */}
        <Route path="/backstage" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

const NotFound = () => {
  return <h1>Page Not Found</h1>;
};

// Use createRoot to render the Main component
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

export default Main;