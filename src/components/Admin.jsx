import React, { useEffect, useState } from 'react';
import SignIn from './Admin/SignIn';
import Dashboard from './Admin/Dashboard';

import '../assets/styles/backstage_styles.css';

const Admin = () => {
    const [ auth, setAuth ] = useState(false);
    const [ token, setToken ] = useState();
    const [ signedIn, setSignedIn ] = useState(false);
        
    return(
        <main>
            <h1>New Features</h1>
            {signedIn ? (
                <Dashboard signedIn={signedIn} setSignedIn={setSignedIn} />
            ) : (
                <SignIn signedIn={signedIn} setSignedIn={setSignedIn} />
            )}
        </main>
    )
};

export default Admin;