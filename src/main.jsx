import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Change import to use 'Router'
import { createRoot } from 'react-dom/client';
import App from './App';
import Admin from './components/Admin';
import { Provider } from 'react-redux';
import { store } from './assets/data/store';
import DisplayClass from './components/Admin/DisplayClass';
import ClassForm from './components/Admin/ClassForm';
import Classes from './components/Classes.jsx';
import AllClassData from './features/classes/AllClassData.jsx';
import AllLocations from './features/locations/AllLocations.jsx';
import './assets/styles/styles.css';

const Main = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        {/* Use Router instead of BrowserRouter */}
        <Router>
          <Routes>
            <Route path="/" element={<App />} /> {/* This route is for the root URL */}
            <Route path="/classes/:classId" element={<Classes />} />
            <Route path="/all_classes" element={<AllClassData />} />
            <Route path="/all_locations" element={<AllLocations />} />
            <Route path="/backstage" element={<Admin />} />
            <Route path="/backstage/course_details/:classId" element={<DisplayClass />} />
            <Route path="/backstage/update_class/:classId" element={<ClassForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </Provider>
    </React.StrictMode>
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
