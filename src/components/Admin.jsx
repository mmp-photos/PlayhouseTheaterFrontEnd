import React, { useEffect, useState } from 'react';
import SignIn from './Admin/SignIn';
import Dashboard from './Admin/Dashboard';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import '../assets/styles/backstage_styles.css';
import Header from './Admin/Header';
import HomePage from './Admin/HomePage';

const Admin = () => {
    const [ token, setToken ] = useState();
    const { userId, firstName, signedIn } = useSelector((state) => state.user);
    const [ staySignedIn, setStaySignedIn ] = useState();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    useEffect(() => {
        // Check if the user is signed in
        const storedSignedIn = localStorage.getItem('signedIn');
        if (storedSignedIn === 'true') {
            setIsAuthenticated(true);
        }
    }, []);

    return(
        <>
        <Header />
            <Routes>
            <Route exact path="*" element={<HomePage />} />
            <Route exact path="class_form" element={<classForm />} />
                {/* Additional routes for the App */}
            </Routes>
        </>
    )
};

export default Admin;