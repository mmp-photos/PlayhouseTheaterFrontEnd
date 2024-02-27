import React, { useEffect, useState } from 'react';
import SignIn from './Admin/SignIn';
import Dashboard from './Admin/Dashboard';
import { useSelector } from 'react-redux';

import '../assets/styles/backstage_styles.css';

const Admin = () => {
    const [ token, setToken ] = useState();
    const { userId, firstName, signedIn } = useSelector((state) => state.user);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Check if the user is signed in
        const storedSignedIn = localStorage.getItem('signedIn');
        if (storedSignedIn === 'true') {
            setIsAuthenticated(true);
        }
    }, []);

    return(
        <main>
            <h1>New Features</h1>
            {signedIn ? (
                <Dashboard />
            ) : (
                <SignIn />
            )}
        </main>
    )
};

export default Admin;