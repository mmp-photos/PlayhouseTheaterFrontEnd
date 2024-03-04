import React, { useEffect, useState } from 'react';
import SignIn from './SignIn';
import Dashboard from './Dashboard';
import Header from './Header';
import { useSelector } from 'react-redux';

const HomePage = () => {
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
        <main>
        {signedIn ? (
            <Dashboard />
        ) : (
            <SignIn />
        )}
        </main>
        </>
    )
};

export default HomePage;