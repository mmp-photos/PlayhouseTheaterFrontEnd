import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import DisplayClass from './components/Admin/DisplayClass';
import ClassForm from './components/Admin/ClassForm';
import AllClassData from './features/classes/AllClassData';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="*" element={<Homepage />} />
        {/* <Route path="/backstage/course_details/:classId" element={<DisplayClass />} />
        <Route path="/backstage/update_class/:classId" element={<ClassForm />} /> */}
        {/* Additional routes for the App */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
