import React, { useEffect, useState } from 'react';

const Dashboard = ({ setSignedIn }) => {
    
    const handleLogout = () => {
        console.log(`Logout clicked`)
        setSignedIn(false)
    }
    return(
        <section>
            <h1>Signed In!</h1>
            <button onClick={handleLogout}>
                Logout
            </button>
        </section>
    )
};

export default Dashboard;